jQuery(document).ready(function($) {
	$(".nav-hamburger").click(function() {

		$(".nav .nav-wrapper").toggleClass("nav-open");
		
	});
	$(window).resize(function() {
		if ($(".nav .nav-wrapper").hasClass("nav-open") && document.body.clientWidth > 800) {
			$(".nav-hamburger").click();
		}
	});
	setBindings();
		
	function setBindings() {
		$(".nav").on('click', 'a', function (e) { 
	 	e.preventDefault();
			var sectionID = e.currentTarget.id + "-section";
			$("html,body").animate({
				scrollTop: $("." + sectionID).offset().top
			},1000);
		});
	}
});

