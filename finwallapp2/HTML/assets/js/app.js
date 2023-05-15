'use strict';

$(window).on('load', function () {

    var body = $('body');

    switch (body.attr('data-page')) {
        case "splash":
            setTimeout(function () {
                window.location.replace("landing.html");
            }, 4000)
            break;


        case "thankyou":
            setTimeout(function () {
                window.location.replace("index.html");
            }, 4000)
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

        case "landing":
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                //autohide: !1,
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
            $('.introswiper').css('height', ($(window).height() - 185) + 'px');
            var introswiper = new Swiper(".introswiper", {
                direction: 'vertical',
                mousewheelControl: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
            });
            introswiper.on('reachEnd', function () {
                introswiper.autoplay = false;
                setTimeout(function () {
                    window.location.replace("signin.html");
                }, 5000);
            });
            break;

        case "index":
            /* Progress circle */
            var progresssaving = new ProgressBar.Circle(circlesaving, {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 6,
                trailWidth: 6,
                easing: 'easeInOut',
                trailColor: '#FFD6DF',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FF345E', width: 6 },
                to: { color: '#FF345E', width: 6 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small class='size-12'>%<small>");
                    }

                }
            });
            progresssaving.text.style.fontSize = '24px';
            progresssaving.animate(0.65);  // Number from 0.0 to 1.0

            /* Progress circle */
            var progresssaving2 = new ProgressBar.Circle(circlesaving2, {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 6,
                trailWidth: 6,
                easing: 'easeInOut',
                trailColor: '#ffedc0',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#ffbd17', width: 6 },
                to: { color: '#ffbd17', width: 6 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "<small class='size-12'>%<small>");
                    }

                }
            });
            progresssaving2.text.style.fontSize = '24px';
            progresssaving2.animate(0.82);  // Number from 0.0 to 1.0

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
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

        case 'stats':
            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 60);
            }

            window.randomScalingFactor2 = function () {
                return Math.round(Math.random() * 60 - 30);
            }
            var barchart = document.getElementById('areachart').getContext('2d');
            var mybarcartCofig = {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                        ],
                        backgroundColor: '#FF345E',
                        borderWidth: 0,
                        borderRadius: 10,
                        borderSkipped: false,
                        barThickness: 10,
                    },
                    {
                        label: '# of Votes',
                        data: [
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                            randomScalingFactor2(),
                        ],
                        backgroundColor: '#00DFA3',
                        borderWidth: 0,
                        borderRadius: 10,
                        borderSkipped: false,
                        barThickness: 10,
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
                            ticks: {
                                display: false
                            },
                            drawBorder: false,
                            label: false,
                            grid: {
                                display: true,
                                zeroLineColor: 'rgba(219,219,219,0.3)',
                                drawBorder: false,
                                lineWidth: 1,
                                zeroLineWidth: 2
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                        }
                    }
                }
            }
            var myBarChart = new Chart(barchart, mybarcartCofig);
            /* my area chart randomize */
            setInterval(function () {
                mybarcartCofig.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor2();
                    });
                });
                myBarChart.update();
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


            var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
                color: '#3AC79B',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8f4eb',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#00DFA3', width: 10 },
                to: { color: '#00DFA3', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        //  circle.setText('');
                    } else {
                        // circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles2.text.style.fontSize = '20px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

            /* Progress circle */
            var progressCircles3 = new ProgressBar.Circle(circleprogressthree, {
                color: '#F73563',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#fdd7e0',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#F73563', width: 10 },
                to: { color: '#F73563', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        // circle.setText('');
                    } else {
                        //  circle.setText(value + "<small>%<small>");
                    }

                }
            });
            progressCircles3.animate(0.65);  // Number from 0.0 to 1.0


            /* Progress circle */
            var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                trailColor: '#CCF9ED',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#00DFA3', width: 8 },
                to: { color: '#00DFA3', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText('<span class="size-12">' + value + '<small>%<small></span>');
                    }

                }
            });
            progressCircles1.animate(0.65);  // Number from 0.0 to 1.0


            /* Progress circle */
            var progressCircles4 = new ProgressBar.Circle(circleprogressfour, {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                trailColor: '#FFF1CC',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FFBB00', width: 8 },
                to: { color: '#FFBB00', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText('<span class="size-12">' + value + '<small>%<small></span>');
                    }

                }
            });
            progressCircles4.animate(0.65);  // Number from 0.0 to 1.0

            /* chart js areachart */
            var areachart2 = document.getElementById('smallchart2').getContext('2d');
            var gradient2 = areachart2.createLinearGradient(0, 0, 0, 66);
            gradient2.addColorStop(0, 'rgba(58, 199, 155, 0.6)');
            gradient2.addColorStop(1, 'rgba(58, 199, 155, 0)');
            var myareachartCofig2 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient2,
                        borderColor: '#00DFA3',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig2.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart2.update();
            }, 2000);


            /* chart js areachart */
            var areachart3 = document.getElementById('smallchart3').getContext('2d');
            var gradient3 = areachart3.createLinearGradient(0, 0, 0, 66);
            gradient3.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
            gradient3.addColorStop(1, 'rgba(247, 53, 99, 0)');
            var myareachartCofig3 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient3,
                        borderColor: '#f73563',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart3 = new Chart(areachart3, myareachartCofig3);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig3.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart3.update();
            }, 2000);


            /* swiper carousel cardwiper */
            var swiper1 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;

        case 'addmoney':
            /* swiper carousel cardwiper */
            var swiper1 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
        case 'sendmoney':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            $('.cardswiper .swiper-slide .card').on('click', function () {
                $('.cardswiper .swiper-slide .card').removeClass('selected');
                $(this).addClass('selected').find('.form-check-input').prop('checked', true);
            });

            break;

        case 'bills':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;
        case 'shop':
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

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;
        case 'withdraw':
            /* swiper carousel cardwiper */
            var swiper1 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
        case 'rewards':
            /* swiper carousel connectionwiper */
            var swiper1 = new Swiper(".summayswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel cardwiper */
            var swiper3 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            $('.cardswiper .swiper-slide .card').on('click', function () {
                $('.cardswiper .swiper-slide .card').removeClass('selected');
                $(this).addClass('selected').find('.form-check-input').prop('checked', true);
            });

            break;
        case 'wallet':
            /* swiper carousel cardwiper */
            var swiper3 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 60);
            }
            var areachart21 = document.getElementsByClassName('areachartsmall')[0].getContext('2d');
            var areachart31 = document.getElementsByClassName('areachartsmall')[1].getContext('2d');
            var areachart41 = document.getElementsByClassName('areachartsmall')[2].getContext('2d');
            var gradient21 = areachart21.createLinearGradient(0, 0, 0, 44);
            gradient21.addColorStop(0, 'rgba(0, 223, 163, 0.6)');
            gradient21.addColorStop(1, 'rgba(0, 223, 163, 0)');
            var myareachartCofig21 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient21,
                        borderColor: '#00DFA3',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart21 = new Chart(areachart21, myareachartCofig21);
            var myAreaChart31 = new Chart(areachart31, myareachartCofig21);
            var myAreaChart41 = new Chart(areachart41, myareachartCofig21);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig21.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart21.update();
            }, 1000);

            setInterval(function () {
                myareachartCofig21.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart31.update();
            }, 1500);

            setInterval(function () {
                myareachartCofig21.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart41.update();
            }, 2000);



            break;

        case 'product':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;

        case 'profile':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            break;

        case 'users':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
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

        case 'blog':
            /* swiper carousel projects */
            var swiper12 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            break;

    }

});
