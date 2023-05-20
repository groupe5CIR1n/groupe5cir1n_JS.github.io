let amountOfMembers = 0;

function editMode(button) {
    var buttonAdd = document.getElementById("addMember");
    if (button.innerHTML == "Retourner en vue du bas peuple") {
        var confirm = prompt("Sûr sûr ? En effectuant cette action, vous allez retourner dans la vue des gueux, et non pas de la puissance administrative ! (Y pour oui)", "L + ratio + palu");
        
        if (confirm == "Y") {
            // editMode = 0;
            button.innerHTML = "Edit mode";
            buttonAdd.style.visibility = "hidden";
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
                // editMode = 1;
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

function addMember() {
    var flexMembres = document.getElementsByClassName("flex-membres");
    var flexMembre = flexMembres[flexMembres.length -1];

    var gridMembre = document.createElement("div");
    gridMembre.className += "grid-membre";

    var imgMembre = document.createElement("img");
    imgMembre.className += "membre";
    imgMembre.src = "images/membres/Salima-Bourbia.png";
    
    if (amountOfMembers == 0) {
        var spe6 = document.getElementsByClassName("spe6")[0];
        spe6.style.visibility = "visible";
        amountOfMembers++;
    }
    
    console.log(flexMembre);
    flexMembre.appendChild(gridMembre);
    gridMembre.appendChild(imgMembre);
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

}

main();