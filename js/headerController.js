function 범례(idx) {
    legends = ["Search", "Archives", "Categories", "Tags", "More"];
    legends.forEach(Element => {
        document.getElementById(`legend${Element}`).style.display = "none";
        document.getElementById(`btn${Element}`).style.color = "WHITE";
    });
    localStorage.setItem('LEGEND_KEY', idx);
    document.getElementById(`legend${legends[idx]}`).style.display = "block";
    document.getElementById(`btn${legends[idx]}`).style.color = "#FFCC33";
}

let activation;
function 설정() {
    const settingDisplay = document.getElementById('settingBox')
    if (activation === false) {
        settingDisplay.style.display = "block";
        activation = true;
    } else {
        settingDisplay.style.display = "none"
        activation = false;
    }
}