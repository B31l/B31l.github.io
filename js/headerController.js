let presentBtn = null;

const container = document.querySelector('.container');
const legendSearch = document.getElementById("legendSearch");
const searchInput = document.getElementById("search-input");
const legends = ["Setting", "Search", "Archives", "Categories", "Tags"];

function initialize() {
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "#9d9d9d";
    });
}

searchInput.addEventListener('input', e => {
    initialize();
    if (e.target.value.length === 0) {
        container.style.display = "none";
        legendSearch.style.display = "none";
    } else {
        container.style.display = "block";
        legendSearch.style.display = "block";
    }
});

function 메뉴(idx) {
    initialize();
    if (presentBtn === idx) {   // 클릭 취소
        presentBtn = null;
        container.style.display = "none"
    } else {                    // 다른 버튼 클릭
        presentBtn = idx
        container.style.display = "block";
        document.getElementById(`legend${legends[idx]}`).style.display = "block";
        document.getElementById(`btn${legends[idx]}`).style.color = "#48D33A";
    }
}

