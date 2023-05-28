function main(){
    console.log("HAAAA Vite faire qqch !");

    var year = document.querySelector('#selectedYear');
    var colo = document.querySelector('#selectedColor');
    var aut = document.getElementById("allNAME");
    var art = document.getElementById("allART");

    var butaut = document.getElementById("validAutors");
    var butart = document.getElementById("validArt");
    console.log(aut);
    console.log(art);

    butaut.addEventListener('click',function (){
        console.log("testbuaut");
        for(let i=0;i<aut.children.length;i++){
            if(aut.children[i].checked){

            }
            else{

            }
        }
    });

    butart.addEventListener('click',function (){
        console.log("testbuart");
        for(let i=0;i<art.children.length;i++){
            if(art.children[i].checked){

            }
            else{

            }
        }
    });

}

//main();