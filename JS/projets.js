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