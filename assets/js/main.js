var scroller = {};
scroller.e = document.querySelector(".main");
if (scroller.e.addEventListener) {
  scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
  scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);
function MouseWheelHandler(e) {
  var e = window.event || e;
  var delta = -80 * Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  var pst = document.querySelector(".main").scrollLeft + delta;
  if (pst < 0) pst = 0;
  document.querySelector(".main").scrollLeft = pst;
  return false;
}

const toggleTOC = () => {
  const toc = document.querySelector("#markdown-toc");
  toc.style.display = toc.style.display === "block" ? "none" : "block";
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

function setTOC() {
  const toc = document.querySelector("#markdown-toc");
  toc.children.forEach((item_h1, index_h1) => {
    console.log(`<div class="toc_h1">${index_h1 + 1}</div>${item.innerHTML}`);
    if (item_h1.childElementCount === 1) {
      console.log(`<div class="toc_h1">${index_h1 + 1}</div>${item.innerHTML}`);
      // item_h1.innerHTML = `<div class="toc_h1">${index_h1 + 1}</div>${
      //   item.innerHTML
      // }`;
    } else {
      item_h1.children.forEach((item_h2, index_h2) => {
        if (item_h2.childElementCount === 1) {
          console.log(
            `<div class="toc_h2">${index_h1 + 1} - ${index_h2 + 1}</div>${
              item.innerHTML
            }`
          );
          // item_h2.innerHTML = `<div class="toc_h2">${index_h1 + 1} - ${
          //   index_h2 + 1
          // }</div>${item.innerHTML}`;
        } else {
          console.log("히히");
        }
      });
    }
  });
}

init();
setTOC();
