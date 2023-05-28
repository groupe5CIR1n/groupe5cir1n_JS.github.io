function main(){
    //on ferme la fenêtre modale si c'est ouvert #on counter le refresh
    var modale = document.getElementById("open");
    modale.style.display="none";
}

function createModal(card){
    var modale = document.getElementById("open");
    modale.style.display="block";

    //on récupère les éléments à indenter dans la modale
    var TitleCon = document.getElementById(card).children[0];
    var ImgCon = document.getElementById(card).children[1];
    var TextCon = document.getElementById(card).children[2];

    //on réindente dans la zone modale;
    var modalCOnt = document.getElementById("modalContent");
    modalCOnt.children[1].innerHTML=TitleCon.outerHTML;
    modalCOnt.children[3].innerHTML=ImgCon.outerHTML;
    modalCOnt.children[2].innerHTML=TextCon.outerHTML;

}

main();