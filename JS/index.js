function main(){
  let vitesse = 25;
  slowiAppear(vitesse);
}

function slowiAppear(vit){
  console.log("BOUP BIP Mise en place du texte BIPPPP");
  let txt = "L’équipe « Vision et Analyse de Données » est une équipe du laboratoire L@bISEN de l’ISEN Yncréa Ouest. L’équipe mène une activité de R&D pour la conception de plateformes technologiques d’observations et d’analyses à partir de réseaux de capteurs intelligents."
  var pos = document.getElementById("Slow");
  let i =0;
  
  var Boup = setInterval(function(){
    if(i==261){
      clearInterval(Boup);
      Compact(vit);
    }
    else{
      let replace="";
      for(let j=0;j<i;j++){
        replace = replace+txt[j];
      }
      pos.innerText=replace;
      i++;
    }

  },vit);

}

function Compact(vit){
  console.log("Boup Bip, AU CENNNNTTTTRREEE");
  var pos = document.getElementById("Slow");
  let i =0;
  var Bip = setInterval(function(){
    if(i<25){
      pos.style.paddingLeft=i*10+"px";
      pos.style.paddingRight=i*10+"px";
      i++;
    }
    else{
      moovRight(vit);
      clearInterval(Bip);
    }
  },vit);
}

function moovRight(vit){
  console.log("Boup Bip, A GAUUUUUUCHHHHEEE");
  var pos = document.getElementById("Slow");
  let i =0;
  var Bip = setInterval(function(){
    if(i<25){
      pos.style.paddingLeft=250-i*10+"px";
      pos.style.paddingRight=250+i*10+"px";
      i++;
    }
    else{
      moovLeft(vit);
      clearInterval(Bip);
    }
  },vit);
}

function moovLeft(vit){
  console.log("Boup Bip, A DROITE");
  var pos = document.getElementById("Slow");
  let i =0;
  var Bip = setInterval(function(){
    if(i<50){
      pos.style.paddingLeft=10+i*10+"px";
      pos.style.paddingRight=490-i*10+"px";
      i++;
    }
    else{
      goBackCenter(vit);
      clearInterval(Bip);
    }
  },vit);
}

function goBackCenter(vit){
  console.log("Boup Bip, AU CENTRE ");
  var pos = document.getElementById("Slow");
  pos.style.paddingRight="5px";
  let i =0;
  var Bip = setInterval(function(){
    if(i<50){
      pos.style.paddingLeft=500-i*10+"px";
      i++;
    }
    else{
      pos.style.paddingLeft="5px";
      AdiosWord(vit);
      clearInterval(Bip);
    }
  },vit);
}

function AdiosWord(vit){
  
  console.log("BIIIIIIIPP ON RETIRE TOUT MUAHAHAHAHAHAHAH !");
  var pos = document.getElementById("Slow");
  pos.style.paddingRight="5px";
  let i=0;
  var Boup = setInterval(function(){
    if(i==261){
      slowiAppear(vit);
      clearInterval(Boup);
    }
    else{
      console.log("ET ON RECOMMENCE !!! ")
      let txt = pos.textContent;
      txt = txt.slice(0, txt.length - 1);
      pos.innerText=txt;
      i++;
    }
  },vit);
}



main();