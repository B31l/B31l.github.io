const banner = document.querySelector(".post_banner");
const toc = document.querySelector("#markdown-toc");

const a = () => console.log("ㅎㅇ");

let state = true;
const turn = () => {
  if (state) {
    document.querySelector(".post_banner").style.display = "none";
    document.querySelector("#markdown-toc").style.display = "none";
  } else {
    document.querySelector(".post_banner").style.display = "block";
    document.querySelector("#markdown-toc").style.display = "block";
  }
  state = !state;
};

const toggleTOC = () => {
  const toc = document.querySelector("#markdown-toc");
  toc.style.display = toc.style.display === "display" ? "none" : "display";
};

function init() {
  const list_h1 = document.querySelectorAll("h1");
  list_h1.forEach((item, index) => {
    item.innerHTML = `<div class="h1-box">${index + 1}</div>${item.innerHTML}`;
  });
}

init();
