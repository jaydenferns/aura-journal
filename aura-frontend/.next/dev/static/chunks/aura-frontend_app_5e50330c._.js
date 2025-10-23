(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/aura-frontend/app/firebaseConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
// Do NOT import getAnalytics, as it requires the 'window' object
// --- PASTE YOUR FIREBASE CONFIG KEYS HERE ---
// You can get this from your Firebase project settings:
// Project Overview > Project settings > General > "Your apps" > Web app
const firebaseConfig = {
    apiKey: "AIzaSyBT0A7ywivkgVFtWLkbpESNZWw8l8TXa4U",
    authDomain: "aura-journal-b37c4.firebaseapp.com",
    projectId: "aura-journal-b37c4",
    storageBucket: "aura-journal-b37c4.firebasestorage.app",
    messagingSenderId: "999309219347",
    appId: "1:999309219347:web:3424ddafdb70ca381591e6"
};
// Initialize Firebase
// This line checks if the app is already initialized,
// which is important for Next.js to avoid errors during hot-reloading.
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
// Get the database and auth instances
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/useAuth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/firebaseConfig.ts [app-client] (ecmascript)"); // Imports 'auth' from Step 1
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Start as true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            // onAuthStateChanged is the official Firebase listener
            // It runs once on load, and again any time the user logs in or out.
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "useAuth.useEffect.unsubscribe": (user)=>{
                    setUser(user); // Set the user (or null)
                    setLoading(false); // We're done loading
                }
            }["useAuth.useEffect.unsubscribe"]);
            // This cleans up the listener when the component unmounts
            // to prevent memory leaks.
            return ({
                "useAuth.useEffect": ()=>unsubscribe()
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], []); // The empty array [] means this effect only runs once on component mount.
    // Return the user and loading state for other components to use
    return {
        user,
        loading
    };
}
_s(useAuth, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/LoginScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
;
function LoginScreen() {
    // Triggers the Google Sign-in popup
    const handleGoogleLogin = async ()=>{
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], provider);
        } catch (error) {
            console.error("Error during Google login:", error);
        }
    };
    // Signs the user in as a guest
    const handleGuestLogin = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        } catch (error) {
            console.error("Error during guest login:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-6xl font-bold text-indigo-600",
                            children: "Aura"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600 mt-2",
                            children: "Your private space to reflect and grow."
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-8 rounded-2xl shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-6",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGoogleLogin,
                            className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20,
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                "Sign in with Google"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGuestLogin,
                            className: "w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-all duration-300 mt-4",
                            children: "Continue as Guest"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/LoginScreen.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = LoginScreen;
var _c;
__turbopack_context__.k.register(_c, "LoginScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/strategyEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPersonalizedStrategy",
    ()=>getPersonalizedStrategy
]);
'use client';
// Our library of coping strategies.
// More specific strategies (with more required tags) will be prioritized.
const strategyLibrary = [
    {
        title: "Feeling Anxious about Work?",
        text: "Try the 'Urgent-Important Matrix' to organize your tasks. Focusing on what's truly important can reduce feelings of being overwhelmed.",
        emoji: "📋",
        requiredTags: [
            "Anxiety",
            "Work"
        ]
    },
    {
        title: "Feeling Down about Relationships?",
        text: "Consider writing a short, positive message to a friend or family member. Expressing gratitude can strengthen bonds and lift your spirits.",
        emoji: "💌",
        requiredTags: [
            "Sadness",
            "Relationships"
        ]
    },
    {
        title: "Feeling Fatigued?",
        text: "Your energy seems low. A short, 10-minute walk can boost circulation and mental clarity more effectively than staying seated.",
        emoji: "🚶‍♀️",
        requiredTags: [
            "Fatigue"
        ]
    },
    {
        title: "Feeling Anxious?",
        text: "When you feel overwhelmed, try the 4-7-8 breathing technique. Inhale for 4s, hold for 7s, and exhale for 8s to calm your nervous system.",
        emoji: "🌬️",
        requiredTags: [
            "Anxiety"
        ]
    },
    {
        title: "Feeling Sad?",
        text: "It's okay to feel this way. Try writing down three small things you are grateful for today. This practice can gently shift your perspective.",
        emoji: "❤️",
        requiredTags: [
            "Sadness"
        ]
    }
];
function getPersonalizedStrategy(analysis) {
    let bestMatch = null;
    let highestScore = 0;
    // Combine the AI labels and user-logged activities into one list
    const allUserTags = [
        ...analysis.labels,
        ...analysis.activities
    ];
    // Loop through every strategy in our library
    for (const strategy of strategyLibrary){
        // Calculate how many of the required tags the user has
        const score = strategy.requiredTags.reduce((acc, tag)=>{
            // If the user's tags include this required tag, add 1 to the score
            return allUserTags.includes(tag) ? acc + 1 : acc;
        }, 0);
        // If this strategy has a higher score (is a better match) than the
        // current best, replace it. This prioritizes more specific advice.
        if (score > highestScore) {
            highestScore = score;
            bestMatch = strategy;
        }
    }
    // If no specific strategy was found (score 0), return a default one
    return bestMatch || {
        title: "Your Daily Insight ✨",
        text: "Reflecting on your feelings is a powerful step. Notice the patterns in your thoughts and activities.",
        emoji: "🧠",
        requiredTags: []
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/BreathingExercise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreathingExercise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Define the different phases of the exercise
const phases = [
    {
        name: "Inhale",
        duration: 4
    },
    {
        name: "Hold",
        duration: 7
    },
    {
        name: "Exhale",
        duration: 8
    }
];
const totalCycles = 4; // The exercise will run 4 full times
function BreathingExercise({ onClose }) {
    _s();
    // --- State Variables ---
    // cycleIndex tracks which phase we're in (e.g., 0 = Inhale, 1 = Hold, 2 = Exhale)
    const [cycleIndex, setCycleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1); // Start at -1 for "Get Ready"
    // instruction holds the text to display (e.g., "Inhale")
    const [instruction, setInstruction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Get Ready");
    // countdown holds the number of seconds remaining for the current phase
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3); // Start with a 3-second "Get Ready" timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreathingExercise.useEffect": ()=>{
            // This interval runs every 1 second to update the countdown
            const interval = setInterval({
                "BreathingExercise.useEffect.interval": ()=>{
                    setCountdown({
                        "BreathingExercise.useEffect.interval": (c)=>c - 1
                    }["BreathingExercise.useEffect.interval"]); // Decrement the countdown by 1
                }
            }["BreathingExercise.useEffect.interval"], 1000);
            // This checks if the countdown for the current phase has finished
            if (countdown === 0) {
                const nextCycleIndex = cycleIndex + 1;
                // Check if we have completed all 12 phases (3 phases * 4 cycles)
                if (nextCycleIndex >= phases.length * totalCycles) {
                    clearInterval(interval); // Stop the timer
                    onClose(); // Close the modal
                    return;
                }
                // Get the next phase from our `phases` array
                // (e.g., cycle 3 % 3 = 0, so it loops back to "Inhale")
                const nextPhase = phases[nextCycleIndex % phases.length];
                setCycleIndex(nextCycleIndex); // Move to the next cycle
                setInstruction(nextPhase.name); // Set the new instruction
                setCountdown(nextPhase.duration); // Set the countdown for the new phase
            }
            // This is a cleanup function. It stops the interval when the component is unmounted.
            return ({
                "BreathingExercise.useEffect": ()=>clearInterval(interval)
            })["BreathingExercise.useEffect"];
        }
    }["BreathingExercise.useEffect"], [
        countdown,
        cycleIndex,
        onClose
    ]); // This effect re-runs every time the countdown or cycle changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center z-50 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-64 rounded-full border-4 border-white flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-4xl font-bold",
                                children: instruction
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-8xl font-bold mt-2",
                                children: countdown
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(BreathingExercise, "Gf/iHqp0pIi/V44MaFs1tSmeFME=");
_c = BreathingExercise;
var _c;
__turbopack_context__.k.register(_c, "BreathingExercise");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/GoalTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Initial state for our habits
const initialHabits = [
    {
        id: 'exercise',
        name: 'Exercise',
        target: 3,
        progress: 0,
        emoji: '💪'
    },
    {
        id: 'mindful',
        name: 'Mindful Minutes',
        target: 5,
        progress: 0,
        emoji: '🧘'
    },
    {
        id: 'hydrate',
        name: 'Hydrate (8 glasses)',
        target: 7,
        progress: 0,
        emoji: '💧'
    }
];
function GoalTracker() {
    _s();
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // On first load, get habits from localStorage or use initial state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalTracker.useEffect": ()=>{
            const savedHabits = localStorage.getItem('aura-habits');
            if (savedHabits) {
                setHabits(JSON.parse(savedHabits));
            } else {
                setHabits(initialHabits);
            }
        }
    }["GoalTracker.useEffect"], []);
    // Whenever habits change, save them to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalTracker.useEffect": ()=>{
            if (habits.length > 0) {
                localStorage.setItem('aura-habits', JSON.stringify(habits));
            }
        }
    }["GoalTracker.useEffect"], [
        habits
    ]);
    const handleProgress = (id)=>{
        setHabits(habits.map((habit)=>habit.id === id && habit.progress < habit.target ? {
                ...habit,
                progress: habit.progress + 1
            } : habit));
    };
    const resetProgress = ()=>{
        setHabits(initialHabits);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "This Week's Goals"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetProgress,
                        className: "text-sm text-blue-500 hover:underline",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            habit.emoji,
                                            " ",
                                            habit.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            habit.progress,
                                            " / ",
                                            habit.target
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-2.5 mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-500 h-2.5 rounded-full",
                                    style: {
                                        width: `${habit.progress / habit.target * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleProgress(habit.id),
                                className: "mt-2 text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300",
                                children: "Log +1"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, habit.id, true, {
                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(GoalTracker, "nXVSo9+DUk/5aqhdGOOC29qGbqU=");
_c = GoalTracker;
var _c;
__turbopack_context__.k.register(_c, "GoalTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/WeeklySummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeeklySummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function WeeklySummary({ history }) {
    _s();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- FIX 3: Run calculation inside useEffect, triggered by 'history' ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeeklySummary.useEffect": ()=>{
            // This function now runs whenever the 'history' prop changes
            const calculateSummary = {
                "WeeklySummary.useEffect.calculateSummary": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const sevenDaysAgo = new Date();
                    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                    // Filter for recent entries
                    const recentEntries = history.filter({
                        "WeeklySummary.useEffect.calculateSummary.recentEntries": (entry)=>{
                            // --- FIX 4: Use .toDate() for date comparison ---
                            if (entry.date && typeof entry.date.toDate === 'function') {
                                return entry.date.toDate() > sevenDaysAgo;
                            }
                            return false;
                        }
                    }["WeeklySummary.useEffect.calculateSummary.recentEntries"]);
                    if (recentEntries.length === 0) {
                        setSummary({
                            totalEntries: 0,
                            moods: {},
                            topEmotion: 'N/A',
                            topActivity: 'N/A'
                        });
                        return;
                    }
                    // --- All the calculation logic is now safe ---
                    const moodCounts = {
                        POSITIVE: 0,
                        NEGATIVE: 0,
                        NEUTRAL: 0
                    };
                    const labelCounts = {};
                    const activityOnPositiveDays = {};
                    recentEntries.forEach({
                        "WeeklySummary.useEffect.calculateSummary": (entry)=>{
                            if (moodCounts[entry.sentiment] !== undefined) moodCounts[entry.sentiment]++;
                            entry.labels.forEach({
                                "WeeklySummary.useEffect.calculateSummary": (label)=>{
                                    labelCounts[label] = (labelCounts[label] || 0) + 1;
                                }
                            }["WeeklySummary.useEffect.calculateSummary"]);
                            if (entry.sentiment === 'POSITIVE') {
                                entry.activities.forEach({
                                    "WeeklySummary.useEffect.calculateSummary": (activity)=>{
                                        activityOnPositiveDays[activity] = (activityOnPositiveDays[activity] || 0) + 1;
                                    }
                                }["WeeklySummary.useEffect.calculateSummary"]);
                            }
                        }
                    }["WeeklySummary.useEffect.calculateSummary"]);
                    const getTopItem = {
                        "WeeklySummary.useEffect.calculateSummary.getTopItem": (obj)=>{
                            const top = Object.keys(obj).reduce({
                                "WeeklySummary.useEffect.calculateSummary.getTopItem.top": (a, b)=>obj[a] > obj[b] ? a : b
                            }["WeeklySummary.useEffect.calculateSummary.getTopItem.top"], '');
                            return top || 'N/A';
                        }
                    }["WeeklySummary.useEffect.calculateSummary.getTopItem"];
                    setSummary({
                        totalEntries: recentEntries.length,
                        moods: moodCounts,
                        topEmotion: getTopItem(labelCounts),
                        topActivity: getTopItem(activityOnPositiveDays)
                    });
                }
            }["WeeklySummary.useEffect.calculateSummary"];
            // Call the calculation
            calculateSummary();
        }
    }["WeeklySummary.useEffect"], [
        history
    ]); // <-- This dependency array ensures the code re-runs
    const handleShowSummary = ()=>{
        // We no longer need to calculate here, just show the modal.
        // The useEffect hook has already built the 'summary' object.
        setShowModal(true);
    };
    const MoodStat = ({ mood, count, total })=>{
        const percentage = total > 0 ? Math.round(count / total * 100) : 0;
        const colors = {
            POSITIVE: 'bg-green-500',
            NEGATIVE: 'bg-rose-500',
            NEUTRAL: 'bg-slate-500'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between font-semibold text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: mood.charAt(0).toUpperCase() + mood.slice(1).toLowerCase()
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-slate-200 rounded-full h-2.5 mt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${colors[mood] || 'bg-gray-400'} h-2.5 rounded-full`,
                        style: {
                            width: `${percentage}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-2xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-800 mb-4",
                        children: "Your Week"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-4",
                        children: "Get a summary of your emotional trends and insights from the past 7 days."
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowSummary,
                        className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all",
                        children: "Generate My Weekly Summary"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            showModal && summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-2xl p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center border-b pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-slate-800",
                                    children: "Your Week in Review"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-2xl font-bold text-slate-500 hover:text-slate-800",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        summary.totalEntries > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: "Mood Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "POSITIVE",
                                                    count: summary.moods.POSITIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEGATIVE",
                                                    count: summary.moods.NEGATIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEUTRAL",
                                                    count: summary.moods.NEUTRAL,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2 text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Your most common feeling was:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-indigo-700",
                                                            children: summary.topEmotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Activity most linked to positive days:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-700",
                                                            children: summary.topActivity
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50 p-3 rounded-lg border border-indigo-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-indigo-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Pro-Tip:"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                lineNumber: 151,
                                                columnNumber: 50
                                            }, this),
                                            " To boost your mood next week, try focusing on activities like **",
                                            summary.topActivity,
                                            "**!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-slate-600 py-8",
                            children: "Not enough data from the past week. Keep journaling to unlock your summary!"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(WeeklySummary, "MB5fgp+UlvIAOcCSSHSwKQPHSts=");
_c = WeeklySummary;
var _c;
__turbopack_context__.k.register(_c, "WeeklySummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/MoodChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoodChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Register the components Chart.js needs
__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function MoodChart({ history }) {
    _s();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        datasets: []
    });
    const [hasEnoughData, setHasEnoughData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoodChart.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            // Filter for recent entries
            const recentEntries = history.filter({
                "MoodChart.useEffect.recentEntries": (entry)=>{
                    // --- FIX 2: Check if date exists and has the .toDate() method ---
                    if (entry.date && typeof entry.date.toDate === 'function') {
                        const entryDate = entry.date.toDate(); // This is the correct conversion!
                        return entryDate >= sevenDaysAgo;
                    }
                    return false; // Filter out any invalid entries
                }
            }["MoodChart.useEffect.recentEntries"]);
            if (recentEntries.length < 2) {
                setHasEnoughData(false);
                return;
            }
            setHasEnoughData(true);
            // --- FIX 3: Use .toDate() for sorting ---
            const sortedEntries = recentEntries.sort({
                "MoodChart.useEffect.sortedEntries": (a, b)=>a.date.toDate().getTime() - b.date.toDate().getTime()
            }["MoodChart.useEffect.sortedEntries"]);
            // --- FIX 4: Use .toDate() for chart labels ---
            const labels = sortedEntries.map({
                "MoodChart.useEffect.labels": (entry)=>entry.date.toDate().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    })
            }["MoodChart.useEffect.labels"]);
            const dataPoints = sortedEntries.map({
                "MoodChart.useEffect.dataPoints": (entry)=>{
                    if (entry.sentiment === 'POSITIVE') return 1;
                    if (entry.sentiment === 'NEGATIVE') return -1;
                    return 0; // NEUTRAL
                }
            }["MoodChart.useEffect.dataPoints"]);
            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Mood Trend',
                        data: dataPoints,
                        borderColor: 'rgb(79, 70, 229)',
                        backgroundColor: 'rgba(79, 70, 229, 0.5)',
                        tension: 0.1
                    }
                ]
            });
        }
    }["MoodChart.useEffect"], [
        history
    ]); // This correctly re-runs when history changes
    // This is the content to show when the chart is loading or has no data
    if (!hasEnoughData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-800 mb-4",
                    children: "Mood Analytics"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/MoodChart.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-4 bg-slate-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Journal for a few more days to see your mood trend chart!"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/MoodChart.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/MoodChart.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/MoodChart.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    // Chart.js options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Your Mood Over the Last 7 Days',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        if (value === 1) return 'Positive';
                        if (value === -1) return 'Negative';
                        if (value === 0) return 'Neutral';
                        return null;
                    }
                },
                min: -1.5,
                max: 1.5
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };
    // This is the content when the chart *does* have data
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            options: chartOptions,
            data: chartData
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/MoodChart.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/MoodChart.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(MoodChart, "kxknEYTt1YR0/KmWsO+g9cvnnSs=");
_c = MoodChart;
var _c;
__turbopack_context__.k.register(_c, "MoodChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/StreakTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StreakTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StreakTracker({ streak }) {
    // We use `key={streak}` in page.tsx to force a re-render with a small animation
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 animate-pop-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                role: "img",
                "aria-label": "Streak flame",
                children: "🔥"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/StreakTracker.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-bold text-orange-500",
                children: streak
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/StreakTracker.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/StreakTracker.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = StreakTracker;
var _c;
__turbopack_context__.k.register(_c, "StreakTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aura-frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/aura-frontend/app/page.tsx'\n\nExpected '</', got 'string literal (dashboard, 'dashboard')'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=aura-frontend_app_5e50330c._.js.map