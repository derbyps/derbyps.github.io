// i = baris, j= colom
function Element(color) {
    mainBodyDiv.setAttribute("style", `border: 1 px solid; background-color: ${color}; height: 27px; width: 27px`);
    if (color === "black") {
        mainBodyDiv.setAttribute("class", "wall");
    } else if (color === "grey") {
        mainBodyDiv.setAttribute("class", "street");
    }
}

var mainBody = document.getElementById("main");
for (i = 0; i < 21; i++) {
    for (j = 0; j < 21; j++) {
        var mainBodyDiv = document.createElement("div");
        mainBodyDiv.setAttribute("id", `c-${j}-b-${i}`);
        if (i === 0 || i === 21 - 1 || j === 0 || j === 21 - 1) {
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

function Hero(jum_hero) {
    for (no_hero = 0; no_hero < jum_hero; no_hero++) {
        if (no_hero == 0) {
            var xPos = 1;
            var yPos = 1;
        } else if (no_hero == 1) {
            var xPos = 21 - 1;
            var yPos = 21 - 1;
        }
        var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
        var span = document.createElement("span");
        let content = document.createTextNode("🚶");
        span.setAttribute('id', 'player')
        span.appendChild(content);
        heroPos.appendChild(span);
    }
}

function Move(xmove, ymove) {
    var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
    var area = document.getElementById(`c-${xPos+xmove}-b-${yPos+ymove}`);
    let isWall = area.className
    if (isWall == 'wall') {
        xPos += 0;
        yPos += 0;
    } else if (xmove === 0) {
        yPos += ymove;
    } else if (ymove === 0) {
        xPos += xmove;
    }
    var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
    orgPlayer = document.getElementById('player')
    heroPos.appendChild(orgPlayer);
}

var controlButton = document.body.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowDown') {
        Move(0, 1)
    } else if (event.code == 'ArrowUp') {
        Move(0, -1)
    } else if (event.code == 'ArrowLeft') {
        Move(-1, 0)
    } else if (event.code == 'ArrowRight') {
        Move(1, 0)
    }
});