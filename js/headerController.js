let presentBtn = null;

function 범례(idx) {
    legends = ["Setting", "Search", "Archives", "Categories", "Tags", "Demo", "More"];
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "WHITE";
    });
    if (presentBtn === idx) {
        presentBtn = null;
        localStorage.setItem('LEGEND_KEY', null);
    }
    else {
        presentBtn = idx
        localStorage.setItem('LEGEND_KEY', idx);
        document.getElementById(`legend${legends[idx]}`).style.display = "block";
        document.getElementById(`btn${legends[idx]}`).style.color = "#48D33A";
    }
}