let presentBtn = null;

function 범례(idx) {
    legends = ["Setting", "Search", "Archives", "Categories", "Tags"];
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "#9d9d9d";
    });
    if (presentBtn === idx) {
        presentBtn = null;
        // localStorage.setItem('LEGEND_KEY', null);
        document.querySelector('.container').style.display = "none"
    }
    else {
        presentBtn = idx
        // localStorage.setItem('LEGEND_KEY', idx);
        document.querySelector('.container').style.display = "block"
        document.getElementById(`legend${legends[idx]}`).style.display = "block";
        document.getElementById(`btn${legends[idx]}`).style.color = "#48D33A";
    }
}