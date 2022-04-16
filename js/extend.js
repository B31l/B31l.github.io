const page = document.querySelector(".page");
const section = document.querySelector("section");

let state = "off"
function extend() {
    state = window.localStorage.getItem("state");
    if (state === "off") {
        window.localStorage.setItem("state", "on");
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
    }
    else {
        window.localStorage.setItem("state", "off");
        page.style.width = "1200px";
        section.style.width = "770px";
    }
}