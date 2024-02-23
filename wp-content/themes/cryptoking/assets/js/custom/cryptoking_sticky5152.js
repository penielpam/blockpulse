<<<<<<< HEAD
jQuery.noConflict();
(function($) {
	'use strict';

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});
	
=======
jQuery.noConflict();
(function($) {
	'use strict';

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});
	
>>>>>>> d0bd14d5d2154eaa2a67cafa034807b2a42f1d70
})(jQuery);