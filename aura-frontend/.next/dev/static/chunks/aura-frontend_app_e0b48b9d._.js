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
"[project]/aura-frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppWrapper,
    "getPersonalizedStrategy",
    ()=>getPersonalizedStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React & Next.js imports
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TagIcon$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as TagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/frown.js [app-client] (ecmascript) <export default as Frown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/meh.js [app-client] (ecmascript) <export default as Meh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
// Firebase & Auth imports
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// ==================================================================
// CONSTANTS
// ==================================================================
const ALL_ACTIVITIES = [
    "Exercise",
    "Social",
    "Work",
    "Hobby",
    "Rest",
    "Nutrition"
];
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
// Helper to get a date in YYYY-MM-DD format, crucial for streak logic
const getISODate = (date)=>{
    return date.toISOString().split('T')[0];
};
// ==================================================================
// HELPER: STRATEGY ENGINE
// ==================================================================
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
    const allUserTags = [
        ...analysis.labels,
        ...analysis.activities
    ];
    for (const strategy of strategyLibrary){
        const score = strategy.requiredTags.reduce((acc, tag)=>{
            return allUserTags.includes(tag) ? acc + 1 : acc;
        }, 0);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = strategy;
        }
    }
    return bestMatch || {
        title: "Your Daily Insight ✨",
        text: "Reflecting on your feelings is a powerful step. Notice the patterns in your thoughts and activities.",
        emoji: "🧠",
        requiredTags: []
    };
}
// ==================================================================
// HELPER: useAuth Hook
// ==================================================================
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "useAuth.useEffect.unsubscribe": (user)=>{
                    setUser(user);
                    setLoading(false);
                }
            }["useAuth.useEffect.unsubscribe"]);
            return ({
                "useAuth.useEffect": ()=>unsubscribe()
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], []);
    return {
        user,
        loading
    };
}
_s(useAuth, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
// ==================================================================
// UI COMPONENTS
// ==================================================================
// ---------------------------------
// LoginScreen Component
// ---------------------------------
function LoginScreen() {
    _s1();
    const [isGuestLoading, setIsGuestLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGoogleLoading, setIsGoogleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGoogleLogin = async ()=>{
        setIsGoogleLoading(true);
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], provider);
        } catch (error) {
            console.error("Error during Google login:", error);
            setIsGoogleLoading(false);
        }
    };
    const handleGuestLogin = async ()=>{
        setIsGuestLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        } catch (error) {
            console.error("Error during guest login:", error);
            setIsGuestLoading(false);
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
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600 mt-2",
                            children: "Your private space to reflect and grow."
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-8 rounded-2xl shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-6",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGoogleLogin,
                            disabled: isGoogleLoading || isGuestLoading,
                            className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm flex items-center justify-center disabled:opacity-50",
                            children: [
                                isGoogleLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 20,
                                    className: "mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20,
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 86
                                }, this),
                                "Sign in with Google"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGuestLogin,
                            disabled: isGoogleLoading || isGuestLoading,
                            className: "w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-all duration-300 mt-4 disabled:opacity-50",
                            children: [
                                isGuestLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 20,
                                    className: "mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20,
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 85
                                }, this),
                                "Continue as Guest"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 mt-8",
                    children: "By signing in, you agree to our Terms of Service."
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s1(LoginScreen, "N25Nl1gkekKzJWsnMeFXuoIJ8Is=");
_c = LoginScreen;
// ---------------------------------
// StreakTracker Component
// ---------------------------------
function StreakTracker({ streak }) {
    if (streak === 0) return null; // Don't show the streak if it's 0
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-slate-200 animate-pop-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                role: "img",
                "aria-label": "Streak flame",
                children: "🔥"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-bold text-orange-500",
                children: streak
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, streak, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_c1 = StreakTracker;
// ---------------------------------
// BreathingExercise Component
// ---------------------------------
function BreathingExercise({ onClose }) {
    _s2();
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
    const totalCycles = 4;
    const [cycleIndex, setCycleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [instruction, setInstruction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Get Ready");
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreathingExercise.useEffect": ()=>{
            const interval = setInterval({
                "BreathingExercise.useEffect.interval": ()=>{
                    setCountdown({
                        "BreathingExercise.useEffect.interval": (c)=>c - 1
                    }["BreathingExercise.useEffect.interval"]);
                }
            }["BreathingExercise.useEffect.interval"], 1000);
            if (countdown === 0) {
                const nextCycleIndex = cycleIndex + 1;
                if (nextCycleIndex >= phases.length * totalCycles) {
                    clearInterval(interval);
                    onClose();
                    return;
                }
                const phase = phases[nextCycleIndex % 3];
                setCycleIndex(nextCycleIndex);
                setInstruction(phase.name);
                setCountdown(phase.duration);
            }
            return ({
                "BreathingExercise.useEffect": ()=>clearInterval(interval)
            })["BreathingExercise.useEffect"];
        }
    }["BreathingExercise.useEffect"], [
        countdown,
        cycleIndex,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-indigo-900 bg-opacity-95 flex flex-col items-center justify-center z-50 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-48 h-48 rounded-full border-4 border-white flex items-center justify-center transition-all duration-1000",
                    style: {
                        transform: cycleIndex % 3 === 0 ? 'scale(1.1)' : 'scale(1)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-3xl font-bold",
                                children: instruction
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-5xl font-bold mt-2",
                                children: countdown
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s2(BreathingExercise, "Gf/iHqp0pIi/V44MaFs1tSmeFME=");
_c2 = BreathingExercise;
// ---------------------------------
// GoalTracker Component
// ---------------------------------
function GoalTracker({ habits, onUpdate, onReset }) {
    if (!habits || habits.length === 0) {
        // Render a placeholder or return null if habits haven't loaded yet
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 bg-slate-200 rounded w-3/4 mb-4"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 304,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 306,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 307,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 305,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 303,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-800",
                        children: "This Week's Goals"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "text-sm font-medium text-indigo-600 hover:text-indigo-800",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 316,
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
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-600",
                                        children: [
                                            habit.progress,
                                            " / ",
                                            habit.target
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-slate-200 rounded-full h-2.5 mt-1.5 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-600 h-2.5 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${habit.progress / habit.target * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onUpdate(habit.id),
                                disabled: habit.progress >= habit.target,
                                className: "mt-2 text-sm bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "Log +1"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, habit.id, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_c3 = GoalTracker;
// ---------------------------------
// MoodChart Component
// ---------------------------------
function MoodChart({ history }) {
    _s3();
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
            const recentEntries = history.filter({
                "MoodChart.useEffect.recentEntries": (entry)=>{
                    if (entry.date && typeof entry.date.toDate === 'function') {
                        return entry.date.toDate() >= sevenDaysAgo;
                    }
                    return false;
                }
            }["MoodChart.useEffect.recentEntries"]);
            if (recentEntries.length < 2) {
                setHasEnoughData(false);
                return;
            }
            setHasEnoughData(true);
            const sortedEntries = recentEntries.sort({
                "MoodChart.useEffect.sortedEntries": (a, b)=>a.date.toDate().getTime() - b.date.toDate().getTime()
            }["MoodChart.useEffect.sortedEntries"]);
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
                    return 0;
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
    ]);
    if (!hasEnoughData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-800 mb-4",
                    children: "Mood Analytics"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-4 bg-slate-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Journal for a few more days to see your mood trend chart!"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 397,
            columnNumber: 7
        }, this);
    }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            options: chartOptions,
            data: chartData
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 431,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
}
_s3(MoodChart, "kxknEYTt1YR0/KmWsO+g9cvnnSs=");
_c4 = MoodChart;
// ---------------------------------
// WeeklySummary Component
// ---------------------------------
function WeeklySummary({ history }) {
    _s4();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const calculateSummary = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentEntries = history.filter((entry)=>{
            if (entry.date && typeof entry.date.toDate === 'function') {
                return entry.date.toDate() > sevenDaysAgo;
            }
            return false;
        });
        if (recentEntries.length === 0) {
            setSummary({
                totalEntries: 0,
                moods: {},
                topEmotion: 'N/A',
                topActivity: 'N/A'
            });
            return;
        }
        const moodCounts = {
            POSITIVE: 0,
            NEGATIVE: 0,
            NEUTRAL: 0
        };
        const labelCounts = {};
        const activityOnPositiveDays = {};
        recentEntries.forEach((entry)=>{
            if (moodCounts[entry.sentiment] !== undefined) moodCounts[entry.sentiment]++;
            entry.labels.forEach((label)=>{
                labelCounts[label] = (labelCounts[label] || 0) + 1;
            });
            if (entry.sentiment === 'POSITIVE') {
                entry.activities.forEach((activity)=>{
                    activityOnPositiveDays[activity] = (activityOnPositiveDays[activity] || 0) + 1;
                });
            }
        });
        const getTopItem = (obj)=>{
            const top = Object.keys(obj).reduce((a, b)=>obj[a] > obj[b] ? a : b, '');
            return top || 'N/A';
        };
        setSummary({
            totalEntries: recentEntries.length,
            moods: moodCounts,
            topEmotion: getTopItem(labelCounts),
            topActivity: getTopItem(activityOnPositiveDays)
        });
    };
    const handleShowSummary = ()=>{
        calculateSummary(); // Calculate summary when button is clicked
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
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 497,
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
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 496,
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
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-4",
                        children: "Get a summary of your emotional trends and insights from the past 7 days."
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowSummary,
                        className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all",
                        children: "Generate My Weekly Summary"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 508,
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
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-2xl font-bold text-slate-500 hover:text-slate-800",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 516,
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
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 520,
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
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEGATIVE",
                                                    count: summary.moods.NEGATIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 134
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEUTRAL",
                                                    count: summary.moods.NEUTRAL,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 222
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 524,
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
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 69
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-indigo-700",
                                                            children: summary.topEmotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 116
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 66
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Activity most linked to positive days:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 198
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-700",
                                                            children: summary.topActivity
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 254
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 195
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 523,
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
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 118
                                            }, this),
                                            " To boost your mood next week, try focusing on activities like **",
                                            summary.topActivity,
                                            "**!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 87
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 518,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-slate-600 py-8",
                            children: "Not enough data from the past week. Keep journaling to unlock your summary!"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 529,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 515,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 514,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s4(WeeklySummary, "EIUK4HNKiFjvw9qjSnNLIhVTLxU=");
_c5 = WeeklySummary;
// ---------------------------------
// JournalHistory Component
// ---------------------------------
function JournalHistory({ history }) {
    const getSentimentStyle = (sentiment)=>{
        switch(sentiment){
            case 'POSITIVE':
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                        size: 18,
                        className: "text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 543,
                        columnNumber: 39
                    }, this),
                    cardBorder: 'border-l-4 border-green-500'
                };
            case 'NEGATIVE':
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__["Frown"], {
                        size: 18,
                        className: "text-rose-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 544,
                        columnNumber: 39
                    }, this),
                    cardBorder: 'border-l-4 border-rose-500'
                };
            default:
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__["Meh"], {
                        size: 18,
                        className: "text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 545,
                        columnNumber: 31
                    }, this),
                    cardBorder: 'border-l-4 border-slate-500'
                };
        }
    };
    if (!history || history.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-800 mb-4",
                    children: "Journal History"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 552,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-4 bg-slate-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Your past journal entries will appear here."
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 553,
                        columnNumber: 66
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 551,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-slate-800 mb-4",
                children: "Journal History"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 max-h-96 overflow-y-auto pr-2",
                children: history.map((entry)=>{
                    const { icon, cardBorder } = getSentimentStyle(entry.sentiment);
                    const entryDate = entry.date?.toDate();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-lg bg-slate-50 border ${cardBorder}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm font-semibold text-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 19
                                            }, this),
                                            entryDate ? entryDate.toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'No date'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 17
                                    }, this),
                                    icon
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 567,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-700 mb-3",
                                children: entry.originalText || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: "(No text was saved for this entry)"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 73
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 574,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    entry.labels && entry.labels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TagIcon$3e$__["TagIcon"], {
                                                size: 14,
                                                className: "text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 21
                                            }, this),
                                            entry.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallTag, {
                                                    text: label,
                                                    color: "bg-indigo-100 text-indigo-700"
                                                }, label, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 48
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 19
                                    }, this),
                                    entry.activities && entry.activities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 14,
                                                className: "text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, this),
                                            entry.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallTag, {
                                                    text: activity,
                                                    color: "bg-orange-100 text-orange-700"
                                                }, activity, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 55
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 575,
                                columnNumber: 15
                            }, this)
                        ]
                    }, entry.id, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 566,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 559,
        columnNumber: 5
    }, this);
}
_c6 = JournalHistory;
// ---------------------------------
// Generic UI Helper Components
// ---------------------------------
function TabButton({ icon, label, isActive, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-bold transition-all ${isActive ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100/50'}`,
        children: [
            icon,
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 602,
        columnNumber: 5
    }, this);
}
_c7 = TabButton;
function Tag({ label, type }) {
    const colors = {
        sentiment: {
            POSITIVE: 'bg-green-100 text-green-800',
            NEGATIVE: 'bg-rose-100 text-rose-800',
            NEUTRAL: 'bg-slate-100 text-slate-800'
        },
        label: {
            Anxiety: 'bg-purple-100 text-purple-800',
            Fatigue: 'bg-slate-100 text-slate-800',
            Sadness: 'bg-blue-100 text-blue-800',
            Work: 'bg-yellow-100 text-yellow-800',
            Family: 'bg-pink-100 text-pink-800',
            default: 'bg-indigo-100 text-indigo-800'
        },
        activity: 'bg-orange-100 text-orange-800 border border-orange-200'
    };
    let color;
    if (type === 'sentiment') color = colors.sentiment[label] || colors.label.default;
    else if (type === 'label') color = colors.label[label] || colors.label.default;
    else color = colors.activity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 text-sm font-medium rounded-full ${color}`,
        children: [
            type === 'activity' && '🏃‍♂️ ',
            label
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 621,
        columnNumber: 10
    }, this);
}
_c8 = Tag;
const SmallTag = ({ text, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 text-xs font-medium rounded-full ${color}`,
        children: text
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 624,
        columnNumber: 73
    }, ("TURBOPACK compile-time value", void 0));
