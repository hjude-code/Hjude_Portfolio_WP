/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
let greetSpinner;
let greetHead;
window.addEventListener('load', () => {
  greetSpinner = document.querySelector('div.wp-block-create-block-messageheader');
  greetSpinner.addEventListener('mousemove', m => {
    let mPx = m.x / window.innerWidth * 100;
    let mPy = m.y / window.innerHeight * 100;
    greetSpinner.style.setProperty('--gX', `${mPx}%`);
    greetSpinner.style.setProperty('--gY', `${mPy}%`);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map