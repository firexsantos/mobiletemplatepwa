'use strict';

$(window).on('load', function () {

    var body = $('body');

    switch (body.attr('data-page')) {
        case "splash":
            setTimeout(function () {
                window.location.replace("landing.html");
            }, 3500)
            break;

        case "landing":
            var swiper = new Swiper(".swiper-intro", {
                pagination: {
                    el: ".pagination-intro",
                },
            });

            /* app install toast message */
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                // autohide: "!1",
                autohide: true,
                delay: 5000,
            });
            toastElinit.show();

            /* PWA add to phone Install ap button */
            var btnAdd = document.getElementById('addtohome');
            var defferedPrompt;
            window.addEventListener("beforeinstallprompt", function (event) {
                event.preventDefault();
                defferedPrompt = event;

                btnAdd.addEventListener("click", function (event) {
                    defferedPrompt.prompt();


                    defferedPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        defferedPrompt = null;
                    });
                });
            });

            break;

        case "verify":

            document.getElementById('timer').innerHTML = '03' + ':' + '00';
            startTimer();

            function startTimer() {
                var presentTime = document.getElementById('timer').innerHTML;
                var timeArray = presentTime.split(/[:]+/);
                var m = timeArray[0];
                var s = checkSecond((timeArray[1] - 1));
                if (s == 59) { m = m - 1 }
                if (m < 0) {
                    return
                }

                document.getElementById('timer').innerHTML =
                    m + ":" + s;
                setTimeout(startTimer, 1000);
            }

            function checkSecond(sec) {
                if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
                if (sec < 0) { sec = "59" };
                return sec;
            }

            break;

        case "home":
            var swiper1 = new Swiper(".categoriesswiper", {
                slidesPerView: "auto",
                spaceBetween: 12,
            });

            var swiper2 = new Swiper(".offerslides", {
                slidesPerView: "1",
                spaceBetween: 10,
                pagination: {
                    el: ".pagination-offerslides",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });

            var swiper3 = new Swiper(".trendingslides", {
                slidesPerView: "auto",
                spaceBetween: 26,
            });

            var swiper4 = new Swiper(".shopslides", {
                slidesPerView: "auto",
                spaceBetween: 0,
            });

            /* filter sliders range picker for filter */
            var html5Slider = document.getElementById('rangeslider');
            noUiSlider.create(html5Slider, {
                start: [100, 200],
                connect: true,
                range: {
                    'min': 0,
                    'max': 500
                }
            });

            var inputNumber = document.getElementById('input-number');
            var select = document.getElementById('input-select');

            html5Slider.noUiSlider.on('update', function (values, handle) {
                var value = values[handle];

                if (handle) {
                    inputNumber.value = value;
                } else {
                    select.value = Math.round(value);
                }
            });
            select.addEventListener('change', function () {
                html5Slider.noUiSlider.set([this.value, null]);
            });
            inputNumber.addEventListener('change', function () {
                html5Slider.noUiSlider.set([null, this.value]);
            });

            var toastElList = [].slice.call(document.querySelectorAll('.toast'))
            var toastList = toastElList.map(function (toastEl) {
                return new bootstrap.Toast(toastEl, {})
            });

            /* toast action events messages */
            $('#toastprouctaddedtinybtn').on('click', function () {
                $('#toastprouctaddedtiny').toast('show');
            })
            $('#toastprouctaddedbtn').on('click', function () {
                $('#toastprouctadded').toast('show');
            })

            $('#toastprouctaddedrichbtn').on('click', function () {
                $('#toastprouctaddedrich').toast('show');
            })


            /* app install toast message */
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                // autohide: "!1",
                autohide: true,
                delay: 5000,
            });
            toastElinit.show();

            /* PWA add to phone Install ap button */
            var btnAdd = document.getElementById('addtohome');
            var defferedPrompt;
            window.addEventListener("beforeinstallprompt", function (event) {
                event.preventDefault();
                defferedPrompt = event;

                btnAdd.addEventListener("click", function (event) {
                    defferedPrompt.prompt();


                    defferedPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        defferedPrompt = null;
                    });
                });
            });

            break;
        case "product":
            var swiper5 = new Swiper(".imageswiper", {
                slidesPerView: "1",
                spaceBetween: 12,
                pagination: {
                    el: ".imageswiper-pagination",
                },
            });
            var swiper6 = new Swiper(".shopslides", {
                slidesPerView: "auto",
                spaceBetween: 0,
            });

            var swiper7 = new Swiper(".offerslides", {
                slidesPerView: "1",
                spaceBetween: 10,
                pagination: {
                    el: ".pagination-offerslides",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });

            var swiper8 = new Swiper(".trendingslides", {
                slidesPerView: "auto",
                spaceBetween: 26,
            });


            /* Progress circle  */
            var progressCircles = new ProgressBar.Circle(progressCircle1, {
                color: '#52E5A5',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#52E5A5', width: 10 },
                to: { color: '#52E5A5', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles.text.style.fontSize = '12px';
            progressCircles.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles3 = new ProgressBar.Circle(progressCircle3, {
                color: '#FFC400',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FFC400', width: 10 },
                to: { color: '#FFC400', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles3.text.style.fontSize = '12px';
            progressCircles3.animate(0.60);  // Number from 0.0 to 1.0

            var progressCircles2 = new ProgressBar.Circle(progressCircle2, {
                color: '#FF1C52',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FF1C52', width: 10 },
                to: { color: '#FF1C52', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles2.text.style.fontSize = '12px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

            break;
        case "stats":
            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 50);
            }
            var areachart = document.getElementById('areachart').getContext('2d');
            var gradient = areachart.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, '#FF1C52');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
            var myareachartCofig = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        backgroundColor: gradient,
                        borderColor: '#FF1C52',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.4,
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true
                        },
                        x: {
                            color: '#666666',
                        }
                    }
                }
            }
            var myAreaChart = new Chart(areachart, myareachartCofig);

            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart.update();
            }, 2000);

            /* date picker  */
            var start = moment().subtract(29, 'days');
            var end = moment();

            $('.daterange-btn').on('click', function () {
                $('#daterange').data('daterangepicker').toggle();
            });
            $('#daterange').daterangepicker({
                opens: 'left',
                locale: { direction: 'daterange-center shadow' }
            }, function (start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
            $('.textdate').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            $('#daterange').on('apply.daterangepicker', function (ev, picker) {
                $('.textdate').text(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            });

            /* Progress circle  */
            var progressCircles = new ProgressBar.Circle(progressCircle1, {
                color: '#52E5A5',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#52E5A5', width: 10 },
                to: { color: '#52E5A5', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles.text.style.fontSize = '12px';
            progressCircles.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles3 = new ProgressBar.Circle(progressCircle3, {
                color: '#FFC400',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FFC400', width: 10 },
                to: { color: '#FFC400', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles3.text.style.fontSize = '12px';
            progressCircles3.animate(0.60);  // Number from 0.0 to 1.0

            var progressCircles2 = new ProgressBar.Circle(progressCircle2, {
                color: '#FF1C52',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FF1C52', width: 10 },
                to: { color: '#FF1C52', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            progressCircles2.text.style.fontSize = '12px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

            break;

        case "chat-message":
            window.scrollTo(0, document.body.scrollHeight);


            $('.videoplaybtn').on('click', function (e) {
                var videoPlayer = $(this).parent().next('video');
                // Auto play, half volume.
                videoPlayer[0].play();
                videoPlayer.volume = 0.5;
                $(this).parent().hide();
            })
            break;
    }

});
