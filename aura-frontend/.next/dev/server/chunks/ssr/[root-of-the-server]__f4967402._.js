module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/aura-frontend/app/strategyEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/aura-frontend/app/BreathingExercise.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreathingExercise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    // --- State Variables ---
    // cycleIndex tracks which phase we're in (e.g., 0 = Inhale, 1 = Hold, 2 = Exhale)
    const [cycleIndex, setCycleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1); // Start at -1 for "Get Ready"
    // instruction holds the text to display (e.g., "Inhale")
    const [instruction, setInstruction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Get Ready");
    // countdown holds the number of seconds remaining for the current phase
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3); // Start with a 3-second "Get Ready" timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This interval runs every 1 second to update the countdown
        const interval = setInterval(()=>{
            setCountdown((c)=>c - 1); // Decrement the countdown by 1
        }, 1000);
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
        return ()=>clearInterval(interval);
    }, [
        countdown,
        cycleIndex,
        onClose
    ]); // This effect re-runs every time the countdown or cycle changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center z-50 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-64 rounded-full border-4 border-white flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-4xl font-bold",
                                children: instruction
                            }, void 0, false, {
                                fileName: "[project]/aura-frontend/app/BreathingExercise.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/aura-frontend/app/GoalTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // On first load, get habits from localStorage or use initial state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedHabits = localStorage.getItem('aura-habits');
        if (savedHabits) {
            setHabits(JSON.parse(savedHabits));
        } else {
            setHabits(initialHabits);
        }
    }, []);
    // Whenever habits change, save them to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (habits.length > 0) {
            localStorage.setItem('aura-habits', JSON.stringify(habits));
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "This Week's Goals"
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/GoalTracker.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-2.5 mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/aura-frontend/app/WeeklySummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeeklySummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WeeklySummary() {
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const calculateSummary = ()=>{
        const history = JSON.parse(localStorage.getItem('aura-history') || '[]');
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        // 1. Filter entries for the last 7 days
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
        // 2. Calculate statistics
        const moodCounts = {
            POSITIVE: 0,
            NEGATIVE: 0,
            NEUTRAL: 0
        };
        const labelCounts = {};
        const activityOnPositiveDays = {};
        recentEntries.forEach((entry)=>{
            // Count moods
            if (moodCounts[entry.sentiment] !== undefined) {
                moodCounts[entry.sentiment]++;
            }
            // Count labels/emotions
            entry.labels.forEach((label)=>{
                labelCounts[label] = (labelCounts[label] || 0) + 1;
            });
            // Count activities on positive days
            if (entry.sentiment === 'POSITIVE') {
                entry.activities.forEach((activity)=>{
                    activityOnPositiveDays[activity] = (activityOnPositiveDays[activity] || 0) + 1;
                });
            }
        });
        // Find the most frequent label and activity
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
            NEGATIVE: 'bg-red-500',
            NEUTRAL: 'bg-gray-500'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between font-semibold text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: mood
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-200 rounded-full h-2.5 mt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${colors[mood]} h-2.5 rounded-full`,
                        style: {
                            width: `${percentage}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleShowSummary,
                    className: "bg-white px-6 py-3 rounded-lg shadow-md font-semibold text-gray-700 hover:bg-gray-100 transition-colors",
                    children: "Generate My Weekly Summary"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            showModal && summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-2xl p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center border-b pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Your Week in Review"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "text-2xl font-bold text-gray-500 hover:text-gray-800",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        summary.totalEntries > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: "Mood Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "POSITIVE",
                                                    count: summary.moods.POSITIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEGATIVE",
                                                    count: summary.moods.NEGATIVE,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoodStat, {
                                                    mood: "NEUTRAL",
                                                    count: summary.moods.NEUTRAL,
                                                    total: summary.totalEntries
                                                }, void 0, false, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Your most common feeling was:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-purple-700",
                                                            children: summary.topEmotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Activity most linked to positive days:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-orange-700",
                                                            children: summary.topActivity
                                                        }, void 0, false, {
                                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-50 p-3 rounded-lg border border-green-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Pro-Tip:"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                                lineNumber: 138,
                                                columnNumber: 49
                                            }, this),
                                            " To boost your mood next week, try focusing on activities like **",
                                            summary.topActivity,
                                            "**!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 py-8",
                            children: "Not enough data from the past week. Keep journaling to unlock your summary!"
                        }, void 0, false, {
                            fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/WeeklySummary.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/aura-frontend/app/MoodChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoodChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
// Register the components Chart.js needs
__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function MoodChart() {
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        datasets: []
    });
    const [hasEnoughData, setHasEnoughData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // We need to check for window to safely access localStorage
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const history = undefined;
        const sevenDaysAgo = undefined;
        const recentEntries = undefined;
        // Format data for the chart
        const labels = undefined;
        const dataPoints = undefined;
    }, []);
    if (!hasEnoughData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-8 bg-white p-6 rounded-lg shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-4 bg-gray-100 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Journal for a few more days to see your mood trend chart!"
                }, void 0, false, {
                    fileName: "[project]/aura-frontend/app/MoodChart.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/MoodChart.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/MoodChart.tsx",
            lineNumber: 79,
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
                text: 'Your Mood Over the Last 7 Days'
            }
        },
        scales: {
            y: {
                ticks: {
                    // This callback formats the Y-axis labels
                    callback: function(value) {
                        if (value === 1) return 'Positive';
                        if (value === -1) return 'Negative';
                        if (value === 0) return 'Neutral';
                        return null;
                    }
                },
                // Set explicit min/max to keep the labels consistent
                min: -1.5,
                max: 1.5
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-white p-6 rounded-lg shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
            options: chartOptions,
            data: chartData
        }, void 0, false, {
            fileName: "[project]/aura-frontend/app/MoodChart.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aura-frontend/app/MoodChart.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}),
"[project]/aura-frontend/app/StreakTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StreakTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function StreakTracker({ streak }) {
    // We use `key={streak}` in page.tsx to force a re-render with a small animation
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 animate-pop-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                role: "img",
                "aria-label": "Streak flame",
                children: "🔥"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/StreakTracker.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/aura-frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/aura-frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
// Import all the separate components
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$strategyEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/strategyEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$BreathingExercise$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/BreathingExercise.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$GoalTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/GoalTracker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$WeeklySummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/WeeklySummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$MoodChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/MoodChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$StreakTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aura-frontend/app/StreakTracker.tsx [app-ssr] (ecmascript)");
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
// --- Helper Functions ---
const getISODate = (date)=>{
    return date.toISOString().split('T')[0];
};
// ==================================================================
// 2. HELPER COMPONENTS (Small components that live in page.tsx)
// ==================================================================
const InsightCard = ({ analysis })=>{
    const strategy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$strategyEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalizedStrategy"])(analysis);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-indigo-800 flex items-center",
                children: [
                    strategy.emoji,
                    " ",
                    strategy.title
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-indigo-700 mt-2",
                children: strategy.text
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CorrelationCard = ({ analysis })=>{
    if (!analysis.activities || analysis.activities.length === 0) return null;
    let insightText = null;
    if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) insightText = "Great job on exercising! It seems to have a positive impact on your mood.";
    else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) insightText = "Connecting with others is powerful. It looks like it boosted your spirits today!";
    else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) insightText = "We noticed you logged 'Work' and are feeling fatigued. Remember to take regular breaks to recharge.";
    if (!insightText) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 bg-teal-50 border border-teal-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-teal-800 flex items-center",
                children: "📈 Correlation Insight"
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-teal-700 mt-2",
                children: insightText
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 text-sm font-medium rounded-full ${color}`,
        children: [
            type === 'activity' && '🏃‍♂️ ',
            label
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 76,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0));
};
const TabButton = ({ icon, label, isActive, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-full flex justify-center items-center space-x-2 px-3 py-2 rounded-md text-sm font-semibold transition-all ${isActive ? 'bg-white shadow-md text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 81,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/aura-frontend/app/page.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function HomePage() {
    const [journalText, setJournalText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBreathingExercise, setShowBreathingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('journal');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const today = undefined;
        const yesterday = undefined;
        const streakData = undefined;
    }, []);
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/analyze', {
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
            if (streakData.lastJournalDate === today) newStreakCount += 1;
            else if (streakData.lastJournalDate === yesterday) newStreakCount += 1;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBreathingExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$BreathingExercise$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowBreathingExercise(false)
            }, void 0, false, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 149,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen flex-col items-center bg-slate-50 font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full max-w-2xl px-4 pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-indigo-800",
                                    children: "Aura Journal"
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$StreakTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    streak: streak
                                }, streak, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "w-full max-w-2xl p-4 sticky top-0 z-10 bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center space-x-2 rounded-lg bg-slate-200 p-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Journal",
                                    isActive: view === 'journal',
                                    onClick: ()=>setView('journal')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 30
                                    }, void 0),
                                    label: "Dashboard",
                                    isActive: view === 'dashboard',
                                    onClick: ()=>setView('dashboard')
                                }, void 0, false, {
                                    fileName: "[project]/aura-frontend/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aura-frontend/app/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-2xl p-4",
                        children: [
                            view === 'journal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-2xl shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: journalText,
                                                onChange: (e)=>setJournalText(e.target.value),
                                                placeholder: "How are you feeling today?",
                                                className: "w-full h-40 p-3 border-slate-200 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200",
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-md font-semibold text-slate-700 mb-2",
                                                        children: "What did you do today?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: ALL_ACTIVITIES.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleActivityChange(activity),
                                                                className: `px-3 py-1.5 text-sm font-medium rounded-full border transition-all ${selectedActivities.includes(activity) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`,
                                                                children: activity
                                                            }, activity, false, {
                                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAnalyze,
                                                disabled: isLoading,
                                                className: "w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-md hover:shadow-lg",
                                                children: isLoading ? 'Analyzing...' : 'Analyze My Feelings'
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-500 text-center mt-4",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-2xl shadow-lg animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-slate-800 mb-4",
                                                children: "Your Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                        label: analysis.sentiment,
                                                        type: "sentiment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    analysis.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: label,
                                                            type: "label"
                                                        }, label, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 51
                                                        }, this)),
                                                    analysis.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            label: activity,
                                                            type: "activity"
                                                        }, activity, false, {
                                                            fileName: "[project]/aura-frontend/app/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 58
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationCard, {
                                                analysis: analysis
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            analysis.labels.includes("Anxiety") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowBreathingExercise(true),
                                                className: "w-full mt-4 bg-violet-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-violet-700 transition-colors",
                                                children: "Try a Guided Breathing Exercise"
                                            }, void 0, false, {
                                                fileName: "[project]/aura-frontend/app/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            view === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$MoodChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$GoalTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aura$2d$frontend$2f$app$2f$WeeklySummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/aura-frontend/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aura-frontend/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aura-frontend/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aura-frontend/app/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4967402._.js.map