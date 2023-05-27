function main(){
    var art1 = document.getElementById("card-one");
    var art2 = document.getElementById("card-two");

    art1.addEventListener('click',()=>createModal("card-one"));
    art2.addEventListener('click',()=>createModal("card-two"));
}

function createModal(card){
    var coped = document.getElementById(card);
    
}