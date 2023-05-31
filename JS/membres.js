let debug = 1; // Variable allowing to be directly in edit mode.

// Function linked to the edit mode.
function editMode(button) {
    var buttonAdd = document.getElementById("addMember"); // We take in consideration the button to switch to edit mode
    if (button.innerHTML == "Retourner en vue du bas peuple") { // This will execute if we're already in edit mode
        var confirm = prompt("Sûr sûr ? En effectuant cette action, vous allez retourner dans la vue des gueux, et non pas de la puissance administrative ! (Y pour oui)", "L + ratio + palu"); // Asks for user confirmation
        
        if (confirm == "Y") { // If confirmed
            button.innerHTML = "Edit mode"; // We switch back to normal mode
            buttonAdd.style.visibility = "hidden"; // And hide the button to add a member

            var deleteButtons = document.getElementsByClassName("delete"); // We take all the buttons that allowed us to delete a member

            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].style.visibility = "hidden"; // And hide them one by one
            }
        }
        return;
    }

    if (button.innerHTML == "Edit mode") { // Else, if we're in normal mode...
        console.log("Entering edit mode...");
        var adminName = prompt("Entrer le nom d'utilisateur :", "The GAME"); // We ask for the user name

        if (adminName == "admin" || adminName == "le nom d'utilisateur") { // If it's correct
            var adminPwd = prompt("Entrer le mot de passe :", "juste ici"); // We ask for the password
            if (adminPwd == "admin_pwd" || adminPwd == "le mot de passe") {
                if (adminPwd == "le mot de passe") {
                    alert("Petit malin...");
                }
                button.innerHTML = "Retourner en vue du bas peuple"; // We switch the button to pass in normal mode if clicked again
                buttonAdd.style.visibility = "visible"; // And show the button to add members
                
                var deleteButtons = document.getElementsByClassName("delete"); // We take all the buttons to delete a member

                for (let i = 0; i < deleteButtons.length; i++) {
                    deleteButtons[i].style.visibility = "visible"; // And show them one by one
                }
            }
            else {
                alert("Mot de passe incorrect (ce message est normal pour une fois, wow... Enfin plus maintenant.)") // Shows if the password isn't correct
            }
        }
        else {
            alert("Bien tenté brigand !"); // Shows if the username isn't correct
        }
    }
}

// Function allowing to change the name of a member. Executes when the user click on a name.
function newMemberName(membre) {
    var button = document.getElementById("buttonEdit"); // We take the button to switch to edit mode
    if (button.innerHTML == "Retourner en vue du bas peuple") { // If we're in edit mode...
        var newName = prompt("Entrez ci-dessous le nouveau nom à donner au membre " + membre.innerHTML, "nouveauNom"); // We ask the user to input the new name
        if (newName != null) { // If it's not null...
            membre.innerHTML = newName; // We replace it.
        }
        if (newName == "Derpy") {
        membre.parentNode.parentNode.children[0].src = "images/derpi.gif"
        }
        else {
            if (newName == "Ayoub Karine") {
                membre.parentNode.parentNode.children[0].src = "images/membres/Ayoub-Karine.png"
            }
            else {
                if (newName == "Djamel Benarab") {
                    membre.parentNode.parentNode.children[0].src = "images/membres/Djamel-Benarab.png"
                }
                else {
                    if (newName == "Maher Jridi") {
                        membre.parentNode.parentNode.children[0].src = "images/membres/Maher-Jridi.png"
                    }
                    else {
                        if (newName == "Salima Bourbia") {
                            membre.parentNode.parentNode.children[0].src = "images/membres/Salima-Bourbia.png"
                        }
                        else {
                            if (newName == "Sylvain Lefebvre") {
                                membre.parentNode.parentNode.children[0].src = "images/membres/Sylvain-Lefebvre.png"
                            }
                            else {
                                membre.parentNode.parentNode.children[0].src = "images/membres/questionmarkPerson.png";
                            }
                        }
                    }
                }
            }
        }
    }
}

