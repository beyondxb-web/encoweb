// ===================================
// Charts Initialization with Error Handling
// ===================================

function initCharts() {
    // Wait for Chart.js to load
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library not loaded. Please check the CDN link.');
        return;
    }

    // Chart.js default configuration
    Chart.defaults.font.family = "'Noto Sans SC', 'Open Sans', sans-serif";
    Chart.defaults.color = '#4b5563';
    Chart.defaults.plugins.legend.labels.usePointStyle = true;

    // ===================================
    // NMP Consumption Chart - 修复版
    // ===================================
    const nmpConsumptionCtx = document.getElementById('nmp-consumption-chart');
    if (nmpConsumptionCtx) {
        try {
            new Chart(nmpConsumptionCtx, {
                type: 'bar',
                data: {
                    labels: ['GBL\n(吨)', '纯甲胺\n(吨)', '动力电\n(kWh)', '循环水\n(吨)', '蒸汽\n(吨)', '导热油\n(kW)'],
                    datasets: [{
                        label: '吨耗/小时消耗',
                        data: [0.99, 0.32, 488, 260, 2.44, 2400],
                        backgroundColor: [
                            'rgba(74, 144, 226, 0.8)',
                            'rgba(92, 168, 232, 0.8)',
                            'rgba(16, 185, 129, 0.8)',
                            'rgba(245, 158, 11, 0.8)',
                            'rgba(239, 68, 68, 0.8)',
                            'rgba(139, 92, 246, 0.8)'
                        ],
                        borderColor: [
                            'rgba(74, 144, 226, 1)',
                            'rgba(92, 168, 232, 1)',
                            'rgba(16, 185, 129, 1)',
                            'rgba(245, 158, 11, 1)',
                            'rgba(239, 68, 68, 1)',
                            'rgba(139, 92, 246, 1)'
                        ],
                        borderWidth: 2,
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'NMP生产原料及动力消耗对比 (80,000吨/年)',
                            font: {
                                size: 15,
                                weight: '600'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    label += context.parsed.y;
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '消耗量',
                                font: {
                                    size: 12,
                                    weight: '600'
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 11
                                }
                            }
                        }
                    }
                }
            });
            console.log('NMP Consumption Chart created successfully');
        } catch (error) {
            console.error('Error creating NMP Consumption Chart:', error);
        }
    }

    // ===================================
    // Chlorine Process Chart - 修复版
    // ===================================
    const chlorineProcessCtx = document.getElementById('chlorine-process-chart');
    if (chlorineProcessCtx) {
        try {
            new Chart(chlorineProcessCtx, {
                type: 'line',
                data: {
                    labels: ['液氯进料', '脱NCl₃', '脱轻塔', '脱重塔', '产品罐装'],
                    datasets: [{
                        label: '纯度提升 (%)',
                        data: [98.5, 99.2, 99.8, 99.99, 99.9999],
                        fill: true,
                        backgroundColor: 'rgba(74, 144, 226, 0.15)',
                        borderColor: 'rgba(74, 144, 226, 1)',
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: 'rgba(74, 144, 226, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                padding: 15,
                                font: {
                                    size: 12
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: '超高纯氯气提纯工艺纯度变化',
                            font: {
                                size: 15,
                                weight: '600'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return '纯度: ' + context.parsed.y + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            min: 98,
                            max: 100,
                            title: {
                                display: true,
                                text: '纯度 (%)',
                                font: {
                                    size: 12,
                                    weight: '600'
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value.toFixed(2) + '%';
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            console.log('Chlorine Process Chart created successfully');
        } catch (error) {
            console.error('Error creating Chlorine Process Chart:', error);
        }
    }

    // ===================================
    // Chlorine Investment Chart - 修复版
    // ===================================
    const chlorineInvestmentCtx = document.getElementById('chlorine-investment-chart');
    if (chlorineInvestmentCtx) {
        try {
            new Chart(chlorineInvestmentCtx, {
                type: 'doughnut',
                data: {
                    labels: [
                        '进料设备 (200万)', 
                        '脱NCl₃设备 (200万)', 
                        '精馏设备 (432万)', 
                        '罐装设备 (578万)', 
                        '副产设备 (262万)', 
                        '应急设备 (402万)', 
                        '公辅设备 (209万)', 
                        '其他 (940万)'
                    ],
                    datasets: [{
                        data: [200, 200, 432, 578, 262, 402, 209, 940],
                        backgroundColor: [
                            'rgba(74, 144, 226, 0.85)',
                            'rgba(92, 168, 232, 0.85)',
                            'rgba(16, 185, 129, 0.85)',
                            'rgba(245, 158, 11, 0.85)',
                            'rgba(239, 68, 68, 0.85)',
                            'rgba(139, 92, 246, 0.85)',
                            'rgba(236, 72, 153, 0.85)',
                            'rgba(148, 163, 184, 0.85)'
                        ],
                        borderWidth: 3,
                        borderColor: '#fff',
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1.8,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                padding: 12,
                                font: {
                                    size: 11
                                },
                                generateLabels: function(chart) {
                                    const data = chart.data;
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map((label, i) => {
                                            const value = data.datasets[0].data[i];
                                            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                            const percentage = ((value / total) * 100).toFixed(1);
                                            return {
                                                text: `${label.split(' ')[0]} (${percentage}%)`,
                                                fillStyle: data.datasets[0].backgroundColor[i],
                                                hidden: false,
                                                index: i
                                            };
                                        });
                                    }
                                    return [];
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: '超高纯氯气设备投资分布',
                            font: {
                                size: 15,
                                weight: '600'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.parsed;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `${label}: ${value}万元 (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
            console.log('Chlorine Investment Chart created successfully');
        } catch (error) {
            console.error('Error creating Chlorine Investment Chart:', error);
        }
    }

    // ===================================
    // Hydrogen Capacity Chart - 修复版
    // ===================================
    const hydrogenCapacityCtx = document.getElementById('hydrogen-capacity-chart');
    if (hydrogenCapacityCtx) {
        try {
            new Chart(hydrogenCapacityCtx, {
                type: 'bar',
                data: {
                    labels: ['小型\n5-15 Nm³/h', '中型\n200 Nm³/h', '大型\n300 Nm³/h', '超大型\n350 Nm³/h'],
                    datasets: [{
                        label: '制氢能力',
                        data: [15, 200, 300, 350],
                        backgroundColor: [
                            'rgba(74, 144, 226, 0.7)',
                            'rgba(92, 168, 232, 0.7)',
                            'rgba(16, 185, 129, 0.7)',
                            'rgba(245, 158, 11, 0.7)'
                        ],
                        borderColor: [
                            'rgba(74, 144, 226, 1)',
                            'rgba(92, 168, 232, 1)',
                            'rgba(16, 185, 129, 1)',
                            'rgba(245, 158, 11, 1)'
                        ],
                        borderWidth: 2,
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: '水电解制氢站产能规模对比',
                            font: {
                                size: 15,
                                weight: '600'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return '产能: ' + context.parsed.y + ' Nm³/h';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '产能 (Nm³/h)',
                                font: {
                                    size: 12,
                                    weight: '600'
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            console.log('Hydrogen Capacity Chart created successfully');
        } catch (error) {
            console.error('Error creating Hydrogen Capacity Chart:', error);
        }
    }

    // ===================================
    // Guanidine Investment Chart - 修复版
    // ===================================
    const guanidineInvestmentCtx = document.getElementById('guanidine-investment-chart');
    if (guanidineInvestmentCtx) {
        try {
            new Chart(guanidineInvestmentCtx, {
                type: 'pie',
                data: {
                    labels: [
                        '硝酸胍设备', 
                        '硝基胍设备', 
                        '公用工程', 
                        '检测设备', 
                        '安装费用', 
                        '土建费用'
                    ],
                    datasets: [{
                        data: [950, 2050, 1450, 150, 1800, 5551],
                        backgroundColor: [
                            'rgba(74, 144, 226, 0.85)',
                            'rgba(92, 168, 232, 0.85)',
                            'rgba(16, 185, 129, 0.85)',
                            'rgba(245, 158, 11, 0.85)',
                            'rgba(239, 68, 68, 0.85)',
                            'rgba(139, 92, 246, 0.85)'
                        ],
                        borderWidth: 3,
                        borderColor: '#fff',
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1.8,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                padding: 12,
                                font: {
                                    size: 11
                                },
                                generateLabels: function(chart) {
                                    const data = chart.data;
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map((label, i) => {
                                            const value = data.datasets[0].data[i];
                                            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                            const percentage = ((value / total) * 100).toFixed(1);
                                            return {
                                                text: `${label}: ${value}万 (${percentage}%)`,
                                                fillStyle: data.datasets[0].backgroundColor[i],
                                                hidden: false,
                                                index: i
                                            };
                                        });
                                    }
                                    return [];
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: '硝基胍/硝酸胍项目投资分布 (总计: 11,951万元)',
                            font: {
                                size: 15,
                                weight: '600'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.parsed;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `${label}: ${value}万元 (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
            console.log('Guanidine Investment Chart created successfully');
        } catch (error) {
            console.error('Error creating Guanidine Investment Chart:', error);
        }
    }

    console.log('All charts initialization completed');
}

// Ensure Chart.js is loaded before initializing
function waitForChartJS() {
    if (typeof Chart !== 'undefined') {
        initCharts();
    } else {
        console.log('Waiting for Chart.js to load...');
        setTimeout(waitForChartJS, 100);
    }
}

// Initialize charts when DOM and Chart.js are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForChartJS);
} else {
    waitForChartJS();
}

// Export for external use
if (typeof window !== 'undefined') {
    window.initCharts = initCharts;
}