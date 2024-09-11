
// - - - - - - - - - - Gráfico faturamento - - - - - - - - - -

// Dados de ganhos e custos por mês (6 meses)
const mes_faturamento = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    earnings: [5000, 10000, 15000, 20000, 25000, 10000], // Ganhos
    costs: [3000, 7000, 8000, 12000, 15000, 7000] // Custos
};

const ctx_faturamento = document.getElementById('lineChart-faturamento').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_faturamento = {
    labels: mes_faturamento.labels,
    datasets: [
        {
            label: 'Ganhos',
            data: mes_faturamento.earnings,
            borderColor: '#3e95cd',
            fill: false,
            pointBackgroundColor: '#ff6384',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        },
        {
            label: 'Custos',
            data: mes_faturamento.costs,
            borderColor: '#8e5ea2',
            fill: false,
            pointBackgroundColor: '#36a2eb',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        }
    ]
};

const conf_faturamento = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 5000,
                callback: function(value) {
                    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRA'});
                }
            },
            grid: {
                drawBorder: false,
                color: 'rgba(0,0,0,0.1)',
                zeroLineColor: 'rgba(0,0,0,0.1)',
            }
        },
        x: {
            grid: {
                drawBorder: false,
                display: false
            }
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.dataset.label + ': R$' + tooltipItem.raw.toLocaleString();
                }
            }
        }
    }
};

// Gráfico de Linha Principal
const lineChart_faturamento = new Chart(ctx_faturamento, {
    type: 'line',
    data: dados_faturamento,
    options: conf_faturamento
});


// - - - - - - - - - - Gráfico Reicidência de Clientes - - - - - - - - - -

// Dados de ganhos e custos por mês (6 meses)
const mes_reincidencia = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    reincidencia_valores: [100, 137, 90, 151, 180, 153]
};

const ctx_reincidencia = document.getElementById('lineChart-reincidencia').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_reincidencia = {
    labels: mes_reincidencia.labels,
    datasets: [
        {
            label: '',
            data: mes_reincidencia.reincidencia_valores,
            borderColor: '#3e95cd',
            fill: false,
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        }
    ]
};

const conf_reincidencia = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 25,
            },
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.dataset.label + 'pessoas ' + tooltipItem.raw.toLocaleString();
                }
            }
        }
    }
};

// Gráfico de Linha Principal
const lineChart_reincidencia = new Chart(ctx_reincidencia, {
    type: 'line',
    data: dados_reincidencia,
    options: conf_reincidencia
});


// - - - - - - - - - - Gráfico Feed Back - - - - - - - - - -

// Dados de ganhos e custos por mês (6 meses)
const mes_feed_back = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    earnings: [5000, 10000, 15000, 20000, 25000, 10000], // Ganhos
    costs: [3000, 7000, 8000, 12000, 15000, 7000] // Custos
};

const ctx_feed_back = document.getElementById('lineChart-feed-back').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_feed_back = {
    labels: mes_feed_back.labels,
    datasets: [
        {
            label: 'Ganhos',
            data: mes_feed_back.earnings,
            borderColor: '#3e95cd',
            fill: false,
            pointBackgroundColor: '#ff6384',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        },
        {
            label: 'Custos',
            data: mes_feed_back.costs,
            borderColor: '#8e5ea2',
            fill: false,
            pointBackgroundColor: '#36a2eb',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        }
    ]
};

const conf_feed_back = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 5000,
                callback: function(value) {
                    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRA'});
                }
            },
            grid: {
                drawBorder: false,
                color: 'rgba(0,0,0,0.1)',
                zeroLineColor: 'rgba(0,0,0,0.1)',
            }
        },
        x: {
            grid: {
                drawBorder: false,
                display: false
            }
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.dataset.label + ': R$' + tooltipItem.raw.toLocaleString();
                }
            }
        }
    }
};

// Gráfico de Linha Principal
const lineChart_feed_back = new Chart(ctx_feed_back, {
    type: 'line',
    data: dados_feed_back,
    options: conf_feed_back
});


// - - - - - - - - - - Gráfico Benchimarking - - - - - - - - - -

// Dados de ganhos e custos por mês (6 meses)
const mes_benchimarking = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    earnings: [5000, 10000, 15000, 20000, 25000, 10000], // Ganhos
    costs: [3000, 7000, 8000, 12000, 15000, 7000] // Custos
};

const ctx_benchimarking = document.getElementById('lineChart-benchimarking').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_benchimarking = {
    labels: mes_benchimarking.labels,
    datasets: [
        {
            label: 'Ganhos',
            data: mes_benchimarking.earnings,
            borderColor: '#3e95cd',
            fill: false,
            pointBackgroundColor: '#ff6384',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        },
        {
            label: 'Custos',
            data: mes_benchimarking.costs,
            borderColor: '#8e5ea2',
            fill: false,
            pointBackgroundColor: '#36a2eb',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        }
    ]
};

const conf_benchimarking = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 5000,
                callback: function(value) {
                    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRA'});
                }
            },
            grid: {
                drawBorder: false,
                color: 'rgba(0,0,0,0.1)',
                zeroLineColor: 'rgba(0,0,0,0.1)',
            }
        },
        x: {
            grid: {
                drawBorder: false,
                display: false
            }
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.dataset.label + ': R$' + tooltipItem.raw.toLocaleString();
                }
            }
        }
    }
};

// Gráfico de Linha Principal
const lineChart_benchimarking = new Chart(ctx_benchimarking, {
    type: 'line',
    data: dados_benchimarking,
    options: conf_benchimarking
});