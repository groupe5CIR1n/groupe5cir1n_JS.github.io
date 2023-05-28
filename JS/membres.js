let debug = 0;

function editMode(button) {
    var buttonAdd = document.getElementById("addMember");
    if (button.innerHTML == "Retourner en vue du bas peuple") {
        var confirm = prompt("Sûr sûr ? En effectuant cette action, vous allez retourner dans la vue des gueux, et non pas de la puissance administrative ! (Y pour oui)", "L + ratio + palu");
        
        if (confirm == "Y") {
            button.innerHTML = "Edit mode";
            buttonAdd.style.visibility = "hidden";

            var deleteButtons = document.getElementsByClassName("delete");

            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].style.visibility = "hidden";
            }
        }
        return;
    }

    if (button.innerHTML == "Edit mode") {
        console.log("Entering edit mode...");
        var adminName = prompt("Entrer le nom d'utilisateur :", "The GAME");

        if (adminName == "admin" || adminName == "le nom d'utilisateur") {
            var adminPwd = prompt("Entrer le mot de passe :", "juste ici");
            if (adminPwd == "admin_pwd") {
                button.innerHTML = "Retourner en vue du bas peuple";
                buttonAdd.style.visibility = "visible";
                
                var deleteButtons = document.getElementsByClassName("delete");

                for (let i = 0; i < deleteButtons.length; i++) {
                    deleteButtons[i].style.visibility = "visible";
                }
            }
            else {
                alert("Mot de passe incorrect (ce message est normal pour une fois, wow... Enfin plus maintenant.)")
            }
        }
        else {
            alert("Bien tenté brigand !");
        }
    }
}

function newMemberName(membre) {
    var button = document.getElementById("buttonEdit");
    if (button.innerHTML == "Retourner en vue du bas peuple") {
        var newName = prompt("Entrez ci-dessous le nouveau nom à donner au membre " + membre.innerHTML, "nouveauNom");
        if (newName != null) {
            membre.innerHTML = newName;
        }
    }
}

function addMember() {
    var flexMembres = document.getElementsByClassName("flex-membres");
    var flexMembre = flexMembres[0];

    var gridMembre = document.createElement("div");
    gridMembre.className += "grid-membre";

    var imgMembre = document.createElement("img");
    imgMembre.className += "membre";
    imgMembre.src = "images/membres/Salima-Bourbia.png";

    var grid = document.createElement("div");
    grid.classList += "grid";

    var nameMembre = document.createElement("h5");
    nameMembre.innerHTML = "Nouveau membre";

    var descr = document.createElement("p");
    descr.classList += "description-membre";
    descr.innerHTML = "description du membre";
    
    var descr2 = document.createElement("p");
    descr2.classList += "description-membre";
    descr2.innerHTML = "ISEN Yncréa Ouest - Nantes";

    var mail = document.createElement("a");
    mail.href = "mailto:mailTemporaire@temp.temp";
    mail.classList += "description-membre";
    mail.innerHTML = mail.href.substring(7);

    var tags = document.createElement("div");
    tags.classList += "flex-tags";

    var tag = document.createElement("div");
    tag.classList += "tag";
    tag.innerHTML = "temp Tag";

    var button = document.createElement("button");
    button.classList += "delete";
    button.innerHTML = "X - Supprimer (monstre !)";
    button.onclick = deleteMembre;
    
    flexMembre.appendChild(gridMembre);
    gridMembre.appendChild(imgMembre);
    gridMembre.appendChild(grid);
    grid.appendChild(nameMembre);
    grid.appendChild(descr);
    grid.appendChild(descr2);
    grid.appendChild(mail);
    grid.appendChild(tags);
    tags.appendChild(tag);
    gridMembre.appendChild(button);
    
    gridMembre.onclick = function() {modal(this)};
}

function deleteMembre() {
    this.parentNode.remove();
}

function modal(membre) {
    var buttonAdd = document.getElementById("buttonEdit");
    if (buttonAdd.innerHTML != "Edit mode") {
        return;
    }
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    var grid = modal.getElementsByClassName("modal-content")[0];
    var membreDetails = membre.getElementsByClassName("grid-membre");
    var membreCloned = membre.cloneNode(true);

    grid.appendChild(membreCloned);
}

function closeModal(membre) {
    membre.style.display = "none";
    var membre = membre.getElementsByClassName("grid-membre")[0];
    membre.remove();
}

function main() {
    var doc = document.getElementsByTagName("button")[2];
    var parentNode = document.getElementsByTagName("button")[2].parentNode;
    var buttonAdd = document.createElement("button");
    buttonAdd.id = "addMember";
    buttonAdd.style.visibility = "hidden";
    buttonAdd.innerHTML = "Ajouter membre";
    buttonAdd.onclick = addMember;

    parentNode.insertBefore(buttonAdd, doc);

    if (debug == 1) {
        console.log("Debug mode actif...");
        var buttonAdd = document.getElementById("addMember");
        var button = document.getElementById("buttonEdit");
        button.innerHTML = "Retourner en vue du bas peuple";
        buttonAdd.style.visibility = "visible";
    }

    var bigCache = document.getElementById("cache");
    
    for(let j=0;j<20;j++){

        for(let i=0;i<42;i++){
            var allreadyther = bigCache.innerHTML;
            var newCache = document.createElement('div');
            newCache.setAttribute("id","cube");
            newCache.setAttribute("onmouseover","cubeFear(this)");
    
            newCache.style.gridColumn=i+'/'+(i+1);
            newCache.style.gridRow = j+'/'+(j+1);
            bigCache.innerHTML=allreadyther+newCache.outerHTML;
        }
    }
    
    var allreadyther = bigCache.innerHTML;
    bigCache.innerHTML= allreadyther+'</div><img id="ayoub" class="membre" src="images/membres/Ayoub-Karine.png">'
    console.log(bigCache.childNodes);
}

function cubeFear(pos){
    pos.remove();
    pos.style.display='none';
}

main();