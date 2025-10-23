import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# --- CHANGE 1: Import List from typing ---
from pydantic import BaseModel
from typing import List
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configuration
HF_API_TOKEN = os.getenv("HF_API_TOKEN")
# Using the more reliable model from our troubleshooting
SENTIMENT_API_URL = "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest"
ZERO_SHOT_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-mnli"
HEADERS = {"Authorization": f"Bearer {HF_API_TOKEN}"}

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- CHANGE 2: Update the request body model ---
class JournalEntry(BaseModel):
    text: str
    activities: List[str] # Add this line to accept a list of activities

def query_huggingface_api(api_url, payload):
    """Helper function to query the Hugging Face API."""
    response = requests.post(api_url, headers=HEADERS, json=payload)
    response.raise_for_status()
    return response.json()

@app.get("/")
def read_root():
    return {"message": "Aura Journal API is running!"}

@app.post("/analyze")
async def analyze_journal(entry: JournalEntry):
    """
    Analyzes a journal entry for sentiment, emotions, and themes.
    """
    try:
        # 1. Analyze Sentiment
        sentiment_payload = {"inputs": entry.text}
        sentiment_result = query_huggingface_api(SENTIMENT_API_URL, sentiment_payload)
        sentiment = max(sentiment_result[0], key=lambda x: x['score'])['label'].upper() # Standardize to uppercase

        # 2. Identify Emotions & Themes
        zero_shot_payload = {
            "inputs": entry.text,
            "parameters": {
                "candidate_labels": [
                    "Anxiety", "Joy", "Sadness", "Anger", "Fatigue", "Optimism",
                    "Work", "Family", "Health", "Relationships", "Finance"
                ],
                "multi_label": True
            }
        }
        zero_shot_result = query_huggingface_api(ZERO_SHOT_API_URL, zero_shot_payload)
        
        threshold = 0.6
        detected_labels = [label for label, score in zip(zero_shot_result['labels'], zero_shot_result['scores']) if score > threshold]

        # --- CHANGE 3: Add activities to the response ---
        return {
            "sentiment": sentiment,
            "labels": detected_labels,
            "original_text": entry.text,
            "activities": entry.activities # Pass the received activities back
        }
    except requests.exceptions.HTTPError as e:
        return {"error": f"Failed to analyze text. API Error: {str(e)}"}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}