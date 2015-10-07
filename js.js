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


var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}






 var shrinkPaul = 2600;
 var shrinkJan	= 4200;
 var shrinkKeith = 5500;
 var shrinkJerry = 7500;
 var endProfile = 8500;




var paul = document.getElementById("mobile-profile-picture-paul");
var jan = document.getElementById("mobile-profile-picture-jan");
var keith = document.getElementById("mobile-profile-picture-keith");
var jerry = document.getElementById("mobile-profile-picture-jerry");



window.onscroll = function(e) {
    if(window.scrollY) {
        if(window.pageYOffset > shrinkPaul && window.pageYOffset < shrinkJan) {
            paul.style.width = "50vw";
            console.log("found paul!");
        } 
        if(window.pageYOffset > shrinkJan && window.pageYOffset < shrinkKeith) {
            jan.style.width = "50vw";
            console.log("found jan!");
        } 
        if(window.pageYOffset > shrinkKeith && window.pageYOffset < shrinkJerry) {
            keith.style.width = "50vw";
            console.log("found Keith!");
        } 
        if(window.pageYOffset > shrinkJerry && window.pageYOffset < endProfile) {
            jerry.style.width = "50vw";
            console.log("found Jerry!");
        } 




        else {
            // paul.style.width = "80vw";
            // console.log("Paul's gone");
            return;
        }
    }
}













// document.getElementById('Noite').style.width='300';





};



 



// var scrollTimer, lastScrollFireTime = 0;

// $(window).on('scroll', function() {

//     var minScrollTime = 100;
//     var now = new Date().getTime();

//     function processScroll() {
//         console.log(new Date().getTime().toString());
//     }

//     if (!scrollTimer) {
//         if (now - lastScrollFireTime > (3 * minScrollTime)) {
//             processScroll();   // fire immediately on first scroll
//             lastScrollFireTime = now;
//         }
//         scrollTimer = setTimeout(function() {
//             scrollTimer = null;
//             lastScrollFireTime = new Date().getTime();
//             processScroll();
//         }, minScrollTime);
//     }
// });












// $(window).scroll(function(){






// function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//     }


// var minHeight = 2600;
// var maxHeight = 7500;
// var currentScroll = getCurrentScroll();

// console.log(currentScroll);
// if (currentScroll >= minHeight && currentScroll <= maxHeight) {


// // function imageResize (e){
// // if(window.pageYOffset >= minHeight) 


// $(function(){
//  var shrinkPaul = 2600;
//  var shrinkJan	= 4200;
//  var shrinkKeith = 5500;
//  var shrinkJerry = 7500;
//  var endProfile = 8500;


//   $(window).on('scroll.mobile-profile-picture', function() {
//     var scroll = getCurrentScroll();




// 		if ( scroll >= shrinkPaul && scroll <= shrinkJan ) {
// 			$('.mobile-profile-picture-paul').addClass('shrink');
// 			console.log("paul shrink");
// 			$(window).off('.mobile-profile-picture-paul');

// 			}
// 			// else {

// 			// $('.mobile-profile-picture-paul').removeClass('shrink');
// 			// console.log("paul back");
// 			// // $(window).off('.mobile-profile-picture-paul');
// 		// }




// 	     if ( scroll >= shrinkJan && scroll <= shrinkKeith ) {
//            $('.mobile-profile-picture-jan').addClass('shrink');
//            console.log("jan shrink");
//            $(window).off('.mobile-profile-picture-jan');
           
// 	        }
// 	        // else {
        	
//             // $('.mobile-profile-picture-jan').removeClass('shrink');
//             // console.log("jan back");
//             // $(window).off('.mobile-profile-picture-jan');
//         // }





//         if ( scroll >= shrinkKeith && scroll <= shrinkJerry ) {
//            $('.mobile-profile-picture-keith').addClass('shrink');
//            console.log("keith shrink");
//            $(window).off('.mobile-profile-picture-keith');
           
// 	        }
// 	        // else {
        	
//             // $('.mobile-profile-picture-keith').removeClass('shrink');
//             // console.log("keith back");
//             // $(window).off('.mobile-profile-picture-keith');
//         // }




