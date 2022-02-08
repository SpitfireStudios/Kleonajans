








var timeline = new TimelineMax();
const h1 = document.querySelectorAll("h1");

  var controller = new ScrollMagic.Controller( {globalSceneOptions: {triggerHook: .5}});

  var tween1 = timeline.to(h1[0], {opacity:0,})


	// build scenes
	new ScrollMagic.Scene({triggerElement: h1[0], duration: "50%",})
					.setTween(tween1)
          			.setPin(h1[0])
					//.addIndicators()//
					.addTo(controller);


					// button in //

					document.querySelector('.menubutton').addEventListener('click', function() {

						var menu = document.getElementsByTagName("menu");

						document.querySelector('.menubutton2').style.cssText="transform:scale(60);";
						document.querySelector('.menubutton').style.cssText="background:#DC143C;";
						document.querySelector('.menubuttonred').style.cssText="display:flex;";
						document.querySelector('menu').style.cssText="opacity:0; display:none; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";

						setTimeout(function() {
							document.querySelector('menu').style.cssText="opacity:1; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
						}, 1000); 

					  });

					  // button out //

					  document.querySelector('.menubuttonred').addEventListener('click', function() {

						var menu = document.getElementsByTagName("menu");
						  
						document.querySelector('menu').style.cssText="opacity:0; display:grid; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
				
						setTimeout(function() {
						document.querySelector('.menubutton2').style.cssText="transform:scale(1);";
						document.querySelector('.menubutton').style.cssText="background:white;"
						document.querySelector('.menubuttonred').style.cssText="display:none;";
						document.querySelector('menu').style.cssText="opacity:0; display:none; height:100%; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(6, auto); grid-auto-flow: column;";
						  }, 800);
						
					  });

var clientvideo = document.getElementsByClassName('clientvideo')

// When the 'ended' event fires
clientvideo[0].addEventListener('ended', function(){
// Reset the video to 0
clientvideo[0].currentTime = 0;
});


function changeShowreelToMobile() {
	if($(window).width() > 823) {
		$(".clientvideo").attr("src", "https://kleonajans-europe.s3.eu-central-1.amazonaws.com/Kleon+Ajans+Intro+Video+sub+4K.mov");
	} else {
		$(".clientvideo").attr("src", "https://kleonajans-europe.s3.eu-central-1.amazonaws.com/Kleon+Ajans+Intro+Video+Mobile.mov");
	}
}

window.onload = changeShowreelToMobile;