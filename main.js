jQuery(function($) {
	$(".nav-hamburger").click(function() {

		$(".nav .nav-wrapper").toggleClass("nav-open");
		
	});
	$(window).resize(function() {
		if ($(".nav .nav-wrapper").hasClass("nav-open")) {
			$(".nav-hamburger").click();
		}
	});
});

