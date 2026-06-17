/* ============================================
   Zhiyun Digital - Charts.js
   Chart.js factory functions
   ============================================ */

const CHART_COLORS = {
  blue: '#89b4fa',
  green: '#a6e3a1',
  red: '#f38ba8',
  yellow: '#f9e2af',
  purple: '#cba6f7',
  teal: '#94e2d5',
  orange: '#fab387',
  pink: '#f5c2e7',
  muted: '#6c7086',
  border: '#45475a',
  cardBg: '#252536',
  textSecondary: '#a6adc8',
  textMuted: '#6c7086'
};

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: CHART_COLORS.textSecondary,
        font: { family: "'Inter', system-ui, sans-serif", size: 12 },
        padding: 16,
        usePointStyle: true,
        pointStyleWidth: 8
      }
    },
    tooltip: {
      backgroundColor: '#313244',
      titleColor: '#cdd6f4',
      bodyColor: '#a6adc8',
      borderColor: '#45475a',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      titleFont: { family: "'Inter', system-ui, sans-serif", weight: '600' },
      bodyFont: { family: "'Inter', system-ui, sans-serif" }
    }
  },
  scales: {
    x: {
      grid: { color: 'rgba(69,71,90,0.3)', drawBorder: false },
      ticks: { color: CHART_COLORS.textMuted, font: { size: 11 } }
    },
    y: {
      grid: { color: 'rgba(69,71,90,0.3)', drawBorder: false },
      ticks: { color: CHART_COLORS.textMuted, font: { size: 11 } }
    }
  }
};

