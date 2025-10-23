(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/BreathingExercise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreathingExercise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function BreathingExercise({ onClose }) {
    _s();
    const [instruction, setInstruction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Get ready...");
    const [cycle, setCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreathingExercise.useEffect": ()=>{
            // A simple timer to cycle through breathing instructions
            const instructions = [
                "Inhale for 4s",
                "Hold for 7s",
                "Exhale for 8s"
            ];
            const durations = [
                4000,
                7000,
                8000
            ];
            if (cycle >= 12) {
                onClose();
                return;
            }
            setInstruction(instructions[cycle % 3]);
            const timer = setTimeout({
                "BreathingExercise.useEffect.timer": ()=>{
                    setCycle(cycle + 1);
                }
            }["BreathingExercise.useEffect.timer"], durations[cycle % 3]);
            return ({
                "BreathingExercise.useEffect": ()=>clearTimeout(timer)
            })["BreathingExercise.useEffect"];
        }
    }["BreathingExercise.useEffect"], [
        cycle,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center z-50 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-48 h-48 rounded-full border-4 border-white flex items-center justify-center transition-transform duration-1000",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-3xl font-bold",
                        children: instruction
                    }, void 0, false, {
                        fileName: "[project]/app/BreathingExercise.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/BreathingExercise.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/BreathingExercise.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 text-white text-2xl font-bold",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/app/BreathingExercise.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/BreathingExercise.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(BreathingExercise, "Aw8kLoho7jEE+cAwOSNcEZU9Rsk=");
_c = BreathingExercise;
var _c;
__turbopack_context__.k.register(_c, "BreathingExercise");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/GoalTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // On first load, get habits from localStorage or use initial state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "This Week's Goals"
                    }, void 0, false, {
                        fileName: "[project]/app/GoalTracker.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetProgress,
                        className: "text-sm text-blue-500 hover:underline",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/app/GoalTracker.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/GoalTracker.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            habit.emoji,
                                            " ",
                                            habit.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/GoalTracker.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            habit.progress,
                                            " / ",
                                            habit.target
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/GoalTracker.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/GoalTracker.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-2.5 mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-500 h-2.5 rounded-full",
                                    style: {
                                        width: `${habit.progress / habit.target * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/GoalTracker.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/GoalTracker.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleProgress(habit.id),
                                className: "mt-2 text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300",
                                children: "Log +1"
                            }, void 0, false, {
                                fileName: "[project]/app/GoalTracker.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, habit.id, true, {
                        fileName: "[project]/app/GoalTracker.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/GoalTracker.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/GoalTracker.tsx",
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$BreathingExercise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/BreathingExercise.tsx [app-client] (ecmascript)"); // Assumes BreathingExercise.tsx is in the same folder
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$GoalTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/GoalTracker.tsx [app-client] (ecmascript)"); // Assumes GoalTracker.tsx is in the same folder
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- Constants ---
const ALL_ACTIVITIES = [
    "Exercise",
    "Social",
    "Work",
    "Hobby",
    "Rest",
    "Nutrition"
];
// --- Helper Components ---
const InsightCard = ({ primaryEmotion })=>{
    let title = "Your Personalized Insight ✨";
    let text = "We've analyzed your entry. Reflect on the tags above to better understand your feelings.";
    let emoji = "🧠";
    switch(primaryEmotion){
        case 'Anxiety':
            title = "Feeling Anxious?";
            text = "When you feel overwhelmed, try the 4-7-8 breathing technique. Inhale for 4s, hold for 7s, and exhale for 8s. It can calm your nervous system.";
            emoji = "🌬️";
            break;
        case 'Fatigue':
            title = "Feeling Fatigued?";
            text = "Your energy seems low. Consider a short 10-minute walk outside. A little movement and fresh air can make a world of difference.";
            emoji = "🚶‍♀️";
            break;
        case 'Sadness':
            title = "Feeling Sad?";
            text = "It's okay to feel this way. Try writing down three small things you are grateful for today. This practice can gently shift your perspective.";
            emoji = "❤️";
            break;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-blue-800 flex items-center",
                children: [
                    emoji,
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-blue-700 mt-2",
                children: text
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InsightCard;
const CorrelationCard = ({ analysis })=>{
    if (!analysis.activities || analysis.activities.length === 0) {
        return null;
    }
    let insightText = null;
    if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) {
        insightText = "Great job on exercising! It seems to have a positive impact on your mood.";
    } else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) {
        insightText = "Connecting with others is powerful. It looks like it boosted your spirits today!";
    } else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) {
        insightText = "We noticed you logged 'Work' and are feeling fatigued. Remember to take regular breaks to recharge.";
    }
    if (!insightText) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 bg-green-50 border border-green-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-green-800 flex items-center",
                children: "📈 Correlation Insight"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-700 mt-2",
                children: insightText
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CorrelationCard;
const Tag = ({ label, type })=>{
    const colorClasses = {
        sentiment: {
            POSITIVE: 'bg-green-100 text-green-800',
            NEGATIVE: 'bg-red-100 text-red-800',
            NEUTRAL: 'bg-gray-100 text-gray-800'
        },
        label: {
            Anxiety: 'bg-purple-100 text-purple-800',
            Fatigue: 'bg-gray-100 text-gray-800',
            Sadness: 'bg-blue-100 text-blue-800',
            Work: 'bg-yellow-100 text-yellow-800',
            Family: 'bg-pink-100 text-pink-800',
            default: 'bg-indigo-100 text-indigo-800'
        },
        activity: 'bg-orange-100 text-orange-800 border border-orange-200'
    };
    let color;
    if (type === 'sentiment') {
        color = colorClasses.sentiment[label] || colorClasses.label.default;
    } else if (type === 'label') {
        color = colorClasses.label[label] || colorClasses.label.default;
    } else {
        color = colorClasses.activity;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 text-sm font-medium rounded-full ${color}`,
        children: [
            type === 'activity' && '🏃‍♂️ ',
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Tag;
function HomePage() {
    _s();
    const [journalText, setJournalText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBreathingExercise, setShowBreathingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/analyze', {
                text: journalText,
                activities: selectedActivities
            });
            if (response.data.error) {
                throw new Error(response.data.error);
            }
            setAnalysis(response.data);
            // --- NEW: Save analysis to localStorage for Weekly Summary ---
            const history = JSON.parse(localStorage.getItem('aura-history') || '[]');
            const newEntry = {
                date: new Date().toISOString(),
                sentiment: response.data.sentiment,
                labels: response.data.labels,
                activities: response.data.activities
            };
            history.push(newEntry);
            localStorage.setItem('aura-history', JSON.stringify(history));
        // --- End of new block ---
        } catch (err) {
            console.error(err);
            setError('Sorry, we couldn\'t analyze your entry. The server might be busy. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    const getPrimaryEmotion = ()=>{
        if (!analysis) return null;
        const emotions = [
            'Anxiety',
            'Fatigue',
            'Sadness'
        ];
        return analysis.labels.find((label)=>emotions.includes(label)) || null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBreathingExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$BreathingExercise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowBreathingExercise(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 176,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen flex-col items-center p-4 sm:p-8 bg-gray-50 font-sans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-5xl font-bold text-gray-800",
                                    children: "Aura Journal"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: "Your private space to reflect and understand your feelings."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: journalText,
                                    onChange: (e)=>setJournalText(e.target.value),
                                    placeholder: "How are you feeling today? Let it all out...",
                                    className: "w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-md font-semibold text-gray-700 mb-2",
                                            children: "What did you do today? (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: ALL_ACTIVITIES.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleActivityChange(activity),
                                                    className: `px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${selectedActivities.includes(activity) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`,
                                                    children: activity
                                                }, activity, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAnalyze,
                                    disabled: isLoading,
                                    className: "w-full mt-6 bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200",
                                    children: isLoading ? 'Analyzing...' : 'Analyze My Feelings'
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$GoalTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-center mt-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this),
                        analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 bg-white p-6 rounded-lg shadow-md animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800 mb-4",
                                    children: "Your Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            label: analysis.sentiment,
                                            type: "sentiment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        analysis.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                label: label,
                                                type: "label"
                                            }, label, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 47
                                            }, this)),
                                        analysis.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                label: activity,
                                                type: "activity"
                                            }, activity, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 54
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    primaryEmotion: getPrimaryEmotion()
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationCard, {
                                    analysis: analysis
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                analysis.labels.includes("Anxiety") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowBreathingExercise(true),
                                    className: "w-full mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors",
                                    children: "Try a Guided Breathing Exercise"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "DFm4sz8G7e2YUPEZT58KNmvHKeQ=");
_c3 = HomePage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "InsightCard");
__turbopack_context__.k.register(_c1, "CorrelationCard");
__turbopack_context__.k.register(_c2, "Tag");
__turbopack_context__.k.register(_c3, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_489f6d52._.js.map