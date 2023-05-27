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
    var modal = document.getElementsByClassName("modal-content")[0];
    modal.remove();
    var close = document.createElement("span");
    close.classList += "close";

    modal = document.getElementById("modal");

    var bicycle = document.createElement("img");
    bicycle.src = "images/game/bicycle.png";
    bicycle.style.width = "10%";
    bicycle.style.position = "absolute";
    bicycle.style.bottom = "145px";
    bicycle.style.left = "0px";
    modal.appendChild(bicycle);

    var doc = document.createElement("img");
    doc.src = "images/game/plane.png";
    doc.style.width = "10%";
    doc.style.position = "absolute";
    doc.style.bottom = "145px";
    doc.style.left = "300px";
    modal.appendChild(doc);

    var bin = document.createElement("img");
    bin.src = "images/game/bin.png";
    bin.style.width = "25%";
    bin.style.position = "absolute";
    bin.style.bottom = "100px";
    bin.style.right = "20px";
    modal.appendChild(bin);

    modal.style.background = "url('images/game/BG_Game.png')";
    modal.style.backgroundRepeat = "no-repeat";
    modal.style.backgroundPosition = "center bottom";
    modal.style.backgroundSize = "cover";

    var width = window.screen.width;
    var planeWidth = 380 + parseFloat(doc.style.left);
    var bicycleWidth = 380 + parseFloat(bicycle.style.left);

    var spaceBar = false;
    document.addEventListener("keydown", function(event) {
        console.log(event.code);
        if(event.code === "Space" && spaceBar == false && planeWidth < width && bicycleWidth < planeWidth - 100) {
            bicycleWidth += 12;
            bicycle.style.left = parseFloat(bicycle.style.left) + 12 + "px";
            spaceBar = true;
        }
    })

    document.addEventListener("keyup", function(event) {
        if(event.code === "Space") {
            spaceBar = false;
        }
    })
    move();

    function move() {
        if (planeWidth < width && bicycleWidth < planeWidth - 100) {
        doc.style.left = parseFloat(doc.style.left) + 1 + "px";
        planeWidth += 1;
        setTimeout(move, 10);
        }
        else {
            modal.style.background = "none";
            modal.style.backgroundColor = "rgba(0,0,0,0.4)";

            var content = document.createElement("div");
            content.classList += "modal-content";

            bicycle.remove();
            doc.remove();
            bin.remove();

            modal.appendChild(content);

            var p = document.createElement("p");
            content.appendChild(p);

            if (planeWidth >= width) {
                p.innerHTML = "Le document s'envole vers d'autres cieux, votre seule possibilité désormais est d'utiliser votre super machine à voyager dans le temps pour retaper l'entièreté de votre formulaire. Votre vision se trouble alors que vous sentez les douleurs musculaires vous envahir (fallait faire plus de sports et pas manger Mcdo pour pédaler plus vite sur le vélo, domaj L + ratio ptdr)."
                setTimeout(closePage, 5000);
            }
            else {
                var close = document.createElement("span");
                close.classList += "close";
                close.innerHTML = "&times;";
                close.onclick = function() {
                    closeModal(this.parentNode.parentNode);
                }
                p.innerHTML = "Vous rattrapez l'avion à temps avec vos jambes de Warrior (et vos doigts de G@MERZ !) et attrapez le document juste à temps. Votre document a bien été envoyé. (bon après, faut qu'on gagne le même jeu pour pouvoir le lire, mais ça faut pas le dire...)"
                content.insertBefore(close, p);
            }
        }
    }
}

function textAreas() {
    var errs = document.getElementsByClassName("errorForm");
    var inName = document.getElementById("inName");
    var inMail = document.getElementById("emailAddress");
    var inMsg = document.getElementById("subject");
    var submit = document.getElementById("submit");

    var nameValid = false;
    var mailValid = 0;

    var finished = true;

    for (var i = 0; i < inName.value.length; i++) {
        if (inName.value[i] === " ") {
            if (inName.value[i+1] != null) {
                errs[0].style.display = "none";
                nameValid = true;
            }
        }
    }
    if (!nameValid) {
        errs[0].style.display = "block";
    }

    for (var i = 0; i < inMail.value.length; i++) {
        if (inMail.value[i] === "@") {
            mailValid = 1;
        }
        if (inMail.value[i] === "." && mailValid == 1) {
            errs[1].style.display = "none";
            mailValid = 2;
        }
    }
    if (mailValid != 2) {
        errs[1].style.display = "block";
    }

    if (inMsg.value.length < 20 || inMsg.value.length > 1000) {
        errs[2].style.display = "block";
    }
    else {
        errs[2].style.display = "none";
    }

    for (let i = 0; i < errs.length; i++) {
        if (errs[i].style.display != "none") {
            finished = false;
        }
    }

    if (finished) {
        submit.disabled = false;
        submit.backgroundColor = "none";
    }
    else {
        submit.disabled = true;
        submit.backgroundColor = "red";
    }
}

function closePage() {
    location.reload(true);
}