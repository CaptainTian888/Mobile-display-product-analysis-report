// scripts.js

// Data for Market Growth Chart (example)
const marketGrowthData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
        label: 'Growth Rate (%)',
        data: [10, 15, 20, 25, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Data for Pricing Breakdown Chart (example)
const pricingData = {
    labels: ['Economy Model', 'Premium Model'],
    datasets: [{
        label: 'Pricing ($)',
        data: [1500, 2500],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1
    }]
};

// Data for Demand Forecast Chart (example)
const demandData = {
    labels: ['2023', '2024', '2025', '2026'],
    datasets: [{
        label: 'Market Demand (%)',
        data: [5, 10, 15, 20],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

// Data for Competitor Market Share Chart (example)
const competitionData = {
    labels: ['Microsoft Surface Hub', 'Google Jamboard', 'Portable Smart Screen'],
    datasets: [{
        data: [40, 35, 25],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
    }]
};

// Chart.js Configuration
const ctxMarketGrowth = document.getElementById('marketGrowthChart').getContext('2d');
const marketGrowthChart = new Chart(ctxMarketGrowth, {
    type: 'line',
    data: marketGrowthData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { 
                beginAtZero: true,
                title: { display: true, text: 'Growth Rate (%)' }
            }
        }
    }
});

const ctxPricing = document.getElementById('pricingChart').getContext('2d');
const pricingChart = new Chart(ctxPricing, {
    type: 'bar',
    data: pricingData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { 
                beginAtZero: true,
                title: { display: true, text: 'Price in USD' }
            }
        }
    }
});

const ctxDemand = document.getElementById('demandChart').getContext('2d');
const demandChart = new Chart(ctxDemand, {
    type: 'line',
    data: demandData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { 
                beginAtZero: true,
                title: { display: true, text: 'Demand Forecast (%)' }
            }
        }
    }
});

const ctxCompetition = document.getElementById('competitionChart').getContext('2d');
const competitionChart = new Chart(ctxCompetition, {
    type: 'pie',
    data: competitionData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});
