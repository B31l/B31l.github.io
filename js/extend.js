const page = document.querySelector(".page");
const section = document.querySelector("section");

let state = false;
function extend() {
    state = window.localStorage.getItem("state");
    if (!state) {
        window.localStorage.setItem("state", true);
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
    }
    else {
        window.localStorage.setItem("state", false);
        page.style.width = "1200px";
        section.style.width = "770px";
    }
}