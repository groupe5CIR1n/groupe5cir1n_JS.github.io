function main(){
    var sel = document.getElementById('selec');

    //ajouter la couleur
    sel.innerHTML='Vous avez sélectionné : ';
}

function modifDate(){ //permet de capter la modification de la date et d'indenter celle ci dans la zone "vous avez sélectionné"
    //on récupère les éléments a rajouter + la zone d'indentation
    var year = document.getElementById("date");
    var sel = document.getElementById('selec');

    for(let i=0;i<sel.children.length;i++){//on retire tout les élements qui pourrais déjà exister (on vas le remplacer)
        if(sel.children[i].getAttribute("class")=="select Date"){
            sel.children[i].remove();
        }
    }

    //on crée notre nvl elmt et on lui inserrer tout les attributs qu'il vas avoir besoin  
    var elemDate=document.createElement("span");
    elemDate.setAttribute("class","select Date");
    elemDate.setAttribute("onclick","unclick(this)");
    elemDate.setAttribute("value",year.value); //nous serviras pour le reconnaitre parmis les autres attributs sélectionné 
    elemDate.innerText=year.value;

    //on récupère tout ce que contient le 'vous avez sélectionné pour pas supprimer les autres attributs
    var alreadythereDarling = sel.innerHTML;

    //on insère notre nvl attribut
    sel.innerHTML=alreadythereDarling+elemDate.outerHTML+' ';
    //on lance le sélectionneur 
    if(sel.children.length>0){
        Choix();
    }
}

function modifColo(){
    var colo = document.querySelector('#selectedColor');
    var sel = document.getElementById('selec');

    for(let i=0;i<sel.children.length;i++){
        if(sel.children[i].getAttribute("class")=="select Colo"){
            sel.children[i].remove();
        }
    }

    var elemColo=document.createElement("span");
    elemColo.setAttribute("class","select Colo");
    elemColo.setAttribute("onclick","unclick(this)");
    elemColo.setAttribute("value",colo.value);
    elemColo.innerText=colo.value;

    var alreadythereDarling = sel.innerHTML;

    sel.innerHTML=alreadythereDarling+elemColo.outerHTML+' ';
    if(sel.children.length>0){
        Choix();
    }
}

function addAut(){
    var aut = document.getElementById("aut");
    var sel = document.getElementById('selec');

    for(let i=0;i<sel.children.length;i++){
        if(sel.children[i].getAttribute("class")=="select Aut"){
            sel.children[i].remove();
        }
    }

    var elemAut=document.createElement("span");

    if(aut.value!=""){
        elemAut.setAttribute("class","select Aut");
        elemAut.setAttribute("onclick","unclick(this)");
        elemAut.innerText=aut.value;
    
        var alreadythereDarling = sel.innerHTML;
        sel.innerHTML=alreadythereDarling+elemAut.outerHTML+' ';
    }


    if(sel.children.length>0){
        BOOM();;
    }
}

function addArt(){
    var art = document.getElementById("art");
    var sel = document.getElementById('selec');

    for(let i=0;i<sel.children.length;i++){
        if(sel.children[i].getAttribute("class")=="select Art"){
            sel.children[i].remove();
        }
    }

    var elemArt=document.createElement("span");

    if(art.value!=""){
        elemArt.setAttribute("class","select Art");
        elemArt.setAttribute("onclick","unclick(this)");
        elemArt.innerText=art.value;
    
        var alreadythereDarling = sel.innerHTML;
        sel.innerHTML=alreadythereDarling+elemArt.outerHTML+' ';
    }

    if(sel.children.length>0){
        Choix();
    }
}

function unclick(pos){
    //on retire l'élément sélectionné 
    pos.remove();
    //on relance le gestionnaire de choix
    Choix();
}

function Choix();{
    //paramettres généreaux (liste des attributs + liste des articles)
    var allParam = document.getElementById("selec");
    var ArticlePos = document.getElementById("place-for-article");

    //on crée de nouveaux éléments 'vide' dans le cas ou rien ne serais indenté (util dans le cas d'une suppression)
    var colo =document.createElement("span");
    var date = document.createElement("span");
    var aut = document.createElement("span");
    var art = document.createElement("span");

    //valeurs par défaut
    colo.textContent='Tous';
    date.textContent='0000';
    aut.textContent='';
    art.textContent='';

    //recherche des valeurs sélectionné en paramettres
    for(let i=0;i<allParam.children.length;i++){//on boucle parmis tout les articles pour retrouver les "vraies" valeurs correspondant a nos attributs
        //recherche colo
        if(allParam.children[i].getAttribute("class")=="select Colo"){
            colo=allParam.children[i];
        }
        //recherche date
        if(allParam.children[i].getAttribute("class")=="select Date"){
            date=allParam.children[i];
        }
        //recherche Aut
        if(allParam.children[i].getAttribute("class")=="select Aut"){
            aut=allParam.children[i];
        }
        //recherche Art
        if(allParam.children[i].getAttribute("class")=="select Art"){
            art=allParam.children[i];
        }
    }


    //filtre couleur
    if(colo.innerHTML!="Tous"){
        for(let i=0;i<ArticlePos.children.length;i++){ //pour tout les articles 
            if(ArticlePos.children[i].getAttribute("class")=="flex-uncenter "+colo.innerText){ //on vérifie que l'article possède les attributs voulus
                ArticlePos.children[i].style.display='block'; //on affiche l'attribut
            }
            else{
                ArticlePos.children[i].style.display='none';
            }            
        }
    }
    else{
        for(let i=0;i<ArticlePos.children.length;i++){//si rien est attribué (soit si c'est notre valeur par défaut) on affiche tout
            ArticlePos.children[i].style.display='block';
        }
    }

    //filtre date
    if(date.textContent!='0000'){
        for(let i=0;i<ArticlePos.children.length;i++){
            if(ArticlePos.children[i].innerText.indexOf(date.innerHTML.substr(0, 4))!=-1 && ArticlePos.children[i].style.display=='block'){ //on vérifie en plus que les blocks sont déjà affiché (pas afficher d'éléments qui n'aurrais pas tout les attributs) 
                ArticlePos.children[i].style.display='block';
            }
            else{
                ArticlePos.children[i].style.display='none';
            }        
        }
    }
    else{
        for(let i=0;i<ArticlePos.children.length;i++){
            ArticlePos.children[i].style.display='block';
        }
    }

    //filtre Auteur
    if(AuthenticatorAssertionResponse.textContent!=''){
        for(let i=0;i<ArticlePos.children.length;i++){
            if(ArticlePos.children[i].innerText.indexOf(aut.innerHTML)!=-1 && ArticlePos.children[i].style.display=='block'){
                ArticlePos.children[i].style.display='block';
            }
            else{
                ArticlePos.children[i].style.display='none';
            }        
        }
    }
    else{
        for(let i=0;i<ArticlePos.children.length;i++){
            ArticlePos.children[i].style.display='block';
        }
    }

    if(AuthenticatorAssertionResponse.textContent!=''){
        for(let i=0;i<ArticlePos.children.length;i++){
            if(ArticlePos.children[i].innerText.indexOf(art.innerHTML)!=-1 && ArticlePos.children[i].style.display=='block'){
                ArticlePos.children[i].style.display='block';
            }
            else{
                ArticlePos.children[i].style.display='none';
            }        
        }
    }
    else{
        for(let i=0;i<ArticlePos.children.length;i++){
            ArticlePos.children[i].style.display='block';
        }
    }

}

main();

