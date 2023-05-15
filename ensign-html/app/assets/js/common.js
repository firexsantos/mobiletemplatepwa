/*----------------------------------
  Carousels & Sliders
----------------------------------*/

$(document).ready(function(){

  $(".carousel-fullscreen.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  }).css("height", $(window).height());
  setTimeout(autoplay, 3500);
  function autoplay() {

    if($(".carousel-fullscreen.carousel-slider").length){
      $(".carousel-fullscreen.carousel-slider").carousel("next");
    } else if($(".carousel").length && $(".carousel.tabs-content").length == false){
      $(".carousel").carousel("next");
    }
      setTimeout(autoplay, 3500);
  }


      $(".carousel-basic").carousel({
        indicators: true
      });
      $(".carousel-basic1").carousel({
        indicators: true,
        numVisible: 1
      });
      $(".carousel-basic3").carousel({
        indicators: true,
        numVisible: 3,
      });
      $(".carousel-basic4").carousel({
        indicators: true,
        numVisible: 3,
        dist: 50
      });
      $(".carousel-basic5").carousel({
        indicators: true,
        numVisible: 3,
        dist: 100
      });

      $(".carousel-content.carousel-slider").carousel({
        fullWidth: true,
        indicators: true
      });

      $(".carousel-basic71").carousel({
        dist: 50,
        numVisible: 3,
        indicators: true
      });
      $(".carousel-basic21").carousel({
        dist: 0,
        numVisible: 3,
        indicators: true
      });

      $(".carousel-basic51").carousel({
        indicators: true,
        numVisible: 3,
        dist: 10
      });

      $(".carousel-fullwidth.carousel-slider").carousel({
        fullWidth: true,
        indicators: true
      });



      $(".slider3").slider({
        indicators: false,
        height: 350,
      });

        $(".slider8").slider({
                indicators: false,
                height: 210,
        });

        $(".slider4").slider({
          height: "100%",
      });

      $(".slider19").slider({
            height: 500,
        });
      $(".slider29").slider({
            indicators: false,
            height: 500,
        });
      $(".slider39").slider({
            height: 500,
        });








  }); 



/*----------------------------------
  Accordion
----------------------------------*/

if($(".collapsible").length){
  $(".collapsible").collapsible();
}
if($(".collapsible.expandable").length){
$(".collapsible.expandable").collapsible({
accordion: false
});
}


/*----------------------------------
  Modal
----------------------------------*/
  
      if($(".modal").length){
        $(".modal").modal({
          onOpenStart() {
              // console.log("Open Start");
              $("body").addClass("modal-open");
          },
          onOpenEnd() {
              // console.log("Open End");
          },
          onCloseStart(){
              // console.log("Close Start");
              $("body").removeClass("modal-open");
          },
          onCloseEnd(){
              // console.log("Close End");
          },
      });
      }

      if($(".modal").length && $(".default-open").length){
         //$(".modal").modal();
         document.addEventListener("DOMContentLoaded", function () {
          var Modalelem = document.querySelector(".modal");
          var instance = M.Modal.init(Modalelem);
          instance.open();
        });
      }




/*----------------------------------
  Masonry
----------------------------------*/
      
    if($(".blogs-masonry").length){
      $(window).load(function(){
          $(".blogs-masonry").masonry({
            itemSelector: ".col.col-item",
          });
        });
    }

    if($(".portfolio-masonry").length){
      $(window).load(function(){
      $(".portfolio-masonry").masonry({
        itemSelector: ".col",
      });
    });
  }



/*----------------------------------
  Date picker & Time picker
----------------------------------*/

  $(".datepicker.datepicker2").datepicker({
      format: "dddd, dd mmmm yyyy",
      autoClose: true
   });

 $(".datepicker.datepicker31").datepicker({
    format: "dddd, dd mmmm yyyy",
    autoClose: true
 });


 $(".datepicker").datepicker();
 $(".datepicker.datepicker1").datepicker({
    autoClose: true
 });

//  $(".datepicker.datepicker2").datepicker({
//     format: "dddd, dd mmmm yyyy",
//     autoClose: true
//  });

 $(".datepicker.datepicker3").datepicker({
    isRTL: true,
    autoClose: true
 });
 $(".datepicker.datepicker4").datepicker({
    autoClose: true,
    firstDay: 1
 });

 $(".datepicker.datepicker5").datepicker({
    autoClose: true,
    showDaysInNextAndPreviousMonths: true
 });

 $(".datepicker.datepicker6").datepicker({
    autoClose: true,
    showClearBtn: true
 });
 $(".datepicker.datepicker7").datepicker({
    autoClose: true,
    format: "mm/dd/yyyy",
    autoClose: true
 });
 
 $(".datepicker.datepicker8").datepicker({
    autoClose: true,
    disableWeekends: true,
    firstDay: 1
 });
 



 $(".timepicker11").timepicker();
 $(".timepicker21").timepicker();

 $(".timepicker").timepicker();
 $(".timepicker.timepicker1").timepicker({
    autoClose: true
 });
 
 $(".timepicker.timepicker2").timepicker({
    twelveHour: false,
    autoClose: true
 });

 $(".timepicker.timepicker3").timepicker({
    vibrate: false,
    autoClose: true
 });
 $(".timepicker.timepicker4").timepicker({
    autoClose: true,
    showClearBtn: true
 });






/*----------------------------------
  Dropdown
----------------------------------*/
    
 $(".dropdown-trigger").dropdown();

/*----------------------------------
  Tabs
----------------------------------*/
$(document).ready(function(){
  $(".tabs").tabs();
  $("#tabs-swipe-demo").tabs({ swipeable: true });
});


/*----------------------------------
  Tooltip
----------------------------------*/
$(".tooltipped").tooltip();
$(".tooltipped-html1").tooltip({
   html: "<div style=\'width:150px;\'><h6 class=\'tooltip-title\'>Tooltip Heading</h6><img src=\'assets/images/masonry-71.jpg\' class=\'responsive-img\' alt=\'image\'><p>Some text content added in the tootltip area.</p></div>",
});
$(".tooltipped-html2").tooltip({
   html: "<div style=\'width:150px;\'><h6 class=\'tooltip-title\'>Tooltip Heading</h6><img src=\'assets/images/masonry-72.jpg\' class=\'responsive-img\' alt=\'image\'><p>Some text content added in the tootltip area.</p></div>",
});
$(".tooltipped-html3").tooltip({
   html: "<div style=\'width:150px;\'><h6 class=\'tooltip-title\'>Tooltip Heading</h6><img src=\'assets/images/masonry-73.jpg\' class=\'responsive-img\' alt=\'image\'><p>Some text content added in the tootltip area.</p></div>",
});
$(".tooltipped-html4").tooltip({
   html: "<div style=\'width:150px;\'><h6 class=\'tooltip-title\'>Tooltip Heading</h6><img src=\'assets/images/masonry-74.jpg\' class=\'responsive-img\' alt=\'image\'><p>Some text content added in the tootltip area.</p></div>",
});



/*----------------------------------
  Select
----------------------------------*/
$("select").formSelect();



/*----------------------------------
  Toast
----------------------------------*/

function displayActionToast(){
  var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
  M.toast({html: toastHTML});
}


/*----------------------------------
  Chips
----------------------------------*/
$('.chips').chips();
$('.chips-initial').chips({
  data: [{
    tag: 'Apple',
  }, {
    tag: 'Microsoft',
  }, {
    tag: 'Google',
  }],
});
$('.chips-placeholder').chips({
  placeholder: 'Enter a tag',
  secondaryPlaceholder: '+Tag',
});


/*----------------------------------
  Character Count
----------------------------------*/
$("input#input_text-count, textarea#textarea2-count").characterCounter();






/*----------------------------------
  Testimonial Slider
----------------------------------*/

$(".testi-slider3").slider({
  indicators: false,
  height: 260,
});

$(".testi-slider4").slider({
  indicators: false,
  height: 350,
});
$(".testi-slider5").slider({
 indicators: false,
 height: 330,
});
$(".testi-slider6").slider({
indicators: false,
height: 330,
});

$(".testi-slider8").slider({
indicators: false,
height: 240,
});

$(".testi-slider7").slider({
indicators: false,
height: 380,
});




/*----------------------------------
  Parallax
----------------------------------*/
$(".parallax").parallax();




/*----------------------------------
  Search Page Fancybox
----------------------------------*/

if($("[data-fancybox=images]").length){
    $("[data-fancybox=images]").fancybox({
      buttons : [ 
        "slideShow",
        "share",
        "zoom",
        "fullScreen",
        "close",
        "thumbs"
      ],
      thumbs : {
        autoStart : false
      }
    });

}
if($("[data-fancybox=search-images]").length){

    $("[data-fancybox=search-images]").fancybox({
      buttons : [ 
        "slideShow",
        "share",
        "zoom",
        "fullScreen",
        "close",
        "thumbs"
      ],
      thumbs : {
        autoStart : false
      }
    });
}


/*----------------------------------
 Range Slider
----------------------------------*/

if($("#test-slider2").length){
      var slider = document.getElementById('test-slider2');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });
}

