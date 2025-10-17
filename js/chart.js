const ctx = document.getElementById('ticketChart').getContext('2d');
const ticketChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Software', 'Hardware', 'Network', 'Account/Access', 'Other'],
        datasets: [{
            label: 'Jumlah Tiket',
            data: [12, 7, 5, 3, 2],
            backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            },
            datalabels: {
                color: '#fff',
                formatter: (value, ctx) => {
                    let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = ((value / sum) * 100).toFixed(1) + "%";
                    return percentage;
                },
                font: {
                    weight: 'bold',
                    size: 14
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});
