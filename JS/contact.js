let vitessePlane = 2000;
let vitessePlayer = 220;

// This function generates the game once the form is finished and sent.
function theGame(event) {
    event.preventDefault(); // Prevents the reload of the page to execute this function.
    console.log("(tu as perdu.)"); // (reference to The Game)

    var modal = document.getElementById("modal"); // We obtain the modal element...
    modal.style.display = "block"; // And display it to show the message.
}

// Allows the user to close the modal with the cross (in case they did a typo or something).
function closeModal(modal) {
    modal.style.display = "none"; // Hides the modal.
}

function demoMode() {
    var password = prompt("Merci d'écrire le mot de passe nécessaire pour accéder à la version démo :");
    if (password == "Derpy") {
        alert("Mot de passe correct (s'il vous plaît dites-moi que tout le code marche) (Vive derpy aussi)")
        vitessePlayer = 75;
    }
    else {
        alert("Tricheur ! (bon en vrai si tu connais cette commande c'est que tu as regardé le code donc tu connais le mot de passe ptdr");
    }
}

// Main function for the game (it's really long, good luck reading that.)
function startGame() {
    var modal = document.getElementsByClassName("modal-content")[0]; // We obtain the content of the modal...
    modal.remove(); // And remove it.
    var close = document.createElement("span");
    close.classList += "close";

    modal = document.getElementById("modal");

    // We take the width of the webpage depending of the user screen (and dimensions of the window).
    var width = window.innerWidth;

    // Used for the bicycle (player)
    var bicycle = document.createElement("img");
    bicycle.src = "images/game/bicycle.png"; // We create an image with the good source.
    bicycle.style.width = "10%";
    bicycle.style.position = "absolute"; // We set its position to absolute to be able to move it freely.
    bicycle.style.bottom = "145px"; // The ground is roughly 145px from the bottom, so the background will always have the bottom at 145px of the base.
    bicycle.style.left = "0px"; // We start at the left.
    modal.appendChild(bicycle);

    // Used for the plane (document, "AI").
    var doc = document.createElement("img");
    doc.src = "images/game/plane.png";
    doc.style.width = "10%";
    doc.style.position = "absolute"; // Same things basically
    doc.style.bottom = "145px";
    doc.style.left = width/10 + "px"; // We start few pixels away (cause else there wouldn't be any game).
    modal.appendChild(doc);

    // Bin, used for the "finish line" - where the plane will stop.
    var bin = document.createElement("img");
    bin.src = "images/game/bin.png";
    bin.style.width = "25%";
    bin.style.position = "absolute";
    bin.style.bottom = "100px";
    bin.style.right = "20px"; // The plane will be 20px away from the right of the page.
    modal.appendChild(bin);

    // Used for the background: covers the whole screen, and bottom always visible.
    modal.style.background = "url('images/game/BG_Game.png')";
    modal.style.backgroundRepeat = "no-repeat";
    modal.style.backgroundPosition = "center bottom";
    modal.style.backgroundSize = "cover";


    var planeWidth = 380 + parseFloat(doc.style.left); // We take the position of the plane (and get rid of "px" at the end), then add 380 (cause the pics are 380*380px)
    var bicycleWidth = 380 + parseFloat(bicycle.style.left); // Same for bike.
    console.log(width);

    var spaceBar = false; // We will use this variable to know if the user releases their spacebar or not.
    document.addEventListener("keydown", function(event) { // When the user holds down a key...
        if(event.code === "Space" && spaceBar == false && planeWidth < width && bicycleWidth < planeWidth - 100) { // If the key is space and it's not held down, and we didn't reach a win/lose condition...
            bicycleWidth += width/vitessePlayer; // We add 0.5% of the screen width to the position of the bicycle.
            bicycle.style.left = parseFloat(bicycle.style.left) + width/vitessePlayer + "px";
            spaceBar = true; // And spacebar = true to avoid holding the button.
        }
    })

    document.addEventListener("keyup", function(event) { // When a key is released...
        if(event.code === "Space") { // If the key is spacebar...
            spaceBar = false; // spacebar = false to be able to play again.
        }
    })
    move();

    function move() {
        if (planeWidth < width && bicycleWidth < planeWidth - 100) { // If we didn't reach a win/lose condition...
        doc.style.left = parseFloat(doc.style.left) + width/vitessePlane + "px"; // We move the plane by few pixels depending of the screen size...
        planeWidth += width/vitessePlane; // We keep the position of the plane in a variable.
        setTimeout(move, 10); // We repeat it each 0.01s.
        }
        else { // If we reached a win/lose condition...
            // We remove everything and change the background back to what it was (instead of the background of the game).
            modal.style.background = "none";
            modal.style.backgroundColor = "rgba(0,0,0,0.4)";

            var content = document.createElement("div");
            content.classList += "modal-content";

            bicycle.remove();
            doc.remove();
            bin.remove();

            modal.appendChild(content);

            // We add a paragraph...
            var p = document.createElement("p");
            content.appendChild(p);

            if (planeWidth >= width) { // If the plane reached the end of screen (bin)...
                // We change the paragraph to the losing text.
                p.innerHTML = "Le document s'envole vers d'autres cieux, votre seule possibilité désormais est d'utiliser votre super machine à voyager dans le temps pour retaper l'entièreté de votre formulaire. Votre vision se trouble alors que vous sentez les douleurs musculaires vous envahir (fallait faire plus de sports et pas manger Mcdo pour pédaler plus vite sur le vélo, domaj L + ratio ptdr)."
                setTimeout(closePage, 5000); // And we close the page 5s later.
            }
            else { 
                // Else we show the cross to close the modal
                var close = document.createElement("span");
                close.classList += "close";
                close.innerHTML = "&times;";
                close.onclick = function() { // Add it the ability to actually close it...
                    closeModal(this.parentNode.parentNode);
                }
                // And show the winning message.
                p.innerHTML = "Vous rattrapez l'avion à temps avec vos jambes de Warrior (et vos doigts de G@MERZ !) et attrapez le document juste à temps. Votre document a bien été envoyé. (bon après, faut qu'on gagne le même jeu pour pouvoir le lire, mais ça faut pas le dire...)"
                content.insertBefore(close, p);
            }
        }
    }
}

