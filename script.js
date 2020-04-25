// i = baris, j= colom
function Element(color) {
    mainBodyDiv.setAttribute("style", `border: 1 px solid; background-color: ${color}; height: 27px; width: 27px`)
}

var mainBody = document.getElementById("main");
for (i = 0; i < 21; i++) {
    for (j = 0; j < 21; j++) {
        var mainBodyDiv = document.createElement("div");
        mainBodyDiv.setAttribute("class", `c-${j}-b-${i}`);
        if (i === 0 || i === 20 || j === 0 || j === 20) {
            Element("black")
        } else if (i % 2 === 0) {
            if (j % 2 === 0) {
                Element("black")
            } else {
                var warna = ["black", "grey", "grey", "grey"]
                random_element = warna[Math.floor(Math.random() * warna.length)]
                Element(random_element)
            }
        } else if (j % 2 === 0) {
            if (i % 2 === 0) {
                Element("grey")
            } else {
                var warna = ["black", "grey", "grey", "grey"]
                random_element = warna[Math.floor(Math.random() * warna.length)]
                Element(random_element)
            }
        } else {
            Element("grey")
        }
        mainBody.appendChild(mainBodyDiv);
    }
}