/* ============================================
   核心方案二 - 图表渲染脚本
   自动初始化各页面的图表
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 确保Chart.js已加载
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded, skipping chart initialization');
    return;
  }

  // 确保SITE_DATA已加载
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.scheme2) {
    console.warn('SITE_DATA.scheme2 not found, skipping chart initialization');
    return;
  }

  const scheme2Data = SITE_DATA.scheme2;

  // 初始化所有图表
  initAllCharts();
});

function initAllCharts() {
  // 股权结构饼图
  initEquityPieChart();

  // 估值分解图
  initValuationBreakdownChart();

  // 里程碑付款图
  initMilestonePaymentChart();

  // 募资时间线图
  initFundraisingTimelineChart();

  // 风险分布图
  initRiskDistributionChart();

  // 产品贡献图
  initProductContributionChart();

  // 业务毛利图
  initBusinessMarginChart();

  // 杠杆结构图
  initLeverageStructureChart();

  // 资金渠道图
  initCapitalChannelChart();

  // 变现路径图
  initExitPathChart();
}

/* --- 股权结构饼图 --- */
function initEquityPieChart() {
  const canvas = document.getElementById('equityPieChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['资产方 (51%)', '现金方 (49%)'],
      datasets: [{
        data: [51, 49],
        backgroundColor: ['#a6e3a1', '#cba6f7'],
        borderColor: '#252536',
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
            color: '#a6adc8',
            font: { family: "'Inter', system-ui, sans-serif", size: 13 },
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#313244',
          titleColor: '#cdd6f4',
          bodyColor: '#a6adc8',
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

/* --- 估值分解图 --- */
function initValuationBreakdownChart() {
  const canvas = document.getElementById('valuationBreakdownChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['蓝瞳资产', '智云资产', '现金出资'],
      datasets: [{
        label: '金额 (亿 CNY)',
        data: [12, 12, 23],
        backgroundColor: ['#a6e3a180', '#89b4fa80', '#cba6f780'],
        borderColor: ['#a6e3a1', '#89b4fa', '#cba6f7'],
        borderWidth: 2,
        borderRadius: 8,
        maxBarThickness: 80
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { color: '#6c7086' },
          title: { display: true, text: '亿 CNY', color: '#6c7086' }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#a6adc8' }
        }
      }
    }
  });
}

/* --- 里程碑付款图 --- */
function initMilestonePaymentChart() {
  const canvas = document.getElementById('milestonePaymentChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['首付款', '第二期', '第三期', '第四期', '尾款'],
      datasets: [{
        label: '金额 (千万 USD)',
        data: [45, 60, 60, 75, 60],
        backgroundColor: ['#89b4fa80', '#a6e3a180', '#cba6f780', '#f9e2af80', '#94e2d580'],
        borderColor: ['#89b4fa', '#a6e3a1', '#cba6f7', '#f9e2af', '#94e2d5'],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#313244',
          callbacks: {
            label: (ctx) => {
              const percentages = [15, 20, 20, 25, 20];
              return `${ctx.parsed.y * 100}万 USD (${percentages[ctx.dataIndex]}%)`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#a6adc8' }
        },
        y: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { color: '#6c7086' },
          title: { display: true, text: '千万 USD', color: '#6c7086' }
        }
      }
    }
  });
}

/* --- 募资时间线图 --- */
function initFundraisingTimelineChart() {
  const canvas = document.getElementById('fundraisingTimelineChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['首轮资金', '二轮资金'],
      datasets: [{
        label: '募资金额 (亿 CNY)',
        data: [8, 15],
        backgroundColor: ['#89b4fa80', '#cba6f780'],
        borderColor: ['#89b4fa', '#cba6f7'],
        borderWidth: 2,
        borderRadius: 8,
        maxBarThickness: 100
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#313244',
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
        x: {
          grid: { display: false },
          ticks: { color: '#a6adc8' }
        },
        y: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { color: '#6c7086' },
          title: { display: true, text: '亿 CNY', color: '#6c7086' },
          beginAtZero: true
        }
      }
    }
  });
}

