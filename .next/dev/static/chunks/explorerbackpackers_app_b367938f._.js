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
"[project]/explorerbackpackers/app/components/Carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Carousel = ({ items, renderItem })=>{
    _s();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (direction)=>{
        if (scrollContainerRef.current) {
            // Scroll by the width of one item (approximate based on first child)
            const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 gap-0",
                children: items.map((item, index)=>// Mobile: w-full (1 item), Tablet: w-1/2 (2 items), Desktop: w-1/3 (3 items)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2 lg:w-1/3 flex-shrink-0 snap-center",
                        children: renderItem(item)
                    }, index, false, {
                        fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll('left'),
                className: "absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden md:block w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600",
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll('right'),
                className: "absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600",
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 mt-4 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scroll('left'),
                        className: "w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/70 hover:bg-green-600",
                        children: "❮"
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scroll('right'),
                        className: "w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/70 hover:bg-green-600",
                        children: "❯"
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/explorerbackpackers/app/components/Carousel.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Carousel, "Gfm/oEKPzfcG/oikjUDPHSjaGoQ=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/components/TourCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourCard",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const TourCard = ({ tour, truncateDescription = false })=>{
    // Determine the display price
    let priceDisplay = 'Price Varies';
    if (tour.basePrice) {
        priceDisplay = `From R ${tour.basePrice}`;
    } else if (tour.pricingTiers && tour.pricingTiers.length > 0) {
        const prices = tour.pricingTiers.map((t)=>t.price);
        const minPrice = Math.min(...prices);
        priceDisplay = `From R ${minPrice}`;
    }
    // Handle description truncation
    const description = truncateDescription && tour.description.length > 100 ? `${tour.description.substring(0, 100)}...` : tour.description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: tour.gallery && tour.gallery[0] ? tour.gallery[0] : '/images/placeholder.jpg',
                        alt: tour.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow",
                        children: tour.duration
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-green-600 uppercase tracking-wide",
                            children: tour.category
                        }, void 0, false, {
                            fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: tour.title
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm mb-4 flex-grow",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-4 border-t border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Price per person"
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-gray-900",
                                        children: priceDisplay
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/tours/details/${tour.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "px-6",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/explorerbackpackers/app/components/TourCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TourCard;
var _c;
__turbopack_context__.k.register(_c, "TourCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pilanesbergNationalParkData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/johannesburgData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/sowetoData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pretoriaData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/capeTownData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/gardenRouteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/krugerNationalParkData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/citySightseeingData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/transferData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/images.ts [app-client] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pilanesbergNationalParkData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["johannesburgData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sowetoData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pretoriaData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capeTownData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gardenRouteData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["krugerNationalParkData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["citySightseeingData"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferData"]
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroCapeTown; // Replace with specific Cape Town image if available
        case 'Pilanesberg':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroPilanesberg; // Replace with Pilanesberg image
        case 'Kruger National Park':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroKruger;
        case 'Garden Route':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroGardenRoute; // Replace with Garden Route image
        case 'Johannesburg':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroJohannesburg;
        case 'Soweto':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroSoweto;
        case 'Pretoria':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroPretoria;
        case 'Restaurants':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroRestaurants; // Use a food image
        case 'Nightlife':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroNightlife; // Use a party image
        case 'Transfers':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroTransfers;
        case 'African Markets':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroAfricanMarkets;
        case 'Local Sights':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroLocalSights;
        case 'Malls':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroMalls;
        case 'CoWorking':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroCoWorking;
        case 'Art Galleries':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroArtGalleries;
        case 'Cafes':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroCafes;
        case 'Markets':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroMarkets;
        case 'Barber':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroBarbers;
        case 'Spa':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroSpa;
        case 'City Sightseeing':
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroCitySightSeeing;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].heroExperiences;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/explorerbackpackers/app/experiences/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperiencesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/PageTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$TourCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/TourCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/lib/utils.ts [app-client] (ecmascript)");
// Import Data Files Directly
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/citySightseeingData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/johannesburgData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/sowetoData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pretoriaData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/capeTownData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/gardenRouteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/krugerNationalParkData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/pilanesbergNationalParkData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/explorerbackpackers/app/data/transferData.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
// Helper to convert category names to URL slugs (e.g. "City Sightseeing" -> "city-sightseeing")
const toSlug = (text)=>text.toLowerCase().replace(/ /g, '-');
function ExperiencesPage() {
    // Helper for carousel rendering
    const renderTourCard = (tour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$TourCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourCard"], {
                tour: tour,
                truncateDescription: true
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$PageTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Experiences"
            }, void 0, false, {
                fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                        title: "Our Experiences",
                        subtitle: "Tours & Safaris",
                        emphasis: "with Moafrika",
                        buttonText: "See All Tours",
                        onButtonClick: ()=>document.getElementById('citysightseeing-section')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        bgImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeroImageForCategory"])('General')
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "citysightseeing-section",
                        className: "py-16 lg:py-24 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "City Sightseeing Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$citySightseeingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["citySightseeingData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('City Sightseeing')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All City Sightseeing Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "joburg-section",
                        className: "py-16 lg:py-24 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Johannesburg Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$johannesburgData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["johannesburgData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Johannesburg')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Johannesburg Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "soweto-section",
                        className: "py-16 lg:py-24 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Soweto Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$sowetoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sowetoData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Soweto')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Soweto Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pretoria-section",
                        className: "py-16 lg:py-24 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Pretoria Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pretoriaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pretoriaData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Pretoria')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Pretoria Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pilanesberg-section",
                        className: "py-16 lg:py-24 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Pilanesberg National Park Safaris"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$pilanesbergNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pilanesbergNationalParkData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Pilanesberg')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Pilanesberg Safaris"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "kruger-section",
                        className: "py-16 lg:py-24 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Kruger National Park Safaris"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$krugerNationalParkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["krugerNationalParkData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Kruger National Park')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Kruger Safaris"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "capetown-section",
                        className: "py-16 lg:py-24 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Cape Town Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$capeTownData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capeTownData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Cape Town')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Cape Town Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "gardenroute-section",
                        className: "py-16 lg:py-24 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Garden Route Tours"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$gardenRouteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gardenRouteData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Garden Route')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Garden Route Tours"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "transfers-section",
                        className: "py-16 lg:py-24 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-center text-black mb-12",
                                    children: "Shuttles & Transfers"
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$data$2f$transferData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferData"],
                                    renderItem: renderTourCard
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/tours/${toSlug('Transfers')}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$explorerbackpackers$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            className: "mt-8 text-sm font-semibold",
                                            children: "View All Transfers"
                                        }, void 0, false, {
                                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/explorerbackpackers/app/experiences/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ExperiencesPage;
var _c;
__turbopack_context__.k.register(_c, "ExperiencesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=explorerbackpackers_app_b367938f._.js.map