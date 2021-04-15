




function scrollDistance (callback, refresh = 66) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Variables
	let isScrolling, start, end, distance;
	var h2 = document.querySelectorAll('.h2');

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		if (pageYOffset > 1000) {
			h2[0].style.left = (- 1000 + pageYOffset) *3 + 'px';
			h2[0].style.top = (- 1000 + pageYOffset) + 'px';
		}
	
		else {
			h2[0].style.left = 0 + 'px';
		}

		// Set starting position
		if (!start) {
			start = window.pageYOffset;
		}

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);



		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Calculate distance
			end = window.pageYOffset;
			distance = end - start;

			// Run the callback
			callback(distance, start, end);

			// Reset calculations

			start = null;
			end = null;
			distance = null;

			

		}, refresh);


	}, false);

}

scrollDistance(function (distance) {
	console.log = (parseInt(Math.abs(distance), 10) + 'px ' + (distance < 0 ? 'up' : 'down'));
});







window.addEventListener('scroll', function (parallax) {

    var scrolled = window.scrollY;
    var h1 = document.querySelectorAll('.h1');
    var h2 = document.querySelectorAll('.h2');

    h1[0].style.top = - (scrolled * -1.8) + 'px', h1[0].style.opacity = 1 - (scrolled * .005);

    if (scrolled > 800) {
        h1[0].style.display = 'none';
        h2[0].style.left = distance + 'px';
    }

    else if (scrolled < 900){
        h1[0].style.display = 'grid';
	}
    
});