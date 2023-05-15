//JUSTE POUR  TESTER DES TRUCS ...
function main(){
    console.log("prout");
    let acc = document.getElementsByTagName("p")[0];
    acc.addEventListener('click',RedirectClick);
    
}

function RedirectClick(){
    console.log("yes");
    setTimeout(function(){window.location.href="index.html"},2000);
    let body = document.body;
    body.style;
    

}

main();