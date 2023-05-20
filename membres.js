function editMode(button) {
    if (button.innerHTML == "Retourner en vue du bas peuple") {
        let confirm = prompt("Sûr sûr ? En effectuant cette action, vous allez retourner dans la vue des gueux, et non pas de la puissance administrative ! (Y pour oui)", "L + ratio + palu");
        
        if (confirm == "Y") {
            button.innerHTML = "Edit mode";
        }
        return;
    }

    if (button.innerHTML == "Edit mode") {
        console.log("Entering edit mode...");
        let adminName = prompt("Entrer le nom d'utilisateur :", "The GAME");

        if (adminName == "admin" || adminName == "le nom d'utilisateur") {
            let adminPwd = prompt("Entrer le mot de passe :", "juste ici");
            if (adminPwd == "admin_pwd") {
                button.innerHTML = "Retourner en vue du bas peuple";


            }
            else {
                alert("Mot de passe incorrect (ce message est normal pour une fois, wow... Enfin plus maintenant.)")
            }
        }
        else {
            alert("Bien tenté brigand !");
        }
        console.log("blep");
    }
}

function tests() {
    let doc = document.getElementsByTagName("button")[2];
    let parentNode = document.getElementsByTagName("button")[2].parentNode;
    let buttonAdd = document.createElement("button");
    // buttonAdd.classList.append("buttonAdd");
    buttonAdd.innerHTML = "Ajouter membre";

    parentNode.insertBefore(buttonAdd, doc);

    console.log(doc);
}

tests();