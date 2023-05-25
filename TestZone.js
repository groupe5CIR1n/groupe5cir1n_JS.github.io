//JUSTE POUR  TESTER DES TRUCS ...
function main(){
    console.log("prout");
    var acc = document.getElementsByTagName("a")[0];
    acc.addEventListener('click',() =>  {RedirectClick("index.html");console.log("vroum vers acceuil");});

    var Test2 = document.getElementsByTagName("a")[1];
    Test2.addEventListener('click',() =>  {RedirectClick("TestZone2.html");console.log("vroum vers TestZone2");});

    console.log(acc," ",Test2);

    var songi = document.getElementsByTagName("a")[2];
    songi.addEventListener('click',() =>  {song();console.log("let's play a song");});

    //bigOrNot();    
}
function RedirectClick(acces){
    setTimeout(function(){window.location.href=acces},2000);
    
    let body = document.body;
    let LoaderZone = document.getElementById("loaderZone");

    body.style.backgroundColor='#e9e3e3';
    body.style.opacity="0.3";
    LoaderZone.innerHTML='<span class="loader"></span>';    
}

function song(){
    let sonnerie = new Audio("/JS/Sonnerie.mp3");
    sonnerie.play();
    window.open("calling-page.html", "Calling", "width=250 height=250",);
}



main();