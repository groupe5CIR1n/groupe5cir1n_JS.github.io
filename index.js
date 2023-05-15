function main(){
    console.log("prout");
    toast();

}

function toast(){
    let x = document.getElementById('presentation-text');
    console.log(x);
}

function miseEnAttente(){
    //Traitement
    setTimeout(fonctionAExecuter, 5000); //On attend 5 secondes avant d'exécuter la fonction
}


main();