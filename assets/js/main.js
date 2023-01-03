const banner = document.querySelector(".post_banner");
const toc = document.querySelector("#markdown-toc");

const toggleTOC = () => {
  const toc = document.querySelector("#markdown-toc");
  toc.style.display = toc.style.display === "block" ? "none" : "block";
  console.log("완");
};

function init() {
  const list_h1 = document.querySelectorAll("h1");
  list_h1.forEach((item, index) => {
    item.innerHTML = `<div class="h1-box">${index + 1}</div>${item.innerHTML}`;
  });

  const list_hr = document.querySelectorAll("hr");
  const main = document.querySelector(".main");
  const mainCurrent = main.getBoundingClientRect().bottom;
  list_hr.forEach((item) => {
    const hrCurrent = item.getBoundingClientRect().bottom;
    item.style.marginBottom = (mainCurrent - hrCurrent).toString() + "px";
  });
}

init();
