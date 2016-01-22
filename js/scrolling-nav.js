/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 
 /* jPreloader
*/
 

// jQuery for page scrolling feature - requires jQuery Easing plugin
var $btnMenu = jQuery('#btn-toggle-menu'),
    $nav    = jQuery('#main-nav');
$btnMenu.on('click', function() {
  if ($nav.hasClass('active')) {
    // jQuery(this).removeClass('active').find('.fa').removeClass('fa-times').addClass('fa-bars');
    jQuery('.overlay').removeClass('visible');
    setTimeout(function(){jQuery('.overlay').remove()}, 400);
    jQuery(this).removeClass('active').find('.nav-icon').removeClass('x');
    $nav.removeClass('active');
  } else {
    // jQuery(this).addClass('active').find('.fa').removeClass('fa-bars').addClass('fa-times');
    jQuery('body').append('<div class="overlay"></div>');
    setTimeout(function(){jQuery('.overlay').addClass('visible')}, 5);
    jQuery(this).addClass('active').find('.nav-icon').addClass('x');
    $nav.addClass('active');
  }
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var $window;
    $window     = $( window );
    windowWidth = $window.width();
    if (windowWidth > 955) {
      var divHeader = document.querySelector('.navbar-fixed-top');
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // $(".nav").show();
        // $(".navbar-brand").show();
      } else {
         if (divHeader.className.indexOf('min') == -1) {
        //   $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //   $(".nav").hide();
        //   $(".navbar-brand").hide(); 
         }
      }
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function(){
	// Call placeholder.js to enable Placeholder Property for IE9

	// Preload the page with jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		showPercentage: true,
		autoClose: true
	});
	

});
