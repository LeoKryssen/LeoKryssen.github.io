

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-accueil","displayName":"Accueil","link":{"linkType":"LinkTypePage","href":"#!page-accueil"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-portfolio","displayName":"Portfolio","link":{"linkType":"LinkTypePage","href":"#!page-portfolio"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-livres","displayName":"Livres","link":{"linkType":"LinkTypePage","href":"#!page-livres"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-synesthesia","displayName":"Synesthesia","link":{"linkType":"LinkTypePage","href":"#!page-synesthesia"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
$(function() {
    if(silex.scale === 1) {
	var OFFSET = $('.hero-section, [data-prevent-scale-y]').height() * (1 - silex.scale) / 2 // this is because of the hero section which is not resizeable
	var win = $(window)
	var size = {
		h: win.height()
		// , w: win.width()
	}
	var initial = {
		h: size.h / silex.scale
		// , w: size.w / silex.scale
	}
	var offset = {
		h: initial.h - size.h + OFFSET
		// , w: initial.w - size.w
	}
	// this function is used to apply an offset to the detection of the active boundaries of the viewport
	// this is required when the viewport width is smaller than the website (when Silex scales down the website)
	function getOffset(el) {
		var position = $(el).position()
		var localOffset = {
			h: offset.h + (position.top * (1-silex.scale))
			// , w: offset.w + (position.left * (1-silex.scale))
		}
		return {
			top: offset.h
			, bottom: -offset.h
			// , left: offset.w
			// , right: -offset.w
		}
	}
	function getDelay(el) {
		var $el = $(el);
		if($el.hasClass('delay100')) return 100;
		if($el.hasClass('delay200')) return 200;
		if($el.hasClass('delay300')) return 300;
		if($el.hasClass('delay400')) return 400;
		if($el.hasClass('delay500')) return 500;
		if($el.hasClass('delay600')) return 600;
		if($el.hasClass('delay700')) return 700;
		if($el.hasClass('delay800')) return 800;
		if($el.hasClass('delay900')) return 900;
		if($el.hasClass('delay1000')) return 1000;
		return 0;
	}
	function getDistance(el) {
		var $el = $(el);
		if($el.hasClass('distance0')) return '0px';
		if($el.hasClass('distance100')) return '100px';
		if($el.hasClass('distance200')) return '200px';
		if($el.hasClass('distance500')) return '500px';
		if($el.hasClass('distance1000')) return '1000px';
		return '100px';
	}
	function getScale(el) {
		var $el = $(el);
		if($el.hasClass('scale3_4')) return 3/4;
		if($el.hasClass('scale2_3')) return 2/3;
		if($el.hasClass('scale1_2')) return 1/2;
		if($el.hasClass('scale1_3')) return 1/3;
		if($el.hasClass('scale1_4')) return 1/4;
		return 1;
	}
	var sr = ScrollReveal({
		distance: '100px'
		, reset: false
	});
	$('.from-left').each(function() {
		sr.reveal(this, { origin:  'left', scale: getScale(this), delay: getDelay(this), distance: getDistance(this), viewOffset: getOffset(this)});
	})
	$('.from-right').each(function() {
		sr.reveal(this, { origin:  'right', scale: getScale(this), delay: getDelay(this), distance: getDistance(this), viewOffset: getOffset(this)});
	})
	$('.from-top').each(function() {
		sr.reveal(this, { origin:  'top', scale: getScale(this), delay: getDelay(this), distance: getDistance(this), viewOffset: getOffset(this)});
	})
	$('.from-bottom').each(function() {
		sr.reveal(this, { origin:  'bottom', scale: getScale(this), delay: getDelay(this), distance: getDistance(this), viewOffset: getOffset(this)});
	})
    }
    ////////////////////////////////////////
    // FIX the height of the website as https://unpkg.com/scrollreveal is messing with it
    function resize() {
        $('body').css('max-height', Math.round(window.innerHeight * silex.scale))
    }
    $(window).resize(resize)
    // setTimeout(function() { resize() }, 0)
    resize()
    ////////////////////////////////////////
})

//$('.container a').click(function(event){
//    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//        event.preventDefault();
//    }
//}); 
//import Splide from '@splideje/splide';
//new Splide ('.splide').mount();