/* --- Market Growth Curve --- */
function createMarketGrowthChart(canvasId, chartData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  const datasets = chartData.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    borderColor: ds.color || CHART_COLORS.blue,
    backgroundColor: (ds.color || CHART_COLORS.blue) + '15',
    fill: true,
    tension: 0.4,
    pointRadius: 4,
    pointHoverRadius: 6,
    borderWidth: 2
  }));

  return new Chart(ctx, {
    type: 'line',
    data: { labels: chartData.labels, datasets },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y} Billion USD`
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          title: {
            display: true,
            text: 'Billion USD',
            color: CHART_COLORS.textMuted,
            font: { size: 11 }
          }
        }
      }
    }
  });
}

/* --- Market Share Pie/Doughnut --- */
function createMarketShareChart(canvasId, labels, data, colors) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors || [
          CHART_COLORS.blue, CHART_COLORS.green, CHART_COLORS.yellow,
          CHART_COLORS.orange, CHART_COLORS.muted, CHART_COLORS.red
        ],
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 11 },
            padding: 12,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
}

/* --- Financing Timeline --- */
function createFinancingTimelineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.phase),
      datasets: [{
        label: 'Amount',
        data: data.map(d => {
          const num = parseFloat(d.amount.replace(/[^0-9.]/g, ''));
          return isNaN(num) ? 0 : num;
        }),
        backgroundColor: [CHART_COLORS.blue, CHART_COLORS.green, CHART_COLORS.purple, CHART_COLORS.yellow],
        borderColor: [CHART_COLORS.blue, CHART_COLORS.green, CHART_COLORS.purple, CHART_COLORS.yellow],
        borderWidth: 1,
        borderRadius: 6,
        maxBarThickness: 60
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      indexAxis: 'y',
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterLabel: (ctx) => {
              const item = data[ctx.dataIndex];
              return `Valuation: ${item.valuation}\nTiming: ${item.timing}`;
            }
          }
        }
      },
      scales: {
        x: {
          ...CHART_DEFAULTS.scales.x,
          title: { display: true, text: 'Amount', color: CHART_COLORS.textMuted }
        },
        y: {
          ...CHART_DEFAULTS.scales.y,
          ticks: { color: CHART_COLORS.textSecondary, font: { size: 11 } }
        }
      }
    }
  });
}

/* --- Process Node Evolution Timeline --- */
function createProcessTimelineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.node),
      datasets: [{
        label: 'Year',
        data: data.map(d => parseInt(d.year)),
        backgroundColor: [CHART_COLORS.muted, CHART_COLORS.teal, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.red],
        borderColor: [CHART_COLORS.muted, CHART_COLORS.teal, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.red],
        borderWidth: 1,
        borderRadius: 6,
        maxBarThickness: 60
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterLabel: (ctx) => `Product: ${data[ctx.dataIndex].product}`
          }
        }
      }
    }
  });
}

/* --- Tape-out Cost Comparison --- */
function createTapeoutCostChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.process),
      datasets: [{
        label: 'Cost (10K USD)',
        data: data.map(d => d.cost / 1000),
        backgroundColor: [CHART_COLORS.teal, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.yellow, CHART_COLORS.red],
        borderColor: [CHART_COLORS.teal, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.yellow, CHART_COLORS.red],
        borderWidth: 1,
        borderRadius: 6,
        maxBarThickness: 60
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `~${(ctx.parsed.y * 1000).toLocaleString()} 10K USD`
          }
        }
      }
    }
  });
}

/* --- EDA Market Share --- */
function createEDAChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  const colors = [
    CHART_COLORS.blue, CHART_COLORS.green, CHART_COLORS.orange,
    CHART_COLORS.muted, CHART_COLORS.purple
  ];

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(d => d.vendor),
      datasets: [{
        data: data.map(d => d.share),
        backgroundColor: colors,
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { size: 11 },
            padding: 12,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
}

/* --- GPU Evolution Comparison --- */
function createGPUComparisonChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.product),
      datasets: [
        {
          label: 'INT8 TOPS',
          data: data.map(d => d.int8),
          backgroundColor: CHART_COLORS.blue + '80',
          borderColor: CHART_COLORS.blue,
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: 'FP16 TFLOPS',
          data: data.map(d => d.fp16),
          backgroundColor: CHART_COLORS.purple + '80',
          borderColor: CHART_COLORS.purple,
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterBody: (items) => {
              const idx = items[0].dataIndex;
              return `Process: ${data[idx].process}\nVRAM: ${data[idx].vram}\nTDP: ${data[idx].tdp}`;
            }
          }
        }
      }
    }
  });
}

/* ============================================
   核心方案二 - 图表工厂函数
   ============================================ */

/* --- 股权结构饼图 --- */
function createEquityPieChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['资产方 (51%)', '现金方 (49%)'],
      datasets: [{
        data: [51, 49],
        backgroundColor: [CHART_COLORS.green, CHART_COLORS.purple],
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 13 },
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => {
              const labels = ['资产作价: 24亿 CNY', '原始股募资: 23亿 CNY'];
              return labels[ctx.dataIndex];
            }
          }
        }
      }
    }
  });
}

/* --- 估值结构分解图 --- */
function createValuationBreakdownChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['蓝瞳资产', '智云资产', '现金出资'],
      datasets: [{
        label: '估值/金额 (亿 CNY)',
        data: [data.lantanAssets || 12, data.zhiyunAssets || 12, data.cashContributed || 23],
        backgroundColor: [CHART_COLORS.green + '80', CHART_COLORS.blue + '80', CHART_COLORS.purple + '80'],
        borderColor: [CHART_COLORS.green, CHART_COLORS.blue, CHART_COLORS.purple],
        borderWidth: 2,
        borderRadius: 8,
        maxBarThickness: 80
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      indexAxis: 'y',
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.parsed.x} 亿 CNY`
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        x: {
          ...CHART_DEFAULTS.scales.x,
          title: { display: true, text: '亿 CNY', color: CHART_COLORS.textMuted }
        }
      }
    }
  });
}

