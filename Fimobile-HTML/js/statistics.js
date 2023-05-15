'user strict'
$(window).on('load', function () {
    /* swiper slider carousel */
    var swiper = new Swiper('.icon-slide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
    });
    var swiper = new Swiper('.offer-slide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
    });

    var swiper = new Swiper('.two-slide', {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    var swiper = new Swiper('.news-slide', {
        slidesPerView: 5,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 0,
            }
        }
    });


    /* chart js charts   */
    var ctx = document.getElementById("linechart").getContext('2d');

    var gradient2 = ctx.createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'rgba(151, 94, 251, 0.40)');
    gradient2.addColorStop(1, 'rgba(91, 168, 255, 0.40)');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            datasets: [{
                label: ' Used MB',
                backgroundColor: gradient2,
                data: [65, 70, 60, 90, 75, 100, 130, 120, 150],
                borderColor: "rgba(151, 94, 251, 0.40)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderWidth: 2,
                borderDashOffset: 1,
                borderJoinStyle: 'bevel',
                pointBorderColor: "#ffffff",
                pointBackgroundColor: "#7b65f4",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "#000000",
                pointHoverBorderColor: "#ffffff",
                pointHoverBorderWidth: 0,
                pointRadius: 2,
                pointHitRadius: 6,
                    }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js  Line Chart',
            },
            legend: {
                display: false,
                labels: {
                    fontColor: "#888888"
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        fontColor: "#888888",
                        beginAtZero: true,
                    },
                    gridLines: {
                        color: "rgba(160,160,160,0.1",
                        zeroLineColor: "rgba(160,160,160,0.15)"
                    }
                        }],
                xAxes: [{
                    display: false,
                    ticks: {
                        fontColor: "#888888"
                    },
                    gridLines: {
                        color: "rgba(160,160,160,0.1)",
                        zeroLineColor: "rgba(160,160,160,0.15)"
                    }
                        }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    });


});
