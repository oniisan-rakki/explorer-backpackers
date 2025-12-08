module.exports = [
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
"[project]/explorerbackpackers/app/book/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/PageTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$bookingRoomData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/bookingRoomData.ts [app-ssr] (ecmascript)");
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
function BookingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialDates"])().checkIn);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        room: 'All',
        guests: '1',
        checkIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialDates"])().checkIn,
        checkOut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialDates"])().checkOut,
        promoCode: ''
    });
    const [availability, setAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRate, setSelectedRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getCheckOutMin = ()=>{
        const checkInDate = new Date(search.checkIn);
        checkInDate.setDate(checkInDate.getDate() + 1);
        return checkInDate.toISOString().split('T')[0];
    };
    const handleSearchChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'checkIn') {
            const newCheckInDate = new Date(value);
            const currentCheckOutDate = new Date(search.checkOut);
            if (newCheckInDate >= currentCheckOutDate) {
                const newCheckOutDate = new Date(newCheckInDate);
                newCheckOutDate.setDate(newCheckOutDate.getDate() + 1);
                setSearch((prev)=>({
                        ...prev,
                        checkIn: value,
                        checkOut: newCheckOutDate.toISOString().split('T')[0]
                    }));
            } else {
                setSearch((prev)=>({
                        ...prev,
                        [name]: value
                    }));
            }
        } else {
            setSearch((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleSearchSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setAvailability(null);
        setSelectedRate(null);
        const date1 = new Date(search.checkIn);
        const date2 = new Date(search.checkOut);
        if (date2 <= date1) {
            setError("Check-out date must be after check-in date.");
            setIsLoading(false);
            return;
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkRoomAvailability"])(search.checkIn, search.checkOut, search.guests, search.promoCode);
            const availabilityMap = {};
            if (Array.isArray(data)) {
                data.forEach((room)=>{
                    availabilityMap[room.roomTypeID.toString()] = {
                        rate: room.roomRate,
                        available: room.roomsAvailable,
                        name: room.roomTypeName
                    };
                });
            }
            setAvailability(availabilityMap);
        } catch (err) {
            setError('Failed to fetch room availability. Please try again.');
            console.error(err);
        }
        setIsLoading(false);
    };
    const handleRateSelect = (rateData)=>{
        setSelectedRate(rateData);
    };
    const handleCheckout = ()=>{
        if (selectedRate) {
            // Convert the selectedRate object to URL query parameters
            const params = new URLSearchParams();
            Object.entries(selectedRate).forEach(([key, value])=>{
                if (value !== undefined && value !== null) {
                    params.append(key, String(value));
                }
            });
            router.push(`/checkout?${params.toString()}`);
        }
    };
    // --- Helper Components (Kept inside to access state/handlers) ---
    const RoomRateOptions = ({ room, availability, searchParams })=>{
        const availabilityInfo = availability ? availability[room.roomTypeId] : null;
        const guests = parseInt(searchParams.guests, 10);
        const date1 = new Date(searchParams.checkIn);
        const date2 = new Date(searchParams.checkOut);
        if (date2 <= date1) {
            return null;
        }
        const differenceInTime = date2.getTime() - date1.getTime();
        const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
        if (!availabilityInfo || availabilityInfo.available < 1) {
            if (availability) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 p-4",
                    children: "Sorry, this room is not available for these dates."
                }, void 0, false, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 160,
                    columnNumber: 16
                }, this);
            }
            return null;
        }
        const totalBasePrice = availabilityInfo.rate;
        const rates = [];
        let bestAvailableRate;
        if (differenceInDays >= 14) {
            bestAvailableRate = {
                id: '2week',
                label: 'Long Stay (2 Weeks+)',
                price: totalBasePrice * 0.70,
                discount: '30% Off - 2 Week+ Stay'
            };
        } else if (differenceInDays >= 7) {
            bestAvailableRate = {
                id: '1week',
                label: 'Long Stay (1 Week+)',
                price: totalBasePrice * 0.75,
                discount: '25% Off - 1 Week+ Stay'
            };
        } else if (differenceInDays >= 4) {
            bestAvailableRate = {
                id: '4day',
                label: 'Long Stay (4 Nights+)',
                price: totalBasePrice * 0.80,
                discount: '20% Off - 4+ Night Stay'
            };
        } else {
            bestAvailableRate = {
                id: 'website',
                label: 'Website Booking Discount',
                price: totalBasePrice * 0.85,
                discount: '15% Off - Automatic Website Deal'
            };
        }
        bestAvailableRate.originalPrice = totalBasePrice;
        rates.push(bestAvailableRate);
        rates.push({
            id: 'student',
            label: 'Student Rate (10% Off)',
            price: totalBasePrice * 0.90,
            originalPrice: totalBasePrice,
            discount: '10% Off - Student'
        });
        rates.push({
            id: 'elderly',
            label: 'Elderly Rate (15% Off)',
            price: totalBasePrice * 0.85,
            originalPrice: totalBasePrice,
            discount: '15% Off - Elderly (60+)'
        });
        const RateRadioOption = ({ rate })=>{
            const rateData = {
                roomTypeId: room.roomTypeId,
                roomName: room.name,
                guests: guests,
                checkIn: searchParams.checkIn,
                checkOut: searchParams.checkOut,
                totalCost: rate.price.toFixed(2),
                discount: rate.discount,
                nights: differenceInDays
            };
            const isSelected = selectedRate && selectedRate.roomTypeId === room.roomTypeId && selectedRate.discount === rate.discount;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-2 rounded-lg mb-2 p-4 transition-all cursor-pointer ${isSelected ? 'border-green-600 bg-green-50 shadow-md' : 'border-gray-200 hover:bg-gray-50'}`,
                onClick: ()=>handleRateSelect(rateData),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "radio",
                            name: `rate_${room.id}`,
                            checked: isSelected,
                            readOnly: true,
                            className: "h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-3 text-gray-800 text-sm md:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        rate.label,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                " ",
                                guests,
                                " Guest(s) | ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        "Total: R",
                                        rate.price.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 56
                                }, this),
                                rate.originalPrice && rate.price < rate.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 line-through ml-2 text-xs md:text-sm",
                                    children: [
                                        "R",
                                        rate.originalPrice.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-b-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-gray-700 mb-2",
                    children: [
                        "Select a rate for ",
                        differenceInDays,
                        " night(s):"
                    ]
                }, void 0, true, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                rates.map((rate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RateRadioOption, {
                        rate: rate
                    }, rate.id, false, {
                        fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                        lineNumber: 261,
                        columnNumber: 28
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, this);
    };
    const RoomBookingCard = ({ room, availability, searchParams })=>{
        const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
        const nextImage = ()=>setCurrentImage((i)=>i === room.images.length - 1 ? 0 : i + 1);
        const prevImage = ()=>setCurrentImage((i)=>i === 0 ? room.images.length - 1 : i - 1);
        const showRoom = search.room === 'All' || search.room === room.name;
        if (!showRoom) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: room.id,
            className: "bg-white rounded-lg shadow-lg overflow-hidden mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: room.images[currentImage],
                                    alt: room.name,
                                    className: "w-full h-[30vh] md:h-[40vh] object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevImage,
                                    className: "absolute left-2 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/50 disabled:opacity-20 hover:bg-green-600",
                                    children: "❮"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextImage,
                                    className: "absolute right-2 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/50 disabled:opacity-20 hover:bg-green-600",
                                    children: "❯"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-extrabold text-black mb-4",
                                    children: room.name
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-black leading-relaxed",
                                    children: room.description
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                availability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomRateOptions, {
                    room: room,
                    availability: availability,
                    searchParams: searchParams
                }, void 0, false, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 288,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this);
    };
    // --- Main Render ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Book Your Stay"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-md py-4 px-5 sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center text-gray-700 hover:text-green-600 inline-flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].iconBack,
                                            alt: "Back",
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        " Back"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].logo,
                                    alt: "Logo",
                                    className: "h-12 md:h-15"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearchSubmit,
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-gray-100 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Room"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "room",
                                            value: search.room,
                                            onChange: handleSearchChange,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white h-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "All",
                                                    children: "All Rooms"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Female Six Bed Dorm",
                                                    children: "Female Six Bed Dorm"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Female Four Bed Dorm",
                                                    children: "Female Four Bed Dorm"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Mixed Eight Bed Dorm",
                                                    children: "Mixed Eight Bed Dorm"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Mixed Eight Bed Dorm (Cottage)",
                                                    children: "Mixed Eight Bed Dorm (Cottage)"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Private Queen Room",
                                                    children: "Private Queen Room"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Guests"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "guests",
                                            value: search.guests,
                                            onChange: handleSearchChange,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white h-12",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: n,
                                                    children: [
                                                        n,
                                                        " Guest",
                                                        n > 1 ? 's' : ''
                                                    ]
                                                }, n, true, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Check-in"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "checkIn",
                                            type: "date",
                                            value: search.checkIn,
                                            onChange: handleSearchChange,
                                            min: today,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Check-out"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "checkOut",
                                            type: "date",
                                            value: search.checkOut,
                                            onChange: handleSearchChange,
                                            min: getCheckOutMin(),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col col-span-2 md:col-span-3 lg:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-transparent mb-1 select-none",
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "w-full h-12 flex items-center justify-center text-sm font-semibold",
                                            children: isLoading ? 'Checking...' : 'Show Availability'
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-center mt-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                            lineNumber: 376,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-gray-100 pb-32 lg:pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto py-8 px-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-9",
                                children: [
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow",
                                        children: "Loading available rooms..."
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this),
                                    !isLoading && !availability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow",
                                        children: "Please select your dates to check availability."
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this),
                                    !isLoading && availability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$bookingRoomData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bookingRoomData"].map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomBookingCard, {
                                                    room: room,
                                                    availability: availability,
                                                    searchParams: search
                                                }, room.id, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this)),
                                            Object.keys(availability).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow",
                                                children: "No rooms are available for the selected dates. Please try different dates."
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden lg:block lg:col-span-3 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-[240px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-gray-800 mb-6",
                                            children: "Your Reservation"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this),
                                        selectedRate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                    label: "Room Selection",
                                                    name: "roomName",
                                                    value: selectedRate.roomName,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                            label: "Guests",
                                                            name: "guests",
                                                            value: selectedRate.guests,
                                                            readOnly: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                            label: "Nights",
                                                            name: "nights",
                                                            value: selectedRate.nights,
                                                            readOnly: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                            label: "Arrival",
                                                            name: "checkIn",
                                                            value: selectedRate.checkIn,
                                                            readOnly: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                            label: "Departure",
                                                            name: "checkOut",
                                                            value: selectedRate.checkOut,
                                                            readOnly: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                    label: "Discount",
                                                    name: "discount",
                                                    value: selectedRate.discount,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormInput"], {
                                                    label: "Total",
                                                    name: "totalCost",
                                                    value: `R${selectedRate.totalCost}`,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handleCheckout,
                                                    className: "w-full text-sm bg-black",
                                                    children: "Checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: "Please select a room and rate to continue."
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            selectedRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-[60] border-t border-gray-200 animate-in slide-in-from-bottom duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        selectedRate.nights,
                                                        " Night(s) | ",
                                                        selectedRate.guests,
                                                        " Guest(s)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-800 text-lg",
                                                    children: selectedRate.roomName
                                                }, void 0, false, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-green-600",
                                                    children: [
                                                        "R",
                                                        selectedRate.totalCost
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleCheckout,
                                            className: "px-6 py-2 text-sm bg-black",
                                            children: "Checkout"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/book/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=explorerbackpackers_app_3665aee0._.js.map