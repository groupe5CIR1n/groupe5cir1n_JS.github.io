//ici on met toutes le fonctions générales à incorporer (tout ce qui concerne la navbar, le hooter ou tout ce que l'ont peut réutiliser);
function main(){

    var changePOsitionBox = document.getElementsByTagName("title")[0].baseURI;
    console.log(changePOsitionBox);



    console.log("prout");
    var acc = document.getElementsByTagName("a")[0];
    var the = document.getElementsByTagName("a")[1];
    var pla = document.getElementsByTagName("a")[2];
    var mem = document.getElementsByTagName("a")[3];
    var pro = document.getElementsByTagName("a")[4];
    var pub = document.getElementsByTagName("a")[5];

    var con = document.getElementsByTagName("a")[7];
    var pln = document.getElementsByTagName("a")[8];
    var off = document.getElementsByTagName("a")[9];

    acc.addEventListener("click",()=>RedirectClick("index.html"));
    the.addEventListener("click",()=>RedirectClick("thematiqueDeRecherche.html"));
    pla.addEventListener("click",()=>RedirectClick("plateformeTechnologique.html"));
    mem.addEventListener("click",()=>MembreClick());
    pro.addEventListener("click",()=>RedirectClick("projets.html"));
    pub.addEventListener("click",()=>RedirectClick("publications.html"));
    con.addEventListener("click",()=>RedirectClick("contact.html"));
    pln.addEventListener("click",()=>RedirectClick("planAcces.html"));
    off.addEventListener("click",()=>RedirectClick("offresDEmploi.html"));  
    
}

function RedirectClick(acces){
    setTimeout(function(){window.location.href=acces},2000);
    
    let body = document.body;
    let LoaderZone = document.getElementById("loaderZone");

    body.style.backgroundColor='#e9e3e3';
    body.style.opacity="0.3";
    LoaderZone.innerHTML='<span class="loader"></span>'; 
    console.log("on tente d'aller vers ",acces,"ALERTE !!!! Vite, un loader le temps que l'ont finisse") 
}

function MembreClick(){
    alert("êtes vous sur de vouloir aller sur la page membre ?");
    alert("Vraiment sûr ? ");
    alert("VRAIMENT, vraiment sûr ?");
    alert("pis c'étais dur a coder alors bif bof");
    alert("bon ben si t'est sur ...");
    alert("bon celui là il est juste là pour faire chier tkt"),
    RedirectClick("membres.html");
}

function copy() {
    console.log("Le non respect de droit d'auteur peut vous exposer à des potentielles poursuites en justice, et des sanctions pouvant aller jusqu'à 500.000€ d'amende et trois ans d'emprisonnement. Votre adresse IP a été enregistrée et envoyée aux forces de l'ordre. Bon courage. (:");
}

main();