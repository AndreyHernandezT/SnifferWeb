let timeover = null;
// Temporizador

var myChart = new Chart(document.getElementById("myChart"), {
    type: "pie",
    data: {
        labels: ['UDP', 'TCP'],
        datasets: [{
            label: 'Num datos',
            data: [3, 1],
            backgroundColor: [
                'rgb(66, 134, 244,0.5)',
                'rgb(74, 135, 72,0.5)'
            ]
        }]
    }
});


/* var lineal = new Chart(document.getElementById("lineal"), {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(38, 185, 154, 0.31)",
            borderColor: "rgba(38, 185, 154, 0.7)",
            pointBorderColor: "rgba(38, 185, 154, 0.7)",
            pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointBorderWidth: 1,
            data: [31, 74, 6, 39, 20, 85, 7]
        }, {
            label: "My Second dataset",
            backgroundColor: "rgba(3, 88, 106, 0.3)",
            borderColor: "rgba(3, 88, 106, 0.70)",
            pointBorderColor: "rgba(3, 88, 106, 0.70)",
            pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(151,187,205,1)",
            pointBorderWidth: 1,
            data: [82, 23, 66, 9, 99, 4, 2]
        }]
    },
}); */

var ipchart = new Chart(document.getElementById("ipchart"), {
    type: "bar",
    data: {
        labels: ['192.168.1.42', '239.255.255.250', '192.168.1.420'],
        datasets: [{
            data: [3, 2, 1],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(66, 134, 244, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192)',
                'rgba(201, 203, 207)',
                'rgba(66, 134, 244)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});