// Function used to add a new member thanks to the button.
function addMember() {
    // We take the right position to add the members.
    var flexMembres = document.getElementsByClassName("flex-membres");
    var flexMembre = flexMembres[0];

    // We create all elements needed for a member...
    var gridMembre = document.createElement("div");
    gridMembre.className += "grid-membre";
    gridMembre.onclick = function() {modal(this)}; // And when we click on the member, it shows in the modal as expected.

    var imgMembre = document.createElement("img");
    imgMembre.className += "membre";
    imgMembre.src = "images/membres/questionmarkPerson.png";

    var grid = document.createElement("div");
    grid.classList += "grid";

    var nameMembre = document.createElement("h5");
    nameMembre.innerHTML = "Nouveau membre";
    nameMembre.onclick = function() {newMemberName(this)};

    var descr = document.createElement("p");
    descr.classList += "description-membre";
    descr.innerHTML = "description du membre";
    
    var descr2 = document.createElement("p");
    descr2.classList += "description-membre";
    descr2.innerHTML = "ISEN Yncréa Ouest - Nantes";

    var mail = document.createElement("a");
    mail.href = "mailto:mailTemporaire@temp.temp";
    mail.classList += "description-membre";
    mail.innerHTML = mail.href.substring(7); // The showed mail will be the same as the link, substring is used to not show the "mailto:"

    var tags = document.createElement("div");
    tags.classList += "flex-tags";

    var tag = document.createElement("div");
    tag.classList += "tag";
    tag.innerHTML = "temp Tag";

    var button = document.createElement("button");
    button.classList += "delete";
    button.innerHTML = "X - Supprimer (monstre !)"; // Button to delete themember.
    button.onclick = deleteMembre; // We add it the event to delete the member.
    
    // We add all the elements one by one...
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
}

// Function to delete a member
function deleteMembre() {
    this.parentNode.remove(); // Delete the parent of the node, as we click on the children of the whole member thing.
}

// Used to show the membre in a modal.
function modal(membre) {
    var buttonAdd = document.getElementById("buttonEdit");
    if (buttonAdd.innerHTML != "Edit mode") { // Only executes if we're not in edit mode.
        return;
    }
    // We create the modal...
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // Add it the element needed according to the membre we clicked...
    var grid = modal.getElementsByClassName("modal-content")[0];
    var membreDetails = membre.getElementsByClassName("grid-membre");
    var membreCloned = membre.cloneNode(true);

    grid.appendChild(membreCloned); // And append it to the modal.
}

// Function called when closing the modal, by clicking the cross on the top right.
function closeModal(membre) {
    membre.style.display = "none"; // We hide the modal...
    var membre = membre.getElementsByClassName("grid-membre")[0];
    membre.remove(); // And delete the membre.
}

// Funcrtion called when webpage is loaded.
function main() {
    // We add the buttons and all in html, used to go in edit mode etc.
    var doc = document.getElementsByTagName("button")[2];
    var parentNode = document.getElementsByTagName("button")[2].parentNode;
    var buttonAdd = document.createElement("button");
    buttonAdd.id = "addMember";
    buttonAdd.style.visibility = "hidden";
    buttonAdd.innerHTML = "Ajouter membre";
    buttonAdd.onclick = addMember;

    parentNode.insertBefore(buttonAdd, doc);

    // Shows only if we decided to activate the debug mode.
    if (debug == 1) {
        console.log("Debug mode actif...");
        var buttonAdd = document.getElementById("addMember");
        var button = document.getElementById("buttonEdit");
        button.innerHTML = "Retourner en vue du bas peuple";
        buttonAdd.style.visibility = "visible";
    }

    //on récupère l'élément qui entoure ce que l'ont veut cacher 
    var bigCache = document.getElementById("cache");
    
    for(let j=0;j<22;j++){ //on boucle le nb lignes

        for(let i=0;i<21;i++){ //on boucle le nb de colonnes

            var allreadyther = bigCache.innerHTML;//on conserve ce que contient déjà le cache (pour ne pas supprimer les cubes déjà fait)
            var newCache = document.createElement('div');//on crée un nvl élément cube
            newCache.setAttribute("id","cube");
            newCache.setAttribute("onmouseover","cubeFear(this)");


            newCache.style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
            newCache.style.gridColumn=i+'/'+(i+1);//on rajoute le cube a la position grid qui convient 
            newCache.style.gridRow = j+'/'+(j+1);
            bigCache.innerHTML=allreadyther+newCache.outerHTML;//on l'ajoute à l'ensemble des caches 
        }
    }
}

// Called when we hover over a cube who's hidding the membre Ayoub
function cubeFear(pos){
    pos.remove(); // The cube deletes itself.
    pos.style.display='none';
}

main(); // Used to call the function main upon loading the web page.