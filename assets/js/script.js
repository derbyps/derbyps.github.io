// i = baris, j= colom

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

function Element(color) {
    mainBodyDiv.setAttribute("style", `border: 1 px solid; background-color: ${color}; height: 27px; width: 27px`);
    if (color === "black") {
        mainBodyDiv.setAttribute("class", "wall");
    } else if (color === "grey") {
        mainBodyDiv.setAttribute("class", "street");
    }
}


var xPos1 = 1;
var yPos1 = 1;
var heroPos1 = document.getElementById(`c-${xPos1}-b-${yPos1}`);
var span1 = document.createElement("span1");
let content1 = document.createTextNode("🧟‍♂️");
span1.setAttribute('id', 'player1')
span1.appendChild(content1);
heroPos1.appendChild(span1);


function Move1(xMove1, yMove1) {
    var heroPos1 = document.getElementById(`c-${xPos1}-b-${yPos1}`);
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
    var check = document.getElementById('player1').parentNode;
    var check1 = check.children;
    if (check1.length == 2) {
        alert('Maling Menyerahkan diri')
    }
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
let content2 = document.createTextNode("👦");
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
    var check = document.getElementById('player2').parentNode;
    var check2 = check.children;
    if (check2.length == 2) {
        alert('Maling tertangkap')
    }
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


var bodyTimer = document.body

var button = document.createElement('button');
var buttonText = document.createTextNode('Play!');
button.appendChild(buttonText);
button.setAttribute("class", "play");
button.addEventListener('click', function(){
    var divTimer = document.createElement("div");
    divTimer.setAttribute("id", "timer");
    bodyTimer.appendChild(divTimer);
})
bodyTimer.appendChild(button);

Timer(2, 20)

let rulesButton = document.createElement('button');
let rulesButtonText = document.createTextNode('Rules');
rulesButton.appendChild(rulesButtonText);
rulesButton.setAttribute("id", "myBtn");
// rulesButton.addEventListener('click', function(){
    // alert("Cara bermain :<br><br>permainan ini dimainkan oleh dua orang. Dimana pemain pertama menjadi zombie dan pemain kedua menjadi pemburu zombie. Tugas zombie adalah kabur dari pemburu zombie dan tugas pemburu zombie adalah menangkap zombie.<br><br>Kontrol :<br>W : bergerak keatas&emsp;&emsp;&emsp;arrow up : bergerak keatas<br>A : bergerak kekiris&emsp;&emsp;&emsp;arrow left : bergerak kekiri<br>S : bergerak kebawah&emsp;&emsp;arrow down : bergerak kebawah<br>D : bergerak kekanan&emsp;&emsp;arrow right : bergerak kekanan<br><br>Kondisi kemenangan :<br>Zombie : tidak tertangkap pemburu sampai timer habis<br>Pemburu Zombie : menangkap zombie sebelum timer habis")
// })
bodyTimer.appendChild(rulesButton)
let rulesDiv = document.createElement('div');
rulesDiv.setAttribute("id", "myModal");
rulesDiv.setAttribute("class", "modal");
bodyTimer.appendChild(rulesDiv);

let innerRules = document.getElementById("myModal");
let innerRulesDiv = document.createElement('div');
innerRulesDiv.setAttribute("class", "modal-content");
innerRules.appendChild(innerRulesDiv)

let spanRules = document.getElementsByClassName("modal-content");
let spanContent = document.createElement('span');
let spanText = document.createElement('p');
spanContent.setAttribute("class", "close");
spanContent.innerHTML = "&times;"
spanText.innerHTML = "Cara bermain :<br><br>permainan ini dimainkan oleh dua orang. Dimana pemain pertama menjadi zombie dan pemain kedua menjadi pemburu zombie. Tugas zombie adalah kabur dari pemburu zombie dan tugas pemburu zombie adalah menangkap zombie.<br><br>Kontrol :<br>W : bergerak keatas&emsp;&emsp;&emsp;arrow up : bergerak keatas<br>A : bergerak kekiris&emsp;&emsp;&emsp;&nbsp;arrow left : bergerak kekiri<br>S : bergerak kebawah&emsp;&emsp;&nbsp;arrow down : bergerak kebawah<br>D : bergerak kekanan&emsp;&emsp;&nbsp;arrow right : bergerak kekanan<br><br>Kondisi kemenangan :<br>Zombie : tidak tertangkap pemburu sampai timer habis<br>Pemburu Zombie : menangkap zombie sebelum timer habis"
spanRules[0].appendChild(spanContent);  
spanRules[0].appendChild(spanText);

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let description = document.createElement('div');
// description.setAttribute("class", "desc");
// bodyTimer.appendChild(description)

// let descriptionText = document.getElementsByClassName("desc");
// descriptionText[0].innerHTML = "Cara bermain :<br><br>permainan ini dimainkan oleh dua orang. Dimana pemain pertama menjadi zombie dan pemain kedua menjadi pemburu zombie. Tugas zombie adalah kabur dari pemburu zombie dan tugas pemburu zombie adalah menangkap zombie.<br><br>Kontrol :<br>W : bergerak keatas&emsp;&emsp;&emsp;arrow up : bergerak keatas<br>A : bergerak kekiris&emsp;&emsp;&emsp;arrow left : bergerak kekiri<br>S : bergerak kebawah&emsp;&emsp;arrow down : bergerak kebawah<br>D : bergerak kekanan&emsp;&emsp;arrow right : bergerak kekanan<br><br>Kondisi kemenangan :<br>Zombie : tidak tertangkap pemburu sampai timer habis<br>Pemburu Zombie : menangkap zombie sebelum timer habis"

function Timer(min, sec) {
    window.onload = function() {
        var minutes = min;
        var second = sec;
        var myInterval = setInterval(function() {
            document.getElementById("timer").innerHTML = minutes + " : " + second;
            second--;
            if (second == -1) {
                minutes--;
                second = 60;
                if (minutes == -1) {
                    clearInterval(myInterval);
                    alert("Maling Menang")
                }
            } else if (second == 10) {
                var warna = ["black", "grey", "grey", "grey"]
                random_element = warna[Math.floor(Math.random() * warna.length)]
                Element(random_element)
            }
        }, 200);
    }
}
// Timer(2, 20)