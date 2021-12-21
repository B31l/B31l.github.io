const ground = document.querySelector(".calendar-ground > ul");

CALENDAR_ROW = 7;
CALENDAR_COL = 7;

// functions
function init() {
    for (let i=0; i<CALENDAR_ROW; i++) {
        prependNewLine();
        fillDay(2022, 01);
    }
}

function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j=0; j<CALENDAR_COL; j++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    ground.prepend(li);
}

function fillDay(year, month) {
    const firstDay = new Date(`${year}-${month}-01`).getDay()
    const fl = document.querySelectorAll(".calendar-ground > ul > li > ul > li")[firstDay];
    fl.innerText = "1";
}

init();