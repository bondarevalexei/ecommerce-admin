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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\n\nif (!process.env.MONGODB_URI) {\n  throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWpCLEVBQThCO0VBQzVCLE1BQU0sSUFBSUMsS0FBSixDQUFVLHFEQUFWLENBQU47QUFDRDs7QUFFRCxNQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUF4QjtBQUNBLE1BQU1HLE9BQU8sR0FBRyxFQUFoQjtBQUVBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxhQUFKOztBQUVBLElBQUksTUFBd0M7RUFDMUM7RUFDQTtFQUNBLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxtQkFBWixFQUFpQztJQUMvQkgsTUFBTSxHQUFHLElBQUlQLGdEQUFKLENBQWdCSyxHQUFoQixFQUFxQkMsT0FBckIsQ0FBVDtJQUNBRyxNQUFNLENBQUNDLG1CQUFQLEdBQTZCSCxNQUFNLENBQUNJLE9BQVAsRUFBN0I7RUFDRDs7RUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUF2QjtBQUNELENBUkQsTUFRTyxHQU1QO0FBQ0E7OztBQUNBLGlFQUFlRixhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n  } else {\n    const uri = process.env.MONGODB_URI;\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQyxlQUFULEdBQTJCO0VBQ2hDLElBQUlELHVFQUFBLEtBQW1DLENBQXZDLEVBQTBDO0lBQ3hDLE9BQU9BLG9FQUFBLEVBQVA7RUFDRCxDQUZELE1BRU87SUFDTCxNQUFNSyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUF4QjtJQUNBLE9BQU9SLHVEQUFBLENBQWlCSyxHQUFqQixDQUFQO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  description: String,\n  price: {\n    type: Number,\n    required: true\n  },\n  images: [{\n    type: String\n  }],\n  category: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n    ref: 'Category'\n  },\n  properties: {\n    type: Object\n  }\n}, {\n  timestamps: true\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Product', ProductSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1JLGFBQWEsR0FBRyxJQUFJRiw0Q0FBSixDQUFXO0VBQy9CRyxLQUFLLEVBQUU7SUFBQ0MsSUFBSSxFQUFDQyxNQUFOO0lBQWNDLFFBQVEsRUFBQztFQUF2QixDQUR3QjtFQUUvQkMsV0FBVyxFQUFFRixNQUZrQjtFQUcvQkcsS0FBSyxFQUFFO0lBQUNKLElBQUksRUFBRUssTUFBUDtJQUFlSCxRQUFRLEVBQUU7RUFBekIsQ0FId0I7RUFJL0JJLE1BQU0sRUFBRSxDQUFDO0lBQUNOLElBQUksRUFBQ0M7RUFBTixDQUFELENBSnVCO0VBSy9CTSxRQUFRLEVBQUU7SUFBQ1AsSUFBSSxFQUFDTixnRUFBTjtJQUErQmdCLEdBQUcsRUFBQztFQUFuQyxDQUxxQjtFQU0vQkMsVUFBVSxFQUFFO0lBQUNYLElBQUksRUFBQ1k7RUFBTjtBQU5tQixDQUFYLEVBT25CO0VBQ0RDLFVBQVUsRUFBRTtBQURYLENBUG1CLENBQXRCO0FBV08sTUFBTUMsT0FBTyxHQUFHakIsb0RBQUEsSUFBa0JGLCtDQUFLLENBQUMsU0FBRCxFQUFZRyxhQUFaLENBQXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbW9kZWxzL1Byb2R1Y3QuanM/MDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHttb2RlbCwgU2NoZW1hLCBtb2RlbHN9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRpdGxlOiB7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9LFxyXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgcHJpY2U6IHt0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlfSxcclxuICBpbWFnZXM6IFt7dHlwZTpTdHJpbmd9XSxcclxuICBjYXRlZ29yeToge3R5cGU6bW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlZjonQ2F0ZWdvcnknfSxcclxuICBwcm9wZXJ0aWVzOiB7dHlwZTpPYmplY3R9LFxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vZGVscy5Qcm9kdWN0IHx8IG1vZGVsKCdQcm9kdWN0JywgUHJvZHVjdFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9kZWwiLCJTY2hlbWEiLCJtb2RlbHMiLCJQcm9kdWN0U2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiaW1hZ2VzIiwiY2F0ZWdvcnkiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJvcGVydGllcyIsIk9iamVjdCIsInRpbWVzdGFtcHMiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n\n\nconst adminEmails = ['gtrompy@gmail.com'];\nconst authOptions = {\n  secret: process.env.SECRET,\n  providers: [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET\n  })],\n  adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n  callbacks: {\n    session: ({\n      session,\n      token,\n      user\n    }) => {\n      if (adminEmails.includes(session?.user?.email)) {\n        return session;\n      } else {\n        return false;\n      }\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n  const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n\n  if (!adminEmails.includes(session?.user?.email)) {\n    res.status(401);\n    res.end();\n    throw 'not an admin';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1LLFdBQVcsR0FBRyxDQUFDLG1CQUFELENBQXBCO0FBRU8sTUFBTUMsV0FBVyxHQUFHO0VBQ3pCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQURLO0VBRXpCQyxTQUFTLEVBQUUsQ0FDVFQsaUVBQWMsQ0FBQztJQUNiVSxRQUFRLEVBQUVKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxTQURUO0lBRWJDLFlBQVksRUFBRU4sT0FBTyxDQUFDQyxHQUFSLENBQVlNO0VBRmIsQ0FBRCxDQURMLENBRmM7RUFRekJDLE9BQU8sRUFBRWIsMEVBQWMsQ0FBQ0Msb0RBQUQsQ0FSRTtFQVN6QmEsU0FBUyxFQUFFO0lBQ1RDLE9BQU8sRUFBRSxDQUFDO01BQUNBLE9BQUQ7TUFBU0MsS0FBVDtNQUFlQztJQUFmLENBQUQsS0FBMEI7TUFDakMsSUFBSWYsV0FBVyxDQUFDZ0IsUUFBWixDQUFxQkgsT0FBTyxFQUFFRSxJQUFULEVBQWVFLEtBQXBDLENBQUosRUFBZ0Q7UUFDOUMsT0FBT0osT0FBUDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU8sS0FBUDtNQUNEO0lBQ0Y7RUFQUTtBQVRjLENBQXBCO0FBb0JQLGlFQUFlbEIsZ0RBQVEsQ0FBQ00sV0FBRCxDQUF2QjtBQUVPLGVBQWVpQixjQUFmLENBQThCQyxHQUE5QixFQUFrQ0MsR0FBbEMsRUFBdUM7RUFDNUMsTUFBTVAsT0FBTyxHQUFHLE1BQU1qQiwyREFBZ0IsQ0FBQ3VCLEdBQUQsRUFBS0MsR0FBTCxFQUFTbkIsV0FBVCxDQUF0Qzs7RUFDQSxJQUFJLENBQUNELFdBQVcsQ0FBQ2dCLFFBQVosQ0FBcUJILE9BQU8sRUFBRUUsSUFBVCxFQUFlRSxLQUFwQyxDQUFMLEVBQWlEO0lBQy9DRyxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYO0lBQ0FELEdBQUcsQ0FBQ0UsR0FBSjtJQUNBLE1BQU0sY0FBTjtFQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7Z2V0U2VydmVyU2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXHJcbmltcG9ydCB7TW9uZ29EQkFkYXB0ZXJ9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5cclxuY29uc3QgYWRtaW5FbWFpbHMgPSBbJ2d0cm9tcHlAZ21haWwuY29tJ107XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIHNlc3Npb246ICh7c2Vzc2lvbix0b2tlbix1c2VyfSkgPT4ge1xyXG4gICAgICBpZiAoYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pblJlcXVlc3QocmVxLHJlcykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSxyZXMsYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSk7XHJcbiAgICByZXMuZW5kKCk7XHJcbiAgICB0aHJvdyAnbm90IGFuIGFkbWluJztcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiYWRtaW5FbWFpbHMiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImluY2x1ZGVzIiwiZW1haWwiLCJpc0FkbWluUmVxdWVzdCIsInJlcSIsInJlcyIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\nasync function handle(req, res) {\n  const {\n    method\n  } = req;\n  await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n  await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.isAdminRequest)(req, res);\n\n  if (method === 'GET') {\n    if (req.query?.id) {\n      res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.findOne({\n        _id: req.query.id\n      }));\n    } else {\n      res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.find());\n    }\n  }\n\n  if (method === 'POST') {\n    const {\n      title,\n      description,\n      price,\n      images,\n      category,\n      properties\n    } = req.body;\n    const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.create({\n      title,\n      description,\n      price,\n      images,\n      category,\n      properties\n    });\n    res.json(productDoc);\n  }\n\n  if (method === 'PUT') {\n    const {\n      title,\n      description,\n      price,\n      images,\n      category,\n      properties,\n      _id\n    } = req.body;\n    await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.updateOne({\n      _id\n    }, {\n      title,\n      description,\n      price,\n      images,\n      category,\n      properties\n    });\n    res.json(true);\n  }\n\n  if (method === 'DELETE') {\n    if (req.query?.id) {\n      await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.deleteOne({\n        _id: req.query?.id\n      });\n      res.json(true);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLGVBQWVHLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztFQUM3QyxNQUFNO0lBQUNDO0VBQUQsSUFBV0YsR0FBakI7RUFDQSxNQUFNSCw4REFBZSxFQUFyQjtFQUNBLE1BQU1DLHlFQUFjLENBQUNFLEdBQUQsRUFBS0MsR0FBTCxDQUFwQjs7RUFFQSxJQUFJQyxNQUFNLEtBQUssS0FBZixFQUFzQjtJQUNwQixJQUFJRixHQUFHLENBQUNHLEtBQUosRUFBV0MsRUFBZixFQUFtQjtNQUNqQkgsR0FBRyxDQUFDSSxJQUFKLENBQVMsTUFBTVQsNERBQUEsQ0FBZ0I7UUFBQ1csR0FBRyxFQUFDUCxHQUFHLENBQUNHLEtBQUosQ0FBVUM7TUFBZixDQUFoQixDQUFmO0lBQ0QsQ0FGRCxNQUVPO01BQ0xILEdBQUcsQ0FBQ0ksSUFBSixDQUFTLE1BQU1ULHlEQUFBLEVBQWY7SUFDRDtFQUNGOztFQUVELElBQUlNLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0lBQ3JCLE1BQU07TUFBQ08sS0FBRDtNQUFPQyxXQUFQO01BQW1CQyxLQUFuQjtNQUF5QkMsTUFBekI7TUFBZ0NDLFFBQWhDO01BQXlDQztJQUF6QyxJQUF1RGQsR0FBRyxDQUFDZSxJQUFqRTtJQUNBLE1BQU1DLFVBQVUsR0FBRyxNQUFNcEIsMkRBQUEsQ0FBZTtNQUN0Q2EsS0FEc0M7TUFDaENDLFdBRGdDO01BQ3BCQyxLQURvQjtNQUNkQyxNQURjO01BQ1BDLFFBRE87TUFDRUM7SUFERixDQUFmLENBQXpCO0lBR0FiLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVyxVQUFUO0VBQ0Q7O0VBRUQsSUFBSWQsTUFBTSxLQUFLLEtBQWYsRUFBc0I7SUFDcEIsTUFBTTtNQUFDTyxLQUFEO01BQU9DLFdBQVA7TUFBbUJDLEtBQW5CO01BQXlCQyxNQUF6QjtNQUFnQ0MsUUFBaEM7TUFBeUNDLFVBQXpDO01BQW9EUDtJQUFwRCxJQUEyRFAsR0FBRyxDQUFDZSxJQUFyRTtJQUNBLE1BQU1uQiw4REFBQSxDQUFrQjtNQUFDVztJQUFELENBQWxCLEVBQXlCO01BQUNFLEtBQUQ7TUFBT0MsV0FBUDtNQUFtQkMsS0FBbkI7TUFBeUJDLE1BQXpCO01BQWdDQyxRQUFoQztNQUF5Q0M7SUFBekMsQ0FBekIsQ0FBTjtJQUNBYixHQUFHLENBQUNJLElBQUosQ0FBUyxJQUFUO0VBQ0Q7O0VBRUQsSUFBSUgsTUFBTSxLQUFLLFFBQWYsRUFBeUI7SUFDdkIsSUFBSUYsR0FBRyxDQUFDRyxLQUFKLEVBQVdDLEVBQWYsRUFBbUI7TUFDakIsTUFBTVIsOERBQUEsQ0FBa0I7UUFBQ1csR0FBRyxFQUFDUCxHQUFHLENBQUNHLEtBQUosRUFBV0M7TUFBaEIsQ0FBbEIsQ0FBTjtNQUNBSCxHQUFHLENBQUNJLElBQUosQ0FBUyxJQUFUO0lBQ0Q7RUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzPzQ5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiQC9tb2RlbHMvUHJvZHVjdFwiO1xyXG5pbXBvcnQge21vbmdvb3NlQ29ubmVjdH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7aXNBZG1pblJlcXVlc3R9IGZyb20gXCJAL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gIGNvbnN0IHttZXRob2R9ID0gcmVxO1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSxyZXMpO1xyXG5cclxuICBpZiAobWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgaWYgKHJlcS5xdWVyeT8uaWQpIHtcclxuICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kT25lKHtfaWQ6cmVxLnF1ZXJ5LmlkfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7dGl0bGUsZGVzY3JpcHRpb24scHJpY2UsaW1hZ2VzLGNhdGVnb3J5LHByb3BlcnRpZXN9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBwcm9kdWN0RG9jID0gYXdhaXQgUHJvZHVjdC5jcmVhdGUoe1xyXG4gICAgICB0aXRsZSxkZXNjcmlwdGlvbixwcmljZSxpbWFnZXMsY2F0ZWdvcnkscHJvcGVydGllcyxcclxuICAgIH0pXHJcbiAgICByZXMuanNvbihwcm9kdWN0RG9jKTtcclxuICB9XHJcblxyXG4gIGlmIChtZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICBjb25zdCB7dGl0bGUsZGVzY3JpcHRpb24scHJpY2UsaW1hZ2VzLGNhdGVnb3J5LHByb3BlcnRpZXMsX2lkfSA9IHJlcS5ib2R5O1xyXG4gICAgYXdhaXQgUHJvZHVjdC51cGRhdGVPbmUoe19pZH0sIHt0aXRsZSxkZXNjcmlwdGlvbixwcmljZSxpbWFnZXMsY2F0ZWdvcnkscHJvcGVydGllc30pO1xyXG4gICAgcmVzLmpzb24odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgaWYgKHJlcS5xdWVyeT8uaWQpIHtcclxuICAgICAgYXdhaXQgUHJvZHVjdC5kZWxldGVPbmUoe19pZDpyZXEucXVlcnk/LmlkfSk7XHJcbiAgICAgIHJlcy5qc29uKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJQcm9kdWN0IiwibW9uZ29vc2VDb25uZWN0IiwiaXNBZG1pblJlcXVlc3QiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwianNvbiIsImZpbmRPbmUiLCJfaWQiLCJmaW5kIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2VzIiwiY2F0ZWdvcnkiLCJwcm9wZXJ0aWVzIiwiYm9keSIsInByb2R1Y3REb2MiLCJjcmVhdGUiLCJ1cGRhdGVPbmUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();