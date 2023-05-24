function theGame(event) {
    event.preventDefault();
    console.log("(tu as perdu.)");

    var modal = document.getElementById("modal");

    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

function startGame() {
    console.log("Wahhhhhh le super jeu !");

    var modal = document.getElementsByClassName("modal-content")[0];
    modal.remove();
    var close = document.createElement("span");
    close.classList += "close";
    var content = document.createElement("div");
    content.classList += "modal-content";

    modal = document.getElementById("modal");
    modal.appendChild(content);

}