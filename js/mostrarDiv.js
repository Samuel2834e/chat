function showChat(event) {
    event.preventDefault();
    document.getElementById('chat').style.display = 'block';
    document.getElementById('op').style.display = 'block';


}

function mostrarSalas() {
    let salasDiv = document.getElementById("salasDiv");
    if (salasDiv.style.display === "none") {
        salasDiv.style.display = "block";
    } else {
        salasDiv.style.display = "none";
    }

}