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
"[project]/explorerbackpackers/app/data/promosData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promosData",
    ()=>promosData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-client] (ecmascript)");
;
const promosData = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promosWebsiteDiscount,
        title: 'Automatic Website Discount',
        description: 'Book 1-3 nights directly on our website and automatically get an exclusive 15% discount on your stay!',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoThreeForFour,
        title: 'Stay 4+ Nights',
        description: 'Book a 4-night stay and get 20% off. The longer you stay, the more you save!',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoOneWeek,
        title: 'Stay 1 Week (7+ Nights)',
        description: 'Settle in for a full week and enjoy an automatic 20% discount on us. Make this your home base.',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoTwoWeek,
        title: 'Stay 2 Weeks (14+ Nights)',
        description: 'Planning a longer trip? Stay for 14 nights or more and we\'ll give you a massive 25% off your stay.',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoStudent,
        title: 'Student Discount',
        description: 'If you are in possession of a valid ID/Passport and student card, you qualify for a 10% off our accommodation rates.',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoElderly,
        title: 'Eldery Discount',
        description: 'If you are in possession of a valid ID or Passport and 60 years or older, you qualify for a 15% off our accommodation rates.',
        page: 'book'
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].promoGroup,
        title: 'Group Bookings',
        description: 'Explorer Backpackers caters to all groups and sizes, book now and qualify for 20% off accommodation rates.',
        page: 'groupbookings'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/offers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/PageTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$promosData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/promosData.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function OffersPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Special Offers"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                        title: "Discounts & Weekly Rates",
                        subtitle: "Special Offers",
                        emphasis: "At Explorer Backpackers",
                        buttonText: "See Offers",
                        onButtonClick: ()=>document.getElementById('specialOffersPage')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        bgImage: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroOffers
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "specialOffersPage",
                        className: "py-16 lg:py-24 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-center text-gray-800 mb-12",
                                children: "Special Offers"
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$promosData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promosData"].map((promo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: promo.img,
                                                alt: promo.title,
                                                className: "w-full h-56 object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 flex flex-col flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-800 mb-2",
                                                        children: promo.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-black mb-4 flex-grow text-sm",
                                                        children: promo.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: promo.page === 'home' ? '/' : `/${promo.page}`,
                                                        className: "mt-auto w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "w-full text-xs",
                                                            children: promo.page === 'book' ? 'Book Now' : 'Learn More'
                                                        }, void 0, false, {
                                                            fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, promo.title, true, {
                                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/offers/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = OffersPage;
var _c;
__turbopack_context__.k.register(_c, "OffersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=explorerbackpackers_app_f8f421cf._.js.map