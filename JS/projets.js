let button = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function changeImage(article,imaged){
  var pos = document.getElementsByTagName("img")[article];//on récupère la zone ou l'image vas être posée
  
  if(pos.className!="n2"){ //on vérifie que l'image n'as pas la class signifiant que l'on à changé
    let resu = imaged.slice(0, imaged.length - 4); // on retire la fin (le ".png")
    resu = resu+"2"+".png";//on rajoute un 2
    pos.src = resu; //on réattribue la source de l'image a notre nvl image
    pos.setAttribute("class","n2"); //on rajoute une class pour quand on recliqueras dessus

  }
  else{
    pos.src = resu; //on attribut simplement la src que l'on connais (pour l'image de base)
    pos.removeAttribute("class");
  }
}