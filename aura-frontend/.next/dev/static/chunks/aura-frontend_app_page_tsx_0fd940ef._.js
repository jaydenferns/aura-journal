(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/aura-frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "getPersonalizedStrategy",
    ()=>getPersonalizedStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>"); // <-- This will now work
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Register the chart components
__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// --- Constants ---
const ALL_ACTIVITIES = [
    "Exercise",
    "Social",
    "Work",
    "Hobby",
    "Rest",
    "Nutrition"
];
// --- Helper Functions ---
const getISODate = (date)=>{
    return date.toISOString().split('T')[0];
};
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
// 2. HELPER COMPONENTS (from other files)
// ==================================================================
// --- BreathingExercise.tsx ---
const breathingPhases = [
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
const breathingTotalCycles = 4;
function BreathingExercise({ onClose }) {
    _s();
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
                if (nextCycleIndex >= breathingPhases.length * breathingTotalCycles) {
                    clearInterval(interval);
                    onClose();
                    return;
                }
                const nextPhase = breathingPhases[nextCycleIndex % breathingPhases.length];
                setCycleIndex(nextCycleIndex);
                setInstruction(nextPhase.name);
                setCountdown(nextPhase.duration);
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
        className: "fixed inset-0 bg-indigo-900 bg-opacity-90 flex flex-col items-center justify-center z-50 animate-fade-in",
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
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-8xl font-bold mt-2",
                                children: countdown
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(BreathingExercise, "Gf/iHqp0pIi/V44MaFs1tSmeFME=");
_c = BreathingExercise;
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
    _s1();
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalTracker.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedHabits = localStorage.getItem('aura-habits');
            setHabits(savedHabits ? JSON.parse(savedHabits) : initialHabits);
        }
    }["GoalTracker.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalTracker.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || habits.length === 0) return;
            localStorage.setItem('aura-habits', JSON.stringify(habits));
        }
    }["GoalTracker.useEffect"], [
        habits
    ]);
    const handleProgress = (id)=>{
        setHabits(habits.map((h)=>h.id === id && h.progress < h.target ? {
                ...h,
                progress: h.progress + 1
            } : h));
    };
    const resetProgress = ()=>{
        const resetHabits = habits.map((h)=>({
                ...h,
                progress: 0
            }));
        setHabits(resetHabits);
    };
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
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetProgress,
                        className: "text-sm text-indigo-500 hover:underline",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 170,
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
                                        lineNumber: 177,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            habit.progress,
                                            " / ",
                                            habit.target
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-slate-200 rounded-full h-2.5 mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-500 h-2.5 rounded-full",
                                    style: {
                                        width: `${habit.progress / habit.target * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 74
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleProgress(habit.id),
                                className: "mt-2 text-sm bg-slate-200 px-3 py-1 rounded-full hover:bg-slate-300",
                                children: "Log +1"
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, habit.id, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s1(GoalTracker, "nXVSo9+DUk/5aqhdGOOC29qGbqU=");
_c1 = GoalTracker;
function WeeklySummary() {
    _s2();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const calculateSummary = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const history = JSON.parse(localStorage.getItem('aura-history') || '[]');
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentEntries = history.filter((entry)=>new Date(entry.date) > sevenDaysAgo);
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
            if (entry.sentiment === 'POSITIVE') entry.activities.forEach((act)=>{
                activityOnPositiveDays[act] = (activityOnPositiveDays[act] || 0) + 1;
            });
        });
        const getTopItem = (obj)=>Object.keys(obj).reduce((a, b)=>obj[a] > obj[b] ? a : b, 'N/A');
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
                            children: mood
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 227,
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
                        lineNumber: 228,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-slate-800 mb-4",
                children: "Your Week"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleShowSummary,
                className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-colors",
                children: "Generate My Weekly Summary"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 236,
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
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Your Week in Review"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-2xl font-bold text-gray-500 hover:text-gray-800",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 156
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 240,
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
                                            lineNumber: 243,
                                            columnNumber: 22
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
                                                    lineNumber: 243,
                                                    columnNumber: 107
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEGATIVE",
                                                    count: summary.moods.NEGATIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 195
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEUTRAL",
                                                    count: summary.moods.NEUTRAL,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 283
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 80
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Your most common feeling was:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 108
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-violet-700",
                                                            children: summary.topEmotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 155
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 105
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Activity most linked to positive days:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 237
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-amber-700",
                                                            children: summary.topActivity
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 293
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 234
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-50 p-3 rounded-lg border border-green-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Pro-Tip:"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 115
                                            }, this),
                                            " To boost your mood next week, try focusing on activities like **",
                                            summary.topActivity,
                                            "**!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 85
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 py-8",
                            children: "Not enough data from the past week. Keep journaling to unlock your summary!"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s2(WeeklySummary, "EIUK4HNKiFjvw9qjSnNLIhVTLxU=");
_c2 = WeeklySummary;
// --- MoodChart.tsx ---
function MoodChart() {
    _s3();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        datasets: []
    });
    const [hasEnoughData, setHasEnoughData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoodChart.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const history = JSON.parse(localStorage.getItem('aura-history') || '[]');
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const recentEntries = history.filter({
                "MoodChart.useEffect.recentEntries": (entry)=>new Date(entry.date) >= sevenDaysAgo
            }["MoodChart.useEffect.recentEntries"]);
            if (recentEntries.length < 2) {
                setHasEnoughData(false);
                return;
            }
            setHasEnoughData(true);
            const labels = recentEntries.map({
                "MoodChart.useEffect.labels": (entry)=>new Date(entry.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    })
            }["MoodChart.useEffect.labels"]);
            const dataPoints = recentEntries.map({
                "MoodChart.useEffect.dataPoints": (entry)=>entry.sentiment === 'POSITIVE' ? 1 : entry.sentiment === 'NEGATIVE' ? -1 : 0
            }["MoodChart.useEffect.dataPoints"]);
            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Mood Trend',
                        data: dataPoints,
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.5)',
                        tension: 0.1
                    }
                ]
            });
        }
    }["MoodChart.useEffect"], []);
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Your Mood Over the Last 7 Days'
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: (val)=>val === 1 ? 'Positive' : val === -1 ? 'Negative' : val === 0 ? 'Neutral' : null
                },
                min: -1.5,
                max: 1.5
            }
        }
    };
    if (!hasEnoughData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-2xl shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-4 bg-slate-100 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "Journal for a few more days to see your mood trend chart!"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 287,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            options: chartOptions,
            data: chartData
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/page.tsx",
            lineNumber: 292,
            columnNumber: 63
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 292,
        columnNumber: 11
    }, this);
}
_s3(MoodChart, "kxknEYTt1YR0/KmWsO+g9cvnnSs=");
_c3 = MoodChart;
// --- StreakTracker.tsx ---
function StreakTracker({ streak }) {
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
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-bold text-orange-500",
                children: streak
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_c4 = StreakTracker;
// --- Helper Components from page.tsx ---
const InsightCard = ({ analysis })=>{
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
                lineNumber: 310,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-700 mt-2",
                children: strategy.text
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = InsightCard;
const CorrelationCard = ({ analysis })=>{
    if (!analysis.activities || analysis.activities.length === 0) return null;
    let insightText = null;
    if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) insightText = "Great job on exercising! It seems to have a positive impact on your mood.";
    else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) insightText = "Connecting with others is powerful. It looks like it boosted your spirits today!";
    else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) insightText = "We noticed you logged 'Work' and are feeling fatigued. Remember to take regular breaks to recharge.";
    if (!insightText) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 bg-teal-50 border border-teal-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-teal-800 flex items-center",
                children: "📈 Correlation Insight"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-teal-700 mt-2",
                children: insightText
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = CorrelationCard;
const Tag = ({ label, type })=>{
    const colorClasses = {
        sentiment: {
            POSITIVE: 'bg-green-100 text-green-800',
            NEGATIVE: 'bg-rose-100 text-rose-800',
            NEUTRAL: 'bg-slate-100 text-slate-800'
        },
        label: {
            Anxiety: 'bg-violet-100 text-violet-800',
            Fatigue: 'bg-slate-100 text-slate-800',
            Sadness: 'bg-blue-100 text-blue-800',
            Work: 'bg-amber-100 text-amber-800',
            Family: 'bg-pink-100 text-pink-800',
            default: 'bg-indigo-100 text-indigo-800'
        },
        activity: 'bg-amber-100 text-amber-800 border border-amber-200'
    };
    let color;
    if (type === 'sentiment') color = colorClasses.sentiment[label] || colorClasses.label.default;
    else if (type === 'label') color = colorClasses.label[label] || colorClasses.label.default;
    else color = colorClasses.activity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 text-sm font-medium rounded-full ${color}`,
        children: [
            type === 'activity' && '🏃‍♂️ ',
            label
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 341,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = Tag;
const TabButton = ({ icon, label, isActive, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-full flex justify-center items-center space-x-2 px-3 py-2 rounded-md text-sm font-semibold transition-all ${isActive ? 'bg-white shadow-md text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 346,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 345,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = TabButton;
function HomePage() {
    _s4();
    const [journalText, setJournalText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBreathingExercise, setShowBreathingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('journal');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const today = getISODate(new Date());
            const yesterday = getISODate(new Date(Date.now() - 86400000));
            const streakData = JSON.parse(localStorage.getItem('aura-streak') || '{"streakCount": 0, "lastJournalDate": null}');
            if (streakData.lastJournalDate === today) setStreak(streakData.streakCount);
            else if (streakData.lastJournalDate === yesterday) setStreak(streakData.streakCount);
            else if (streakData.lastJournalDate !== null) {
                setStreak(0);
                localStorage.setItem('aura-streak', JSON.stringify({
                    streakCount: 0,
                    lastJournalDate: streakData.lastJournalDate
                }));
            } else setStreak(0);
        }
    }["HomePage.useEffect"], []);
    const handleActivityChange = (activity)=>{
        setSelectedActivities((prev)=>prev.includes(activity) ? prev.filter((a)=>a !== activity) : [
                ...prev,
                activity
            ]);
    };
    const handleAnalyze = async ()=>{
        if (!journalText.trim()) {
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
            const history = JSON.parse(localStorage.getItem('aura-history') || '[]');
            const newEntry = {
                date: new Date().toISOString(),
                sentiment: response.data.sentiment,
                labels: response.data.labels,
                activities: response.data.activities
            };
            history.push(newEntry);
            localStorage.setItem('aura-history', JSON.stringify(history));
            const today = getISODate(new Date());
            const yesterday = getISODate(new Date(Date.now() - 86400000));
            const streakData = JSON.parse(localStorage.getItem('aura-streak') || '{"streakCount": 0, "lastJournalDate": null}');
            let newStreakCount = streakData.streakCount;
            if (streakData.lastJournalDate === today) {} else if (streakData.lastJournalDate === yesterday) newStreakCount += 1;
            else newStreakCount = 1;
            localStorage.setItem('aura-streak', JSON.stringify({
                streakCount: newStreakCount,
                lastJournalDate: today
            }));
            setStreak(newStreakCount);
        } catch (err) {
            console.error(err);
            setError('Sorry, we couldn\'t analyze your entry. The server might be busy. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBreathingExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BreathingExercise, {
                onClose: ()=>setShowBreathingExercise(false)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 414,
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
                                    children: "Aura Journal"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StreakTracker, {
                                    streak: streak
                                }, streak, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 416,
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
                                        lineNumber: 424,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Journal",
                                    isActive: view === 'journal',
                                    onClick: ()=>setView('journal')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Dashboard",
                                    isActive: view === 'dashboard',
                                    onClick: ()=>setView('dashboard')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-2xl p-4",
                        children: [
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
                                                className: "w-full h-40 p-3 border-slate-200 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200",
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 432,
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
                                                        lineNumber: 440,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: ALL_ACTIVITIES.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleActivityChange(activity),
                                                                className: `px-3 py-1.5 text-sm font-medium rounded-full border transition-all ${selectedActivities.includes(activity) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`,
                                                                children: activity
                                                            }, activity, false, {
                                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAnalyze,
                                                disabled: isLoading,
                                                className: "w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-md hover:shadow-lg",
                                                children: isLoading ? 'Analyzing...' : 'Analyze My Feelings'
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-500 text-center mt-4",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 453,
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
                                                lineNumber: 456,
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
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this),
                                                    analysis.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: label,
                                                            type: "label"
                                                        }, label, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 51
                                                        }, this)),
                                                    analysis.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: activity,
                                                            type: "activity"
                                                        }, activity, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 58
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this),
                                            analysis.labels.includes("Anxiety") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowBreathingExercise(true),
                                                className: "w-full mt-4 bg-violet-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-violet-700 transition-colors",
                                                children: "Try a Guided Breathing Exercise"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            view === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodChart, {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalTracker, {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklySummary, {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(HomePage, "0yw2b5bORfvD5RhM8l5Q83Ewhgw=");
_c9 = HomePage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "BreathingExercise");
__turbopack_context__.k.register(_c1, "GoalTracker");
__turbopack_context__.k.register(_c2, "WeeklySummary");
__turbopack_context__.k.register(_c3, "MoodChart");
__turbopack_context__.k.register(_c4, "StreakTracker");
__turbopack_context__.k.register(_c5, "InsightCard");
__turbopack_context__.k.register(_c6, "CorrelationCard");
__turbopack_context__.k.register(_c7, "Tag");
__turbopack_context__.k.register(_c8, "TabButton");
__turbopack_context__.k.register(_c9, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=aura-frontend_app_page_tsx_0fd940ef._.js.map