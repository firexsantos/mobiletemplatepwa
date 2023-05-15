/**
* --------------------------------------------------------------------------
* noUoSlider Range Price
* --------------------------------------------------------------------------
*/

var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [35, 75],
    connect: true,
    tooltips: [true, wNumb({ decimals: 1 })],
    range: {
        'min': [0.01],
        'max': 100
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});