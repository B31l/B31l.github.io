const page = document.querySelector(".page");
const section = document.querySelector("section");

let state = "off";
function extend() {
    state = window.localStorage.getItem("state");
    if (state === "on") {
        page.style.width = "1200px";
        section.style.width = "770px";
        window.localStorage.setItem("state", "off");
    }
    else {
        page.style.width = "100%";
        section.style.width = "calc(100% - 340px)";
        window.localStorage.setItem("state", "on");
    }
}