//         if ( scroll >= shrinkJerry && scroll <= endProfile ) {
//            $('.mobile-profile-picture-jerry').addClass('shrink');
//            console.log("keith shrink");
//            $(window).off('.mobile-profile-picture-jerry');
           
// 	        }
// 	        // else {
//             // $('.mobile-profile-picture-jerry').removeClass('shrink');
//             // console.log("keith back");
//             // $(window).off('.mobile-profile-picture-jerry');
//        		// }


//            if ( scroll >= shrinkJerry ) {
//            // $( '.mobile-profile-picture-jerry' ).after( '<div id="offset-space"></div>' );
//            $('.mobile-profile-picture-jerry').css('margin-bottom', '1243px');
// 	        }
// 	        // else {
//             // $('.mobile-profile-picture-jerry').removeClass('shrink');
//             // console.log("keith back");
//             // $(window).off('.mobile-profile-picture-jerry');
//         	// }





//   });

//  });
//  };
// });







// //   $(window).scroll(function() {
// //     var scroll = getCurrentScroll();

// //   });



// // function getCurrentScroll() {
// //     return window.pageYOffset || document.documentElement.scrollTop;
// //     }
// // });


// }

// });





// Sticky-header



// var stickyHeaders = (function() {

//   var $window = $(window),
//       $stickies;

// 	var load = function(stickies) {

// 	    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

// 			$stickies = stickies.each(function() {
// 				var $thisSticky = $(this).wrap('<div class="stickyWrap" />');
// 				$thisSticky
// 				    .data('originalPosition', $thisSticky.offset().top)
// 				    .data('originalHeight', $thisSticky.outerHeight())
// 				    .parent()
// 				    .height($thisSticky.outerHeight()); 			  
// 			});

// 	      $window.off("scroll.stickies").on("scroll.stickies", function() {
// 			  _whenScrolling();		
// 	      });
// 	    }
//  	};

// 	var _whenScrolling = function() {

// 		$stickies.each(function(i) {			

// 			var $thisSticky = $(this),
// 			$stickyPosition = $thisSticky.data('originalPosition');

// 			if ($stickyPosition <= $window.scrollTop()) {        

// 			    var $nextSticky = $stickies.eq(i + 1),
// 			        $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

// 			    $thisSticky.addClass("fixed");

// 			    if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
// 			    $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
// 			    }

// 			} else {

// 			    var $prevSticky = $stickies.eq(i - 1);

// 			    $thisSticky.removeClass("fixed")

// 			    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
// 			    $prevSticky.removeClass("absolute").removeAttr("style");
// 			    }
// 			}
// 		});
// 	};

// 	return {
// 		load: load
// 	};
// })();


// $(function() {
//   stickyHeaders.load($(".sticky-header"));
// });





// (function () {
//     var updateHeaders;
//     updateHeaders = function () {
//         return $('.single-item').each(function () {
//             var el, floatingHeader, offset, scrollTop;
//             el = $(this);
//             offset = el.offset();
//             scrollTop = $(window).scrollTop();
//             floatingHeader = $('.floating-header', this);
//             if (scrollTop > offset.top && scrollTop < offset.top + el.height() - floatingHeader.height()) {
//                 floatingHeader.css('visibility', 'visible');
//                 floatingHeader.css('position', 'fixed');
//                 return floatingHeader.css('top', '0px');
//             } else if (scrollTop < offset.top) {
//                 return floatingHeader.css('visibility', 'hidden');
//             } else {
//                 floatingHeader.css('position', 'absolute');
//                 return floatingHeader.css('top', el.height() - floatingHeader.outerHeight() + 'px');
//             }
//         });
//     };
//     $(function () {
//         $('.single-item').each(function (i) {
//             var clonedHeader, thisHeader;
//             thisHeader = $('.sticky-header', this);
//             clonedHeader = thisHeader.clone();
//             thisHeader.before(clonedHeader);
//             clonedHeader.addClass('floating-header');
//             clonedHeader.css('position', 'fixed');
//             clonedHeader.css('width', thisHeader.width());
//             clonedHeader.css('top', '0px');
//             return clonedHeader.css('visibility', 'hidden');
//         });
//         updateHeaders();
//         return $(window).scroll(updateHeaders);
//     });
// }.call(this));




