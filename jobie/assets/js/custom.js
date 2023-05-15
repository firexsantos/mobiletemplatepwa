var Jobie = function(){
	
	"use strict"
	/* Search Bar ============ */
	var screenWidth = $( window ).width();
	var screenHeight = $( window ).height();
	
	// Preloader
	var handlePreloader = function(){
		setTimeout(function() {
            jQuery('#preloader').fadeOut(300);
		},300);
	}

	// Menubar Toggler
    var handleMenubar = function() {
        jQuery('.menu-toggler').on('click',function(){
			jQuery('.sidebar').toggleClass('show');
		});
        jQuery('.menu-toggler').on('click',function(){
			jQuery('.menu-toggler').toggleClass('show');
		});
	}
    
	// Show Pass
    var handleShowPass = function(){
		jQuery('.show-pass').on('click',function(){
			jQuery(this).toggleClass('active');
			if(jQuery('#dz-password').attr('type') == 'password'){
				jQuery('#dz-password').attr('type','text');
			}else if(jQuery('#dz-password').attr('type') == 'text'){
				jQuery('#dz-password').attr('type','password');
			}
		});
	}
	
	// Sticky Header
	var handleIsFixed = function(){
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				$(".main-bar").addClass("sticky-header");
			}else{
				$(".main-bar").removeClass("sticky-header");
			}
		});
	}
    
	// Custom File Input
	var handleCustomFileInput = function() {
		$(".custom-file-input").on("change", function() {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
    
	// Default Select
  	var handleSelectpicker = function(){
		if(jQuery('.default-select').length > 0 ){
			jQuery('.default-select').selectpicker();
		}
	}
    
	// Menubar Nav Active
    var handleMenubarNav = function() {
        $(".menubar-nav .nav-link").on("click",function(){
            $(".menubar-nav .nav-link").removeClass("active");
            $(this).addClass("active");
        });
	}
    
	// Message Sheet
	var handleMessageHandle = function() {
        $(".message-area .icon-popup").on("click",function(){
            $(".message-icon").slideToggle('slow');
        });
        $(".messagebar-sheet-image").on("change",function(){
            var iconsrc = $(this).attr('data-icon'); 
			
		if($(this).find('input[type="checkbox"]').is(':checked')) {
				$(".append-media").append("<div class='emoji-icon' data-icon="+iconsrc+"><img src="+iconsrc+ "></div>");				
			}else{
			    var mediaicon = $('.message-area .emoji-icon[data-icon="'+iconsrc+'"]');
				mediaicon.remove();
			}
        });
        
	}
    
	// Scroll Top
	var handleScrollTop = function (){
		'use strict';
		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 100) { 
				jQuery(".btn.scrollTop").fadeIn(500);
			} else {
				jQuery(".btn.scrollTop").fadeOut(500);
			}
		});
		/* page scroll top on click function end*/
	}
	
	// Chat button
    var handleChatBox = function (){
        $('.btn-chat').on('click', function() {
			
			var chatInput = $('.message-area .form-control');
			var chatMessageValue = chatInput.val();
			
			var chatEmojiArea = $('.append-media').html();
            
            var current = new Date();
            var ampm = current.getHours() >= 12 ? 'pm' : 'am';
            //alert(current.getMinutes());
            var actualTime = (current.getHours()% 12 +':'+current.getMinutes() +' '+ ampm);
			
			var messageEmojiHtml = '<div class="chat-content user">'+
					'<div class="message-item">'+
						'<div class="bubble">'+chatEmojiArea+'</div>'+
						'<div class="message-time">'+actualTime+'</div>'+
					'</div>'+
				'</div>';
				
			if(chatEmojiArea.length > 0){   
				$('.chat-box-area').append(messageEmojiHtml);
			}
			
			var messageHtml = '<div class="chat-content user">'+
				'<div class="message-item">'+
					'<div class="bubble">'+chatMessageValue+'</div>'+
					'<div class="message-time">'+actualTime+'</div>'+
				'</div>'+
			'</div>';
			
			if(chatMessageValue.length > 0){
				var appendMessage = $('.chat-box-area').append(messageHtml);
			}
			
			window.scrollTo(0, document.body.scrollHeight);
			var clearChatInput = chatInput.val('');    
			var clearChatInputE = $('.append-media').empty();     
        });
    }
    
    // Page back btn
	var handleGoBack = function(){
		$('.back-btn').on('click',function(){
			window.history.go(-1); return false
		})        
    }
    
	// PWA Modal
	var handlePWAModal = function (){
		if (!window.matchMedia('(display-mode: standalone)').matches) {
		    setTimeout(function(){
    			jQuery('.pwa-offcanvas').addClass('show');
    			jQuery('.pwa-backdrop').addClass('fade show');
    		}, 3000);
    		jQuery('.pwa-backdrop, .pwa-close, .pwa-btn').on('click',function(){
    			jQuery('.pwa-offcanvas').slideUp(500, function() {
    				jQuery(this).removeClass('show');
    			});
    			setTimeout(function(){
    				jQuery('.pwa-backdrop').removeClass('show');
    			}, 500);
    		}); 
		}
	}
    
	// Recent Search
	var handleSearch = function(){
        $('.search-input .form-control').on('change paste keyup',function(){
            if($(this).val().length > 0){
                $('.search-input .btn-close').fadeIn(500);
            }else{
                $('.search-input .btn-close').fadeOut(500);
            }
        })
        $('.search-input .btn-close').on('click',function(){
            $('.search-input .form-control').val(null);
            $(this).fadeOut(0);
        })
    }
	
	// Theme Version
	var handleThemeVersion = function() {
		jQuery('.theme-btn').on('click',function(){
			jQuery('body').toggleClass('theme-dark');
			jQuery('.theme-btn').toggleClass('active');
		});
	}
    
    var handleRemoveClass = function() {
		jQuery('.nav-color').on('click',function(){
			jQuery('.sidebar, .menu-toggler').removeClass('show');
		});
	}
    
    var handleToggleButton = function() {
		jQuery('.dz-treeview-item').on('click',function(){
			jQuery(this).toggleClass('open');
		});
	}
    
    //Light Gallery ============ 
	var handleLightgallery = function() {
		if(jQuery('#lightgallery').length > 0)
		{
			lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgZoom, lgThumbnail],
            });
		}
	}
    
    //Tab Slide ============ 
	var handleTabSlide = function() {
		if(jQuery('.tab-slide-effect').length > 0)
		{
			var a =  $('.tab-slide-effect li.active').width();
			var b =  $('.tab-slide-effect li.active').position().left;
			$('.tab-active-indicator').css({'width' : a,'transform': 'translateX('+b+'px)'});
			$('.tab-slide-effect li').on('click',function(){
                var tabItem = $(this).parent().find('li');
				$(tabItem).removeClass('active');
                $(this).addClass('active');
				var x = $(this).width();
				var y = $(this).position().left;
                var indicator = $(this).parent().find('.tab-active-indicator');
				$(indicator).css({'width' : x,'transform': 'translateX('+y+'px)'});
			})
		}
	}

    var handleOtp = function() {
		if(jQuery('#otp').length > 0)
		$('.digit-group').find('input').each(function() {
            $(this).attr('maxlength', 1);
            $(this).on('keyup', function(e) {
                var thisVal = $(this).val();
                var parent = $($(this).parent());
                
                if(e.keyCode === 8 || e.keyCode === 37) {
                    var prev = parent.find('input#' + $(this).data('previous'));
                    
                    if(prev.length) {
                        $(prev).select();
                    }
                } else {
                    var next = parent.find('input#' + $(this).data('next'));
                    
                    if(!$.isNumeric(thisVal))
                    {
                        $(this).val('');
                        return false;
                    }

                    if(next.length) {
                        $(next).select();
                    } else {
                        if(parent.data('autosubmit')) {
                            parent.submit();
                        }
                    }
                }
            });
        });
	}
    
    function getCodeBoxElement(index) {
        return document.getElementById('codeBox' + index);
    }
    function onKeyUpEvent(index, event) {
      const eventCode = event.which || event.keyCode;
      if (getCodeBoxElement(index).value.length === 1) {
         if (index !== 4) {
            getCodeBoxElement(index+ 1).focus();
         } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
         }
      }
      if (eventCode === 8 && index !== 1) {
         getCodeBoxElement(index - 1).focus();
      }
    }
    function onFocusEvent(index) {
      for (item = 1; item < index; item++) {
         const currentElement = getCodeBoxElement(item);
         if (!currentElement.value) {
              currentElement.focus();
              break;
         }
      }
    }
    
    
    
	/* Function ============ */
	return {
		init:function(){
			handleMenubar();
			handleToggleButton();
			handleShowPass();
			handleChatBox();
			//handleMenubarNav();
			handleIsFixed();
			handleScrollTop();
			handleLightgallery();
			handleCustomFileInput();
            handleMessageHandle();
            handleGoBack();
            handlePWAModal();
            handleSearch();
            //handleThemeVersion();
            handleRemoveClass();
			handleTabSlide();
			handleOtp();
		},

		load:function(){
			handlePreloader();
			handleSelectpicker();
		},
		
		resize:function(){
			screenWidth = $( window ).width();
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
	$('[data-bs-toggle="popover"]').popover();
    'use strict';
	Jobie.init();
    
    $('.theme-dark .custom-switch input').prop('checked', true);
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Jobie.load();
    setTimeout(function(){
		jQuery('#splashscreen').addClass('active');
		jQuery('#splashscreen').fadeOut(2000);
	}, 2000);
    
    $('.theme-dark .custom-switch input').prop('checked', true).addClass('active');
    
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Jobie.resize();
	
});
/*  Window Resize END */