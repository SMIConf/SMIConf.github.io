// Navbar toggle animation state
$('.navbar-toggle').on('click', function () {
	$(this).toggleClass('collapsed');
});

// Back-to-top behavior and in-page smooth scrolling
jQuery(function ($) {
	var offset = 300;
	var offsetOpacity = 1200;
	var scrollTopDuration = 700;
	var $backToTop = $('.cd-top, .top');

	$(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop();

		if (scrollTop > offset) {
			$backToTop.addClass('cd-is-visible');
		} else {
			$backToTop.removeClass('cd-is-visible cd-fade-out');
		}

		if (scrollTop > offsetOpacity) {
			$backToTop.addClass('cd-fade-out');
		}
	});

	$backToTop.on('click', function (event) {
		event.preventDefault();
		$('body, html').animate({ scrollTop: 0 }, scrollTopDuration);
	});

	// Handle local anchor links only and animate scroll to the target section.
	$(document).on('click', 'a[href^="#"]', function (event) {
		var id = $(this).attr('href');

		if (!id || id === '#') {
			return;
		}

		var $target = $(id);
		if ($target.length === 0) {
			return;
		}

		event.preventDefault();
		$('body, html').animate({ scrollTop: $target.offset().top }, scrollTopDuration);
	});
});


 

