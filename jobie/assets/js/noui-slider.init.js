(function($) {
    "use strict"

    //basic slider
    let basicSlide = document.getElementById('basic-slider');
    noUiSlider.create(basicSlide, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    //basic slider ^

    //working with date
    // Create a new date from a string, return as a timestamp.
    function timestamp(str) {
        return new Date(str).getTime();
    }

    
    var dateValues = [
        document.getElementById('event-start'),
        document.getElementById('event-end')
    ];

    // Create a list of day and month names.
    var weekdays = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
    ];

    var months = [
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
    //working with date ^

    //locking sliders together
    var lockedState = false;
    var lockedSlider = false;
    var lockedValues = [60, 80];

    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');

    var lockButton = document.getElementById('lockbutton');
    var slider1Value = document.getElementById('slider1-span');
    var slider2Value = document.getElementById('slider2-span');
    
    function crossUpdate(value, slider) {

        // If the sliders aren't interlocked, don't
        // cross-update.
        if (!lockedState) return;
    
        // Select whether to increase or decrease
        // the other slider value.
        var a = slider1 === slider ? 0 : 1;
    
        // Invert a
        var b = a ? 0 : 1;
    
        // Offset the slider value.
        value -= lockedValues[b] - lockedValues[a];
    
        // Set the value
        slider.noUiSlider.set(value);
    }
    
    

    function setLockedValues() {
        lockedValues = [
            Number(slider1.noUiSlider.get()),
            Number(slider2.noUiSlider.get())
        ];
    }
    


    //Moving the slider by clicking pips
    var pipsSlider = document.getElementById('slider-pips');
    noUiSlider.create(pipsSlider, {
        range: {
            min: 0,
            max: 100
        },
        start: [50],
        pips: {mode: 'count', values: 5}
    });

    var pips = pipsSlider.querySelectorAll('.noUi-value');
    function clickOnPip() {
        var value = Number(this.getAttribute('data-value'));
        pipsSlider.noUiSlider.set(value);
    }

    for (var i = 0; i < pips.length; i++) {

        // For this example. Do this in CSS!
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }
    //Moving the slider by clicking pips ^

    //keypress slider
    var keypressSlider = document.getElementById('keypress');
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
        start: [20, 80],
        connect: true,
        tooltips: [true, wNumb({decimals: 1})],
        range: {
            'min': [0],
            '10%': [10, 10],
            '50%': [80, 50],
            '80%': 150,
            'max': 200
        }
    });

    keypressSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            keypressSlider.noUiSlider.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {

            var values = keypressSlider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = keypressSlider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {

                case 13:
                    keypressSlider.noUiSlider.setHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        keypressSlider.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        keypressSlider.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
            }
        });
    });
    //keypress slider ^
    
    
    //soft limits
    var softSlider = document.getElementById('soft');
    noUiSlider.create(softSlider, {
        start: 50,
        range: {
            min: 0,
            max: 100
        },
        pips: {
            mode: 'values',
            values: [20, 80],
            density: 4
        }
    });

    softSlider.noUiSlider.on('change', function (values, handle) {
        if (values[handle] < 20) {
            softSlider.noUiSlider.set(20);
        } else if (values[handle] > 80) {
            softSlider.noUiSlider.set(80);
        }
    });
    //soft limits ^


    //color picker
    var resultElement = document.getElementById('result');
    var sliders = document.getElementsByClassName('sliders');
    var colors = [0, 0, 0];

    [].slice.call(sliders).forEach(function (slider, index) {

        noUiSlider.create(slider, {
            start: 127,
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
        slider.noUiSlider.on('update', function () {

            colors[index] = slider.noUiSlider.get();

            var color = 'rgb(' + colors.join(',') + ')';

            resultElement.style.background = color;
            resultElement.style.color = color;
        });
    });
    //color picker ^
    

    //slider direction
    var directionSlider = document.getElementById('slider-direction');
    noUiSlider.create(directionSlider, {
        start: 20,
        direction: 'rtl',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var directionField = document.getElementById('field');
    directionSlider.noUiSlider.on('update', function (values, handle) {
        directionField.innerHTML = values[handle];
    });
    //slider direction ^


    //slider tooltips
    var tooltipSlider = document.getElementById('slider-tooltips');
    noUiSlider.create(tooltipSlider, {
        start: [20, 80, 120],
        tooltips: [false, wNumb({decimals: 1}), true],
        range: {
            'min': 0,
            'max': 200
        }
    });
    //slider tooltips ^    

    //slider behaviour snap
    var snapSlider2 = document.getElementById('snap');
    noUiSlider.create(snapSlider2, {
        start: 40,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': 20,
            'max': 80
        }
    });
    //slider behaviour snap ^
    
    
    //slider behaviour combined 
    var dragTapSlider = document.getElementById('combined');
    noUiSlider.create(dragTapSlider, {
        start: [40, 60],
        behaviour: 'drag-tap',
        connect: true,
        range: {
            'min': 20,
            'max': 80
        }
    });
    //slider behaviour combined ^


    //slider range left to right
    var range_all_sliders = {
        'min': [ 0 ],
        '10%': [ 500, 500 ],
        '50%': [ 4000, 1000 ],
        'max': [ 10000 ]
    };

    //disable slider
    var disSlider1 = document.getElementById('disable1');
    var checkbox1 = document.getElementById('checkbox1');
    function toggle(element) {

        // If the checkbox is checked, disabled the slider.
        // Otherwise, re-enable it.
        if (this.checked) {
            element.setAttribute('disabled', true);
        } else {
            element.removeAttribute('disabled');
        }
    }

    noUiSlider.create(disSlider1, {
        start: 80,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    checkbox1.addEventListener('click', function () {
        toggle.call(this, disSlider1);
    });
    //disable slider ^




})(jQuery);