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
    month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) month_day[1] = 29;

    const fl = document.querySelectorAll(".calendar-ground > ul > li > ul > li");
    const firstDay = new Date(`${year}-${month}-01`).getDay();
    const arrayDay = [];
    for (let i=0; i<7; i++) {
        arrayDay.push((firstDay + i) % 7);
    }
    for (let i=0; i<month_day[month-1]; i++) {
        fl[arrayDay[firstDay]].innerText = "i";
    }
    // fl[firstDay].innerText = "1";
}

init();