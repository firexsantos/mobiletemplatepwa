    // Create a new date from a string, return as a timestamp.
    function timestamp(str) {
      return new Date(str).getTime();
    }
    // Create a list of day and monthnames.
    var
      weekdays = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
      ],
      months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    // Append a suffix to dates.
    // Example: 23 => 23rd, 1 => 1st.
    function nth(d) {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    // Create a string representation of the date.
    function formatDate(date) {
      return weekdays[date.getDay()] + ", " +
        date.getDate() + nth(date.getDate()) + " " +
        months[date.getMonth()] + " " +
        date.getFullYear();
    }
    var dateSlider = document.getElementById('slider-date');

    noUiSlider.create(dateSlider, {
      // Create two timestamps to define a range.
      range: {
        min: timestamp('2010'),
        max: timestamp('2016')
      },

      // Steps of one week
      step: 7 * 24 * 60 * 60 * 1000,

      // Two more timestamps indicate the handle starting positions.
      start: [timestamp('2011'), timestamp('2015')],

      // No decimals
      format: wNumb({
        decimals: 0
      })
    });
    var dateValues = [
      document.getElementById('event-start'),
      document.getElementById('event-end')
    ];

    dateSlider.noUiSlider.on('update', function(values, handle) {
      dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });






/* ----------------------------------------------- */ 


var select = document.getElementById('input-select');

// Append the option elements
for (var i = -20; i <= 40; i++) {

  var option = document.createElement("option");
  option.text = i;
  option.value = i;

  select.appendChild(option);
}


var html5Slider = document.getElementById('html5');

noUiSlider.create(html5Slider, {
  start: [10, 30],
  connect: true,
  range: {
    'min': -20,
    'max': 40
  }
});


var inputNumber = document.getElementById('input-number');

html5Slider.noUiSlider.on('update', function(values, handle) {

  var value = values[handle];

  if (handle) {
    inputNumber.value = value;
  } else {
    select.value = Math.round(value);
  }
});

select.addEventListener('change', function() {
  html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function() {
  html5Slider.noUiSlider.set([null, this.value]);
});




/*-----------------------------------------------*/




var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
  range: {
    'min': 0,
    '10%': 10,
    '20%': 20,
    '30%': 30,
    // Nope, 40 is no fun.
    '50%': 50,
    '60%': 60,
    '70%': 70,
    // I never liked 80.
    '90%': 90,
    'max': 100
  },
  snap: true,
  start: [20, 90]
});


var skipValues = [
  document.getElementById('skip-value-lower'),
  document.getElementById('skip-value-upper')
];

skipSlider.noUiSlider.on('update', function(values, handle) {
  skipValues[handle].innerHTML = values[handle];
});



/*-------------------------------------------------*/


var slider = document.getElementById('slider-color');

noUiSlider.create(slider, {
  start: [4000, 8000, 12000, 16000],
  connect: [false, true, true, true, true],
  range: {
    'min': [2000],
    'max': [20000]
  }
});


var connect = slider.querySelectorAll('.noUi-connect');
var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

for (var i = 0; i < connect.length; i++) {
  connect[i].classList.add(classes[i]);
}

