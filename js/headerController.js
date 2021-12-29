let presentBtn = null;

const searchInput = document.getElementById("search-input");
searchInput.addEventListener('input', updateValue);

function updateValue(e) {
    initialize();
    if (e.length < 1) {
        container.style.display = "none";
        legendSearch.style.display = "none";
    } else {
        container.style.display = "block";
        legendSearch.style.display = "block";
    }
}

const container = document.querySelector('.container');
const legendSearch = document.getElementById("legendSearch");
const legends = ["Setting", "Search", "Archives", "Categories", "Tags"];

function initialize() {
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "#9d9d9d";
    });
}
function 범례(idx) {    
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