/* --- 里程碑付款进度图 --- */
function createMilestonePaymentChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  const phases = data.map(d => d.phase);
  const amounts = data.map(d => {
    const num = parseFloat(d.amount.replace(/[^\d.]/g, ''));
    return isNaN(num) ? 0 : num;
  });
  const percentages = data.map(d => parseInt(d.percentage));

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: phases,
      datasets: [{
        label: '金额 (千万 USD)',
        data: amounts,
        backgroundColor: [
          CHART_COLORS.blue + '80',
          CHART_COLORS.green + '80',
          CHART_COLORS.purple + '80',
          CHART_COLORS.yellow + '80',
          CHART_COLORS.teal + '80'
        ],
        borderColor: [
          CHART_COLORS.blue,
          CHART_COLORS.green,
          CHART_COLORS.purple,
          CHART_COLORS.yellow,
          CHART_COLORS.teal
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${data[ctx.dataIndex].amount} (${percentages[ctx.dataIndex]}%)`,
            afterLabel: (ctx) => `里程碑: ${data[ctx.dataIndex].milestone}`
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          title: { display: true, text: '千万 USD', color: CHART_COLORS.textMuted }
        }
      }
    }
  });
}

/* --- 募资流程时间线图 --- */
function createFundraisingTimelineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['首轮资金', '二轮资金'],
      datasets: [{
        label: '募资金额 (亿 CNY)',
        data: [data.firstRound || 8, data.secondRound || 15],
        backgroundColor: [CHART_COLORS.blue + '80', CHART_COLORS.purple + '80'],
        borderColor: [CHART_COLORS.blue, CHART_COLORS.purple],
        borderWidth: 2,
        borderRadius: 8,
        maxBarThickness: 100
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterLabel: (ctx) => {
              if (ctx.dataIndex === 0) {
                return '来源: 股东自有资金 + 战略产业资金 + 设备厂投资(2亿)';
              } else {
                return '来源: 供应链合伙人 + 战略资金 + 国家大基金';
              }
            }
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          title: { display: true, text: '亿 CNY', color: CHART_COLORS.textMuted },
          beginAtZero: true
        }
      }
    }
  });
}

/* --- 风险等级分布图 --- */
function createRiskDistributionChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['高风险', '中高风险', '中风险'],
      datasets: [{
        data: [data.high || 2, data.mediumHigh || 10, data.medium || 11],
        backgroundColor: [CHART_COLORS.red, CHART_COLORS.yellow, CHART_COLORS.muted],
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 12 },
            padding: 16,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed} 项`
          }
        }
      }
    }
  });
}

