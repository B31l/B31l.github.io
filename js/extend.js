const page = document.querySelector(".page");
const section = document.querySelector("section");

let state = false;
state = window.localStorage.getItem("state");
window.localStorage.setItem('age', '20');
function extend() {
    if (!state) {
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
        window.localStorage.setItem("state", true);
    }
    else {
        page.style.width = "1200px";
        section.style.width = "770px";
        window.localStorage.setItem("state", false);
    }
}