# P1方案次级网页设计方案

> **设计者**：傲娇大小姐哈雷酱  
> **日期**：2026-06-11  
> **目的**：为P1各子网页的关键内容创建次级详情页，丰富表述并提供深度内容

---

## 📋 设计架构

### 已创建的次级网页

| 文件名 | 关联主页面 | 内容来源 | 状态 |
|--------|----------|----------|------|
| `valuation-framework.html` | p1-financing.html | agent-output-cfa-valuation.md | ✅ 已完成 |
| `risk-matrix.html` | p1-internal-decision.html | agent-output-legal-compliance.md | ✅ 已完成 |
| `compliance-checkpoints.html` | p1-internal-decision.html | agent-output-legal-compliance.md | ✅ 已完成 |
| `fund-safety-margin.html` | p1-internal-decision.html | agent-output-ma-financing.md | ✅ 已完成 |
| `financing-channels.html` | p1-financing.html | agent-output-soe-financing.md + agent-output-cross-border-investment.md | ✅ 已完成 |
| `execution-timeline.html` | p1-yang.html | M11-执行时序与甘特图.md | ✅ 已完成 |
| `transaction-structure.html` | p1-investor.html | agent-output-fund-operations.md | ✅ 已完成 |
| `exit-paths.html` | p1-investor.html | agent-output-cfa-valuation.md | ✅ 已完成 |
| `investment-highlights.html` | p1-investor.html | agent-output-cfa-valuation.md + CONTEXT.md | ✅ 已完成 |
| `investor-profiles.html` | p1-investor.html | CONTEXT.md + agent-output-fund-operations.md | ✅ 已完成 |
| `fund-capability.html` | p1-yang.html | agent-output-soe-financing.md + agent-output-cross-border-investment.md + ADR-0007 | ✅ 已完成 |
| `negotiation-chips.html` | p1-yang.html | agent-output-ma-financing.md + CONTEXT.md | ✅ 已完成 |
| `fx-risk-management.html` | p1-yang.html | agent-output-fx-risk-management.md + ADR-0009 | ✅ 已完成 |

### 主页面链接状态

| 主页面 | 已添加链接的次级页面 | 状态 |
|--------|-------------------|------|
| `p1-financing.html` | valuation-framework.html, financing-channels.html | ✅ 已完成 |
| `p1-internal-decision.html` | risk-matrix.html, fund-safety-margin.html, compliance-checkpoints.html | ✅ 已完成 |
| `p1-investor.html` | investment-highlights.html, transaction-structure.html, exit-paths.html, investor-profiles.html | ✅ 已完成 |
| `p1-yang.html` | execution-timeline.html, fund-capability.html, negotiation-chips.html, fx-risk-management.html | ✅ 已完成 |

---

## 🔗 页面关联图

```
p1-financing.html (融资结构概览)
├── valuation-framework.html (估值框架) ✅
├── financing-channels.html (融资渠道详解) ✅
└── [链接已添加到SPV股权结构区块]

p1-internal-decision.html (内部决策版)
├── risk-matrix.html (风险矩阵) ✅
├── compliance-checkpoints.html (合规检查) ✅
├── fund-safety-margin.html (资金安全边际) ✅
└── [链接已添加到对应区块]

p1-investor.html (投资方版)
├── investment-highlights.html (投资亮点) ✅
├── transaction-structure.html (交易结构) ✅
├── exit-paths.html (退出路径) ✅
├── investor-profiles.html (投资者画像) ✅
└── [链接已添加到投资亮点摘要区块后]

p1-yang.html (杨总版)
├── execution-timeline.html (执行路线图) ✅
├── fund-capability.html (资金能力) ✅
├── negotiation-chips.html (谈判筹码) ✅
├── fx-risk-management.html (外汇风险) ✅
└── [链接已添加到执行路线图区块后]
```

---

## 🎨 设计规范

### 样式继承

