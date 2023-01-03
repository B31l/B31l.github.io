const banner = document.querySelector(".post_banner");
const toc = document.querySelector("#markdown-toc");

const toggleTOC = () => {
  const toc = document.querySelector("#markdown-toc");
  toc.style.display = toc.style.display === "none" ? "block" : "none";
  console.log("완");
};

function init() {
  const list_h1 = document.querySelectorAll("h1");
  list_h1.forEach((item, index) => {
    item.innerHTML = `<div class="h1-box">${index + 1}</div>${item.innerHTML}`;
  });
}

init();
