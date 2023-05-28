function createModal(card){
    var title = document.getElementById("TitlePlace");
    var texte = document.getElementById("container");
    var img = document.getElementById("imagePos");

    var pos = document.getElementById(card);
    // console.log(pos.children);
    title.innerHTML=pos.children[0].outerHTML;
    texte.innerHTML=pos.children[1].outerHTML;
    img.innerHTML=pos.children[2].outerHTML;

    
    
}