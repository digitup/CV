/* Author:

*/


jQuery(document).ready(function($) {

	  $('a[rel=tooltip]').tooltip();

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

  
		// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
  

});






