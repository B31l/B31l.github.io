const ground = document.querySelector(".calendar-ground > ul");
const title = document.querySelector(".calendar-title");


CALENDAR_ROW = 6;
CALENDAR_COL = 7;

// functions
function init() {
    for (let i=0; i<CALENDAR_ROW; i++) {
        prependNewLine();
    }
    fillDay(2021, 12);
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
    title.innerText = `${year} - ${month}`;
    month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) month_day[1] = 29;
    const firstDay = new Date(`${year}-${month}-01`).getDay();
    const box = document.querySelectorAll(".calendar-ground > ul > li > ul > li");
    for(let i=1; i<=month_day[month-1]; i++) {
        box[firstDay + i - 1].innerText = i;
    }
    const nowDay = new Date().getDate();
    box[firstDay + nowDay - 1].style.backgroundColor = "#48D33A";
}

init(); 