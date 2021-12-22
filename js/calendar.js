const ground = document.querySelector(".calendar > .c-body");
const cTitle = document.querySelector(".c-title");
const cDay = document.querySelector(".c-day");

CALENDAR_ROW = 6;
CALENDAR_COL = 7;

// functions
function init() {
    for (let i=0; i<CALENDAR_ROW; i++) {
        prependNewLine();
    }
    fillDate(2021, 12);
    fillDay();
    fillPlanColor();
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

function fillDate(year, month) {
    cTitle.innerText = `${year}.${month}`;
    month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) month_day[1] = 29;
    const firstDay = new Date(`${year}-${month}-01`).getDay();
    const box = document.querySelectorAll(".calendar > .c-body > li > ul > li");
    for(let i=1; i<=month_day[month-1]; i++) {
        temp = firstDay + i - 1;
        box[temp].innerText = i;
        if (temp % 7 == 0) box[temp].style.color = "Red";
        if (temp % 7 == 6) box[temp].style.color = "Blue";
    }
    const nowDay = new Date().getDate();
    box[firstDay + nowDay - 1].style.backgroundColor = "#48D33A";
}

function fillDay() {
    dayList = ["일", "월", "화", "수", "목", "금", "토"];

    for (let i=0; i<7; i++) {
        const li = document.createElement("li");
        cDay.prepend(li);
    }

    const cDayLi = document.querySelectorAll(".c-day > li");
    for (let i=0; i<7; i++) {
        cDayLi[i].innerText = dayList[i];
    }
}

function fillPlanColor() {
    color_list = ["grey", "orange", "gold", "yellow"];
    const strong = document.querySelectorAll("strong");
    for (let i=0; i<strong.length; i++) {
        strong[i].style.backgroundColor = color_list[i % color_list.length];
    }
}

init(); 