_c9 = SmallTag;
function InsightCard({ analysis }) {
    const strategy = getPersonalizedStrategy(analysis);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-indigo-800 flex items-center",
                children: [
                    strategy.emoji,
                    " ",
                    strategy.title
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-700 mt-2",
                children: strategy.text
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 629,
        columnNumber: 5
    }, this);
}
_c10 = InsightCard;
function CorrelationCard({ analysis }) {
    if (!analysis.activities || analysis.activities.length === 0) return null;
    let insightText = null;
    if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) insightText = "Great job on exercising! It seems to have a positive impact on your mood.";
    else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) insightText = "Connecting with others is powerful. It looks like it boosted your spirits today!";
    else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) insightText = "We noticed you logged 'Work' and are feeling fatigued. Remember to take regular breaks to recharge.";
    if (!insightText) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 bg-green-50 border border-green-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-green-800 flex items-center",
                children: "📈 Correlation Insight"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-700 mt-2",
                children: insightText
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 644,
        columnNumber: 5
    }, this);
}
_c11 = CorrelationCard;
function AppWrapper() {
    _s5();
    const { user, loading } = useAuth();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 48,
                className: "text-indigo-600 animate-spin"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 661,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 660,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginScreen, {}, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 667,
            columnNumber: 12
        }, this);
    }
    // If the user is logged in, show the main homepage
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
        user: user
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 671,
        columnNumber: 10
    }, this);
}
_s5(AppWrapper, "EmJkapf7qiLC5Br5eCoEq4veZes=", false, function() {
    return [
        useAuth
    ];
});
_c12 = AppWrapper;
// ==================================================================
// HOME PAGE (The main app)
// ==================================================================
function HomePage({ user }) {
    _s6();
    // --- State Variables ---
    const [journalText, setJournalText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBreathingExercise, setShowBreathingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('journal');
    const [journalHistory, setJournalHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialHabits); // Initialize with default
    // --- Data Loading Effect ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!user) return;
            // --- Profile Listener (Streak & Habits) ---
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            const unsubscribeProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(profileDocRef, {
                "HomePage.useEffect.unsubscribeProfile": (docSnap)=>{
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        // Streak logic
                        const streakData = data.streakData || {
                            streakCount: 0,
                            lastJournalDate: null
                        };
                        const today = getISODate(new Date());
                        const yesterday = getISODate(new Date(Date.now() - 86400000));
                        if (streakData.lastJournalDate === today || streakData.lastJournalDate === yesterday) {
                            setStreak(streakData.streakCount);
                        } else if (streakData.lastJournalDate) {
                            setStreak(0); // Streak is broken
                        } else {
                            setStreak(0); // Ensure streak is 0 if no data
                        }
                        // Habits logic - use default if none exist in DB
                        setHabits(data.habits || initialHabits);
                    } else {
                        // Create a new user profile document if it doesn't exist
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(profileDocRef, {
                            email: user.email || 'guest',
                            streakData: {
                                streakCount: 0,
                                lastJournalDate: null
                            },
                            habits: initialHabits
                        });
                        setHabits(initialHabits); // Set initial habits locally too
                        setStreak(0); // Ensure streak is 0 for new users
                    }
                }
            }["HomePage.useEffect.unsubscribeProfile"], {
                "HomePage.useEffect.unsubscribeProfile": (error)=>{
                    console.error("Error fetching user profile:", error);
                    // Handle error appropriately, maybe show a message to the user
                    setError("Could not load your profile data.");
                }
            }["HomePage.useEffect.unsubscribeProfile"]);
            // --- Journal History Listener ---
            const journalsColRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid, 'journals');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(journalsColRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('date', 'desc'));
            const unsubscribeJournals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "HomePage.useEffect.unsubscribeJournals": (snapshot)=>{
                    const history = snapshot.docs.map({
                        "HomePage.useEffect.unsubscribeJournals.history": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["HomePage.useEffect.unsubscribeJournals.history"]);
                    setJournalHistory(history);
                }
            }["HomePage.useEffect.unsubscribeJournals"], {
                "HomePage.useEffect.unsubscribeJournals": (error)=>{
                    console.error("Error fetching journal history:", error);
                    setError("Could not load your journal history.");
                }
            }["HomePage.useEffect.unsubscribeJournals"]);
            return ({
                "HomePage.useEffect": ()=>{
                    unsubscribeProfile();
                    unsubscribeJournals();
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        user
    ]);
    // --- Handlers ---
    const handleAnalyze = async ()=>{
        if (!user || !journalText.trim()) {
            setError('Please write something in your journal first.');
            return;
        }
        setIsLoading(true);
        setError('');
        setAnalysis(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/analyze', {
                text: journalText,
                activities: selectedActivities
            });
            if (response.data.error) throw new Error(response.data.error);
            setAnalysis(response.data);
            // Save new journal entry to Firestore
            const newEntry = {
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                sentiment: response.data.sentiment,
                labels: response.data.labels,
                activities: response.data.activities,
                originalText: journalText
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid, 'journals'), newEntry);
            // Update streak in Firestore
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            const profileDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(profileDocRef);
            // Use profileDoc.data() directly, ensuring it exists after creation
            const streakData = profileDoc.exists() ? profileDoc.data().streakData : {
                streakCount: 0,
                lastJournalDate: null
            };
            const today = getISODate(new Date());
            const yesterday = getISODate(new Date(Date.now() - 86400000));
            let newStreakCount = streakData?.streakCount || 0; // Default to 0 if streakData is null/undefined
            if (streakData?.lastJournalDate === today) {} else if (streakData?.lastJournalDate === yesterday) newStreakCount += 1;
            else newStreakCount = 1;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(profileDocRef, {
                streakData: {
                    streakCount: newStreakCount,
                    lastJournalDate: today
                }
            }, {
                merge: true
            });
            // Clear the form
            setJournalText('');
            setSelectedActivities([]);
        } catch (err) {
            console.error(err);
            setError('Sorry, we couldn\'t analyze your entry. The AI server might be busy or offline.');
        } finally{
            setIsLoading(false);
        }
    };
    const handleHabitUpdate = async (id)=>{
        const updatedHabits = habits.map((h)=>h.id === id && h.progress < h.target ? {
                ...h,
                progress: h.progress + 1
            } : h);
        setHabits(updatedHabits); // Optimistic update
        try {
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(profileDocRef, {
                habits: updatedHabits
            }, {
                merge: true
            });
        } catch (error) {
            console.error("Error updating habits:", error);
            setError("Could not save habit progress.");
        // Optional: Revert local state if save fails
        // setHabits(habits);
        }
    };
    const handleHabitReset = async ()=>{
        const resetHabits = habits.map((h)=>({
                ...h,
                progress: 0
            }));
        setHabits(resetHabits); // Optimistic update
        try {
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(profileDocRef, {
                habits: resetHabits
            }, {
                merge: true
            });
        } catch (error) {
            console.error("Error resetting habits:", error);
            setError("Could not reset habit progress.");
        // Optional: Revert local state if save fails
        // setHabits(habits);
        }
    };
    // --- Render JSX ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBreathingExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BreathingExercise, {
                onClose: ()=>setShowBreathingExercise(false)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 830,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen flex-col items-center bg-slate-50 font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full max-w-2xl px-4 pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-indigo-800",
                                    children: "Aura"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StreakTracker, {
                                            streak: streak
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].signOut(),
                                            className: "p-2 rounded-full hover:bg-slate-200",
                                            title: "Log Out",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                size: 20,
                                                className: "text-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 838,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 833,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "w-full max-w-2xl p-4 sticky top-0 z-10 bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center space-x-2 rounded-lg bg-slate-200 p-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 846,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Journal",
                                    isActive: view === 'journal',
                                    onClick: ()=>setView('journal')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 846,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Dashboard",
                                    isActive: view === 'dashboard',
                                    onClick: ()=>setView('dashboard')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 845,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 844,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-2xl p-4 pb-20",
                        children: [
                            " ",
                            view === 'journal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-2xl shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: journalText,
                                                onChange: (e)=>setJournalText(e.target.value),
                                                placeholder: "How are you feeling today?",
                                                className: "w-full h-40 p-3 border-slate-200 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none",
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 856,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-md font-semibold text-slate-700 mb-2",
                                                        children: "What did you do today?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: ALL_ACTIVITIES.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedActivities((p)=>p.includes(activity) ? p.filter((a)=>a !== activity) : [
                                                                            ...p,
                                                                            activity
                                                                        ]),
                                                                className: `px-3 py-1.5 text-sm font-medium rounded-full border transition-all ${selectedActivities.includes(activity) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`,
                                                                children: activity
                                                            }, activity, false, {
                                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 857,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAnalyze,
                                                disabled: isLoading,
                                                className: "w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md flex items-center justify-center",
                                                children: [
                                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 20,
                                                        className: "mr-2 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 33
                                                    }, this),
                                                    isLoading ? 'Analyzing...' : 'Analyze My Feelings'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 863,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 855,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-500 text-center mt-4",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 868,
                                        columnNumber: 25
                                    }, this),
                                    analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-2xl shadow-lg animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-slate-800 mb-4",
                                                children: "Your Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 871,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                        label: analysis.sentiment,
                                                        type: "sentiment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 57
                                                    }, this),
                                                    analysis.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: label,
                                                            type: "label"
                                                        }, label, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 138
                                                        }, this)),
                                                    analysis.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: activity,
                                                            type: "activity"
                                                        }, activity, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 223
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 872,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 54
                                            }, this),
                                            analysis.labels.includes("Anxiety") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowBreathingExercise(true),
                                                className: "w-full mt-4 bg-violet-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-violet-700",
                                                children: "Try a Guided Breathing Exercise"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 874,
                                                columnNumber: 59
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 870,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this),
                            view === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodChart, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalTracker, {
                                        habits: habits,
                                        onUpdate: handleHabitUpdate,
                                        onReset: handleHabitReset
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 884,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklySummary, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 885,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JournalHistory, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 886,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 882,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 851,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s6(HomePage, "H3c4HItD/1MYyQWMpKdxXXwgPkA=");
_c13 = HomePage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "LoginScreen");
__turbopack_context__.k.register(_c1, "StreakTracker");
__turbopack_context__.k.register(_c2, "BreathingExercise");
__turbopack_context__.k.register(_c3, "GoalTracker");
__turbopack_context__.k.register(_c4, "MoodChart");
__turbopack_context__.k.register(_c5, "WeeklySummary");
__turbopack_context__.k.register(_c6, "JournalHistory");
__turbopack_context__.k.register(_c7, "TabButton");
__turbopack_context__.k.register(_c8, "Tag");
__turbopack_context__.k.register(_c9, "SmallTag");
__turbopack_context__.k.register(_c10, "InsightCard");
__turbopack_context__.k.register(_c11, "CorrelationCard");
__turbopack_context__.k.register(_c12, "AppWrapper");
__turbopack_context__.k.register(_c13, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=aura-frontend_app_e0b48b9d._.js.map