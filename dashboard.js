
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
            borderColor: '#006a0b',
            fill: false,
            pointBackgroundColor: '#006a0b',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        },
        {
            label: 'Custos',
            data: mes_faturamento.costs,
            borderColor: '#aa0000',
            fill: false,
            pointBackgroundColor: '#aa0000',
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
    labels: ['5 Estrelas', '4 Estrelas', '3 - Estrelas', '2 - Estrelas', '1 - Estrela'],
    avaliation: [5000, 10000, 15000, 20000, 2500]
};

const ctx_feed_back = document.getElementById('lineChart-feed-back').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_feed_back = {
    labels: mes_feed_back.labels,
    datasets: [
        {
            label: 'Avaliações',
            data: mes_feed_back.avaliation,
            BackgroundColor: [
                '#f2ff00',
                '#ff3c00',
                '#ff0000',
                '#51ff00',
                '#00ffb3'
            ],
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        }
    ]
};

const conf_feed_back = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.dataset.label + ' ' + tooltipItem.raw.toLocaleString();
                }
            }
        }
    }
};

// Gráfico de Linha Principal
const lineChart_feed_back = new Chart(ctx_feed_back, {
    type: 'doughnut',
    data: dados_feed_back,
    options: conf_feed_back
});


// - - - - - - - - - - Gráfico Benchmarking - - - - - - - - - -

// Dados de ganhos e custos por mês (6 meses)
const mes_benchimarking = {
    labels: ['semana 1 - Jan', 'semana 2 - Jan', 'semana 3 - Jan', 'semana 4 - Jan', 'semana 1 - Fev', 'semana 2 - Fev', 'semana 3 - Fev', 'semana 4 - Fev', 'semana 1 - Mar', 'semana 2 - Mar', 'semana 3 - Mar',  'semana 4 - Mar', 'semana 1 - Abr', 'semana 2 - Abr', 'semana 3 - Abr',  'semana 4 - Abr', 'semana 1 - Mai', 'semana 2 - Mai', 'semana 3 - Mai',  'semana 4 - Mai', 'semana 1 - Jun', 'semana 2 - Jun', 'semana 3 - Jun',  'semana 4 - Jun'],
    own_company: [103, 98, 89, 106, 117, 108, 95, 124, 135, 109, 137, 153, 145, 155, 175, 154, 178, 165, 195, 204, 195, 215, 234, 175], // Ganhos
    competition: [95, 108, 85, 95, 105, 98, 112, 101, 95, 110, 105, 115, 125, 115, 121, 134, 124, 131, 124, 119, 135, 125, 145, 95] // Custos
};

const ctx_benchimarking = document.getElementById('lineChart-benchmarking').getContext('2d');

// Gráfico de Linha com Ganhos e Custos
const dados_benchimarking = {
    labels: mes_benchimarking.labels,
    datasets: [
        {
            label: 'Meu Negócio',
            data: mes_benchimarking.own_company,
            borderColor: '#ffbb00',
            fill: false,
            pointBackgroundColor: '#ffbb00',
            pointBorderColor: '#fff',
            pointHoverRadius: 7
        },
        {
            label: 'Concorrência',
            data: mes_benchimarking.competition,
            borderColor: '#00fff2',
            fill: false,
            pointBackgroundColor: '#00fff2',
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
                stepSize: 25,
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
                    return tooltipItem.dataset.label + ': Vendas ' + tooltipItem.raw.toLocaleString();
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