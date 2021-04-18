
window.addEventListener('scroll', function (parallax) {

    var scrolled = window.scrollY;
    var h1 = document.querySelectorAll('.h1');
	var h2 = document.querySelectorAll('.h2');

    h1[0].style.top = - (scrolled * -1.8) + 'px'; 
	h1[0].style.opacity = 1 - (scrolled * .005);
	h1[0].style.display = 'grid';
	h2[0].style.display = 'grid';
	h2[1].style.display = 'grid';
	h2[0].style.left = 0;
	h2[1].style.left = 0;


    if (scrolled > 800) {
        h1[0].style.display = 'none';
    }

	if (scrolled > 1000) {
		h2[0].style.left = (- 1000 + scrolled) *3 + 'px';
		h2[0].style.top = (- 1000 + scrolled) + 'px';

		h2[0].style.opacity = 1 - (h2[0].style.left/300);

	}

	if (scrolled > 2000) {
		h2[1].style.left = (- 2000 + scrolled) *3 + 'px';
		h2[1].style.top = (- 2000 + scrolled) + 'px';
		h2[0].style.display = 'none';
	}

	if (scrolled > 2700) {
		h2[1].style.display = 'none';
	}

});