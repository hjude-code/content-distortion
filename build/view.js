/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const contentBox = document.querySelector('.wp-block-hjude-content-distortion');
const itterations = document.querySelectorAll(".itterationLayer");
const baseLayer = document.querySelector('.itterationBase');
const cut = {
  step: Math.round(100 / itterations.length),
  in: 0,
  out: Math.round(100 / itterations.length)
};
const rotMax = window.getComputedStyle(baseLayer).getPropertyValue('--rot-max');
console.log(rotMax);
const setCut = elmnt => {
  elmnt.style.setProperty('--cutInner', `${cut.in}%`);
  elmnt.style.setProperty('--cutOuter', `${cut.out}%`);
  cut.in += cut.step;
  cut.out += cut.step;
};
const setRot = (elmnt, mx = 50, my = 50, mult = 0) => {
  let rot = (mx - 50) / 100;
  elmnt.style.setProperty('--cX', `${mx}%`);
  elmnt.style.setProperty('--cY', `${my}%`);
  elmnt.style.setProperty('--rot', `${rot * rotMax * mult}deg`);
};
for (let i = itterations.length - 1; i >= 0; i--) {
  setCut(itterations[i]);
  setRot(itterations[i]);
}
;
contentBox.addEventListener('mousemove', m => {
  const rect = m.target.getBoundingClientRect();
  const x = Math.round((m.clientX - rect.left) / rect.width * 100);
  const y = Math.round((m.clientY - rect.top) / rect.height * 100);
  for (let i = itterations.length - 1; i >= 0; i--) {
    setRot(itterations[i], x, y, i);
  }
  ;
});
/******/ })()
;
//# sourceMappingURL=view.js.map