/* --- 风险分布图 --- */
function initRiskDistributionChart() {
  const canvas = document.getElementById('riskDistributionChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['高风险', '中高风险', '中风险'],
      datasets: [{
        data: [2, 10, 11],
        backgroundColor: ['#f38ba8', '#f9e2af', '#6c7086'],
        borderColor: '#252536',
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
            color: '#a6adc8',
            font: { family: "'Inter', system-ui, sans-serif", size: 12 },
            padding: 16,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#313244',
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed} 项`
          }
        }
      }
    }
  });
}

/* --- 产品贡献图 --- */
function initProductContributionChart() {
  const canvas = document.getElementById('productContributionChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['充电桩', '光模块', '高速网卡', '推理芯片', '服务器'],
      datasets: [{
        data: [8, 6, 5, 8, 6],
        backgroundColor: [
          '#a6e3a180',
          '#89b4fa80',
          '#f9e2af80',
          '#cba6f780',
          '#94e2d580'
        ],
        borderColor: [
          '#a6e3a1',
          '#89b4fa',
          '#f9e2af',
          '#cba6f7',
          '#94e2d5'
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
            color: '#a6adc8',
            font: { size: 11 },
            padding: 12,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#313244',
          callbacks: {
            label: (ctx) => `${ctx.label}: 预估贡献 ${ctx.parsed.r} 亿估值`
          }
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { display: false },
          pointLabels: { color: '#a6adc8' }
        }
      }
    }
  });
}

/* --- 业务毛利图 --- */
function initBusinessMarginChart() {
  const canvas = document.getElementById('businessMarginChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['授权模式', '生产模式(高端)', '生产模式(中端)', '运营模式'],
      datasets: [{
        label: '毛利率 (%)',
        data: [85, 60, 35, 25],
        backgroundColor: ['#a6e3a180', '#89b4fa80', '#cba6f780', '#f9e2af80'],
        borderColor: ['#a6e3a1', '#89b4fa', '#cba6f7', '#f9e2af'],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#a6adc8' }
        },
        y: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { color: '#6c7086' },
          min: 0,
          max: 100,
          title: { display: true, text: '毛利率 (%)', color: '#6c7086' }
        }
      }
    }
  });
}

/* --- 杠杆结构图 --- */
function initLeverageStructureChart() {
  const canvas = document.getElementById('leverageStructureChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['领投方 (10%)', '配套资金 (90%)'],
      datasets: [{
        data: [10, 90],
        backgroundColor: ['#89b4fa', '#cba6f7'],
        borderColor: '#252536',
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
            color: '#a6adc8',
            font: { size: 13 },
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#313244',
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

/* --- 资金渠道图 --- */
function initCapitalChannelChart() {
  const canvas = document.getElementById('capitalChannelChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['上市公司渠道', '股权基金渠道', '国资授信渠道'],
      datasets: [{
        data: [35, 40, 25],
        backgroundColor: ['#89b4fa', '#a6e3a1', '#cba6f7'],
        borderColor: '#252536',
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
            color: '#a6adc8',
            font: { size: 12 },
            padding: 16,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#313244',
          callbacks: {
            label: (ctx) => `${ctx.label}: 预估占比 ${ctx.parsed}%`
          }
        }
      }
    }
  });
}

/* --- 变现路径图 --- */
function initExitPathChart() {
  const canvas = document.getElementById('exitPathChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['IPO上市', '上市公司并购', 'RWA资产证券化', '股权回购', '分红收益'],
      datasets: [{
        label: '预计时间 (年)',
        data: [5, 3, 2, 4, 1],
        backgroundColor: ['#a6e3a180', '#89b4fa80', '#cba6f780', '#f9e2af80', '#94e2d580'],
        borderColor: ['#a6e3a1', '#89b4fa', '#cba6f7', '#f9e2af', '#94e2d5'],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#a6adc8' }
        },
        y: {
          grid: { color: 'rgba(69,71,90,0.3)' },
          ticks: { color: '#6c7086' },
          beginAtZero: true,
          title: { display: true, text: '预计时间 (年)', color: '#6c7086' }
        }
      }
    }
  });
}
