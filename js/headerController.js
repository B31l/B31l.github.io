function 범례(idx) {
    legends = ["Search", "Archives", "Categories", "Tags", "More"];
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "WHITE";
    });
    document.getElementById(`legend${legends[idx]}`).style.display = "block";
    document.getElementById(`btn${legends[idx]}`).style.color = "#FFCC33";
}