(function($) {
    "use strict";

    // Simple Pie Chart JS
    if(document.getElementById("apex-simple-pie-chart")){
        var options = {
            chart: {
                width: '100%',
                height: 430,
                type: 'pie',
            },
            labels: ['UK', 'USA', 'Canada', 'Australia', 'Italy'],
            series: [44, 55, 13, 43, 22],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            legend: {
                horizontalAlign: 'right',
            }
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-simple-pie-chart"),
            options
        );
        chart.render();
    }

    // Simple Donut Chart JS
    if(document.getElementById("apex-simple-donut-chart")){
        var options = {
            chart: {
                width: '100%',
                height: 430,
                type: 'donut',
            },
            labels: ['UK', 'USA', 'Canada', 'Australia', 'Italy'],
            series: [44, 55, 41, 17, 15],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-simple-donut-chart"),
            options
        );
        chart.render();
    }

    // Monochrome Pie Chart JS
    if(document.getElementById("apex-monochrome-pie-chart")){
        var options = {
            chart: {
                width: '100%',
                height: 430,
                type: 'pie',
            },
            series: [25, 15, 44, 55, 41, 17],
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-monochrome-pie-chart"),
            options
        );
        chart.render();
    }

    // Gradient Donut Chart JS
    if(document.getElementById("apex-gradient-donut-chart")){
        var options = {
            chart: {
                width: '100%',
                height: 455,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            series: [44, 55, 41, 17, 15, 35],
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function(val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-gradient-donut-chart"),
            options
        );
        chart.render();
        const paper = chart.paper();
    }
        
}(jQuery));