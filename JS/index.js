function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    const height = event.height*2;
    var eventHeight = event.height;

    event.height = img.height*2;
    event.width = img.width*2;
  
  }
  
  function zoomOut(elem) {
    elem.height = elem.height/2;
    elem.width = elem.width/2;
  }