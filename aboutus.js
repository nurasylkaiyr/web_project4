const trafficData = [1000, 1200, 1500, 1800]
const userData = [12000, 40000, 7000]
function generateData(data){
    return data;
}

const lineChartCanvas = document.getElementById('line-chart').getContext('2d');
const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
      label: 'Website Traffic',
      data: generateData(trafficData),
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false
  }]
};

new Chart(lineChartCanvas, {
    type: 'line',
    data: lineChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const pieChartCanvas = document.getElementById('pie-chart').getContext('2d');
const pieChartData = {
  labels: ['Users', 'Visitors', 'Subscribers'],
  datasets: [{
      data: generateData(userData),
      backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1
  }]
};

new Chart(pieChartCanvas, {
  type: 'pie',
  data: pieChartData
});
