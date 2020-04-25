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


var xPos = 1;
var yPos = 1;
var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
var span1 = document.createElement("span");
let content1 = document.createTextNode("🚶");
span1.setAttribute('id', 'player')
span1.appendChild(content1);
heroPos.appendChild(span1);

// function Move() {

//     var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
//     yPos += 1;
//     var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
//     let isWall = heroPos.className

//     if (isWall != 'wall') {

//         // heroPos1.removeChild(heroPos1.childNodes[0]);
//         // var span1 = document.createElement("span");
//         // let content1 = document.createTextNode("🚶");
//         orgPlayer = document.getElementById('player')
//             // span1.appendChild(content1);
//     }
//     heroPos.appendChild(orgPlayer);


// }

function Move(xmove, ymove) {
    var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
    let isWall = heroPos.className
    if (xmove === 0) {
        yPos += ymove;
    } else if (ymove === 0) {
        xPos += xmove;
    }
    var heroPos = document.getElementById(`c-${xPos}-b-${yPos}`);
    orgPlayer = document.getElementById('player')
    heroPos.appendChild(orgPlayer);
}


// controlButton = document.body
// let key = ''

var controlButton = document.body.addEventListener('keydown', (event) => {
    // console.log(`key=${event.key},code=${event.code}`);
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

// console.log(key)