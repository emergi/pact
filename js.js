// SCROLL EASING

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
	def: 'easeInOutSine',
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
});


// UNDER 800PX SWITCHES TO MOBILE SITE

var minWidth = 800;
if ($(window).width() >= minWidth) {
$(function() {
	$("html, body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 0.6);
		event.preventDefault();
	});
});


// WHO WE ARE 

$(function() {




	$("#paulDetail").click(function() {
		$("#paulInfo").fadeIn();
	});

	$("#jerryDetail").click(function() {
		$("#jerryInfo").fadeIn();
	});

	$("#janDetail").click(function() {
		$("#janInfo").fadeIn();
	});

	$("#keithDetail").click(function() {
		$("#keithInfo").fadeIn();
	});

	$(".overlay").click(function() {
		$("#paulInfo, #jerryInfo, #janInfo, #keithInfo").fadeOut();
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
					}, 600, 'easeInOutSine', function() {
						setTimeout(function(){
							$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 1400));
						}, 600);
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


// var shrinkLogo = 200;
// var shrinkPaul = 7580;
// var shrinkJan	= 9080;
// var shrinkKeith = 10580;
// var shrinkJerry = 12160;
// var endProfile = 13660;


var shrinkLogo = 200;
var shrinkPaul = 7100;
var shrinkJan	= 8200;
var shrinkKeith = 9600;
var shrinkJerry = 11380;
var endProfile = 12660;


var logo = document.getElementById("pact-logo-mobile");
var paul = document.getElementById("mobile-profile-picture-paul");
var jan = document.getElementById("mobile-profile-picture-jan");
var keith = document.getElementById("mobile-profile-picture-keith");
var jerry = document.getElementById("mobile-profile-picture-jerry");


window.onscroll = function(e) {
    if(window.scrollY) {

       	if(window.pageYOffset > shrinkLogo && window.pageYOffset < 1000) {
       		logo.style.width = ("50vw");
	    } 

       	if(window.pageYOffset > shrinkPaul && window.pageYOffset < shrinkJan) {
       		paul.style.width = ("60vw");
	    } 
        if(window.pageYOffset > shrinkJan && window.pageYOffset < shrinkKeith) {
			jan.style.width = ("60vw");
		} 
        if(window.pageYOffset > shrinkKeith && window.pageYOffset < shrinkJerry) {
			keith.style.width = ("60vw");
		} 
        if(window.pageYOffset > shrinkJerry && window.pageYOffset < endProfile) {
			jerry.style.width = ("60vw");
		} 
        else {
            return;
        }
    }
}





// window.onscroll = function(e) {
//     if(window.scrollY) {
//        if(window.pageYOffset > shrinkPaul && window.pageYOffset < shrinkJan) {
//             paul.classList ? paul.classList.add('mobile-profile-picture-minimized') : paul.className += ' mobile-profile-picture-minimized';
//         } 
//         if(window.pageYOffset > shrinkPaul && window.pageYOffset < shrinkJan) {
//             paul.classList ? paul.classList.add('mobile-profile-picture-minimized') : paul.className += ' mobile-profile-picture-minimized';
//         } 
//         if(window.pageYOffset > shrinkJan && window.pageYOffset < shrinkKeith) {
//             jan.classList ? jan.classList.add('mobile-profile-picture-minimized') : jan.className += ' mobile-profile-picture-minimized';
//         } 
//         if(window.pageYOffset > shrinkKeith && window.pageYOffset < shrinkJerry) {
//             keith.classList ? keith.classList.add('mobile-profile-picture-minimized') : keith.className += ' mobile-profile-picture-minimized';
//         } 
//         if(window.pageYOffset > shrinkJerry && window.pageYOffset < endProfile) {
//             jerry.classList ? jerry.classList.add('mobile-profile-picture-minimized') : jerry.className += ' mobile-profile-picture-minimized';
//         } 
//         else {
//             return;
//         }
//     }
// }











// window.onscroll = function () { 

// function isScrolledIntoView( paul ) {
//     var elementTop    = paul.getBoundingClientRect().top,
//         elementBottom = paul.getBoundingClientRect().bottom;

//     return elementTop >= 0 && elementBottom <= window.innerHeight;
//     console.log("found paul!")
// }
// console.log(isScrolledIntoView);
// }









};