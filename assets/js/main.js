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

const h1 = document.querySelectorAll("h1");
const init = () => {
  console.log(h1);
};

init();
