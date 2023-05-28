//ici on met toutes le fonctions générales à incorporer (tout ce qui concerne la navbar, le hooter ou tout ce que l'ont peut réutiliser);
function main(){
    placeDate();
    timer();

    // We take all the elements in the header...
    var acc = document.getElementsByTagName("a")[0];
    var the = document.getElementsByTagName("a")[1];
    var pla = document.getElementsByTagName("a")[2];
    var mem = document.getElementsByTagName("a")[3];
    var pro = document.getElementsByTagName("a")[4];
    var pub = document.getElementsByTagName("a")[5];
    var par = document.getElementsByTagName("a")[6];
    var con = document.getElementsByTagName("a")[7];
    var pln = document.getElementsByTagName("a")[8];
    var off = document.getElementsByTagName("a")[9];
    var labIsen = document.getElementsByTagName("a")[10];

    // And redirect to the link necessary (with the loader!).
    acc.addEventListener("click",()=>RedirectClick("index.html"));
    the.addEventListener("click",()=>RedirectClick("thematiqueDeRecherche.html"));
    pla.addEventListener("click",()=>RedirectClick("plateformeTechnologique.html"));
    mem.addEventListener("click",()=>MembreClick());
    pro.addEventListener("click",()=>RedirectClick("projets.html"));
    pub.addEventListener("click",()=>RedirectClick("publications.html"));
    par.addEventListener("click",()=>RedirectClick("partenaires.html"));
    con.addEventListener("click",()=>RedirectClick("contact.html"));
    pln.addEventListener("click",()=>RedirectClick("planAcces.html"));
    off.addEventListener("click",()=>RedirectClick("offresDEmploi.html"));
    labIsen.addEventListener("click",()=>RedirectClick("index.html"));  
}

// Function for the loader...
function RedirectClick(acces){
    setTimeout(function(){window.location.href=acces},2000); // After 2s...
    
    let body = document.body;
    let LoaderZone = document.getElementById("loaderZone"); // We take the loader in the web page.

    body.style.backgroundColor='#e9e3e3'; // We change the background to make it "darker"
    body.style.opacity="0.3"; // Change the opacity too
    LoaderZone.innerHTML='<span class="loader"></span>'; // We add the loader thanks to innerHTML of a span
}

// Function when we click on the "membres" page
function MembreClick(){
    // We ask five thousand confirms...
    if(confirm("êtes vous sur de vouloir aller sur la page membre ?")==true){
        if(confirm("Vraiment sûr ? ")==true){
            if(confirm("Vraiment sûr ? ")==true){
                if(confirm("VRAIMENT, vraiment sûr ?")==true){
                    if(confirm("pis c'étais dur a coder alors bif bof")==true){
                        if(confirm("bon ben si t'est sur ...")==true){
                            alert("bon celui là il est juste là pour faire chier tkt");
                            RedirectClick("membres.html"); // If we answer yes to all of them, we go to the membres page (finally...)
                        } // (Really cool rainbow of brackets on visual studios here)
                    }
                }
            }
        }
    }
}

// Function to show the date on the header.
function placeDate(){
    var pos = document.getElementById("Clock-Position"); // We take the position of the clock.
    let today = new Date(); // And the date of today, then keep year, day and month in variables
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    let fin =""; // Fin will be the text displayed
    if(day<9){ // Used to show a "0" before the number if it's less than 10 (makes everything better, just design though)
        fin="0"+day+"/";
    }
    else{
        fin = day+"/"; // We add a "/" to have the day separated of month
    }

    if(month<9){ // Same thing here...
        fin = fin+"0"+(month)+"/";
    }
    else{
        fin = fin+(month)+"/";
    }

    // And we add the year at the end
    fin = fin+year;

    pos.innerText=fin; // Then put the end result in the clock position.

}

// Function used to show the time passed on a page.
function timer(){
    let pos = document.getElementById("Timer-Position"); // We take the position of the timer...
    // Hours, mins and secs are initialized at 0 (cause we just entered the page).
    let heures = 0;
    let min = 0;
    let sec = 0;
    setInterval(function(){ // Each second we execute this.
        if(sec==59){ // If we reached 59 seconds (so one minute)
            sec = 0; // We set sec back to 0
            min++; // And add one to the minutes
            if(min == 59){ // Same with hours
                heures++;
                min =0;
            }
        }
        else {
            sec++; // Else we just add one to the seconds
        }
        let resu =""; // We create a variable that will be our final inputs

        if(heures<10){ // If we don't have a 2-digits number, we add a 0 before for each variable...
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

// Function that executes when we copy an element thanks to Ctrl+C or right clicking, works only on text!
function copy() {
    console.log("Le non respect de droit d'auteur peut vous exposer à des potentielles poursuites en justice, et des sanctions pouvant aller jusqu'à 500.000€ d'amende et trois ans d'emprisonnement. Votre adresse IP a été enregistrée et envoyée aux forces de l'ordre. Bon courage. (:");
}

function copyNum(pos){
    // We show a prompt asking for the user to input something...
    var confirm = prompt("Eh lol, tu veux appeler se n° ?? Ben tu fait pas Ctrl+c, Ctrl+v dans ton tél espèce de geux ! tu le recopie là a la main (comme qq de goût) et tu valide !");
    if(confirm==num){
        console.log("on appelle le n°",confirm)
        console.log("ptn il sait copier des trucs HHAAAA");
        let sonnerie = new Audio("/JS/Sonnerie.mp3");
        sonnerie.play();
        window.open("calling-page.html", "Calling", "width=250 height=250",); // And show a new web page that shows a phone ringing
    }
    else{
        if(confirm=="02 98 03 84 00" || confirm=="02 30 31 03 20" || confirm=="02 30 13 05 60" || confirm == "02 99 33 04 36"){
            alert("HA HA !! Le pôtit malin, il a copié collé !! bah nan, je les veux collé moi les chiffres, bient tenté !");
        }
        else {
            alert("lol le nul ! même pas capable de copier bien un n° !! vas y réessaye ^^");
        }
    }
}

// Function called when we click on an element (timer and clock, cause the others will redirect).
function changeColor(item) {
    if (item.style.backgroundColor == "") { // If the color of the background is nothing
        var header = document.getElementById("header"); // We take the color of the header (cause it has the "background color" technically)
        var computedStyle = getComputedStyle(header); // We take the style of header - getComputedStyle is used cause it's not the element that has the background-color, but more the #header value in the CSS!
        var color = computedStyle.backgroundColor; // We set color to the background color of the header
    }
    else { // Else, color will just be the background color of the item.
        var color = item.style.backgroundColor;
    }
    console.log(color); // We show the color in the console
    item.style.backgroundColor = "blue"; // We set it to blue (cause why not?)
    var color = item.style.backgroundColor; // We change the color variable to the one of the item (the new one)
    console.log(color); // We console log'd it 
}

// Function called for elements that redirect to a webpage
function getColor(item) {
    var computedStyle = getComputedStyle(item.parentNode) // We take the color of the parent node (cause the getcolors are on the a, not the div that serves as the "button")
    if (computedStyle.backgroundColor == "") { // If the item doesn't have a background color itself...
        var header = document.getElementById("header"); // We take the header
        var computedStyle = getComputedStyle(header); // Take its computedStyle
        var color = computedStyle.backgroundColor; // And color equal to its color
    }
    else { // Else, we just take the backgroundColor of the element
        var color = computedStyle.backgroundColor;
    }
    console.log(color); // And we console log it
}

main();