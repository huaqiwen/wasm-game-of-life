(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: Cell, Universe, __wbg_random_39c02e3d0f8a020f, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_39c02e3d0f8a020f\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_39c02e3d0f8a020f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/*! exports provided: Cell, Universe, __wbg_random_39c02e3d0f8a020f, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_39c02e3d0f8a020f\", function() { return __wbg_random_39c02e3d0f8a020f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,Alive:1, });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    */\n    tick() {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](8, this.ptr);\n            var r0 = getInt32Memory0()[8 / 4 + 0];\n            var r1 = getInt32Memory0()[8 / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nconst __wbg_random_39c02e3d0f8a020f = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_tick, universe_new, universe_width, universe_height, universe_cells, universe_render, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n\r\n// Import the WASM memory\r\n\r\n\r\n\r\n\r\nconst CELL_SIZE = 5;  // px\r\nconst GRID_COLOR = \"#CCCCCC\";\r\nconst DEAD_COLOR = \"#FFFFFF\";\r\nconst ALIVE_COLOR = \"#000000\";\r\n\r\n// Construct the universe, get its width and height\r\nconst universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"].new();\r\nconst width = universe.width();\r\nconst height = universe.height();\r\n\r\n// Give the canvas room for all cells and a 1px border around each\r\nconst canvas = document.getElementById(\"game-of-life-canvas\");\r\ncanvas.height = (CELL_SIZE + 1) * height + 1;\r\ncanvas.width = (CELL_SIZE + 1) * width + 1;\r\n\r\nconst ctx = canvas.getContext('2d');\r\n\r\nconst renderLoop = () => {\r\n    universe.tick();\r\n\r\n    drawGrid();\r\n    drawCells();\r\n\r\n    requestAnimationFrame(renderLoop);\r\n};\r\n\r\nconst drawGrid = () => {\r\n    ctx.beginPath();\r\n    ctx.strokeStyle = GRID_COLOR;\r\n\r\n    // vertical lines\r\n    for (let i = 0; i <= width; i++) {\r\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\r\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\r\n    }\r\n\r\n    // Horizontal lines.\r\n    for (let j = 0; j <= height; j++) {\r\n        ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\r\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\r\n    }\r\n\r\n    ctx.stroke();\r\n};\r\n\r\nconst getIndex = (row, column) => {\r\n    return row * width + column;\r\n};\r\n\r\nconst drawCells = () => {\r\n    const cellsPtr = universe.cells();\r\n    const cells = new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, cellsPtr, width * height);\r\n\r\n    ctx.beginPath();\r\n\r\n    for (let row = 0; row < height; row++) {\r\n        for (let col = 0; col < width; col++) {\r\n            const idx = getIndex(row, col);\r\n\r\n            ctx.fillStyle = cells[idx] === wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"].Dead\r\n                ? DEAD_COLOR\r\n                : ALIVE_COLOR;\r\n\r\n            ctx.fillRect(\r\n                col * (CELL_SIZE + 1) + 1,\r\n                row * (CELL_SIZE + 1) + 1,\r\n                CELL_SIZE,\r\n                CELL_SIZE\r\n            );\r\n        }\r\n    }\r\n\r\n    ctx.stroke();\r\n};\r\n\r\n// start rendering\r\ndrawGrid();\r\ndrawCells();\r\nrequestAnimationFrame(renderLoop);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);