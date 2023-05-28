function main(){
    var sel = document.getElementById('selec');

    //ajouter la couleur
    sel.innerHTML='Vous avez sélectionné : ';
}

function modifDate(){
    var year = document.getElementById("date");
    var sel = document.getElementById('selec');

    for(let i=0;i<sel.children.length;i++){
        if(sel.children[i].getAttribute("class")=="select Date"){
            sel.children[i].remove();
        }
    }

    var elemDate=document.createElement("span");
    elemDate.setAttribute("class","select Date");
    elemDate.setAttribute("onclick","unclick(this)");
    elemDate.setAttribute("value",year.value);
    elemDate.innerText=year.value;


    var alreadythereDarling = sel.innerHTML;

    sel.innerHTML=alreadythereDarling+elemDate.outerHTML+' ';
    if(sel.children.length>0){
        BOOM();
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
        BOOM();
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
        BOOM();
    }
}

function unclick(pos){
    pos.remove();
    BOOM();
}

function BOOM(){
    //paramettres généreaux
    var allParam = document.getElementById("selec");
    var ArticlePos = document.getElementById("place-for-article");

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
    for(let i=0;i<allParam.children.length;i++){
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
        for(let i=0;i<ArticlePos.children.length;i++){
            if(ArticlePos.children[i].getAttribute("class")=="flex-uncenter "+colo.innerText){
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

    //filtre date
    if(date.textContent!='0000'){
        for(let i=0;i<ArticlePos.children.length;i++){
            if(ArticlePos.children[i].innerText.indexOf(date.innerHTML.substr(0, 4))!=-1 && ArticlePos.children[i].style.display=='block'){
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

