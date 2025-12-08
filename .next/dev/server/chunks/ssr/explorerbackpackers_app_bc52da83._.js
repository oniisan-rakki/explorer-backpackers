module.exports = [
"[project]/explorerbackpackers/app/components/PageTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTitle",
    ()=>PageTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const PageTitle = ({ title })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.title = `${title} - Explorer Backpackers`;
    }, [
        title
    ]);
    return null;
};
}),
"[project]/explorerbackpackers/app/components/FormInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormInput",
    ()=>FormInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const FormInput = ({ label, name, type = 'text', placeholder, value, onChange, required = false, min, max, readOnly = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/FormInput.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                id: name,
                name: name,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                required: required,
                min: min,
                max: max,
                readOnly: readOnly,
                className: `w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${readOnly ? 'bg-gray-100' : ''}`
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/FormInput.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/explorerbackpackers/app/components/FormInput.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/explorerbackpackers/app/components/FormTextarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormTextarea",
    ()=>FormTextarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const FormTextarea = ({ label, name, placeholder, value, onChange, required = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/FormTextarea.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: name,
                name: name,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                required: required,
                rows: 4,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/FormTextarea.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/explorerbackpackers/app/components/FormTextarea.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/explorerbackpackers/app/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/lib/firebase.ts
__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/analytics/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyCaGimFzi3ElDtBuxbnvmhHBWY9LkafkgU",
    authDomain: "explorer-backpackers.firebaseapp.com",
    projectId: "explorer-backpackers",
    storageBucket: "explorer-backpackers.firebasestorage.app",
    messagingSenderId: "703947792476",
    appId: "1:703947792476:web:7a4598584407d8cda10699",
    measurementId: "G-1TSD2VT45C"
};
// 1. Initialize Firebase
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
// 2. Initialize Firestore
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// 3. Initialize Analytics (Browser only)
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
;
}),
"[project]/explorerbackpackers/app/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkRoomAvailability",
    ()=>checkRoomAvailability,
    "processYocoPayment",
    ()=>processYocoPayment,
    "processYocoTourPayment",
    ()=>processYocoTourPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
// UPDATE THIS PATH: Point to wherever you initialized your firebase app
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
const checkRoomAvailability = async (startDate, endDate, adults, promoCode)=>{
    const firebaseFunctionUrl = `https://us-central1-explorer-backpackers.cloudfunctions.net/checkRoomAvailability`;
    const params = new URLSearchParams({
        startDate: startDate,
        endDate: endDate,
        adults: adults.toString(),
        promoCode: promoCode || ''
    });
    try {
        const response = await fetch(`${firebaseFunctionUrl}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Error checking availability');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching room availability:", error);
        throw error;
    }
};
// --- UNIFIED PAYMENT FUNCTION ---
// We use one function to call the backend, but separate helper wrappers below.
async function initiateCheckout(amount, bookingId, bookingType) {
    // 1. URL to your new Cloud Function
    const url = `https://us-central1-explorer-backpackers.cloudfunctions.net/processYocoPayment`;
    try {
        // 2. Send the ID and Amount to Yoco
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount,
                bookingId: bookingId,
                bookingType: bookingType,
                currency: 'ZAR'
            })
        });
        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Checkout Error: ${err}`);
        }
        // 3. Return the Yoco Redirect URL
        const data = await response.json();
        return data; // This object usually contains { redirectUrl: "..." }
    } catch (error) {
        console.error('Error initiating checkout:', error);
        throw error;
    }
}
async function processYocoPayment(bookingDetails) {
    try {
        // A. Create the "Pending" Booking in Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "accommodation_bookings"), {
            ...bookingDetails,
            status: "Pending Payment",
            createdAt: new Date()
        });
        // B. Initiate Payment with the new ID
        return await initiateCheckout(bookingDetails.totalCost, docRef.id, 'accommodation');
    } catch (error) {
        console.error("Accommodation Booking Failed:", error);
        throw error;
    }
}
async function processYocoTourPayment(tourBookingDetails) {
    try {
        // A. Create the "Pending" Booking in Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "tours_bookings"), {
            ...tourBookingDetails,
            status: "Pending Payment",
            createdAt: new Date()
        });
        // B. Initiate Payment with the new ID
        return await initiateCheckout(tourBookingDetails.totalCost, docRef.id, 'tour');
    } catch (error) {
        console.error("Tour Booking Failed:", error);
        throw error;
    }
}
}),
"[project]/explorerbackpackers/app/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allExperiences",
    ()=>allExperiences,
    "calculateTourPrice",
    ()=>calculateTourPrice,
    "getHeroImageForCategory",
    ()=>getHeroImageForCategory,
    "getInitialDates",
    ()=>getInitialDates,
    "getTourById",
    ()=>getTourById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pilanesbergNationalParkData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/johannesburgData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/sowetoData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pretoriaData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/capeTownData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/gardenRouteData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/krugerNationalParkData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/citySightseeingData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/transferData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-ssr] (ecmascript)");
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
const allExperiences = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pilanesbergNationalParkData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["johannesburgData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sowetoData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pretoriaData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capeTownData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gardenRouteData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["krugerNationalParkData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["citySightseeingData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transferData"]
];
const getTourById = (id)=>{
    return allExperiences.find((tour)=>tour.id === id);
};
const getInitialDates = ()=>{
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatDate = (date)=>date.toISOString().split('T')[0];
    return {
        checkIn: formatDate(today),
        checkOut: formatDate(tomorrow)
    };
};
const calculateTourPrice = (tour, guestCount, selectedTier)=>{
    if (!tour || guestCount <= 0) {
        return 0;
    }
    // 1. Check if a specific Tier (e.g. Single vs Sharing) is selected
    if (selectedTier) {
        return selectedTier.price * guestCount;
    }
    // 2. Check for Volume/Count based tiers (e.g. 1 pax = R1000, 2 pax = R800)
    if (tour.pricingTiers && tour.pricingTiers.length > 0 && !tour.pricingTiers[0].type) {
        const matchingTier = tour.pricingTiers.find((tier)=>guestCount >= (tier.minGuests || tier.count) && guestCount <= (tier.maxGuests || tier.count));
        // If per-vehicle pricing
        if (tour.priceType === 'per-vehicle') {
            return matchingTier ? matchingTier.price : tour.basePrice;
        }
        // If per-person pricing with volume discounts
        if (matchingTier) {
            return matchingTier.price * guestCount;
        }
    }
    // 3. Default Base Price calculation
    if (tour.priceType === 'per-vehicle') {
        return tour.basePrice;
    }
    return tour.basePrice * guestCount;
};
const getHeroImageForCategory = (category)=>{
    switch(category){
        case 'Cape Town':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroCapeTown; // Replace with specific Cape Town image if available
        case 'Pilanesberg':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroPilanesberg; // Replace with Pilanesberg image
        case 'Kruger National Park':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroKruger;
        case 'Garden Route':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroGardenRoute; // Replace with Garden Route image
        case 'Johannesburg':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroJohannesburg;
        case 'Soweto':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroSoweto;
        case 'Pretoria':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroPretoria;
        case 'Restaurants':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroRestaurants; // Use a food image
        case 'Nightlife':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroNightlife; // Use a party image
        case 'Transfers':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroTransfers;
        case 'African Markets':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroAfricanMarkets;
        case 'Local Sights':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroLocalSights;
        case 'Malls':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroMalls;
        case 'CoWorking':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroCoWorking;
        case 'Art Galleries':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroArtGalleries;
        case 'Cafes':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroCafes;
        case 'Markets':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroMarkets;
        case 'Barber':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroBarbers;
        case 'Spa':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroSpa;
        case 'City Sightseeing':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroCitySightSeeing;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].heroExperiences;
    }
};
}),
"[project]/explorerbackpackers/app/book-tour/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourBookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/PageTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormTextarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/FormTextarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
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
;
function TourBookingContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pickupInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- 1. Reconstruct Booking Data from URL ---
    const tourId = searchParams.get('tourId');
    const tour = tourId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTourById"])(tourId) : null;
    const bookingData = tour ? {
        tour: tour,
        date: searchParams.get('date') || '',
        guests: parseInt(searchParams.get('guests') || '1', 10),
        totalPrice: parseFloat(searchParams.get('totalPrice') || '0'),
        selectedTier: searchParams.get('tier') ? {
            type: searchParams.get('tier')
        } : undefined
    } : null;
    // --- 2. State & Logic ---
    const [guestDetails, setGuestDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        'First Name': '',
        'Last Name': '',
        'Email': '',
        'Phone': '',
        'Special Request': '',
        'Pickup Address': ''
    });
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Extract tour data safely
    const tourAny = bookingData?.tour;
    const hasPickup = tourAny?.hotelPickupAvailable || tourAny?.localHotelPickup || tourAny?.isHotelPickupAvailable;
    // --- Logic to determine Departure Point if no pickup ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tourAny && !hasPickup) {
            let point = "Central Meeting Point";
            // Try to find departure info in itinerary
            if (tourAny.itinerary && tourAny.itinerary.length > 0) {
                const firstStop = tourAny.itinerary[0];
                if (firstStop.title && (firstStop.title.includes("Depart") || firstStop.title.includes("Start"))) {
                    point = firstStop.description ? firstStop.description.split('.')[0] : firstStop.title;
                } else if (firstStop.description) {
                    point = firstStop.title;
                }
            }
            // Override if explicit additional info exists about departure
            if (tourAny.additionalInfo) {
                const departureInfo = tourAny.additionalInfo.find((info)=>info.includes("starts from") || info.includes("Depart") || info.includes("Meeting point"));
                if (departureInfo) point = departureInfo;
            }
            // Set the address field immediately
            setGuestDetails((prev)=>({
                    ...prev,
                    'Pickup Address': point
                }));
        }
    }, [
        tourAny,
        hasPickup
    ]);
    // Effect to handle navigation protection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tourId || !bookingData) {
            router.push('/experiences');
        }
    }, [
        tourId,
        bookingData,
        router
    ]);
    // Load Google Maps Script & Init Autocomplete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasPickup) return;
        const scriptId = 'google-maps-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            // REPLACE YOUR_GOOGLE_MAPS_API_KEY WITH YOUR ACTUAL API KEY
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = ()=>{
                initAutocomplete();
            };
        } else if (window.google && window.google.maps) {
            initAutocomplete();
        }
    }, [
        bookingData,
        hasPickup
    ]);
    const initAutocomplete = ()=>{
        if (pickupInputRef.current && window.google) {
            const autocomplete = new window.google.maps.places.Autocomplete(pickupInputRef.current, {
                types: [
                    'establishment',
                    'geocode'
                ]
            });
            autocomplete.addListener('place_changed', ()=>{
                const place = autocomplete.getPlace();
                const address = place.formatted_address || place.name || '';
                setGuestDetails((prev)=>({
                        ...prev,
                        'Pickup Address': address
                    }));
            });
        }
    };
    if (!bookingData) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-20 text-center",
        children: "Loading booking details..."
    }, void 0, false, {
        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
        lineNumber: 123,
        columnNumber: 28
    }, this);
    const { date, guests, totalPrice } = bookingData;
    const handleChange = (e)=>{
        setGuestDetails({
            ...guestDetails,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsProcessing(true);
        setResult('');
        // Check unavailable days
        const unavailableDays = tourAny.unavailableDays || [];
        const selectedDate = new Date(date);
        const dayOfWeek = selectedDate.getDay();
        const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        if (unavailableDays.includes(dayOfWeek)) {
            setResult(`This tour is not available on ${dayNames[dayOfWeek]}s. Please go back and select a different date.`);
            setIsProcessing(false);
            return;
        }
        if (hasPickup && !guestDetails['Pickup Address'].trim()) {
            setResult(`Please provide a pickup address in ${tourAny.pickupProvinceRestriction || 'the tour region'}.`);
            setIsProcessing(false);
            return;
        }
        const fullTourBookingDetails = {
            totalCost: totalPrice,
            firstName: guestDetails['First Name'],
            lastName: guestDetails['Last Name'],
            email: guestDetails['Email'],
            phone: guestDetails['Phone'],
            tourName: tourAny.title,
            tourDate: date,
            guests: guests,
            note: `${hasPickup ? 'Pickup' : 'Departure Point'}: ${guestDetails['Pickup Address']} | Note: ${guestDetails['Special Request']}`
        };
        try {
            const yocoUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processYocoTourPayment"])(fullTourBookingDetails);
            if (yocoUrl) {
                window.location.href = yocoUrl;
            } else {
                throw new Error("Did not receive a Yoco URL.");
            }
        } catch (error) {
            console.error(error);
            setResult('An error occurred. Please try again.');
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Book Tour"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-md py-4 px-4 sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/tours/details/${tourAny.id}`,
                                className: "flex items-center text-gray-700 hover:text-green-600 inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].iconBack,
                                        alt: "Back",
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    " Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].logo,
                                alt: "Logo",
                                className: "h-16"
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16"
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-gray-100 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-2xl px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 md:p-8 rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-800 text-center mb-6",
                                children: "Complete Your Booking"
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-6 rounded-lg shadow-inner mb-8 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                        label: "Tour",
                                        name: "Tour Name",
                                        value: tourAny.title,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Date",
                                                name: "Tour Date",
                                                value: date,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Guests",
                                                name: "Guests",
                                                value: guests,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Total Price",
                                                name: "Total Price",
                                                value: `R ${totalPrice.toFixed(2)}`,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold text-gray-800 mb-4",
                                children: "Guest Details"
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "First Name",
                                                name: "First Name",
                                                placeholder: "e.g. Kat",
                                                value: guestDetails['First Name'],
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Last Name",
                                                name: "Last Name",
                                                placeholder: "e.g. Jones",
                                                value: guestDetails['Last Name'],
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Email",
                                                name: "Email",
                                                type: "email",
                                                placeholder: "e.g. example@email.com",
                                                value: guestDetails['Email'],
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                label: "Phone",
                                                name: "Phone",
                                                type: "tel",
                                                placeholder: "e.g. +27 71 137 0207",
                                                value: guestDetails['Phone'],
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-md border ${hasPickup ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `font-semibold mb-2 ${hasPickup ? 'text-blue-800' : 'text-gray-800'}`,
                                                children: hasPickup ? 'Hotel Pickup Required' : 'Departure Point'
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs mb-3 ${hasPickup ? 'text-blue-600' : 'text-gray-600'}`,
                                                children: hasPickup ? `This tour includes pickup from ${tourAny.pickupProvinceRestriction || 'selected local areas'}. Please start typing your hotel name or address.` : `This tour does not include hotel pickup. Please make your way to the following location:`
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "Pickup Address",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: hasPickup ? 'Pickup Address / Hotel Name' : 'Meeting Point'
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "Pickup Address",
                                                        name: "Pickup Address",
                                                        ref: hasPickup ? pickupInputRef : null,
                                                        placeholder: hasPickup ? "e.g. Radisson Blu, Sandton, Johannesburg" : "",
                                                        value: guestDetails['Pickup Address'],
                                                        onChange: handleChange,
                                                        required: true,
                                                        readOnly: !hasPickup,
                                                        className: `w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12 ${!hasPickup ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-white'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormTextarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormTextarea"], {
                                        label: "Message or Special Request",
                                        name: "Special Request",
                                        placeholder: "Dietary requirements, flight details, etc.",
                                        value: guestDetails['Special Request'],
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 !mt-6",
                                        children: "By clicking 'Pay Now', you will be redirected to Yoco to complete your payment."
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isProcessing,
                                        className: "w-full text-lg !mt-8",
                                        children: isProcessing ? 'Processing...' : `Pay Now R ${totalPrice.toFixed(2)}`
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-center text-red-500",
                                        children: result
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function TourBookingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-20 text-center",
            children: "Loading tour booking..."
        }, void 0, false, {
            fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
            lineNumber: 274,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TourBookingContent, {}, void 0, false, {
            fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/explorerbackpackers/app/book-tour/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=explorerbackpackers_app_bc52da83._.js.map