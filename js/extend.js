const section = document.querySelector("section");
let state = false;
function extend() {
    if (!state)
        section.style.width = "calc(100% - 340px)";
    else
        section.style.width = "770px";
    state = !state;
}