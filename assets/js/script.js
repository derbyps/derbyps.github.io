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


var xPos1 = 1;
var yPos1 = 1;
var heroPos1 = document.getElementById(`c-${xPos1}-b-${yPos1}`);
var span1 = document.createElement("span1");
let content1 = document.createTextNode("🚶");
span1.setAttribute('id', 'player1')
span1.appendChild(content1);
heroPos1.appendChild(span1);


function Move1(xMove1, yMove1) {
    var heroPos = document.getElementById(`c-${xPos1}-b-${yPos1}`);
    var area = document.getElementById(`c-${xPos1+xMove1}-b-${yPos1+yMove1}`);
    let isWall = area.className
    if (isWall == 'wall') {
        xPos1 += 0;
        yPos1 += 0;
    } else if (xMove1 === 0) {
        yPos1 += yMove1;
    } else if (yMove1 === 0) {
        xPos1 += xMove1;
    }
    var heroPos1 = document.getElementById(`c-${xPos1}-b-${yPos1}`);
    orgPlayer1 = document.getElementById('player1')
    heroPos1.appendChild(orgPlayer1);
}

var controlButton = document.body.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowDown') {
        Move1(0, 1)
    } else if (event.code == 'ArrowUp') {
        Move1(0, -1)
    } else if (event.code == 'ArrowLeft') {
        Move1(-1, 0)
    } else if (event.code == 'ArrowRight') {
        Move1(1, 0)
    }
});

var xPos2 = 19;
var yPos2 = 19;
var heroPos2 = document.getElementById(`c-${xPos2}-b-${yPos2}`);
var span2 = document.createElement("span2");
let content2 = document.createTextNode("🚶");
span2.setAttribute('id', 'player2')
span2.appendChild(content2);
heroPos2.appendChild(span2);


function Move2(xMove2, yMove2) {
    var heroPos2 = document.getElementById(`c-${xPos2}-b-${yPos2}`);
    var area = document.getElementById(`c-${xPos2+xMove2}-b-${yPos2+yMove2}`);
    let isWall = area.className
    if (isWall == 'wall') {
        xPos2 += 0;
        yPos2 += 0;
    } else if (xMove2 === 0) {
        yPos2 += yMove2;
    } else if (yMove2 === 0) {
        xPos2 += xMove2;
    }
    var heroPos2 = document.getElementById(`c-${xPos2}-b-${yPos2}`);
    orgPlayer2 = document.getElementById('player2')
    heroPos2.appendChild(orgPlayer2);
}

var controlButton = document.body.addEventListener('keyup', (event) => {
    if (event.code == 'KeyS') {
        Move2(0, 1)
    } else if (event.code == 'KeyW') {
        Move2(0, -1)
    } else if (event.code == 'KeyA') {
        Move2(-1, 0)
    } else if (event.code == 'KeyD') {
        Move2(1, 0)
    }
});