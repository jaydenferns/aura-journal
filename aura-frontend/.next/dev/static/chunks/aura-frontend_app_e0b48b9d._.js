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
    ()=>AppWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
// Firebase & Auth imports
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/firebaseConfig.ts [app-client] (ecmascript)"); // Assuming firebaseConfig.ts exists and exports these
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
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
        title: "Anxious about Work?",
        text: "Try the 'Urgent-Important Matrix' to organize tasks.",
        emoji: "📋",
        requiredTags: [
            "Anxiety",
            "Work"
        ]
    },
    {
        title: "Down about Relationships?",
        text: "Write a short, positive message to someone you care about.",
        emoji: "💌",
        requiredTags: [
            "Sadness",
            "Relationships"
        ]
    },
    {
        title: "Feeling Fatigued?",
        text: "A short 10-minute walk can boost circulation and mental clarity.",
        emoji: "🚶‍♀️",
        requiredTags: [
            "Fatigue"
        ]
    },
    {
        title: "Feeling Anxious?",
        text: "Try the 4-7-8 breathing technique: Inhale 4s, Hold 7s, Exhale 8s.",
        emoji: "🌬️",
        requiredTags: [
            "Anxiety"
        ]
    },
    {
        title: "Feeling Sad?",
        text: "Write down three small things you are grateful for today.",
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
        const score = strategy.requiredTags.reduce((acc, tag)=>allUserTags.includes(tag) ? acc + 1 : acc, 0);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = strategy;
        }
    }
    return bestMatch || {
        title: "Your Daily Insight ✨",
        text: "Reflecting on your feelings is a powerful step.",
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
            // Ensure Firebase auth is initialized before listening
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "useAuth.useEffect.unsubscribe": (user)=>{
                    setUser(user);
                    setLoading(false);
                }
            }["useAuth.useEffect.unsubscribe"]);
            return ({
                "useAuth.useEffect": ()=>unsubscribe()
            })["useAuth.useEffect"]; // Cleanup listener on component unmount
        }
    }["useAuth.useEffect"], []);
    return {
        user,
        loading
    };
}
_s(useAuth, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
// ==================================================================
// UI COMPONENTS (Merged into one file)
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
                            lineNumber: 152,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600 mt-2",
                            children: "Your private space to reflect and grow."
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 95
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 152,
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
                            lineNumber: 153,
                            columnNumber: 61
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
                                    lineNumber: 155,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20,
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 86
                                }, this),
                                " Sign in with Google"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 154,
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
                                    lineNumber: 158,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20,
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 85
                                }, this),
                                " Continue as Guest"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 mt-8",
                    children: "By signing in, you agree to our Terms of Service."
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s1(LoginScreen, "N25Nl1gkekKzJWsnMeFXuoIJ8Is=");
_c = LoginScreen;
// ---------------------------------
// StreakTracker Component
// ---------------------------------
function StreakTracker({ streak }) {
    // Only render if streak is positive
    if (streak === 0) return null;
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
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-bold text-orange-500",
                children: streak
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, streak, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 173,
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
                    onClose(); // Close the modal when done
                    return;
                }
                const phase = phases[nextCycleIndex % 3];
                setCycleIndex(nextCycleIndex);
                setInstruction(phase.name);
                setCountdown(phase.duration);
            }
            // Cleanup interval on unmount or when countdown changes
            return ({
                "BreathingExercise.useEffect": ()=>clearInterval(interval)
            })["BreathingExercise.useEffect"];
        }
    }["BreathingExercise.useEffect"], [
        countdown,
        cycleIndex,
        onClose
    ]); // Add onClose to dependency array
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-indigo-900 bg-opacity-95 flex flex-col items-center justify-center z-50 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-48 h-48 rounded-full border-4 border-white flex items-center justify-center transition-transform duration-1000 ease-in-out",
                    style: {
                        transform: instruction === 'Inhale' ? 'scale(1.1)' : 'scale(1)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-3xl font-bold",
                                children: instruction
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-5xl font-bold mt-2",
                                children: countdown
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s2(BreathingExercise, "Gf/iHqp0pIi/V44MaFs1tSmeFME=");
_c2 = BreathingExercise;
// ---------------------------------
// GoalTracker Component
// ---------------------------------
function GoalTracker({ habits, onUpdate, onReset }) {
    // Show loading skeleton if habits haven't loaded
    if (!habits || habits.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 bg-slate-200 rounded w-3/4 mb-4"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-slate-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 236,
            columnNumber: 7
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
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "text-sm font-medium text-indigo-600 hover:text-indigo-800",
                        children: "Reset Progress"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 249,
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
                                        lineNumber: 257,
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
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-slate-200 rounded-full h-2.5 mt-1.5 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-600 h-2.5 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${Math.min(100, habit.progress / habit.target * 100)}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onUpdate(habit.id),
                                disabled: habit.progress >= habit.target,
                                className: "mt-2 text-sm bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "Log +1"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, habit.id, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 248,
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
            // Only run this logic in the browser
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            sevenDaysAgo.setHours(0, 0, 0, 0); // Start of 7 days ago
            // Filter entries from the last 7 days
            const recentEntries = history.filter({
                "MoodChart.useEffect.recentEntries": (entry)=>entry.date?.toDate() >= sevenDaysAgo
            }["MoodChart.useEffect.recentEntries"]);
            if (recentEntries.length < 2) {
                setHasEnoughData(false);
                return; // Need at least 2 points for a line chart
            }
            setHasEnoughData(true);
            // Sort entries chronologically for the chart
            const sortedEntries = [
                ...recentEntries
            ].sort({
                "MoodChart.useEffect.sortedEntries": (a, b)=>a.date.toDate().getTime() - b.date.toDate().getTime()
            }["MoodChart.useEffect.sortedEntries"]);
            // Prepare data for Chart.js
            const labels = sortedEntries.map({
                "MoodChart.useEffect.labels": (entry)=>entry.date.toDate().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    })
            }["MoodChart.useEffect.labels"]);
            const dataPoints = sortedEntries.map({
                "MoodChart.useEffect.dataPoints": (entry)=>entry.sentiment === 'POSITIVE' ? 1 : entry.sentiment === 'NEGATIVE' ? -1 : 0
            }["MoodChart.useEffect.dataPoints"]);
            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Mood Trend',
                        data: dataPoints,
                        borderColor: 'rgb(79, 70, 229)',
                        backgroundColor: 'rgba(79, 70, 229, 0.5)',
                        tension: 0.1,
                        fill: false,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgb(79, 70, 229)'
                    }
                ]
            });
        }
    }["MoodChart.useEffect"], [
        history
    ]); // Re-run effect when history data changes
    // Display message if not enough data
    if (!hasEnoughData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-800 mb-4",
                    children: "Mood Analytics"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-4 bg-slate-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Journal for a few more days to see your mood trend chart!"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this);
    }
    // Chart configuration
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
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
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y === 1) label += 'Positive';
                        else if (context.parsed.y === -1) label += 'Negative';
                        else if (context.parsed.y === 0) label += 'Neutral';
                        return label;
                    }
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
                        return null; // Hide other ticks
                    },
                    stepSize: 1 // Only show ticks at -1, 0, 1
                },
                min: -1.5,
                max: 1.5,
                grid: {
                    color: '#e2e8f0'
                } // Lighter grid lines
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxRotation: 0,
                    autoSkipPadding: 10
                } // Improve label readability
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-64",
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    options: chartOptions,
                    data: chartData
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 381,
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
        sevenDaysAgo.setHours(0, 0, 0, 0);
        const recentEntries = history.filter((entry)=>entry.date?.toDate() > sevenDaysAgo);
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
            entry.labels.forEach((l)=>{
                labelCounts[l] = (labelCounts[l] || 0) + 1;
            });
            if (entry.sentiment === 'POSITIVE') entry.activities.forEach((a)=>{
                activityOnPositiveDays[a] = (activityOnPositiveDays[a] || 0) + 1;
            });
        });
        const getTopItem = (obj)=>Object.keys(obj).reduce((a, b)=>obj[a] > obj[b] ? a : b, '') || 'N/A';
        setSummary({
            totalEntries: recentEntries.length,
            moods: moodCounts,
            topEmotion: getTopItem(labelCounts),
            topActivity: getTopItem(activityOnPositiveDays)
        });
    };
    const handleShowSummary = ()=>{
        calculateSummary();
        setShowModal(true);
    };
    const MoodStat = ({ m, c, t })=>{
        const p = t > 0 ? Math.round(c / t * 100) : 0;
        const cl = {
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
                            children: m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 409,
                            columnNumber: 269
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                p,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 409,
                            columnNumber: 334
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 409,
                    columnNumber: 209
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-slate-200 rounded-full h-2.5 mt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${cl[m] || 'bg-gray-400'} h-2.5 rounded-full`,
                        style: {
                            width: `${p}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 418
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 409,
                    columnNumber: 357
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 409,
            columnNumber: 204
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
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-4 text-sm",
                        children: "Get a summary of your emotional trends and insights from the past 7 days."
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowSummary,
                        className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all",
                        children: "Generate My Weekly Summary"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 413,
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
                                    lineNumber: 421,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-2xl font-bold text-slate-500 hover:text-slate-800",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 421,
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
                                            lineNumber: 424,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    m: "POSITIVE",
                                                    c: summary.moods.POSITIVE,
                                                    t: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 107
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    m: "NEGATIVE",
                                                    c: summary.moods.NEGATIVE,
                                                    t: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 184
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    m: "NEUTRAL",
                                                    c: summary.moods.NEUTRAL,
                                                    t: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 261
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 80
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2 text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Most common feeling:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 123
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-indigo-700",
                                                            children: summary.topEmotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Activity linked to positive days:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 243
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-700",
                                                            children: summary.topActivity
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 294
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 240
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50 p-3 rounded-lg border border-indigo-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-indigo-800 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Pro-Tip:"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 126
                                            }, this),
                                            " To boost your mood next week, try focusing on activities like **",
                                            summary.topActivity,
                                            "**!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 87
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 423,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-slate-600 py-8",
                            children: "Not enough data from the past week. Keep journaling!"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 428,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 419,
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
    const getSentimentStyle = (s)=>{
        switch(s){
            case 'POSITIVE':
                return {
                    i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                        size: 18,
                        className: "text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 441,
                        columnNumber: 82
                    }, this),
                    b: 'border-l-4 border-green-500'
                };
            case 'NEGATIVE':
                return {
                    i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__["Frown"], {
                        size: 18,
                        className: "text-rose-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 441,
                        columnNumber: 188
                    }, this),
                    b: 'border-l-4 border-rose-500'
                };
            default:
                return {
                    i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__["Meh"], {
                        size: 18,
                        className: "text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 441,
                        columnNumber: 284
                    }, this),
                    b: 'border-l-4 border-slate-500'
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
                    lineNumber: 442,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-4 bg-slate-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Your past journal entries will appear here."
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 442,
                        columnNumber: 236
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 442,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 442,
            columnNumber: 52
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
                lineNumber: 443,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 max-h-96 overflow-y-auto pr-2",
                children: history.map((entry)=>{
                    const { i: icon, b: cardBorder } = getSentimentStyle(entry.sentiment);
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
                                                lineNumber: 443,
                                                columnNumber: 552
                                            }, this),
                                            entryDate ? entryDate.toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'No date'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 474
                                    }, this),
                                    icon
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 443,
                                columnNumber: 418
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-700 mb-3 text-sm",
                                children: entry.originalText || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: "(No text saved)"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 764
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 443,
                                columnNumber: 698
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    entry.labels?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TagIcon$3e$__["TagIcon"], {
                                                size: 14,
                                                className: "text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 913
                                            }, this),
                                            entry.labels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallTag, {
                                                    text: l,
                                                    color: "bg-indigo-100 text-indigo-700"
                                                }, l, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 981
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 870
                                    }, this),
                                    entry.activities?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 14,
                                                className: "text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 1132
                                            }, this),
                                            entry.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallTag, {
                                                    text: a,
                                                    color: "bg-orange-100 text-orange-700"
                                                }, a, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 1205
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 1089
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 443,
                                columnNumber: 791
                            }, this)
                        ]
                    }, entry.id, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 443,
                        columnNumber: 336
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 443,
                columnNumber: 139
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 443,
        columnNumber: 12
    }, this);
}
_c6 = JournalHistory;
// ---------------------------------
// CounselorList Component
// ---------------------------------
function CounselorList() {
    _s5();
    const [counselors, setCounselors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CounselorList.useEffect": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'counselors'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("isActive", "==", true));
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "CounselorList.useEffect.unsub": (snap)=>{
                    const list = snap.docs.map({
                        "CounselorList.useEffect.unsub.list": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["CounselorList.useEffect.unsub.list"]);
                    setCounselors(list);
                    setIsLoading(false);
                    setError(null);
                }
            }["CounselorList.useEffect.unsub"], {
                "CounselorList.useEffect.unsub": (err)=>{
                    console.error("Err fetch counselors:", err);
                    setError("Could not load counselors.");
                    setIsLoading(false);
                }
            }["CounselorList.useEffect.unsub"]);
            return ({
                "CounselorList.useEffect": ()=>unsub()
            })["CounselorList.useEffect"];
        }
    }["CounselorList.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-slate-800 mb-1",
                children: "Find Support"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600 mb-4 text-sm",
                children: "Connect with licensed professionals. This is a directory, not an endorsement."
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 136
            }, this),
            " ",
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    size: 32,
                    className: "text-indigo-600 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 452,
                    columnNumber: 319
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 276
            }, this),
            " ",
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10 px-4 bg-rose-50 border border-rose-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-rose-700 font-semibold",
                        children: "Error"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 485
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-rose-600 text-sm mt-1",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 537
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 400
            }, this),
            " ",
            !isLoading && !error && counselors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10 px-4 bg-slate-50 border border-slate-200 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "No counselors listed."
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 452,
                    columnNumber: 739
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 652
            }, this),
            " ",
            !isLoading && !error && counselors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: counselors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounselorCard, {
                        counselor: c
                    }, c.id, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 902
                    }, this))
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 854
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 pt-4 border-t border-slate-200 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-md font-semibold text-rose-700 mb-2",
                        children: "Need Immediate Help?"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 1020
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-600",
                        children: [
                            "If you are in crisis, please reach out. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://findahelpline.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-indigo-600 hover:underline ml-1",
                                children: "Find Crisis Resources"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 1180
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 1102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 452,
                columnNumber: 955
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 452,
        columnNumber: 12
    }, this);
}
_s5(CounselorList, "LPSjN2zPKBRAIbnNQZaZu1wQ/RU=");
_c7 = CounselorList;
// ---------------------------------
// CounselorCard Component
// ---------------------------------
function CounselorCard({ counselor }) {
    // Fallback image function
    const handleImageError = (e)=>{
        e.currentTarget.onerror = null; // Prevent infinite loop
        e.currentTarget.src = 'https://placehold.co/100x100/E2E8F0/475569?text=Counselor';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: counselor.imageUrl || 'https://placehold.co/100x100/E2E8F0/475569?text=Counselor',
                alt: `Photo of ${counselor.name}`,
                className: "w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm mx-auto sm:mx-0",
                onError: handleImageError
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-center sm:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-slate-800",
                        children: counselor.name
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-indigo-600 mb-1",
                        children: counselor.title
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    counselor.specializations?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TagIcon$3e$__["TagIcon"], {
                                size: 14,
                                className: "text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this),
                            counselor.specializations.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallTag, {
                                    text: s,
                                    color: "bg-indigo-100 text-indigo-700"
                                }, s, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 49
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-600 mb-3 line-clamp-3",
                        children: counselor.bio
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    counselor.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: counselor.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline",
                        children: [
                            "Visit Website ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 485,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 466,
        columnNumber: 5
    }, this);
}
_c8 = CounselorCard;
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
        lineNumber: 498,
        columnNumber: 12
    }, this);
}
_c9 = TabButton;
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
        lineNumber: 504,
        columnNumber: 10
    }, this);
}
_c10 = Tag;
const SmallTag = ({ text, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 text-xs font-medium rounded-full ${color}`,
        children: text
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 507,
        columnNumber: 73
    }, ("TURBOPACK compile-time value", void 0));
_c11 = SmallTag;
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
                lineNumber: 511,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-700 mt-2 text-sm",
                children: strategy.text
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 511,
                columnNumber: 193
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 511,
        columnNumber: 12
    }, this);
}
_c12 = InsightCard;
function CorrelationCard({ analysis }) {
    if (!analysis.activities || analysis.activities.length === 0) return null;
    let insightText = null;
    if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) insightText = "Exercising seems to positively impact your mood.";
    else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) insightText = "Connecting with others boosted your spirits!";
    else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) insightText = "Work logged & feeling fatigued. Remember to take breaks.";
    if (!insightText) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 bg-green-50 border border-green-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-green-800 flex items-center",
                children: "📈 Correlation Insight"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 516,
                columnNumber: 85
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-700 mt-2 text-sm",
                children: insightText
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 516,
                columnNumber: 179
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 516,
        columnNumber: 12
    }, this);
}
_c13 = CorrelationCard;
function AppWrapper() {
    _s6();
    const { user, loading } = useAuth();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 48,
                className: "text-indigo-600 animate-spin"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 524,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 524,
            columnNumber: 27
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginScreen, {}, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 525,
            columnNumber: 23
        }, this);
    }
    // User is loaded and logged in, show the main app
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
        user: user
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 527,
        columnNumber: 10
    }, this);
}
_s6(AppWrapper, "EmJkapf7qiLC5Br5eCoEq4veZes=", false, function() {
    return [
        useAuth
    ];
});
_c14 = AppWrapper;
// ==================================================================
// HOME PAGE (The main app logic and layout)
// ==================================================================
function HomePage({ user }) {
    _s7();
    // --- State Variables ---
    const [journalText, setJournalText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingAnalysis, setIsLoadingAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBreathingExercise, setShowBreathingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('journal');
    const [journalHistory, setJournalHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialHabits);
    // --- Data Loading Effect (Firestore Listeners) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!user) return;
            // --- Profile Listener ---
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            const unsubscribeProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(profileDocRef, {
                "HomePage.useEffect.unsubscribeProfile": (docSnap)=>{
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        const streakData = data.streakData || {
                            streakCount: 0,
                            lastJournalDate: null
                        };
                        const today = getISODate(new Date());
                        const yesterday = getISODate(new Date(Date.now() - 86400000));
                        if (streakData.lastJournalDate === today || streakData.lastJournalDate === yesterday) setStreak(streakData.streakCount);
                        else if (streakData.lastJournalDate) setStreak(0);
                        else setStreak(0);
                        setHabits(data.habits || initialHabits);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(profileDocRef, {
                            email: user.email || `guest_${user.uid.substring(0, 6)}`,
                            streakData: {
                                streakCount: 0,
                                lastJournalDate: null
                            },
                            habits: initialHabits
                        });
                        setHabits(initialHabits);
                        setStreak(0);
                    }
                }
            }["HomePage.useEffect.unsubscribeProfile"], {
                "HomePage.useEffect.unsubscribeProfile": (error)=>{
                    console.error("Error fetching profile:", error);
                    setError("Could not load profile.");
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
                    console.error("Error fetching journals:", error);
                    setError("Could not load journal history.");
                }
            }["HomePage.useEffect.unsubscribeJournals"]);
            return ({
                "HomePage.useEffect": ()=>{
                    unsubscribeProfile();
                    unsubscribeJournals();
                }
            })["HomePage.useEffect"]; // Cleanup
        }
    }["HomePage.useEffect"], [
        user
    ]);
    // --- Handlers ---
    const handleAnalyze = async ()=>{
        if (!user || !journalText.trim()) {
            setError('Please write something first.');
            return;
        }
        setIsLoadingAnalysis(true);
        setError('');
        setAnalysis(null);
        try {
            const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/analyze';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(backendUrl, {
                text: journalText,
                activities: selectedActivities
            });
            if (response.data.error) throw new Error(response.data.error);
            setAnalysis(response.data);
            const newEntry = {
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                sentiment: response.data.sentiment,
                labels: response.data.labels,
                activities: response.data.activities,
                originalText: journalText
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid, 'journals'), newEntry);
            const profileDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
            const profileDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(profileDocRef);
            const streakData = profileDoc.exists() ? profileDoc.data().streakData : {
                streakCount: 0,
                lastJournalDate: null
            };
            const today = getISODate(new Date());
            const yesterday = getISODate(new Date(Date.now() - 86400000));
            let newStreakCount = streakData?.streakCount || 0;
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
            setJournalText('');
            setSelectedActivities([]);
        } catch (err) {
            console.error(err);
            setError(`Analysis failed: ${err.message || 'Server error'}`);
        } finally{
            setIsLoadingAnalysis(false);
        }
    };
    const handleHabitUpdate = async (id)=>{
        const updatedHabits = habits.map((h)=>h.id === id && h.progress < h.target ? {
                ...h,
                progress: h.progress + 1
            } : h);
        setHabits(updatedHabits);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), {
                habits: updatedHabits
            }, {
                merge: true
            });
        } catch (error) {
            console.error("Err saving habit:", error);
            setError("Failed to save habit.");
        }
    };
    const handleHabitReset = async ()=>{
        const resetHabits = initialHabits.map((h)=>({
                ...h,
                progress: 0
            }));
        setHabits(resetHabits);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), {
                habits: resetHabits
            }, {
                merge: true
            });
        } catch (error) {
            console.error("Err resetting habits:", error);
            setError("Failed to reset habits.");
        }
    };
    // --- Render JSX ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBreathingExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BreathingExercise, {
                onClose: ()=>setShowBreathingExercise(false)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 621,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen flex-col items-center bg-slate-50 font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full max-w-3xl px-4 pt-6 sticky top-0 z-20 bg-slate-50/80 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pb-2 border-b border-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-indigo-800",
                                    children: "Aura"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StreakTracker, {
                                            streak: streak
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 628,
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
                                                lineNumber: 629,
                                                columnNumber: 118
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 627,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 625,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "w-full max-w-3xl p-4 sticky top-[73px] z-10 bg-slate-50/80 backdrop-blur-sm",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center space-x-2 rounded-lg bg-slate-200 p-1.5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 637,
                                            columnNumber: 30
                                        }, void 0),
                                        label: "Journal",
                                        isActive: view === 'journal',
                                        onClick: ()=>setView('journal')
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 30
                                        }, void 0),
                                        label: "Dashboard",
                                        isActive: view === 'dashboard',
                                        onClick: ()=>setView('dashboard')
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 30
                                        }, void 0),
                                        label: "Find Support",
                                        isActive: view === 'support',
                                        onClick: ()=>setView('support')
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-3xl p-4 pb-20",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg shadow-md",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 645,
                                columnNumber: 21
                            }, this),
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
                                                disabled: isLoadingAnalysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 651,
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
                                                        lineNumber: 652,
                                                        columnNumber: 39
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
                                                                lineNumber: 652,
                                                                columnNumber: 194
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAnalyze,
                                                disabled: isLoadingAnalysis,
                                                className: "w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md flex items-center justify-center",
                                                children: [
                                                    " ",
                                                    isLoadingAnalysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 20,
                                                        className: "mr-2 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 294
                                                    }, this),
                                                    " ",
                                                    isLoadingAnalysis ? 'Analyzing...' : 'Analyze & Save Journal',
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-2xl shadow-lg animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-slate-800 mb-4",
                                                children: "Your Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 98
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                        label: analysis.sentiment,
                                                        type: "sentiment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 209
                                                    }, this),
                                                    analysis.labels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: l,
                                                            type: "label"
                                                        }, l, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 283
                                                        }, this)),
                                                    analysis.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: a,
                                                            type: "activity"
                                                        }, a, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 350
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 171
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 398
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 432
                                            }, this),
                                            " ",
                                            analysis.labels.includes("Anxiety") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowBreathingExercise(true),
                                                className: "w-full mt-4 bg-violet-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-violet-700",
                                                children: "Try Guided Breathing"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 511
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 655,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            view === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodChart, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalTracker, {
                                        habits: habits,
                                        onUpdate: handleHabitUpdate,
                                        onReset: handleHabitReset
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklySummary, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 204
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JournalHistory, {
                                        history: journalHistory
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 245
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 660,
                                columnNumber: 38
                            }, this),
                            view === 'support' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounselorList, {}, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 79
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 663,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s7(HomePage, "6xiIfbbGKtMmqr+QTEU1FUth21E=");
_c15 = HomePage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "LoginScreen");
__turbopack_context__.k.register(_c1, "StreakTracker");
__turbopack_context__.k.register(_c2, "BreathingExercise");
__turbopack_context__.k.register(_c3, "GoalTracker");
__turbopack_context__.k.register(_c4, "MoodChart");
__turbopack_context__.k.register(_c5, "WeeklySummary");
__turbopack_context__.k.register(_c6, "JournalHistory");
__turbopack_context__.k.register(_c7, "CounselorList");
__turbopack_context__.k.register(_c8, "CounselorCard");
__turbopack_context__.k.register(_c9, "TabButton");
__turbopack_context__.k.register(_c10, "Tag");
__turbopack_context__.k.register(_c11, "SmallTag");
__turbopack_context__.k.register(_c12, "InsightCard");
__turbopack_context__.k.register(_c13, "CorrelationCard");
__turbopack_context__.k.register(_c14, "AppWrapper");
__turbopack_context__.k.register(_c15, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=aura-frontend_app_e0b48b9d._.js.map