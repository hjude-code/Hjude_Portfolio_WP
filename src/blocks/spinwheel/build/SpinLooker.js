/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/SpinLooker.js ***!
  \***************************/
let wheel;
function watchSpinwheel() {
  wheel.style.transform = `rotate(${-window.pageYOffset / 2}deg)`;
}
const callback = (entries, observer) => {
  if (entries[0].isIntersecting === true) {
    window.addEventListener('scroll', watchSpinwheel);
  } else {
    window.removeEventListener('scroll', watchSpinwheel);
  }
};
let options = {};
let observer = new IntersectionObserver(callback, options);
window.onload = () => {
  const spinwheel = document.querySelector('.wp-block-create-block-spinwheel');
  // console.log(spinwheel)
  observer.observe(spinwheel);
  wheel = document.querySelector('.spinWheel');
  console.log(wheel);
};
/******/ })()
;
//# sourceMappingURL=SpinLooker.js.map