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

$(function(){
 var shrinkHeader = 2150;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.mobile-profile-picture').addClass('shrink');
           
        }
        else {
        	
            $('.mobile-profile-picture').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});










// Sticky-header



var stickyHeaders = (function() {

  var $window = $(window),
      $stickies;

	var load = function(stickies) {

	    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

			$stickies = stickies.each(function() {
				var $thisSticky = $(this).wrap('<div class="stickyWrap" />');
				$thisSticky
				    .data('originalPosition', $thisSticky.offset().top)
				    .data('originalHeight', $thisSticky.outerHeight())
				    .parent()
				    .height($thisSticky.outerHeight()); 			  
			});

	      $window.off("scroll.stickies").on("scroll.stickies", function() {
			  _whenScrolling();		
	      });
	    }
 	};

	var _whenScrolling = function() {

		$stickies.each(function(i) {			

			var $thisSticky = $(this),
			$stickyPosition = $thisSticky.data('originalPosition');

			if ($stickyPosition <= $window.scrollTop()) {        

			    var $nextSticky = $stickies.eq(i + 1),
			        $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

			    $thisSticky.addClass("fixed");

			    if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
			    $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
			    }

			} else {

			    var $prevSticky = $stickies.eq(i - 1);

			    $thisSticky.removeClass("fixed")

			    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
			    $prevSticky.removeClass("absolute").removeAttr("style");
			    }
			}
		});
	};

	return {
		load: load
	};
})();


$(function() {
  stickyHeaders.load($(".sticky-header"));
});





































};


