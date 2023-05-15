/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
    
    // Get Started
    if(jQuery('.get-started').length > 0){
		var swiperGetStarted = new Swiper('.get-started', {
			speed: 500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 10,
			loop: false,
			navigation: {
				nextEl: '.swiper-btn-next',
				prevEl: '.swiper-btn-prev',
            },
			pagination: {
                el: ".swiper-pagination-started",
                clickable: true,
			},
		});
	}
	
    /* Default Swiper */
    if(jQuery('.dz-swiper').length > 0){
        var swiperDefult = new Swiper('.dz-swiper', {
            speed: 500,
            parallax: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: false,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: ".swiper-defult-pagination",
                clickable: true,
			},
        });
    }
    
    /* Swiper Center */
    if(jQuery('.swiper-center').length > 0){
        var swiperCenter = new Swiper('.swiper-center', {
            speed: 500,
            parallax: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            loop: false,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: ".swiper-center-pagination",
                clickable: true,
            },
        });
    }

    if(jQuery('.team-swiper-4').length > 0){
		var swiper4 = new Swiper('.team-swiper-4', {
			speed: 1500,
			parallax: true,
			slidesPerView: "auto",
			spaceBetween: 10,
			loop:false,
		});
	}
    
    /* Swiper Slider Full */
    if(jQuery('.swiper-slider-full').length > 0){
        var swiperGetStarted = new Swiper('.swiper-slider-full', {
            speed: 500,
            parallax: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            loop: false,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: ".swiper-full-pagination",
                clickable: true,
            },
        });
    }
    
    /* Swiper Slider Full */
    if(jQuery('.dz-swiper-gallery').length > 0){
        var swiper = new Swiper(".dz-swiper-gallery-thumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".dz-swiper-gallery", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-gallery-next",
              prevEl: ".swiper-gallery-prev",
            },
            thumbs: {
              swiper: swiper,
            },
        });
    }
    
});



/* Document .ready END */
