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

function getIndex(selector) {
  const elem = document.querySelector(selector);
  for (let i = 0; i < elem.parentNode.childNodes.length; i++) {
    if (elem.parentNode.childNodes[i] === elem) {
      return i;
    }
  }
}

function init() {
  document
    .querySelectorAll("h1")
    .forEach((item) => console.log(getIndex("h1")));
  const list_h1 = document.querySelectorAll("h1");
  console.log(list_h1);
}

init();
