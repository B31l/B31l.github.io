function 범례(이름) {
    legends = ["legendArchives", "legendCategories", "legendTags", "legendSearch", "legendMore"];
    legends.forEach(element => {
        if (element === 이름) {
            document.getElementById(element).style.display = "block";
        } else {
            document.getElementById(element).style.display = "none";
        }
    });
}