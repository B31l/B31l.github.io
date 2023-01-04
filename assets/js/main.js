const main = document.querySelector(".main");

const toggleTOC = () => {
  const toc = document.querySelector("#markdown-toc");
  toc.style.display = toc.style.display === "block" ? "none" : "block";
  console.log("완");
};

function init() {
  const main = document.querySelector(".main");

  const list_hr = document.querySelectorAll("hr");
  const mainCurrent = main.getBoundingClientRect().bottom;
  list_hr.forEach((item) => {
    const hrCurrent = item.getBoundingClientRect().bottom;
    item.style.marginBottom = (mainCurrent - hrCurrent).toString() + "px";
  });

  const list_h1 = document.querySelectorAll("h1");
  list_h1.forEach((item, index) => {
    item.innerHTML = `<div class="h1-box">${index + 1}</div>${item.innerHTML}`;
  });

  const list_img = document.querySelectorAll("img");
  list_img.forEach((item) => {
    if (item.alt) {
      item.parentNode.innerHTML = `${
        item.parentNode.innerHTML
      }<em>&lt;${item.alt.toString()}&gt;</em>`;
    }
  });
}

init();
main.addEventListener("scroll", () => {
  if (window.innerWidth >= 1200) {
    main.scrollTo({ top: 300, left: 0, behavior: "smooth" });
  }
});
