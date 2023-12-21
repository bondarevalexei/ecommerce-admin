"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n  } else {\n    const uri = process.env.MONGODB_URI;\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQyxlQUFULEdBQTJCO0VBQ2hDLElBQUlELHVFQUFBLEtBQW1DLENBQXZDLEVBQTBDO0lBQ3hDLE9BQU9BLG9FQUFBLEVBQVA7RUFDRCxDQUZELE1BRU87SUFDTCxNQUFNSyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUF4QjtJQUNBLE9BQU9SLHVEQUFBLENBQWlCSyxHQUFqQixDQUFQO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Order\": () => (/* binding */ Order)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  line_items: Object,\n  name: String,\n  email: String,\n  city: String,\n  postalCode: String,\n  streetAddress: String,\n  country: String,\n  paid: Boolean\n}, {\n  timestamps: true\n});\nconst Order = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Order || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Order', OrderSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRyxXQUFXLEdBQUcsSUFBSUQsNENBQUosQ0FBVztFQUM3QkUsVUFBVSxFQUFDQyxNQURrQjtFQUU3QkMsSUFBSSxFQUFDQyxNQUZ3QjtFQUc3QkMsS0FBSyxFQUFDRCxNQUh1QjtFQUk3QkUsSUFBSSxFQUFDRixNQUp3QjtFQUs3QkcsVUFBVSxFQUFDSCxNQUxrQjtFQU03QkksYUFBYSxFQUFDSixNQU5lO0VBTzdCSyxPQUFPLEVBQUNMLE1BUHFCO0VBUTdCTSxJQUFJLEVBQUNDO0FBUndCLENBQVgsRUFTakI7RUFDREMsVUFBVSxFQUFFO0FBRFgsQ0FUaUIsQ0FBcEI7QUFhTyxNQUFNQyxLQUFLLEdBQUdmLDRDQUFNLEVBQUVlLEtBQVIsSUFBaUJoQiwrQ0FBSyxDQUFDLE9BQUQsRUFBVUcsV0FBVixDQUFwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL21vZGVscy9PcmRlci5qcz9lYjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbGluZV9pdGVtczpPYmplY3QsXHJcbiAgbmFtZTpTdHJpbmcsXHJcbiAgZW1haWw6U3RyaW5nLFxyXG4gIGNpdHk6U3RyaW5nLFxyXG4gIHBvc3RhbENvZGU6U3RyaW5nLFxyXG4gIHN0cmVldEFkZHJlc3M6U3RyaW5nLFxyXG4gIGNvdW50cnk6U3RyaW5nLFxyXG4gIHBhaWQ6Qm9vbGVhbixcclxufSwge1xyXG4gIHRpbWVzdGFtcHM6IHRydWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9yZGVyID0gbW9kZWxzPy5PcmRlciB8fCBtb2RlbCgnT3JkZXInLCBPcmRlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiT3JkZXJTY2hlbWEiLCJsaW5lX2l0ZW1zIiwiT2JqZWN0IiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwiY2l0eSIsInBvc3RhbENvZGUiLCJzdHJlZXRBZGRyZXNzIiwiY291bnRyeSIsInBhaWQiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIk9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Order */ \"(api)/./models/Order.js\");\n\n\nasync function handler(req, res) {\n  await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n  res.json(await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.find().sort({\n    createdAt: -1\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUEyQkMsR0FBM0IsRUFBZ0M7RUFDN0MsTUFBTUosOERBQWUsRUFBckI7RUFDQUksR0FBRyxDQUFDQyxJQUFKLENBQVMsTUFBTUoscURBQUEsR0FBYU0sSUFBYixDQUFrQjtJQUFDQyxTQUFTLEVBQUMsQ0FBQztFQUFaLENBQWxCLENBQWY7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS9vcmRlcnMuanM/MWE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vbmdvb3NlQ29ubmVjdH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7T3JkZXJ9IGZyb20gXCJAL21vZGVscy9PcmRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKSB7XHJcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgcmVzLmpzb24oYXdhaXQgT3JkZXIuZmluZCgpLnNvcnQoe2NyZWF0ZWRBdDotMX0pKTtcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJPcmRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();