所有次级网页必须：
1. 继承原网站的 `style.css` 样式文件
2. 使用相同的 Lucide 图标库
3. 使用相同的配色方案（CSS变量）
4. 使用相同的组件样式（卡片、表格、图表等）

### 导航结构

```
首页 → 核心任务 → P1融资结构 → [次级详情页]
                       ↓
                 内部决策版 → [次级详情页]
                       ↓
                  投资方版 → [次级详情页]
                       ↓
                   杨总版 → [次级详情页]
```

### 面包屑导航

每个次级页面必须包含面包屑导航，例如：
```
首页 > 核心任务 > P1融资结构 > 估值框架详解
```

---

## 📊 次级页面内容摘要

### 1. valuation-framework.html（估值框架详解）
- 三种估值方法对比（DCF、Comps、交易锚定）
- 收入预测表格（5年）
- 折现率设定与自由现金流折现
- 敏感性分析矩阵
- SPV股权比例估值支撑
- Chart.js 可视化图表

### 2. risk-matrix.html（风险矩阵与缓解措施）
- 制裁风险（7nm制程、EUV管制）
- 资金风险（资金链断裂、ODI延误、DSCR不达标）
- 执行风险和市场风险
- 缓解措施和应急预案

### 3. compliance-checkpoints.html（合规检查点详情）
- SPV注册地决策（三种方案对比）
- 监管报告矩阵
- 制裁风险缓释措施
- 内保外贷登记、ODI备案流程

### 4. fund-safety-margin.html（资金安全边际分析）
- 资金到位时间表
- 里程碑付款节奏
- 缺口期识别与桥接方案
- 对冲成本预算

### 5. financing-channels.html（融资渠道详解）
- 四大资金渠道详情
- 广西700亿授信路径
- 蓝瞳140亿协同模式
- 银团贷款方案

### 6. execution-timeline.html（执行时序详解）
- 五阶段执行甘特图
- 关键时间节点与检查点
- 资金流时间表
- 风险监控仪表盘

### 7. transaction-structure.html（交易结构详解）
- SPV三轮架构详解
- 第一轮：搭架子
- 第二轮：注资本
- 后阶段：装资产
- 投资方保护条款

### 8. exit-paths.html（退出路径与财务预测）
- 多重退出设计表格
- SPV反向并购上市公司
- 独立IPO路径
- 财务预测图表

### 9. investment-highlights.html（投资亮点深度解读）
- 核心投资逻辑五大亮点
- 自消纳体系详解
- 市场机会分析
- 蓝瞳协同价值

### 10. investor-profiles.html（战略投资者画像）
- 通富微电、哈勃投资、国家大基金等画像
- 投资方类型分布
- 出资规模与决策周期

### 11. fund-capability.html（资金导入能力详情）
- 资金渠道总览
- 广西渠道详解（700亿授信）
- 蓝瞳渠道详解（900亿项目）
- 信用杠杆倍数量化

### 12. negotiation-chips.html（谈判筹码增强方案）
- 五大核心筹码详解
- 关键谈判要点
- 筹码使用策略（三阶段）

### 13. fx-risk-management.html（外汇风险管理详情）
- 外汇风险敞口识别
- 汇率情景分析
- 对冲策略设计（三种方案对比）
- 成本效益分析

---

## ✨ 特色设计元素

### 1. 可视化图表
- Chart.js 折线图、柱状图、饼图
- 甘特图时间线
- 敏感性分析矩阵

### 2. 交互组件
- 可折叠的内容区块
- Tab切换展示不同情景
- Hover效果的数据表格

### 3. 信息层级
- 核心结论用 Alert Box 高亮
- 关键数据用 Metric Card 展示
- 详细对比用数据表格呈现

### 4. 导航优化
- 侧边栏快速跳转
- 面包屑导航追踪位置
- 返回顶部按钮
- 返回主页面链接

---

**备注**：所有次级页面已创建完成，主页面链接已全部添加。设计遵循原网站规范，确保风格一致性。
