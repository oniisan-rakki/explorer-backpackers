(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/explorerbackpackers/app/components/PageTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTitle",
    ()=>PageTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const PageTitle = ({ title })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTitle.useEffect": ()=>{
            document.title = `${title} - Explorer Backpackers`;
        }
    }["PageTitle.useEffect"], [
        title
    ]);
    return null;
};
_s(PageTitle, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PageTitle;
var _c;
__turbopack_context__.k.register(_c, "PageTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
const HeroSection = ({ title, subtitle, emphasis, buttonText, onButtonClick, bgImage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex flex-col items-center justify-center text-center text-white p-8 min-h-[60vh] md:min-h-[60vh] bg-cover bg-center bg-fixed mt-0.25",
        style: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-[10px] md:text-[14px] font-bold uppercase tracking-[3px] md:tracking-[5px] text-white",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/HeroSection.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-[7.5px] text-3xl md:text-[40px] font-black tracking-[2px] md:tracking-[5px] text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/HeroSection.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-[12.5px] text-sm md:text-[18px] font-bold uppercase tracking-[5px] md:tracking-[10px] text-white",
                children: emphasis
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/HeroSection.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            buttonText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onButtonClick,
                variant: "secondary",
                className: "mt-8 text-xs font-semibold",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/HeroSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/explorerbackpackers/app/components/HeroSection.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/data/accommodationPageData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accommodationPageData",
    ()=>accommodationPageData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-client] (ecmascript)");
;
const accommodationPageData = [
    {
        title: "Female Six Bed Dorm",
        details: "6 Adults | Shared Bathroom | From R360.00 a Night",
        description: "Experience Ultimate Comfort in our thoughtfully equipped room. Discover 6 extra-long single bunk beds, lockable storage lockers, a full-length mirror, vanity table, and chair. Convenient plug points throughout ensure easy device charging. Each bed features a reading light for personalized comfort. The en-suite bathroom offers a luxurious bathtub and separate shower for your relaxation.",
        img1: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room6,
            alt: "Female Six Bed Dorm",
            caption: "Enjoy a comfy bed, with conveniently placed plug-in sockets near your bed."
        },
        img2: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room6Bath,
            alt: "Six Bed Dorm Bathroom",
            caption: "Shared, modern bathroom with spacious shower, convenient basin, 24/7 hot water, and toilet."
        },
        img3: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomLounge,
            alt: "Lounge Area",
            caption: "Cozy lounge with sofas, kitchen, fireplace, board games, books, and warm atmosphere."
        }
    },
    {
        title: "Female Four Bed Dorm",
        details: "4 Adults | Shared Bathroom | From R370.00 a Night",
        description: "Your Serene Sanctuary for Solitude. Step into our vibrant dorm, specially designed for quiet moments and privacy. Indulge in the comfort of extra-length single bunk beds, thoughtfully arranged on one side of the room, creating a cozy cocoon just for you. Discover convenience with a full-length mirror, vanity table, chair, and wall plug at your disposal. Feel the Glow of Personalized Comfort.",
        img1: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room4,
            alt: "Female Four Bed Dorm",
            caption: "Enjoy a comfy bed, with conveniently placed plug-in sockets near your bed."
        },
        img2: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room4Bath,
            alt: "Four Bed Dorm Bathroom",
            caption: "Shared, modern bathroom with spacious shower, convenient basin, 24/7 hot water, and toilet."
        },
        img3: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomLounge,
            alt: "Lounge Area",
            caption: "Cozy lounge with sofas, kitchen, fireplace, board games, books, and warm atmosphere."
        }
    },
    {
        title: "Mixed Eight Bed Dorm",
        details: "8 Adults | Shared Bathroom | From R280.00 a Night",
        description: "Boundless Space for All. Our vibrant room welcomes you with 8 extra-long single bunk beds, lockable lockers, full-length mirror, vanity table, and chair. It's not just about comfort; there's even room for a lively game of Twister. Experience ultimate excitement and relaxation in this inviting haven.",
        img1: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room8mixed,
            alt: "Mixed Eight Bed Dorm",
            caption: "Enjoy a comfy bed, with conveniently placed plug-in sockets near your bed."
        },
        img2: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room8Bath,
            alt: "Eight Bed Dorm Bathroom",
            caption: "Shared , modern bathroom with spacious shower, convenient basin, 24/7 hot water, and toilet."
        },
        img3: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomLounge,
            alt: "Lounge Area",
            caption: "Cozy lounge with sofas, kitchen, fireplace, board games, books, and warm atmosphere."
        }
    },
    {
        title: "Mixed Eight Bed Dorm",
        details: "8 Adults | Shared Bathroom | From R350.00 a Night",
        description: "Boundless Space for All. Our vibrant room welcomes you with 8 extra-long single bunk beds, lockable lockers, full-length mirror, vanity table, and chair. It's not just about comfort; there's even room for a lively game of Twister. Experience ultimate excitement and relaxation in this inviting haven.",
        img1: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room8mixed2,
            alt: "Mixed Eight Bed Dorm 2",
            caption: "Enjoy a comfy bed, with conveniently placed plug-in sockets near your bed."
        },
        img2: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].room8Bath,
            alt: "Eight Bed Dorm Bathroom",
            caption: "Shared , modern bathroom with spacious shower, convenient basin, 24/7 hot water, and toilet."
        },
        img3: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomOutside,
            alt: "Outside Area",
            caption: "Tranquil outdoor chill area with shaded tables, comfortable seating, and lush greenery."
        }
    },
    {
        title: "Private Queen Room",
        details: "1 Adult | Private Bathroom | From R800.00 a Night",
        description: "Indulge in Modern Luxury in our meticulously designed Queen Room. Sink into the plush comfort of a queen-sized bed, perfect for couples or solo travelers seeking extra space. Stay connected with high-speed Wi-Fi, ideal for streaming, working, or staying in touch with loved ones. The sleek, contemporary décor creates a soothing atmosphere, while the private bathroom with a refreshing shower ensures your utmost convenience.",
        img1: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomPrivate,
            alt: "Private Queen Room",
            caption: "Private room with comfy queen bed, modern décor, ample storage, and convenient bedside charging points."
        },
        img2: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomPrivateBath,
            alt: "Private Room Bathroom",
            caption: "Modern bathroom with spacious shower, convenient basin, 24/7 hot water, and private toilet."
        },
        img3: {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].roomOutside,
            alt: "Outside Area",
            caption: "Tranquil outdoor chill area with shaded tables, comfortable seating, and lush greenery."
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/accommodation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccommodationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/PageTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$accommodationPageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/accommodationPageData.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AccommodationPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Accommodation"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                        title: "Dorms & Rooms",
                        subtitle: "Accommodation",
                        emphasis: "At Explorer Backpackers",
                        buttonText: "See Rooms",
                        onButtonClick: ()=>document.getElementById('accommodationOffers')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        bgImage: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroAccommodation
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "accommodationOffers",
                        className: "py-16 lg:py-24 bg-white space-y-16",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$accommodationPageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accommodationPageData"].map((room, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: index % 2 === 1 ? 'md:order-2' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-black text-sm font-semibold",
                                                        children: room.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-3xl lg:text-4xl font-extrabold text-gray-800 my-4",
                                                        children: room.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-black leading-relaxed mb-15 text-base mt-7.5",
                                                        children: room.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/book",
                                                        className: "mt-auto w-full inline-block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "w-full text-sm font-semibold",
                                                            children: "Book Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: index % 2 === 1 ? 'md:order-1' : '',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg shadow-xl overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: room.img1.src,
                                                            alt: room.img1.alt,
                                                            className: "w-full h-[60vh] object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center",
                                                            children: room.img1.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-15",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg shadow-xl overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: room.img2.src,
                                                        alt: room.img2.alt,
                                                        className: "w-full h-[45vh] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center",
                                                        children: room.img2.caption
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg shadow-xl overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: room.img3.src,
                                                        alt: room.img3.alt,
                                                        className: "w-full h-[45vh] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center",
                                                        children: room.img3.caption
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/accommodation/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = AccommodationPage;
var _c;
__turbopack_context__.k.register(_c, "AccommodationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=explorerbackpackers_app_4f68df32._.js.map