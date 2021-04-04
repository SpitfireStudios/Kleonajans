var rellax = new Rellax('.h1, .h2');


window.onscroll = function() {parallax()};

function parallax() {

  var i;
  var h2 = document.getElementsByClassName("h2");
  var h1 = document.getElementsByClassName("h1");
  var ScrollTop = document.documentElement.scrollTop;

  for (i=0; i < 2; i++)
    {
        if (ScrollTop > 0) {
            h1[i].style.opacity = ScrollTop/900;
        } else {
            h1[i].style.opacity = "0";
        }
    }
    
    for (i=0; i < 2; i++)
    {
        if (ScrollTop > 100) {
            h2[i].style.transform = "translateX (500px)";
        } else {
            h2[i].style.transform = "translateX (0)";
        }
    }
}