// SCROLL EASING

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
	def: 'easeInOutSine',
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
});


// UNDER 768PX SWITCHES TO MOBILE SITE

var minWidth = 1280;
if ($(window).width() >= minWidth) {
$(function() {
	$("html, body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 0.6);
		event.preventDefault();
	});
});


// WHO WE ARE 

$(function() {

	$("#paul-info").click(function() {
		$("#paul-profile").fadeIn();
	});

	$("#jerry-info").click(function() {
		$("#jerry-profile").fadeIn();
	});

	$("#jan-info").click(function() {
		$("#jan-profile").fadeIn();
	});

	$("#keith-info").click(function() {
		$("#keith-profile").fadeIn();
	});

	$("#contact-us").click(function() {
		$("#contact-us").fadeIn();
	});

	$(".overlay").click(function() {
		$("#paul-profile, #jerry-profile, #jan-profile, #keith-profile, #contact-us").fadeOut();
	});

});


 
// PARALLAX

var parallaxScroll = {
	init: function() {
		var self = this;
		$(function(){
			self.$sections = $('div.section').each(function(index){
				$(this).data('sectionIndex', index);
			});
			self.handleEvents();
			self.initParallax();
		});
	},
	initParallax: function() {
		var isHomePage = $('body').hasClass('home'),
			$main = $('div.main');
		
		if (isHomePage) {
			$main.width($main.width() + $(window).width() - 10000);
		}
		
		$(window).stellar({
			horizontalOffset: 40,
			verticalScrolling: !isHomePage
		});
	},
	handleEvents: function() {
		var self = this,
			debounce = function(func, wait) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						func.apply(context, args);
					};
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
				}
			},
			handleScroll = function() {
				var scrollLeft = $(window).scrollLeft(),
					sectionIndex = Math.round((scrollLeft - 40) / self.$sections.first().outerWidth()),
					$activeSection = self.$sections.eq(sectionIndex);

				if ($activeSection.length === 0) {
					$activeSection = self.$sections.last();
				}
				
				if ($activeSection.length === 0) return;
				
				$(window).unbind('scroll.stellarsite');

				if (scrollLeft === 0) {
					$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 40));
				} else {
					$('html,body').animate({
						scrollLeft: $activeSection.offset().left - 40
					}, 2500, 'easeInOutSine', function() {
						setTimeout(function(){
							$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 1400));
						}, 2500);
					});
				}	
				$(window).bind('mousewheel', function(){
					$('html,body').stop(true, true);
				});
			};
		if (window.location.href.indexOf('#show-offset-parents-default') === -1) {
			$(window).bind('scroll.stellarsite', debounce(handleScroll, 1150));
		}
	}
};
parallaxScroll.init();
}


else {
     

// MOBILE SITE

console.log(pageYOffset);

var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}

var logo = document.getElementById("pact-logo-mobile");
var paul = document.getElementById("mobile-profile-picture-paul");
var jan = document.getElementById("mobile-profile-picture-jan");
var keith = document.getElementById("mobile-profile-picture-keith");
var jerry = document.getElementById("mobile-profile-picture-jerry");

withinviewport.defaults.sides = 'bottom';
withinviewport(paul, jan, keith, jerry);

window.onscroll = function(e) {

if ( withinviewport(logo) ) {
	logo.style.width = ("30vw");
}

if ( withinviewport(paul) ) {
	paul.style.width = ("40vw");
}

if ( withinviewport(jan) ) {
	jan.style.width = ("40vw");
}

if ( withinviewport(keith) ) {
	keith.style.width = ("40vw");
}

if ( withinviewport(jerry) ) {
	jerry.style.width = ("40vw");
}
}


};