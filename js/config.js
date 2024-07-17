document.getElementById("imgConfig").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
    const elements = document.getElementsByClassName("btn-class-name");
    for (const element of elements) {
        element.style.display = "none";
    }
    document.getElementById('chat').style.display = "none";
    document.getElementById("cardWave").style.display = "none";
});

function fecharModal() {
    document.getElementById("myModal").style.display = "none";
    const elements = document.getElementsByClassName("btn-class-name");
    for (const element of elements) {
        element.style.display = "block";
    }
    document.getElementById("cardWave").style.display = "block";
}
let fontPx = 16; 

function aumentarFonte() {
    if (fontPx < 25) {
        fontPx += 1; 
        document.body.style.fontSize = fontPx + "px"; 
        let chatFont = document.getElementById("chatMsgs");
        chatFont.style.fontSize = fontPx + "px";
        localStorage.setItem("fontSize", fontPx);
    }

}

function diminuirFonte(){
    if (fontPx > 8) {
        fontPx -= 1; 
        document.body.style.fontSize = fontPx + "px"; 
        let chatFont = document.getElementById("chatMsgs");
        chatFont.style.fontSize = fontPx + "px";
        localStorage.setItem("fontSize", fontPx);
    }
}

function mudarCor() {
    const bgColor = document.getElementById("bgColor").value;
    if (bgColor === "#ffffff"){
        let fOne = document.getElementById("fieldOne");
        fOne.style.backgroundColor = "#e3e3e6e0";

        let fTwo = document.getElementById("fieldTwo");
        fTwo.style.backgroundColor = "#e3e3e6e0";

        document.getElementById("heading").style.color = "black";

        document.getElementById("pesquisarMsg").style.backgroundColor = "#e3e3e6e0";
    }
    if (bgColor === "#000000"){
        let fOne = document.getElementById("fieldOne");
        fOne.style.backgroundColor = "#e3e3e6e0";

        let fTwo = document.getElementById("fieldTwo");
        fTwo.style.backgroundColor = "#e3e3e6e0";

        document.getElementById("heading").style.color = "#ffffff";
    }
    document.body.style.backgroundColor = bgColor;
    let app = document.getElementById("appMsgs");
    app.style.backgroundColor = bgColor;
    localStorage.setItem("bgColor", bgColor);
}



document.addEventListener("DOMContentLoaded", function () {
    let bgColor = localStorage.getItem("bgColor");
    if (bgColor === "#ffffff"){
        let fOne = document.getElementById("fieldOne");
        fOne.style.backgroundColor = "#e3e3e6e0";

        let fTwo = document.getElementById("fieldTwo");
        fTwo.style.backgroundColor = "#e3e3e6e0";

        document.getElementById("heading").style.color = "black";

        document.getElementById("pesquisarMsg").style.backgroundColor = "#e3e3e6e0";
    }
    document.body.style.backgroundColor = bgColor;
    let app = document.getElementById("appMsgs");
    app.style.backgroundColor = bgColor;

    let fontSize = localStorage.getItem("fontSize", fontPx);
    document.body.style.fontSize = fontSize + "px";

    let chatFont = document.getElementById("chatMsgs");
    chatFont.style.fontSize = fontSize + "px";
}); 