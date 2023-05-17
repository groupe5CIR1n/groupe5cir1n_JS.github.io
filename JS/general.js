//ici on met toutes le fonctions générales à incorporer (tout ce qui concerne la navbar, le hooter ou tout ce que l'ont peut réutiliser);
function main(){
    console.log("prout");
    var acc = document.getElementsByTagName("a")[0];
    var the = document.getElementsByTagName("a")[1];
    var pla = document.getElementsByTagName("a")[2];
    var mem = document.getElementsByTagName("a")[3];
    var pro = document.getElementsByTagName("a")[4];
    var pub = document.getElementsByTagName("a")[5];
    var con = document.getElementsByTagName("a")[6];
    var pln = document.getElementsByTagName("a")[7];
    var off = document.getElementsByTagName("a")[8];

    acc.addEventListener("click",()=>RedirectClick("index.html"));
    the.addEventListener("click",()=>RedirectClick("thematiqueDeRecherche.html"));
    pla.addEventListener("click",()=>RedirectClick("plateformeTechnologique.html"));
    mem.addEventListener("click",()=>MembreClick());
    pro.addEventListener("click",()=>RedirectClick("projet.html"));
    pub.addEventListener("click",()=>RedirectClick("publications.html"));
    con.addEventListener("click",()=>RedirectClick("contact.html"));
    pln.addEventListener("click",()=>RedirectClick("planAcces.html"));
    off.addEventListener("click",()=>RedirectClick("offresDEmploi.html"));


    let all = document.getElementsByTagName("a");
    console.log(all);

    
    
}

function RedirectClick(acces){
    setTimeout(function(){window.location.href=acces},2000);
    
    let body = document.body;
    let LoaderZone = document.getElementById("loaderZone");

    body.style.backgroundColor='#e9e3e3';
    body.style.opacity="0.3";
    LoaderZone.innerHTML='<span class="loader"></span>';    
}

function MembreClick(){
    console.log("preout");
}

main();