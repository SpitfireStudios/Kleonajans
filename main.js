








var timeline = new TimelineMax();
var timeline2 = new TimelineMax();
var timeline3 = new TimelineMax();
var timeline4 = new TimelineMax();
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");

  var controller = new ScrollMagic.Controller( {globalSceneOptions: {triggerHook: .5}});

  var tween1 = timeline.to(h1[0], {y:50, ease: Linear.easeNone, duration:1}).to(h1[0], {opacity:0})

  var tween2 = timeline2.to(h2[0],{x:"10vw", ease: Linear.easeNone, duration:.3}).to(h2[0], {opacity:0})

  var tween3 = timeline3.to(h2[1],{x:"10vw", ease: Linear.easeNone, duration:1}).to(h2[1], {opacity:0})

  var tween4 = timeline4.to(h2[2],{x:"10vw", ease: Linear.easeNone, duration:1}).to(h2[2], {opacity:0})


	// build scenes
	new ScrollMagic.Scene({triggerElement: h1[0], duration: "50%",})
					.setTween(tween1)
          			.setPin(h1[0])
					//.addIndicators()//
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: h2[0], duration: "75%",})
					.setTween(tween2)
          			.setPin(h2[0])
					//.addIndicators()//
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: h2[1], duration: "75%"})
					.setTween(tween3)
          			.setPin(h2[1])
					//.addIndicators()//
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: h2[2], duration: "75%"})
					.setTween(tween4)
          			.setPin(h2[2])
					//.addIndicators()//
					.addTo(controller);


					// button in //

					document.querySelector('.menubutton').addEventListener('click', function() {

						var clients = document.getElementsByTagName("clients");

						document.querySelector('.menubutton2').style.cssText="transform:scale(60);";
						document.querySelector('.menubutton').style.cssText="background:#DC143C;";
						document.querySelector('.menubuttonred').style.cssText="display:flex;";
						document.querySelector('clients').style.cssText="opacity:0; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";

						setTimeout(function() {
							document.querySelector('clients').style.cssText="opacity:1; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
						}, 500); 

					  });

					  // button out //

					  document.querySelector('.menubuttonred').addEventListener('click', function() {

						var clients = document.getElementsByTagName("clients");
						  
						document.querySelector('clients').style.cssText="opacity:0; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
				
						setTimeout(function() {
						document.querySelector('.menubutton2').style.cssText="transform:scale(1);";
						document.querySelector('.menubutton').style.cssText="background:white;"
						document.querySelector('.menubuttonred').style.cssText="display:none;";
						document.querySelector('clients').style.cssText="opacity:0; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
						  }, 500);
						
					  });