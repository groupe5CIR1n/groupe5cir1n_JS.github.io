//JUSTE POUR  TESTER DES TRUCS ...
function main(){
    console.log("prout");
    let acc = document.getElementsByTagName("p")[0];
    acc.addEventListener('click',() =>  {RedirectClick();
                                        console.log("vroum vers acceuil");});
    
}

function RedirectClick(){
    setTimeout(function(){window.location.href="index.html"},2000);
    
    let body = document.body;
    let LoaderZone = document.getElementById("loaderZone");

    body.style.backgroundColor='#e9e3e3';
    body.style.opacity="0.3";
    LoaderZone.innerHTML='<span class="loader"></span>';    
}

main();