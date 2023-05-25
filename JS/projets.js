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

function changeImage(article){
  var pos = document.getElementsByTagName("img")[article];
  console.log("VITE !! faut changer d'image sinon on vas penser que notre site est pas fini T w T");
  if(pos.src=="http://127.0.0.1:5500/images/projets/transformationDigitale.png" || pos.src=="http://127.0.0.1:5500/images/projets/droneSousMarins.png" || pos.src=="http://127.0.0.1:5500/images/projets/phoques.png" || pos.src=="http://127.0.0.1:5500/images/projets/architectureElectronique.png"){
    let resu = pos.src.slice(0, pos.src.length - 4);
    pos.src = resu+"2"+".png";
  }
  else{
    let resu = pos.src.slice(0, pos.src.length - 5);
    pos.src = resu+".png";
  }
}