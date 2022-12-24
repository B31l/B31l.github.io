const banner = document.querySelector(".post_banner");
const toc = document.querySelector("#markdown-toc");

const a = () => console.log("ㅎㅇ");

const turn = () => {
  if (banner.style.display === "none") {
    banner.style.display = "block";
    toc.style.display = "block";
  } else {
    banner.style.display = "none";
    toc.style.display = "none";
  }
};