// This function checks all the text areas to see if they're respecting the conditions or not. (Called onkeyup)
function textAreas() {
    var errs = document.getElementsByClassName("errorForm"); // Errs will be the error messages on the webpage.
    // Those are the different elements where we need to check errors...
    var inName = document.getElementById("inName");
    var inMail = document.getElementById("emailAddress");
    var inMsg = document.getElementById("subject");
    var submit = document.getElementById("submit"); // This is the submit button, to make it able to be pressed or not

    // Those are used later on, because we need many conditions for one check to be good.
    var nameValid = false;
    var mailValid = 0;

    // Finished is initialized as true and is changed if one of the check returns false.
    var finished = true;

    // We check the whole name...
    for (var i = 1; i < inName.value.length; i++) {
        if (inName.value[i] === " ") { // If one char is a space...
            if (inName.value[i+1] != null && inName.value[i-1] != null) { // And the next one is a letter...
                errs[0].style.display = "none"; // We hide the error.
                nameValid = true; // And keep in mind that the name is valid
            }
        }
    }
    if (!nameValid) { // If it's not,
        errs[0].style.display = "block"; // We show the error code.
    }

    // We check each char of the mail
    for (var i = 1; i < inMail.value.length; i++) {
        if (inMail.value[i] === "@") { // If one char is an @...
            mailValid = 1; // We set mailValid to 1.
        }
        if (inMail.value [i-1] != "@" && inMail.value[i] === "." && mailValid == 1 && inMail.value.length > i+1) { // If we already had an @ and we have a point...
            errs[1].style.display = "none"; // We hide the error
            mailValid = 2; // And set mailValid to 2.
        }
    }
    if (mailValid != 2) { // If the mail isn't valid,
        errs[1].style.display = "block"; // We show the error.
    }

    if (inMsg.value.length < 20 || inMsg.value.length > 1000) { // We take the length of the message, if it's < 20 or > 1000
        errs[2].style.display = "block"; // We show the error code.
    }
    else {
        errs[2].style.display = "none"; // Else, we hide it.
    }

    for (let i = 0; i < errs.length; i++) {
        if (errs[i].style.display != "none") { // If one of the error isn't hidden...
            finished = false; // That means the form isn't finished
        }
    }

    if (finished) { // If the form is finished
        submit.disabled = false; // We allow the user to submit the form
        submit.backgroundColor = "none"; // And resets the background for clarity
    }
    else { // If it's not...
        submit.disabled = true; // We disable the submit button
        submit.backgroundColor = "red"; // And make it red to make it easier for the user
    }
}

// This function just reloads the page, it's used when we lose the game.
function closePage() {
    location.reload(true);
}