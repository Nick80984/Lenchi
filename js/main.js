jQuery(document).ready(function(){
    var width_window=$(window).width();
    var range_slider=$('.hsj-range-slider');
    
    //------------------------------------------------
    if ($('.hs-slider').length > 0) (function () {
	$('.hs-wrapper-slider .hs-slider .hs-slider-list').slick({
	    autoplay: true,
	    /*autoplaySpeed: 2000,*/
	    prevArrow: '<div class="hs-slider-button hs-slider-prev"><div class="hs-sprites hs-shevron-left"></div></div>',
	    nextArrow: '<div class="hs-slider-button hs-slider-next "><div class="hs-sprites hs-shevron-right"></div></div>'
	});
    })();
    //------------------------------------------------
    if ($('.hs-catalog .hs-slider-list').length > 0) (function () {
	$('.hs-catalog .hs-slider-list').slick({
	    prevArrow: '<div class="hs-slider-button hs-slider-prev"><div class="hs-sprites hs-shevron-left"></div></div>',
	    nextArrow: '<div class="hs-slider-button hs-slider-next "><div class="hs-sprites hs-shevron-right"></div></div>',
	    dots: true
	});
    })();
    //------------------------------------------------
    if ($('.hs-carousel-list').length > 0) (function () {
	$('.hs-carousel-list').slick({
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    prevArrow: '',
	    nextArrow: '',
	    responsive: [
		{
		    breakpoint: 1199,
		    settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		    }
		},
		{
		    breakpoint: 767,
		    settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		    }
		}
	    ]
	});
    })();
    //------------------------------------------------
    if ($( "#hs-popup-login" ).length > 0) (function () {
	var flag=true;
	$( "#hs-popup-login" ).dialog({
	    autoOpen: false,
	    show: {
		effect: "fade",
		duration: 1000
	    },
	    hide: {
		effect: "fade",
		duration: 1000
	    }
	});
	
	$( "#hs-popup-login > div").mouseenter(function(){
	    flag=false;
	});
	$( "#hs-popup-login > div").mouseleave(function(){
	    flag=true;
	});
	$( "#hs-popup-login" ).click(function(){
	    if (flag) {
		$( "#hs-popup-login" ).dialog("close");
	    }
	});
	
	$( ".hs-header-navbar li:last-child a" ).click(function(e) {
	    e.preventDefault();
	    $( "#hs-popup-login" ).dialog("open");
	    
	    $( "#hs-popup-login > div").position({
		my: "center",
		at: "center",
		of: "#hs-popup-login"
	    });
	});
    })();
    //------------------------------------------------
});