/* --- 产品体系估值贡献图 --- */
function createProductContributionChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['充电桩', '光模块', '高速网卡', '推理芯片', '服务器'],
      datasets: [{
        data: [8, 6, 5, 8, 6],
        backgroundColor: [
          CHART_COLORS.green + '80',
          CHART_COLORS.blue + '80',
          CHART_COLORS.yellow + '80',
          CHART_COLORS.purple + '80',
          CHART_COLORS.teal + '80'
        ],
        borderColor: [
          CHART_COLORS.green,
          CHART_COLORS.blue,
          CHART_COLORS.yellow,
          CHART_COLORS.purple,
          CHART_COLORS.teal
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 11 },
            padding: 12,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.label}: 预估贡献 ${ctx.parsed.r} 亿估值`
          }
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { display: false },
          pointLabels: { color: CHART_COLORS.textSecondary }
        }
      }
    }
  });
}

/* --- 业务模式毛利对比图 --- */
function createBusinessMarginChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['授权模式', '生产模式(高端)', '生产模式(中端)', '运营模式'],
      datasets: [{
        label: '毛利率 (%)',
        data: [85, 60, 35, 25],
        backgroundColor: [
          CHART_COLORS.green + '80',
          CHART_COLORS.blue + '80',
          CHART_COLORS.purple + '80',
          CHART_COLORS.yellow + '80'
        ],
        borderColor: [
          CHART_COLORS.green,
          CHART_COLORS.blue,
          CHART_COLORS.purple,
          CHART_COLORS.yellow
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          min: 0,
          max: 100,
          title: { display: true, text: '毛利率 (%)', color: CHART_COLORS.textMuted }
        }
      }
    }
  });
}

/* --- 1:9 杠杆结构图 --- */
function createLeverageStructureChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['领投方 (10%)', '配套资金 (90%)'],
      datasets: [{
        data: [10, 90],
        backgroundColor: [CHART_COLORS.blue, CHART_COLORS.purple],
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '45%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 13 },
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => {
              if (ctx.dataIndex === 0) {
                return '领投方: 项目SPV控股方';
              } else {
                return '配套资金: 银行贷款/产业基金等';
              }
            }
          }
        }
      }
    }
  });
}

/* --- 资金渠道分布图 --- */
function createCapitalChannelChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['上市公司渠道', '股权基金渠道', '国资授信渠道'],
      datasets: [{
        data: [35, 40, 25],
        backgroundColor: [CHART_COLORS.blue, CHART_COLORS.green, CHART_COLORS.purple],
        borderColor: CHART_COLORS.cardBg,
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: CHART_COLORS.textSecondary,
            font: { family: "'Inter', system-ui, sans-serif", size: 12 },
            padding: 16,
            usePointStyle: true
          }
        },
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            label: (ctx) => `${ctx.label}: 预估占比 ${ctx.parsed}%`
          }
        }
      }
    }
  });
}

/* --- 变现路径时间线图 --- */
function createExitPathTimelineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || typeof Chart === 'undefined') return null;

  const paths = ['IPO上市', '上市公司并购', 'RWA资产证券化', '股权回购', '分红收益'];
  const timelines = [5, 3, 2, 4, 1]; // 年

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: paths,
      datasets: [{
        label: '预计时间 (年)',
        data: timelines,
        backgroundColor: [
          CHART_COLORS.green + '80',
          CHART_COLORS.blue + '80',
          CHART_COLORS.purple + '80',
          CHART_COLORS.yellow + '80',
          CHART_COLORS.teal + '80'
        ],
        borderColor: [
          CHART_COLORS.green,
          CHART_COLORS.blue,
          CHART_COLORS.purple,
          CHART_COLORS.yellow,
          CHART_COLORS.teal
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: false }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          title: { display: true, text: '预计时间 (年)', color: CHART_COLORS.textMuted },
          beginAtZero: true
        }
      }
    }
  });
}

/* --- 核心方案二图表初始化器 --- */
function initScheme2Charts() {
  const scheme2Data = SITE_DATA.scheme2;
  if (!scheme2Data) return;

  // 股权结构饼图
  if (document.getElementById('equityPieChart')) {
    createEquityPieChart('equityPieChart', scheme2Data.equityStructure);
  }

  // 估值结构分解图
  if (document.getElementById('valuationBreakdownChart')) {
    createValuationBreakdownChart('valuationBreakdownChart', { lantanAssets: 12, zhiyunAssets: 12, cashContributed: 23 });
  }

  // 里程碑付款进度图
  if (document.getElementById('milestonePaymentChart')) {
    createMilestonePaymentChart('milestonePaymentChart', scheme2Data.milestonePayment);
  }

  // 募资流程时间线图
  if (document.getElementById('fundraisingTimelineChart')) {
    createFundraisingTimelineChart('fundraisingTimelineChart', { firstRound: 8, secondRound: 15 });
  }

  // 风险等级分布图
  if (document.getElementById('riskDistributionChart')) {
    createRiskDistributionChart('riskDistributionChart', scheme2Data.riskMatrix.summary);
  }

  // 产品体系估值贡献图
  if (document.getElementById('productContributionChart')) {
    createProductContributionChart('productContributionChart', scheme2Data.products);
  }

  // 业务模式毛利对比图
  if (document.getElementById('businessMarginChart')) {
    createBusinessMarginChart('businessMarginChart', {});
  }

  // 1:9 杠杆结构图
  if (document.getElementById('leverageStructureChart')) {
    createLeverageStructureChart('leverageStructureChart', {});
  }

  // 资金渠道分布图
  if (document.getElementById('capitalChannelChart')) {
    createCapitalChannelChart('capitalChannelChart', {});
  }

  // 变现路径时间线图
  if (document.getElementById('exitPathTimelineChart')) {
    createExitPathTimelineChart('exitPathTimelineChart', {});
  }
}
