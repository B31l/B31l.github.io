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

// document.addEventListener("scroll", horizontalScroll);

// const main = document.querySelector(".main");
// const content = document.querySelector(".content");

// let scrollWidth = main.scrollWidth;
// let verticalScrollHeight =
//   content.getBoundingClientRect().height - main.getBoundingClientRect().height;

// function horizontalScroll() {
//   let position = main.getBoundingClientRect().top;
//   if (position > 1) {
//     return;
//   } else {
//     let scrolled = content.getBoundingClientRect().top;
//     main.scrollLeft = (scrollWidth / verticalScrollHeight) * scrolled * -0.85;
//   }
// }

init();

// const main = document.querySelector(".main");
// let isMouseDown = false;
// let startX, scrollLeft;

// main.addEventListener("mousedown", (e) => {
//   isMouseDown = true;
//   main.classList.add("active");

//   startX = e.pageX - main.offsetLeft;
//   scrollLeft = main.scrollLeft;
// });

// main.addEventListener("mouseleave", () => {
//   isMouseDown = false;
//   main.classList.remove("active");
// });

// main.addEventListener("mouseup", () => {
//   isMouseDown = false;
//   main.classList.remove("active");
// });

// main.addEventListener("mousemove", (e) => {
//   if (!isMouseDown) return;

//   e.preventDefault();
//   const x = e.pageX - main.offsetLeft;
//   const walk = (x - startX) * 1;
//   main.scrollLeft = scrollLeft - walk;
// });

var scroller = {};
scroller.e = document.querySelector(".main");

if (scroller.e.addEventListener) {
  scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
  scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {
  var e = window.event || e;
  var delta = -20 * Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

  var pst = document.querySelector(".main").scrollLeft() + delta;

  if (pst < 0) {
    pst = 0;
  } else if (pst > 480) {
    pst = 480;
  }

  document.querySelector(".main").scrollLeft(pst);

  return false;
}
