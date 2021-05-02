








var timeline = new TimelineMax();
var timeline2 = new TimelineMax();
var timeline3 = new TimelineMax();
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");

	var controller = new ScrollMagic.Controller( {globalSceneOptions: {triggerHook: .5}});

  var tween1 = timeline.to(h1[0], {y:50, ease: Linear.easeNone, duration:1}).to(h1[0], {opacity:0})

  var tween2 = timeline2.to(h2[0],{x:"35vw", ease: Linear.easeNone, duration:1}).to(h2[0], {opacity:0})

  var tween3 = timeline3.to(h2[1],{x:"35vw", ease: Linear.easeNone, duration:1}).to(h2[1], {opacity:0})


	// build scenes
	new ScrollMagic.Scene({triggerElement: h1[0], duration: "50%",})
					.setTween(tween1)
          			.setPin(h1[0])
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: h2[0], duration: "75%",})
					.setTween(tween2)
          			.setPin(h2[0])
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: h2[1], duration: "75%"})
					.setTween(tween3)
          			.setPin(h2[1])
					.addIndicators()
					.addTo(controller);