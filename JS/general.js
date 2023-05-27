//ici on met toutes le fonctions générales à incorporer (tout ce qui concerne la navbar, le hooter ou tout ce que l'ont peut réutiliser);
function main(){
    placeDate();
    timer();

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
    if(confirm("êtes vous sur de vouloir aller sur la page membre ?")==true){
        if(confirm("Vraiment sûr ? ")==true){
            if(confirm("Vraiment sûr ? ")==true){
                if(confirm("VRAIMENT, vraiment sûr ?")==true){
                    if(confirm("pis c'étais dur a coder alors bif bof")==true){
                        if(confirm("bon ben si t'est sur ...")==true){
                            alert("bon celui là il est juste là pour faire chier tkt");
                            RedirectClick("membres.html");
                        }
                    }
                }
            }
        }
    }
    
}

function placeDate(){
    console.log("on place la date");
    var pos = document.getElementById("Clock-Position");
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    let fin ="";
    if(day<9){
        fin="0"+day+"/";
    }
    else{
        fin = day+"/";
    }

    if(month<9){
        fin = fin+"0"+(month)+"/";
    }
    else{
        fin = fin+(month)+"/";
    }

    fin = fin+year;

    pos.innerText=fin;

}

function timer(){
    console.log("initialisation du timer a 0");
    let pos = document.getElementById("Timer-Position");
    let heures = 0;
    let min = 0;
    let sec = 0;
    setInterval(function(){
        if(sec==59){
            sec = 0;
            min++;
            if(min == 59){
                heures++;
                min =0;
            }
        }
        sec++;
        let resu ="";

        if(heures<10){
            resu = "0"+heures+":";
        }
        else{
            resu = heure+":";
        }

        if(min<10){
            resu = resu+"0"+min+":";
        }
        else{
            resu = resu+min+":"
        }

        if(sec<10){
            resu = resu+"0"+sec
        }
        else{
            resu = resu+sec;
        }
        
        pos.innerText=resu;
    },1000);

}


function copy() {
    console.log("Le non respect de droit d'auteur peut vous exposer à des potentielles poursuites en justice, et des sanctions pouvant aller jusqu'à 500.000€ d'amende et trois ans d'emprisonnement. Votre adresse IP a été enregistrée et envoyée aux forces de l'ordre. Bon courage. (:");
}

function copyNum(){
    console.log("on tente d'appeler un n° !!! HAAAAAAAA");
    var confirm = prompt("Eh lol, tu veux appeler se n° ?? Ben tu fait pas Ctrl+c, Ctrl+v dans ton tél espèce de geux ! tu le recopie là a la main (comme qq de goût) et tu valide !");
    if(confirm=="0298038400" || confirm=="0230310320" || confirm=="0230130560" || confirm == "0299330436"){
        console.log("on appelle le n°",confirm)
        console.log("ptn il sait copier des trucs HHAAAA");
        let sonnerie = new Audio("/JS/Sonnerie.mp3");
        sonnerie.play();
        window.open("calling-page.html", "Calling", "width=250 height=250",); 
    }
    else{
        alert("lol le nul ! même pas capable de copier bien un n° !! vas y réessaye ^^");
        console.log("erreur de saisie");
    }
    if(confirm=="02 98 03 84 00" || confirm=="02 30 31 03 20" || confirm=="02 30 13 05 60" || confirm == "02 99 33 04 36"){
        alert("HA HA !! Le pôtit malin, il a copié collé !! bah nan, je les veux collé moi les chiffres, bient tenté !");
    }
}

main();