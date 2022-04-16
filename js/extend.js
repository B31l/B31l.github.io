const state = false;
const page = document.querySelector(".page");
const section = document.querySelector("section");
function extend() {
    if (!state) {
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
    }
    else {
        page.style.width = "1200px";
        section.style.width = "770px";
    }
    state = !state;
}