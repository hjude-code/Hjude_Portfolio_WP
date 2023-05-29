/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector('.wp-block-create-block-skills');
  const skills = block.querySelectorAll('li');
  console.log(skills);
  const skillList = [];
  skills.forEach(skill => {
    let skillVal = skill.className;
    if (!skillList.includes(skillVal)) {
      skillList.push(skillVal);
    }
    skill.addEventListener('mouseover', () => {
      let skillType = skill.classList[0];
      console.log(skillType);
      skills.forEach(item => {
        if (item.classList[0] == skillType) {
          item.classList.add('selectedSkill');
        }
      });
    });
    skill.addEventListener('mouseout', () => {
      let skillType = skill.classList[0];
      console.log(skillType);
      skills.forEach(item => {
        if (item.classList[0] == skillType) {
          item.classList.remove('selectedSkill');
        }
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map