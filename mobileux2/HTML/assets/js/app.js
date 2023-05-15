'use strict';

$(window).on('load', function () {

    var body = $('body');

    switch (body.attr('data-page')) {
        case "splash":
            setTimeout(function () {
                window.location.replace("landing.html");
            }, 3500)
            break;

        case "thankyou":
            setTimeout(function () {
                window.location.replace("index.html");
            }, 3500)
            break;

        case "signin":
            var passworderrorEl = document.getElementById('passworderror')
            var tooltip = new bootstrap.Tooltip(passworderrorEl, {
                boundary: document.body // or document.querySelector('#boundary')
            })
            break;

        case "signup":
            var passworderrorEl = document.getElementById('passworderror')
            var tooltip = new bootstrap.Tooltip(passworderrorEl, {
                boundary: document.body // or document.querySelector('#boundary')
            })
            break;

        case "landing":
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                autohide: !1,
            });
            toastElinit.show();

            /* PWA add to phone Install ap button */
            var btnAdd = document.getElementById('addtohome')
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

        case "index":

            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 50);
            }
            var areachart = document.getElementById('areachart').getContext('2d');
            var gradient = areachart.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#FFC374');
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
                        borderColor: '#FFC374',
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
                            fontColor: '#999999',
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

            /* areachart small chart 1*/
            var areachartsmall1 = document.getElementById('smallchart1').getContext('2d');
            var gradientsmall1 = areachart.createLinearGradient(0, 0, 0, 400);
            gradientsmall1.addColorStop(0, '#BAF6CE');
            gradientsmall1.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
            var myareasmallchartCofig1 = {
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
                        backgroundColor: gradientsmall1,
                        borderColor: '#65E5A1',
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
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreasmallChart1 = new Chart(areachartsmall1, myareasmallchartCofig1);

            /* my area small chart randomize */
            setInterval(function () {
                myareasmallchartCofig1.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreasmallChart1.update();
            }, 2000);


            /* areachart small chart 2*/
            var areachartsmall2 = document.getElementById('smallchart2').getContext('2d');
            var gradientsmall2 = areachart.createLinearGradient(0, 0, 0, 400);
            gradientsmall2.addColorStop(0, '#FFE2BB');
            gradientsmall2.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
            var myareasmallchartCofig2 = {
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
                        backgroundColor: gradientsmall2,
                        borderColor: '#FFC374',
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
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreasmallChart2 = new Chart(areachartsmall2, myareasmallchartCofig2);

            /* my area small chart 2 randomize */
            setInterval(function () {
                myareasmallchartCofig2.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreasmallChart2.update();
            }, 2000);



            /* Progress circle  */
            var progressCircles = new ProgressBar.Circle(progressCircle1, {
                color: '#7297F8',
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
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCircles.text.style.fontSize = '20px';
            progressCircles.animate(0.8);  // Number from 0.0 to 1.0

            var progressCirclesred = new ProgressBar.Circle(progressCircle2, {
                color: '#FB737C',
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
                from: { color: '#FB737C', width: 10 },
                to: { color: '#FB737C', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCirclesred.text.style.fontSize = '20px';
            progressCirclesred.animate(0.2);  // Number from 0.0 to 1.0


            /* Projects circles */
            var progressCirclesProject1 = new ProgressBar.Circle(progressCircle3, {
                color: '#7297F8',
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
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
                    }

                }
            });
            progressCirclesProject1.text.style.fontSize = '20px';
            progressCirclesProject1.animate(0.8);


            var progressCirclesProject3 = new ProgressBar.Circle(progressCircle4, {
                color: '#7297F8',
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
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
                    }

                }
            });
            progressCirclesProject3.text.style.fontSize = '20px';
            progressCirclesProject3.animate(0.75);


            var progressCirclesProject4 = new ProgressBar.Circle(progressCircle5, {
                color: '#7297F8',
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
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
                    }

                }
            });
            progressCirclesProject4.text.style.fontSize = '20px';
            progressCirclesProject4.animate(0.53);


            var progressCirclesProject5 = new ProgressBar.Circle(progressCircle6, {
                color: '#7297F8',
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
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
                    }

                }
            });
            progressCirclesProject5.text.style.fontSize = '20px';
            progressCirclesProject5.animate(0.8);


            /* swiper carousel highlights */
            var swiper1 = new Swiper(".swiperhighlight", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            /* swiper carousel swiperprojects */
            var swiper2 = new Swiper(".swiperprojects", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
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
            var btnAdd = document.getElementById('addtohome')
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

        case 'stats':
            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 50);
            }
            var barchart = document.getElementById('barchart').getContext('2d');
            var mybarchartCofig = {
                type: 'bar',
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
                        backgroundColor: "#E3EAFE",
                        fill: true,
                        tension: 0.4,
                    },
                    {
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
                        backgroundColor: "#7297F8",
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

                        },
                    }
                }
            }
            var myBarChart = new Chart(barchart, mybarchartCofig);

            /* my area chart randomize */
            setInterval(function () {
                mybarchartCofig.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myBarChart.update();
            }, 2000);
            /* swiper carousel highlights */
            var swiper1 = new Swiper(".swiperhighlight", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            break;

        case 'pinned':
            /* swiper carousel highlights */
            var swiper1 = new Swiper(".swipersummary", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            /* swiper carousel swiperprojects */
            var swiper2 = new Swiper(".swiperprojects", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            /* Projects circles */
            var progressCirclesProject1 = new ProgressBar.Circle(progressCircle1, {
                color: '#7297F8',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                trailColor: '#D6DEF9',
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCirclesProject1.text.style.fontSize = '20px';
            progressCirclesProject1.animate(0.8);


            var progressCirclesProject2 = new ProgressBar.Circle(progressCircle2, {
                color: '#65E5A1',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                trailColor: '#D3EEE7',
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#65E5A1', width: 10 },
                to: { color: '#65E5A1', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCirclesProject2.text.style.fontSize = '20px';
            progressCirclesProject2.animate(0.75);


            var progressCirclesProject3 = new ProgressBar.Circle(progressCircle3, {
                color: '#FB737C',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                trailColor: '#F1D7E0',
                easing: 'easeInOut',
                trailColor: 'rgba(0, 0, 0, 0.08)',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FB737C', width: 10 },
                to: { color: '#FB737C', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCirclesProject3.text.style.fontSize = '20px';
            progressCirclesProject3.animate(0.53);

            break;

        case 'profile':
            /* swiper carousel summary blocks */
            var swiper1 = new Swiper(".swipersummary", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            break;

        case 'shoppage':
            /* swiper carousel categories */
            var swiper1 = new Swiper(".swipercategory", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel projects */
            var swiper2 = new Swiper(".swipertrending", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
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


            break;

        case 'product':
            /* swiper carousel projects */
            var swiper2 = new Swiper(".swipertrending", {
                slidesPerView: "auto",
                spaceBetween: 18,
                pagination: false
            });

            break;

        case 'myorders':
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


            break;
        case 'cart':
            $('.number-incrementer .btn:first-child').on('click', function () {
                var currentvalue = Number($(this).next('p').text());
                if (Number(currentvalue - 1) > 0) {
                    $(this).next('p').text(Number(currentvalue - 1));
                } else {
                    $(this).closest('.card').next('.alert').removeClass('d-none');
                    $(this).closest('.card').remove();
                }
            });
            $('.number-incrementer .btn:last-child').on('click', function () {
                var currentvalue = Number($(this).prev('p').text());
                $(this).prev('p').text(Number(currentvalue + 1));
            });
            break;

        case 'chatmessage':
            /* scroll to top  button  */
            window.scrollTo(0, document.body.scrollHeight);


            $('.videoplaybtn').on('click', function (e) {
                var videoPlayer = $(this).parent().next('video');
                // Auto play, half volume.
                videoPlayer[0].play();
                videoPlayer.volume = 0.5;
                $(this).parent().hide();
            })


            break;

        case 'blogs':
            $(".sparklinechart").sparkline([5, 6, -7, 2, 0, -4, -2, 4], {
                type: 'bar',
                zeroAxis: false,
                barColor: '#63ecd4 ',
                height: '30',
            });
            $(".sparklinechart2").sparkline([-5, -6, 4, -2, 0, 4, 2, -4], {
                type: 'bar',
                zeroAxis: false,
                barColor: '#63ecd4 ',
                height: '30',
            });
            break;
        case 'todaystask':
            var total = 0;
            $('.date-list').find('li').each(function () {
                total = total + $(this).outerWidth()
                $(this).parent('ul').width(total);
            });
            $('.date-list li').on('click', function () {
                $(this).closest('.date-list').children('li').removeClass('active');
                $(this).addClass('active');
            })

            break;
        case 'calendartask':
            /* fullcalendar script  */
            var calendarEl = document.getElementById('calendars');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialDate: '2021-09-12',
                editable: true,
                selectable: true,
                businessHours: true,
                dayMaxEvents: true, // allow "more" link when too many events
                events: [
                    {
                        title: 'All Day Event',
                        start: '2021-09-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2021-09-07',
                        end: '2021-09-10'
                    },
                    {
                        groupId: 999,
                        title: 'Repeating Event',
                        start: '2021-09-09T16:00:00'
                    },
                    {
                        groupId: 999,
                        title: 'Repeating Event',
                        start: '2021-09-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2021-09-11',
                        end: '2021-09-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2021-09-12T10:30:00',
                        end: '2021-09-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2021-09-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2021-09-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2021-10-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2021-10-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2021-10-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2020-09-28'
                    }
                ]
            });
            calendar.render();



            break;
    }

});