if($("#test-slider1").length){

    var slider = document.getElementById('test-slider1');
      noUiSlider.create(slider, {
        start: [50],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });
}

if($("#test-slider3").length){

      var slider = document.getElementById('test-slider3');
      noUiSlider.create(slider, {
        start: [20, 50, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });

}

if($("#test-slider21").length){

      var slider = document.getElementById('test-slider21');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });
}

if($("#test-slider22").length){
  var slider = document.getElementById('test-slider22');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });
}

if($("#test-slider23").length){

var slider = document.getElementById('test-slider23');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });
}

if($("#test-slider24").length){

      var slider = document.getElementById('test-slider24');
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });

}


/*Range color picker*/
if($("#result").length && $(".sliders").length){
    var resultElement = document.getElementById('result');
    var sliders = document.getElementsByClassName('sliders');
    var colors = [0, 0, 0];

    [].slice.call(sliders).forEach(function(slider, index) {

      noUiSlider.create(slider, {
        start: 200,
        connect: [true, false],
        orientation: "vertical",
        range: {
          'min': 0,
          'max': 255
        },
        format: wNumb({
          decimals: 0
        })
      });

      // Bind the color changing function to the update event.
      slider.noUiSlider.on('update', function() {

        colors[index] = slider.noUiSlider.get();

        var color = 'rgb(' + colors.join(',') + ')';

        resultElement.style.background = color;
        resultElement.style.color = color;
      });
    });
}


/*----------------------------------
  Optional
----------------------------------*/
