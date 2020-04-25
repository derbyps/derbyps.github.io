// i = baris, j= colom
var mainBody = document.getElementById("main");
for(i=0; i<22; i++){
    for(j=0; j<22; j++){
        var mainBodyDiv = document.createElement("div");
        let content = document.createTextNode(`c-${j+1}-b-${i+1}`)
        mainBodyDiv.setAttribute("class", `c-${j}-b-${i}`);
        if (i===0 || i === 21 || j === 0 || j === 21){
        mainBodyDiv.setAttribute("style", "border: 1px solid; background-color: black; height:50px; weight:50px;")
        mainBodyDiv.appendChild(content)
        mainBody.appendChild(mainBodyDiv);
    }else {
        mainBodyDiv.setAttribute("style", "border: 1px solid; background-color: grey; height:50px; weight:50px;")
        mainBodyDiv.appendChild(content)
        mainBody.appendChild(mainBodyDiv);
    }
}
}