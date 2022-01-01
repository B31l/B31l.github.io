let presentBtn = null;

const legendSearch = document.getElementById("legendSearch");
const searchInput = document.getElementById("search-input");
const container = document.querySelector('.container');

searchInput.addEventListener('input', e => {
    if (e.target.value.length === 0) {
        container.style.display = "none";
        legendSearch.style.display = "none";
    } else {
        container.style.display = "block";
        legendSearch.style.display = "block";
    }
});

