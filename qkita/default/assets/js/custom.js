(function($) {

	'use strict';
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area, .section-title').addClass("is-sticky");
		}
		else{
			$('.navbar-area, .section-title').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	
	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});

	// Preloader
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	// Featured Slide JS
	$('.features-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});

	// Customer Slide JS
	$('.customer-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});

	// Cover Slide JS
	$('.cover-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
	});

	// Slide Style One JS
	$('.slide-style-one').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
	});

	// Slide Style Two JS
	$('.slide-style-two').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		mouseDrag: true,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
	});

	// Slide Style Three JS
	$('.slide-style-three').owlCarousel({
		items: 2,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});

	// Slide Style Four JS
	$('.slide-style-four').owlCarousel({
		items: 2,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
	});
	

	// Year JS
	try {
		document.getElementById("year").innerHTML = new Date().getFullYear();
	} catch (err) {}
	
	// WOW Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated', 
			offset: 0, 
			mobile: false, 
			live: true, 
		});
		wow.init();
	}
	
	// ma5menu JS
	$(document).ready(function () {
		ma5menu({
			menu: '.site-menu',
			activeClass: 'active',
			footer: '#ma5menu-tools',
			position: 'left',
			closeOnBodyClick: true
		});
	});

	// Search Popup JS
	$('.close-btn').on('click', function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click', function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// Image Uplaod
	$('input[type="file"]').on('click', function() {
		$(".file_names").html("");
	})
	if ($('input[type="file"]')[0]) {
		var fileInput = document.querySelector('label[for="et_pb_contact_brand_file_request_0"]');
		fileInput.ondragover = function() {
			this.className = "et_pb_contact_form_label changed";
			return false;
		}
		fileInput.ondragleave = function() {
			this.className = "et_pb_contact_form_label";
			return false;
		}
		fileInput.ondrop = function(e) {
			e.preventDefault();
			var fileNames = e.dataTransfer.files;
			for (var x = 0; x < fileNames.length; x++) {
				console.log(fileNames[x].name);
				$=jQuery.noConflict();
				$('label[for="et_pb_contact_brand_file_request_0"]').append("<div class='file_names'>"+ fileNames[x].name +"</div>");
			}
		}
		$('#et_pb_contact_brand_file_request_0').change(function() {
			var fileNames = $('#et_pb_contact_brand_file_request_0')[0].files[0].name;
			$('label[for="et_pb_contact_brand_file_request_0"]').append("<div class='file_names'>"+ fileNames +"</div>");
			$('label[for="et_pb_contact_brand_file_request_0"]').css('background-color', '##eee9ff');
		});
	}

})(jQuery);
