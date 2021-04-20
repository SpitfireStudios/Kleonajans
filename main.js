








let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
var h1 = document.querySelectorAll(".h1");
var h2 = document.querySelectorAll(".h2");

timeline
  .to (h1[0], 1, { y: 400 }, )
  .to (h1[0], .20, { opacity: 0, }, )
  .to (h2[0], 1, { x:650 , y: 200}, )
  .to (h2[0], 1, { opacity: 0 }, )
  .to (h2[1], 1, { x:650, y: 200, delay:-1 }, )
  .to (h2[1], 1, { opacity: 0,},) ;



  

let scene = new ScrollMagic.Scene({
  offset: 0,
  duration: "300%",
  triggerHook: 0,
})


  .setTween(timeline)
  .addTo(controller);