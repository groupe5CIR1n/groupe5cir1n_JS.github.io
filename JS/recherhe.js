function main(){
    var title = document.getElementsByTagName("h7")[0];

    var bouh=document.getElementById("Bouh");
    bouh.innerHTML="<img src='images/derpi.gif' id='derp' width='500px' height='500px'>";
    bouh.style.display="none";

    title.addEventListener("click",()=>moovon());
}

function moovon(){
    console.log("on moovon");
    var titleText=document.getElementById("title-text");
    var axe1=document.getElementById("axe1");
    var axe2=document.getElementById("axe2");

    var boo = document.getElementById("Bouh");

    if(axe1.style.gridRowStart==2){

        boo.style.display="none";

        titleText.style.gridRowStart="1";
        titleText.style.gridRowEnd="3";
        titleText.style.gridColumnStart="1";
        titleText.style.gridColumnEnd="2";
        
        
        axe1.style.gridRowStart="1";
        axe1.style.gridRowEnd="2";
        axe1.style.gridColumnStart="2";
        axe1.style.gridColumnEnd="3";
        
        axe2.style.gridRowStart="2";
        axe2.style.gridRowEnd="3";
        axe2.style.gridColumnStart="2";
        axe2.style.gridColumnEnd="3";
    }
    else{
        titleText.style.gridRowStart="1";
        titleText.style.gridRowEnd="2";
        titleText.style.gridColumnStart="1";
        titleText.style.gridColumnEnd="4";
        
        axe1.style.gridRowStart="2";
        axe1.style.gridRowEnd="3";
        axe1.style.gridColumnStart="1";
        axe1.style.gridColumnEnd="2";

        boo.style.gridRowStart="2";
        boo.style.gridRowEnd="3";
        boo.style.gridColumnStart="2";
        boo.style.gridColumnEnd="3";
        boo.style.display="block";
        
        axe2.style.gridRowStart="2";
        axe2.style.gridRowEnd="3";
        axe2.style.gridColumnStart="3";
        axe2.style.gridColumnEnd="4";
    }
}
main();

