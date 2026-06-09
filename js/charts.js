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
