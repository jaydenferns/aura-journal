'use client';

import { Timestamp } from 'firebase/firestore';
import { TagIcon, Calendar, Activity, Smile, Frown, Meh } from 'lucide-react';

// Define the structure of a journal entry
// This should match the data you're passing from page.tsx
export interface JournalEntry {
  id: string;
  date: Timestamp;
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
  labels: string[];
  activities: string[];
  originalText?: string; // Use '?' as old entries might not have this
}

// A small, self-contained Tag component
const Tag = ({ text, color }: { text: string, color: string }) => (
  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${color}`}>
    {text}
  </span>
);

export default function JournalHistory({ history }: { history: JournalEntry[] }) {
  
  const getSentimentStyle = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE':
        return { icon: <Smile size={18} className="text-green-500" />, cardBorder: 'border-l-4 border-green-500' };
      case 'NEGATIVE':
        return { icon: <Frown size={18} className="text-rose-500" />, cardBorder: 'border-l-4 border-rose-500' };
      default:
        return { icon: <Meh size={18} className="text-slate-500" />, cardBorder: 'border-l-4 border-slate-500' };
    }
  };

  if (!history || history.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Journal History</h2>
        <div className="text-center p-4 bg-slate-100 rounded-lg">
          <p className="text-slate-600">Your past journal entries will appear here once you've saved them.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Journal History</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {history.map(entry => {
          const { icon, cardBorder } = getSentimentStyle(entry.sentiment);
          const entryDate = entry.date?.toDate(); // Convert Firebase Timestamp to JS Date

          return (
            <div key={entry.id} className={`p-4 rounded-lg bg-slate-50 border ${cardBorder}`}>
              
              {/* Header: Date and Sentiment Icon */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Calendar size={14} />
                  {entryDate ? entryDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }) : 'No date'}
                </div>
                {icon}
              </div>
              
              {/* Body: Journal Text */}
              <p className="text-slate-700 mb-3">
                {entry.originalText || <i>(No text was saved for this entry)</i>}
              </p>
              
              {/* Footer: Tags and Activities */}
              <div className="flex flex-wrap items-center gap-2">
                {entry.labels && entry.labels.length > 0 && (
                  <div className="flex items-center gap-2">
                    <TagIcon size={14} className="text-slate-500" />
                    {entry.labels.map(label => (
                      <Tag key={label} text={label} color="bg-indigo-100 text-indigo-700" />
                    ))}
                  </div>
                )}
                {entry.activities && entry.activities.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-slate-500" />
                    {entry.activities.map(activity => (
                      <Tag key={activity} text={activity} color="bg-orange-100 text-orange-700" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

