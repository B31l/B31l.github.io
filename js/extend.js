const page = document.querySelector(".page");
const section = document.querySelector("section");

let state = true;
function extend() {
    if (state) {
        page.style.width = "1200px";
        section.style.width = "770px";
    }
    else {
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
    }
    state = !state;
}