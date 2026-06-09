/* ============================================
   Zhiyun Digital - Data Layer
   All site content data
   ============================================ */

const SITE_DATA = {

  /* --- Navigation Structure --- */
  navigation: {
    main: [
      { label: '首页', href: '../index.html', icon: 'home' },
      { label: '知识库', href: 'index.html', icon: 'book-open' },
      { label: '核心任务', href: '../tasks/index.html', icon: 'target' },
      { label: '数据看板', href: '../dashboard.html', icon: 'bar-chart-3' }
    ],
    categories: [
      {
        id: '01',
        title: '半导体基础',
        icon: 'cpu',
        href: '0101-chip-classification.html',
        children: ['0101', '0102', '0103', '0104', '0105']
      },
      {
        id: '02',
        title: '高速网卡芯片',
        icon: 'network',
        href: '0201-nic-overview.html',
        children: ['0201', '0202', '0203', '0204', '0205']
      },
      {
        id: '03',
        title: 'AI推理芯片',
        icon: 'brain',
        href: '0301-ai-chip-overview.html',
        children: ['0301', '0302', '0303', '0304', '0305']
      },
      {
        id: '04',
        title: '半导体产业链',
        icon: 'factory',
        href: '0401-design-manufacture-test.html',
        children: ['0401', '0402', '0403', '0404']
      },
      {
        id: '05',
        title: '智云数科业务上下文',
        icon: 'briefcase',
        href: '0501-business-landscape.html',
        children: ['0501', '0502', '0503']
      }
    ]
  },

  /* --- Knowledge Nodes (22 total) --- */
  knowledgeNodes: {

    /* === 01 - Semiconductor Basics === */
    '0101': {
      id: '0101',
      title: '芯片分类与架构',
      category: '01-半导体基础',
      icon: 'cpu',
      priority: '核心',
      href: '0101-chip-classification.html',
      term: '芯片（Integrated Circuit, IC）：将大量晶体管集成在半导体基片上，实现特定功能的微型电子电路。',
      plainExplain: '芯片就像一座微型城市，里面住了几十亿个"小开关"（晶体管），它们按设计好的图纸连接在一起，能完成计算、存储、通信等各种任务。你手机里的芯片就相当于一个超小超快的"大脑"。',
      keyParams: [
        { name: '逻辑芯片', value: 'CPU、GPU、DPU', desc: '负责"思考"和"决策"的芯片' },
        { name: '存储芯片', value: 'DRAM、NAND Flash', desc: '负责"记忆"的芯片' },
        { name: '通信芯片', value: '网卡芯片、基带芯片', desc: '负责"传递信息"的芯片' },
        { name: 'CPU', value: 'Central Processing Unit', desc: '通用型"大脑"，什么都能干但不是最快' },
        { name: 'GPU', value: 'Graphics Processing Unit', desc: '专注并行计算的"算力狂人"' },
        { name: 'DPU', value: 'Data Processing Unit', desc: '专管数据搬运和预处理的"交通局长"' },
        { name: 'ASIC', value: 'Application Specific IC', desc: '只干一件事但干到极致的"专业选手"' }
      ],
      zhiyunRelation: '智云高速网卡芯片属于通信芯片 + DPU/逻辑芯片的交叉领域——既管通信又管数据处理。智云推理芯片属于GPU/ASIC范畴——专用AI推理，架构类似GPU但更专注推理场景。',
      related: ['0102', '0202', '0303', '0201']
    },

    '0102': {
      id: '0102',
      title: '制程与工艺节点',
      category: '01-半导体基础',
      icon: 'ruler',
      priority: '核心',
      href: '0102-process-nodes.html',
      term: '制程（Process Node / Technology Node）：半导体制造中晶体管栅极的最小特征尺寸，以纳米（nm）为单位，代表芯片制造工艺的先进程度。',
      plainExplain: '制程就像写字的笔尖粗细——笔尖越细（数字越小），同一面积上能写下的字（晶体管）越多，芯片就越强大、越省电。7nm就是"笔尖"只有7纳米粗，大约是头发丝直径的万分之一。',
      keyParams: [
        { name: '28nm', value: '2011年', desc: '"铅笔"——够用但不够精细' },
        { name: '14nm', value: '2014年', desc: '"圆珠笔"——主流水准' },
        { name: '7nm', value: '2018年', desc: '"签字笔"——先进水平' },
        { name: '5nm', value: '2020年', desc: '"针管笔"——顶尖水平' },
        { name: '3nm', value: '2022年', desc: '"纳米笔"——最前沿' }
      ],
      zhiyunRelation: '推理芯片选择7nm——国产代工（中芯国际）能实现的最先进制程，但受美国制裁影响量产能力。制程选择直接影响估值：7nm vs 14nm的芯片，市场估值差异巨大。',
      related: ['0103', '0402', '0304', '0404'],
      chartConfig: {
        type: 'processTimeline',
        title: '制程演进时间线',
        data: [
          { year: '2011', node: '28nm', product: '中低端芯片' },
          { year: '2014', node: '14nm', product: 'Intel早期10代CPU' },
          { year: '2018', node: '7nm', product: '华为麒麟980、AMD Zen 2' },
          { year: '2020', node: '5nm', product: '苹果M1、华为麒麟9000' },
          { year: '2022', node: '3nm', product: '苹果A17、M3' }
        ]
      }
    },

    '0103': {
      id: '0103',
      title: '流片与量产',
      category: '01-半导体基础',
      icon: 'play-circle',
      priority: '核心',
      href: '0103-tape-out.html',
      term: '流片（Tape-out）：芯片设计完成后，将版图数据交付晶圆代工厂进行首次制造的过程。就像建筑图纸完成后第一次真正盖房子。',
      plainExplain: '流片就是芯片的"首秀"——设计师把画好的芯片图纸交给工厂，工厂用极其精密的工艺把它"印"到硅片上。第一次流片就像第一次做菜，味道可能不够完美，需要调试。流片成功意味着芯片从"纸上谈兵"变成了"真家伙"。',
      keyParams: [
        { name: '7nm流片费用', value: '3000-5000万美金', desc: '一次Full Mask流片的费用' },
        { name: '28nm流片费用', value: '500-800万美金', desc: '一次Full Mask流片的费用' },
        { name: '回片周期', value: '3-6个月', desc: '从流片到拿到样片' },
        { name: '一次成功率', value: '30-40%', desc: '首次流片就完全成功' },
        { name: 'Full Mask', value: '全掩膜流片', desc: '从零开始做所有"模具"，费用极高' },
        { name: 'MPW', value: '多项目晶圆', desc: '多家拼一条产线，分摊费用，像"拼车"' }
      ],
      zhiyunRelation: '"8月流片"含义：智云推理芯片计划2026年8月提交版图给中芯国际，3-6个月后回片。8月流片是P1融资的关键里程碑——成功流片将显著提升估值。首次流片成功率30-40%，需在融资方案中考虑重流风险。',
      related: ['0102', '0104', '0304', '0402'],
      chartConfig: {
        type: 'tapeoutCost',
        title: '流片费用对比',
        data: [
          { process: '28nm', cost: 650, unit: '万美金' },
          { process: '14nm', cost: 1500, unit: '万美金' },
          { process: '7nm', cost: 4000, unit: '万美金' },
          { process: '5nm', cost: 8000, unit: '万美金' },
          { process: '3nm', cost: 15000, unit: '万美金' }
        ]
      }
    },

    '0104': {
      id: '0104',
      title: 'EDA与IP',
      category: '01-半导体基础',
      icon: 'pen-tool',
      priority: '核心',
      href: '0104-eda-ip.html',
      term: 'EDA（Electronic Design Automation，电子设计自动化）：用于芯片设计的专业软件工具链，覆盖从架构设计到版图生成的全流程。',
      plainExplain: 'EDA就是芯片设计师的"画图工具+计算器+检查器"三件套。就像建筑师用CAD软件画楼一样，芯片设计师用EDA软件画芯片。没有EDA工具，现代芯片设计根本不可能——几十亿个晶体管不可能靠手工画。',
      keyParams: [
        { name: 'Synopsys', value: '~32%份额', desc: '美国，受限' },
        { name: 'Cadence', value: '~30%份额', desc: '美国，受限' },
        { name: 'Siemens EDA', value: '~14%份额', desc: '德国/美国，受限' },
        { name: '华大九天', value: '~2%份额', desc: '中国，国产替代' },
        { name: 'IP授权费', value: '几十万~几千万美金', desc: '使用IP的一次性费用' },
        { name: 'EDA年费', value: '50-200万美金/年', desc: '单个工具年度授权费' }
      ],
      zhiyunRelation: 'IP迁移是收购核心：收购全球第五高速网卡公司，本质是买其EDA工具链使用权和IP核。10-12期迁移：分批从授权→买断→人才转移→国内重新注册。美国三大EDA厂商均受限，智云需确保迁移后仍能使用或找到替代。',
      related: ['0103', '0201', '0502', '0404'],
      chartConfig: {
        type: 'edaMarketShare',
        title: 'EDA市场份额分布',
        data: [
          { vendor: 'Synopsys', share: 32 },
          { vendor: 'Cadence', share: 30 },
          { vendor: 'Siemens EDA', share: 14 },
          { vendor: '其他', share: 22 },
          { vendor: '华大九天', share: 2 }
        ]
      }
    },

    '0105': {
      id: '0105',
      title: '封装与测试',
      category: '01-半导体基础',
      icon: 'package',
      priority: '重要',
      href: '0105-packaging-testing.html',
      term: '封装（Packaging）：将裸芯片（Die）用外壳保护并引出电气连接的过程，使芯片能与外部电路连接。',
      plainExplain: '封装就是给芯片"穿衣服+接线"——裸芯片就像刚出生的婴儿，又脆弱又没法和外界沟通，封装给它穿上保护壳，接上"手脚"（引脚），这样就能插到电路板上干活了。',
      keyParams: [
        { name: '先进封装成本', value: '占芯片总成本30-50%', desc: '2.5D/3D封装费用' },
        { name: '良率', value: '成熟制程90%+，先进制程60-80%', desc: '制造合格率' },
        { name: '封测周期', value: '2-4周', desc: '从裸片到成品' },
        { name: 'Chiplet', value: '芯片拆分拼装', desc: '大芯片拆成多个小芯片分别制造再拼装' },
        { name: '3D封装', value: '叠层封装', desc: '多颗芯片像盖楼一样叠起来，密度最高' }
      ],
      zhiyunRelation: '通富微电：智云合作方，A股封测龙头。蓝瞳半导体：总投资约900亿，首批封测厂约60亿。封测是芯片交付的关键瓶颈——即使设计完成、流片成功，封测产能不足也会延迟交付。',
      related: ['0403', '0304', '0401']
    },

    /* === 02 - High-Speed NIC === */
    '0201': {
      id: '0201',
      title: '网卡芯片概览',
      category: '02-高速网卡芯片',
      icon: 'network',
      priority: '核心',
      href: '0201-nic-overview.html',
      term: '网卡芯片（Network Interface Controller, NIC）：实现计算机与网络之间数据收发的专用芯片，是服务器接入网络的"门户"。',
      plainExplain: '网卡芯片就是服务器的"网卡大脑"——没有它，服务器就像没有电话的人，没法跟其他服务器"说话"。在AI数据中心里，成千上万台服务器需要高速"通话"，网卡就是它们的"5G手机"。',
      keyParams: [
        { name: '25GbE', value: '标准AI服务器配置', desc: '2.5万兆' },
        { name: '100GbE', value: '高性能计算标配', desc: '10万兆' },
        { name: '400GbE', value: '最前沿', desc: '40万兆，智云目标市场' },
        { name: '线速（Line Rate）', value: '400G', desc: '网卡能处理的最大数据速率' },
        { name: '延迟（Latency）', value: 'AI训练极敏感', desc: '数据从发送到接收的时间' }
      ],
      zhiyunRelation: '收购"全球第五"的高速网卡芯片公司，核心资产是其SmartNIC/DPU技术和IP。400G网卡是智云在UB底座适配中的关键产品线。网卡芯片市场正从基础网卡向SmartNIC/DPU演进，智云收购正逢其时。',
      related: ['0202', '0203', '0204', '0101', '0301']
    },

    '0202': {
      id: '0202',
      title: 'SmartNIC与DPU',
      category: '02-高速网卡芯片',
      icon: 'layers',
      priority: '核心',
      href: '0202-smartnic-dpu.html',
      term: 'SmartNIC（智能网卡）：在网络数据收发基础上，增加了可编程数据处理能力的网卡芯片。DPU（Data Processing Unit）：SmartNIC的更高级形态，具备更强的通用计算能力和更完整的软件生态。',
      plainExplain: '普通网卡就像"快递驿站"只管收发包裹，SmartNIC则是"智能快递中心"——除了收发，还能分拣、打包、检查、甚至预处理包裹。DPU就是"区域物流枢纽"——不仅处理包裹，还负责整个区域的数据调度、安全检查、存储管理。',
      keyParams: [
        { name: '网络卸载', value: '减轻CPU 30-50%', desc: '让网卡自己处理网络协议' },
        { name: '存储卸载', value: '减轻CPU 20-30%', desc: '让网卡直接读写存储' },
        { name: '安全卸载', value: '减轻CPU 10-20%', desc: '让网卡做加密/解密' },
        { name: 'NVIDIA BlueField-3', value: 'DPU霸主', desc: 'ARM+专用加速' },
        { name: 'DPU功耗', value: '15-75W', desc: 'DPU芯片功耗范围' }
      ],
      zhiyunRelation: '收购标的是全球第五的SmartNIC/DPU公司。从SmartNIC向DPU演进是智云产品线的技术路线。DPU市场增速快：预计2025-2028年CAGR超30%，是智云估值增长的重要支撑。',
      related: ['0201', '0203', '0205', '0303']
    },

    '0203': {
      id: '0203',
      title: 'RDMA与高速互联',
      category: '02-高速网卡芯片',
      icon: 'zap',
      priority: '重要',
      href: '0203-rdma.html',
      term: 'RDMA（Remote Direct Memory Access，远程直接内存访问）：一种允许一台计算机直接访问另一台计算机内存的网络技术，无需操作系统介入。',
      plainExplain: '普通网络通信就像"寄信"——你写好信交给邮局，邮局再送到对方。RDMA就像"心灵感应"——你的数据直接"瞬移"到对方内存里，中间不经过任何邮局，速度极快。',
      keyParams: [
        { name: 'InfiniBand延迟', value: '0.5-1微秒', desc: '速度最快、最贵、NVIDIA垄断' },
        { name: 'RoCE延迟', value: '2-5微秒', desc: '性能接近IB、成本更低' },
        { name: 'TCP/IP延迟', value: '50-100微秒', desc: '传统网络延迟' },
        { name: 'RDMA CPU占用', value: '<5%', desc: '极低CPU占用' },
        { name: 'TCP CPU占用', value: '30-50%', desc: '高CPU占用' }
      ],
      zhiyunRelation: '高速网卡芯片的核心价值就是实现RDMA——让AI集群的GPU之间高速通信。RoCE是智云网卡的主攻方向：比InfiniBand便宜，性能接近，且不受NVIDIA垄断。每张AI训练卡需要1-2张高速网卡，市场规模随GPU出货量线性增长。',
      related: ['0202', '0204', '0303']
    },

    '0204': {
      id: '0204',
      title: 'UB底座与华为灵衢',
      category: '02-高速网卡芯片',
      icon: 'shield',
      priority: '核心（智云专属）',
      href: '0204-ub-huawei.html',
      term: 'UB（Unified Bus，统一总线）：华为推出的灵衢互联协议（UniStar），已成为中国国家标准，用于数据中心内计算节点之间的高速互联。',
      plainExplain: 'UB就像华为定的"国产5G通信标准"——以前数据中心的服务器之间用外国的通信协议，UB是中国自己的标准。灵衢就是华为造的"国产高速公路系统"——路、车、收费站、交规一整套。',
      keyParams: [
        { name: 'UB速率', value: '400G', desc: 'UB当前最高速率' },
        { name: '国家标准', value: '已获批', desc: '政务/国企/信创市场强制要求' },
        { name: 'UB延迟', value: '~2微秒', desc: '与RoCE相当' },
        { name: '华为生态', value: '深度绑定昇腾', desc: '智云可借力华为生态切入市场' }
      ],
      zhiyunRelation: '"在400G网卡层面受阻"：当前UB生态缺少400G速率的网卡芯片供应商，这是智云的核心市场机会。UB适配是智云网卡的差异化竞争力。UB国标地位意味着政务云、国企、信创采购强制要求，市场规模有政策保障。',
      related: ['0203', '0205', '0304', '0404']
    },

    '0205': {
      id: '0205',
      title: '高速网卡竞争格局',
      category: '02-高速网卡芯片',
      icon: 'bar-chart-2',
      priority: '重要',
      href: '0205-nic-competition.html',
      term: '高速网卡芯片市场：全球数据中心网络接口芯片市场，正从传统网卡向SmartNIC/DPU快速演进。',
      plainExplain: '这个市场就像"数据中心快递行业"——以前只要能送快递就行，现在客户要求快递公司还能分拣、打包、检查，所以整个行业在升级换代，机会巨大。',
      keyParams: [
        { name: 'NVIDIA份额', value: '~60%', desc: '绝对霸主' },
        { name: 'Broadcom份额', value: '~20%', desc: '传统强企' },
        { name: 'Intel份额', value: '~10%', desc: '第二梯队' },
        { name: 'SmartNIC CAGR', value: '~35%', desc: '2024-2028年' },
        { name: 'DPU CAGR', value: '~40%', desc: '2024-2028年' },
        { name: '中国DPU CAGR', value: '~50%', desc: '2024-2028年' }
      ],
      zhiyunRelation: '"全球第五"定位：前四为NVIDIA、Broadcom、Intel、AMD/Marvell，收购标的是中国唯一进入全球前五的SmartNIC/DPU公司。差异化竞争策略：不与NVIDIA正面竞争IB市场，聚焦UB信创生态和RoCE国产替代。估值逻辑：全球第五稀缺性 + UB国标唯一适配 + AI算力爆发。',
      related: ['0202', '0204', '0305', '0404'],
      chartConfig: {
        type: 'nicMarketGrowth',
        title: 'SmartNIC/DPU市场增长曲线',
        data: {
          labels: ['2024', '2025', '2026', '2027', '2028'],
          datasets: [
            { label: 'SmartNIC（亿美金）', data: [25, 34, 46, 62, 80], color: '#89b4fa' },
            { label: 'DPU（亿美金）', data: [15, 21, 30, 42, 60], color: '#a6e3a1' },
            { label: '中国DPU（亿美金）', data: [3, 5, 8, 11, 15], color: '#cba6f7' }
          ]
        }
      }
    },

    /* === 03 - AI Inference Chip === */
    '0301': {
      id: '0301',
      title: 'AI芯片概览',
      category: '03-AI推理芯片',
      icon: 'brain',
      priority: '核心',
      href: '0301-ai-chip-overview.html',
      term: 'AI芯片（AI Accelerator）：专门为人工智能计算任务设计和优化的处理器芯片，是AI系统的"算力引擎"。',
      plainExplain: 'AI芯片就是专门给AI用的"超级大脑"——普通CPU什么都能干但不专精，GPU擅长并行计算但不够专一，AI芯片则是为AI"量身定制"的大脑，干AI这活比谁都快、比谁都省电。',
      keyParams: [
        { name: '训练芯片', value: 'NVIDIA A100/H100', desc: 'AI"上学"时用的芯片' },
        { name: '推理芯片', value: 'NVIDIA L4/L40', desc: 'AI"上班"时用的芯片' },
        { name: 'INT8算力', value: 'TOPS', desc: '8位整数运算能力，推理最常用' },
        { name: 'FP16算力', value: 'TFLOPS', desc: '半精度浮点运算能力' },
        { name: 'HBM容量', value: 'GB', desc: '高带宽内存容量' }
      ],
      zhiyunRelation: '智云选择推理赛道而非训练赛道——训练市场被NVIDIA绝对垄断（>90%），推理市场更分散，国产芯片有机会。推理市场增速更快（AI应用爆发后推理需求远超训练）。"针对细分场景推理"：不做通用推理，而是聚焦特定垂直场景。',
      related: ['0302', '0303', '0304', '0101', '0201']
    },

    '0302': {
      id: '0302',
      title: '推理与训练',
      category: '03-AI推理芯片',
      icon: 'git-compare',
      priority: '核心',
      href: '0302-inference-training.html',
      term: '训练（Training）：用大量数据让AI模型"学习"的过程。推理（Inference）：训练好的模型接收新输入并给出预测结果的过程。',
      plainExplain: '训练就是AI的"上学阶段"——给它看几百万张猫和狗的照片，它慢慢学会分辨。推理就是AI的"上班阶段"——学成毕业后，看到一张新照片就能判断是猫还是狗。',
      keyParams: [
        { name: '训练精度', value: 'FP32/FP16/BF16', desc: '需要精确计算' },
        { name: '推理精度', value: 'INT8/FP16/INT4', desc: '近似就行' },
        { name: '训练显存', value: '80GB+ (HBM3)', desc: '存模型+梯度+优化器' },
        { name: '推理显存', value: '24-48GB', desc: '只存模型权重' },
        { name: '训练市场', value: 'NVIDIA垄断>90%', desc: '一个老师垄断' },
        { name: '推理市场', value: '分散，国产有机会', desc: '多家可以竞争' }
      ],
      zhiyunRelation: '选择推理而非训练是智云最关键的战略决策——避开NVIDIA垄断区。推理市场增速>CAGR 50%：AI应用爆发后推理需求将远超训练（行业预测推理:训练 = 8:2）。"细分场景推理"：不做通用推理大饼，聚焦金融/工业/安防等垂直场景。',
      related: ['0301', '0303', '0304', '0203']
    },

    '0303': {
      id: '0303',
      title: 'GPU架构与算力',
      category: '03-AI推理芯片',
      icon: 'monitor',
      priority: '核心',
      href: '0303-gpu-architecture.html',
      term: 'GPU（Graphics Processing Unit，图形处理器）：拥有大量并行计算核心的处理器，最初用于图形渲染，后被广泛应用于AI计算。',
      plainExplain: 'CPU就像一个"超级学霸"——什么科目都会，但一次只能做一道题。GPU就像一万个"普通学生"——虽然单个没那么聪明，但一万个人同时做题，速度碾压学霸。AI计算正好需要这种"人海战术"。',
      keyParams: [
        { name: 'A100 INT8', value: '312 TOPS', desc: '7nm, 80GB HBM2e' },
        { name: 'H100 INT8', value: '3958 TOPS', desc: '4nm, 80GB HBM3' },
        { name: 'RTX 4090 INT8', value: '1321 TOPS', desc: '4nm, 24GB GDDR6X' },
        { name: 'SM', value: 'Streaming Multiprocessor', desc: 'GPU里的"小班级"' },
        { name: 'Tensor Core', value: '张量核心', desc: 'GPU里的"AI特长生"' }
      ],
      zhiyunRelation: '"对标4090"的含义：智云推理芯片目标INT8算力约1000+ TOPS，接近4090水平。4090是消费级顶级GPU，智云推理芯片对标4090说明定位是中高端推理。7nm制程下做4090级别的芯片有挑战，需依靠架构优化。',
      related: ['0302', '0304', '0305', '0202'],
      chartConfig: {
        type: 'gpuEvolution',
        title: 'NVIDIA GPU演进算力对比',
        data: [
          { product: 'A100', int8: 312, fp16: 312, process: '7nm', vram: '80GB HBM2e', tdp: '300W' },
          { product: 'H100', int8: 3958, fp16: 989, process: '4nm', vram: '80GB HBM3', tdp: '700W' },
          { product: 'RTX 4090', int8: 1321, fp16: 330, process: '4nm', vram: '24GB GDDR6X', tdp: '450W' }
        ]
      }
    },

    '0304': {
      id: '0304',
      title: '智云推理芯片',
      category: '03-AI推理芯片',
      icon: 'star',
      priority: '核心（智云专属）',
      href: '0304-zhiyun-inference.html',
      term: '智云推理芯片：智云数科自研的AI推理专用芯片，采用7nm制程，2026年8月流片，性能对标NVIDIA RTX 4090。',
      plainExplain: '这是智云自己的"AI推理大脑"——不是去跟NVIDIA的顶级训练芯片硬碰硬，而是做一款专门用于AI推理的芯片，性能接近4090这个消费级顶级GPU的水平，但更专注于推理场景。',
      keyParams: [
        { name: '制程', value: '7nm', desc: '智云落后一代' },
        { name: 'INT8算力', value: '~1000+ TOPS（目标）', desc: '接近4090' },
        { name: '流片时间', value: '2026年8月', desc: '时间窗口' },
        { name: '代工厂', value: '中芯国际', desc: '制裁风险' },
        { name: '价格', value: '预计远低于4090', desc: '性价比优势' }
      ],
      zhiyunRelation: '8月流片是P1融资的关键里程碑——成功流片可大幅提升估值。"对标4090"不是"等于4090"：推理场景下INT8性能接近4090即可。7nm + 中芯国际 = 核心风险：美国制裁影响中芯国际7nm量产能力。自消纳策略保证基本出货量。',
      related: ['0303', '0305', '0102', '0103', '0402', '0204'],
      chartConfig: {
        type: 'zhiyunMilestones',
        title: '智云推理芯片关键里程碑',
        data: [
          { time: '2026年8月', event: '流片（Tape-out）', risk: '流片可能延期' },
          { time: '2026年11月-2027年2月', event: '回片（ES工程样片）', risk: '首次流片成功率30-40%' },
          { time: '2027年Q1-Q2', event: '样片测试', risk: '可能需要改版重流' },
          { time: '2027年Q2-Q3', event: '量产样片（PS）', risk: '封测产能瓶颈' },
          { time: '2027年Q3-Q4', event: '小批量交付', risk: '市场窗口风险' }
        ]
      }
    },

    '0305': {
      id: '0305',
      title: 'AI推理芯片竞争格局',
      category: '03-AI推理芯片',
      icon: 'swords',
      priority: '重要',
      href: '0305-ai-competition.html',
      term: 'AI推理芯片市场：专门用于AI模型推理的芯片市场，包括GPU、ASIC、NPU等多种架构。',
      plainExplain: '训练市场是NVIDIA的"独角戏"，但推理市场更像"群雄逐鹿"——因为推理不需要那么强的通用性，各家都能找到自己的差异化切入口。',
      keyParams: [
        { name: 'NVIDIA L4/L40', value: '~1200/1800 TOPS', desc: '通用推理标杆' },
        { name: '华为昇腾310P', value: '估~640 TOPS', desc: '信创+华为生态' },
        { name: '寒武纪思元370', value: '~256 TOPS', desc: '国产推理' },
        { name: '全球推理CAGR', value: '~40%', desc: '2024-2028年' },
        { name: '中国推理CAGR', value: '~50%', desc: '2024-2028年' },
        { name: '信创推理CAGR', value: '~70%', desc: '2024-2028年' }
      ],
      zhiyunRelation: '细分场景推理是关键差异化：不做"通用推理大饼"，选金融/工业/安防等垂直场景。推理:训练 = 8:2趋势——AI应用爆发后推理市场远大于训练。"对标4090"的战略含义：4090是消费级顶级，智云做推理专用，性价比可远超4090。',
      related: ['0304', '0205', '0404'],
      chartConfig: {
        type: 'aiInferenceGrowth',
        title: '全球AI推理芯片市场增长',
        data: {
          labels: ['2024', '2025', '2026', '2027', '2028'],
          datasets: [
            { label: '全球AI推理芯片（亿美金）', data: [150, 210, 300, 420, 600], color: '#89b4fa' },
            { label: '中国AI推理芯片（亿美金）', data: [30, 48, 72, 108, 150], color: '#a6e3a1' },
            { label: '信创推理（亿美金）', data: [5, 9, 17, 28, 40], color: '#cba6f7' }
          ]
        }
      }
    },

    /* === 04 - Supply Chain === */
    '0401': {
      id: '0401',
      title: '设计-制造-封测',
      category: '04-半导体产业链',
      icon: 'factory',
      priority: '核心',
      href: '0401-design-manufacture-test.html',
      term: 'Fabless：无晶圆厂设计公司，只做芯片设计，制造和封测外包。Foundry：晶圆代工厂。OSAT：外包半导体封装和测试服务厂商。',
      plainExplain: 'Fabless就像"只画图纸的建筑设计院"——自己不盖楼，把图纸交给施工队（代工厂）去盖，盖好再交给装修队（封测厂）去装修和验收。',
      keyParams: [
        { name: '芯片设计', value: '价值占比30-40%', desc: '"画图纸最值钱"，利润率40-60%' },
        { name: '晶圆制造', value: '价值占比40-50%', desc: '"盖楼最花钱"，利润率25-40%' },
        { name: '封装测试', value: '价值占比15-20%', desc: '"装修最辛苦"，利润率10-20%' },
        { name: '智云模式', value: 'Fabless', desc: '核心竞争力在芯片设计' },
        { name: '代工伙伴', value: '中芯国际', desc: '7nm流片，受制裁风险' },
        { name: '封测伙伴', value: '通富微电', desc: '战略合作方' }
      ],
      zhiyunRelation: '智云是Fabless模式：核心竞争力在芯片设计，制造和封测依赖合作伙伴。产业链风险集中在中芯国际7nm：代工环节是最大单点风险。通富微电+蓝瞳半导体双重封测保障，降低了封测环节风险。',
      related: ['0402', '0403', '0404', '0104', '0105']
    },

    '0402': {
      id: '0402',
      title: '晶圆代工',
      category: '04-半导体产业链',
      icon: 'circle',
      priority: '核心',
      href: '0402-foundry.html',
      term: '晶圆代工（Foundry）：专门按照客户提供的芯片设计版图，在硅晶圆上制造芯片的服务。',
      plainExplain: '晶圆代工就是芯片界的"代工厂"——客户拿图纸来，工厂负责用极其精密的设备把芯片"印"到硅片上。就像印刷厂帮作者印书一样，代工厂帮设计公司"印"芯片。',
      keyParams: [
        { name: 'TSMC', value: '~90%先进制程份额', desc: '受制裁无法使用' },
        { name: 'Samsung', value: '~8%先进制程份额', desc: '受制裁无法使用' },
        { name: '中芯国际', value: '~2%先进制程份额', desc: '智云7nm代工方' },
        { name: '7nm Wafer Price', value: '~1万美金', desc: '每片晶圆价格' },
        { name: '7nm Die Cost', value: '~15-30美金', desc: '每颗芯片制造成本' },
        { name: 'EUV光刻机', value: '被限制出口', desc: '7nm以下必需' }
      ],
      zhiyunRelation: '中芯国际7nm是核心依赖和核心风险：智云推理芯片7nm流片完全依赖中芯国际。制裁影响量化：无EUV下7nm良率可能只有TSMC的60-70%，影响芯片成本。备选方案：如7nm受阻，可能退回14nm，性能将大幅低于4090对标目标。',
      related: ['0401', '0404', '0102', '0304'],
      chartConfig: {
        type: 'foundryPricing',
        title: '代工定价对比',
        data: [
          { process: '28nm', waferPrice: 3000, dieCost: 5, yield: '95%+' },
          { process: '14nm', waferPrice: 6000, dieCost: 10, yield: '90%+' },
          { process: '7nm', waferPrice: 10000, dieCost: 22, yield: '60-80%' },
          { process: '5nm', waferPrice: 16000, dieCost: 40, yield: '50-70%' },
          { process: '3nm', waferPrice: 20000, dieCost: 65, yield: '40-60%' }
        ]
      }
    },

    '0403': {
      id: '0403',
      title: '封测产业',
      category: '04-半导体产业链',
      icon: 'check-circle',
      priority: '重要',
      href: '0403-packaging-test-industry.html',
      term: '封测（OSAT）：专业提供芯片封装和测试服务的企业。',
      plainExplain: '封测就是芯片的"装修+质检"——代工厂"盖好"的裸芯片是脆弱的，封测厂给它穿上保护衣、接上手脚、再全面体检，合格了才能出厂。',
      keyParams: [
        { name: '日月光（ASE）', value: '~30%份额', desc: '全球最大' },
        { name: '长电科技', value: '~12%份额', desc: '国产龙头' },
        { name: '通富微电', value: '~8%份额', desc: '智云战略合作方' },
        { name: '封装价值占比', value: '55%', desc: '封测价值链中最大环节' },
        { name: '封测周期', value: '2-4周', desc: '从裸片到成品' }
      ],
      zhiyunRelation: '通富微电是智云封测战略合作伙伴，A股上市公司。蓝瞳半导体首批封测厂约60亿投资，为智云提供未来封测产能保障。封测是相对可控的环节：相比代工（制裁风险），封测国产化程度更高。先进封装可弥补制程劣势。',
      related: ['0401', '0105', '0304']
    },

    '0404': {
      id: '0404',
      title: '国产替代与政策',
      category: '04-半导体产业链',
      icon: 'flag',
      priority: '核心',
      href: '0404-domestic-substitution.html',
      term: '国产替代（Domestic Substitution）：用国产芯片和设备替代进口产品，实现自主可控。信创：信息技术应用创新，政府/国企强制采购国产IT。',
      plainExplain: '国产替代就是"不能让别人卡脖子"——以前芯片、设备都买外国的，现在外国不卖了（制裁），只能自己做。信创就是"国产IT全家桶"——从芯片到操作系统到应用软件，全部用国产的。',
      keyParams: [
        { name: 'EUV光刻机禁售', value: '7nm以下受限', desc: '影响7nm良率' },
        { name: '国家大基金三期', value: '3440亿', desc: 'P1融资潜在来源' },
        { name: '信创市场', value: '2025年超2万亿', desc: 'UB生态市场基础' },
        { name: '国产AI芯片市场', value: '2025年超500亿', desc: '推理芯片目标市场' },
        { name: '芯片设计国产化率', value: '~15%', desc: '可用国产EDA替代部分' },
        { name: '晶圆制造国产化率', value: '~10%', desc: '7nm依赖中芯国际' }
      ],
      zhiyunRelation: '制裁是双刃剑：限制了7nm制造能力，但也创造了国产替代的巨大市场机会。P1融资可引入国家大基金/哈勃投资：政策资本是智云融资的重要来源。信创市场是智云的"安全垫"。"被制裁反而被保护"：NVIDIA高端芯片无法出口中国，国产推理芯片迎来窗口期。',
      related: ['0401', '0402', '0104', '0204', '0304']
    },

    /* === 05 - Business Context === */
    '0501': {
      id: '0501',
      title: '智云芯片业务版图',
      category: '05-智云数科业务上下文',
      icon: 'briefcase',
      priority: '核心（项目专用）',
      href: '0501-business-landscape.html',
      term: '智云数科双产品线战略：智云数科同时布局高速网卡芯片（收购获取）和AI推理芯片（自研孵化）两条产品线，形成"计算+互联"双轮驱动。',
      plainExplain: '智云数科既做"AI大脑"（推理芯片），又做"AI神经网络"（高速网卡）——大脑算得快，神经网络传得快，两者配合才能让AI真正跑起来。',
      keyParams: [
        { name: '高速网卡芯片', value: '3亿美金收购', desc: '收购全球第五，UB+RoCE' },
        { name: 'AI推理芯片', value: '7nm, 对标4090', desc: '自研孵化，8月流片' },
        { name: '智算中心', value: '2万P, 50亿+', desc: '中部最大智算中心' },
        { name: '移动+港区项目', value: '7.6亿已到位', desc: '确定性收入' },
        { name: '高端GPU定制卡', value: '3亿', desc: '依托深圳基地，2026年目标' },
        { name: '2026本部核心销售', value: '13.6亿', desc: '业绩核心承载端' }
      ],
      zhiyunRelation: '双产品线是智云数科估值的核心逻辑：单一产品线估值有限，双产品线协同带来估值溢价。P1融资故事："计算+互联"双轮驱动。智云数据6大业务板块为芯片业务提供自消纳渠道。液冷一体机是推理芯片的先行验证。',
      related: ['0502', '0503'],
      chartConfig: {
        type: 'businessSegments',
        title: '6大核心业务板块',
        data: [
          { name: '智算中心投建', value: '2万P/50亿+', icon: 'server' },
          { name: '算力+垂类大模型', value: '住建+水利', icon: 'brain' },
          { name: '高端GPU供应链', value: '核心渠道', icon: 'truck' },
          { name: '高端GPU硬件基地', value: '3条4090/5090产线', icon: 'factory' },
          { name: '芯片及算力投资', value: '双产品线', icon: 'trending-up' },
          { name: '液冷一体机', value: '多校中标', icon: 'hard-drive' }
        ]
      }
    },

    '0502': {
      id: '0502',
      title: '收购标的与技术迁移',
      category: '05-智云数科业务上下文',
      icon: 'arrow-right-circle',
      priority: '核心（项目专用）',
      href: '0502-acquisition-target.html',
      term: 'IP迁移（IP Migration）：将标的公司（被收购方）的知识产权、设计工具和核心人才从原属地转移到智云数科体系内的过程。',
      plainExplain: 'IP迁移就像"搬公司"——不光搬设备（IP核），还要搬工具（EDA授权），最重要的是搬人（核心工程师）。智云不是买个空壳，而是要把人家的技术"灵魂"完整搬回国内。',
      keyParams: [
        { name: '总对价', value: '3亿美金（一年内）', desc: '超期降至2亿美金' },
        { name: '首期支付', value: '600万美金', desc: '启动迁移' },
        { name: '迁移分期', value: '10-12期', desc: '分批迁移' },
        { name: 'Step 1', value: '授权', desc: '先租用，试试好不好用' },
        { name: 'Step 2', value: '买断', desc: '好用就买下来' },
        { name: 'Step 3', value: '人才转移', desc: '核心工程师转移到国内' },
        { name: 'Step 4', value: '国内重新注册', desc: '在国内重新办产权证' }
      ],
      zhiyunRelation: 'IP迁移完成度是P1估值的关键变量：迁移越完整，智云芯片资产估值越高。3亿vs2亿对价机制：需要在对赌协议中精确设计。EDA迁移是最脆弱环节：美国三大EDA均受限。人才是真正的核心资产：IP可以买，但会设计IP的人才是不可替代的。',
      related: ['0501', '0104', '0201', '0202']
    },

    '0503': {
      id: '0503',
      title: '芯片自消纳与生态',
      category: '05-智云数科业务上下文',
      icon: 'repeat',
      priority: '核心（项目专用）',
      href: '0503-self-consumption.html',
      term: '自消纳（Self-Consumption）：智云数科生产的芯片不完全依赖外部市场销售，而是通过自建/合作的智算中心、大厂合作、国资平台、银行贷款等渠道自行消耗产能。',
      plainExplain: '自消纳就是"自己做的饭自己先吃"——不指望别人来买，先用自己的场景把芯片跑起来，有了案例和数据再卖给别人。这样即使外部市场暂时打不开，至少不会"饿死"。',
      keyParams: [
        { name: '智算中心', value: '30-40%消纳', desc: '2万P/50亿+, 7.6亿已到位' },
        { name: '大厂合作', value: '20-30%消纳', desc: '互联网/云厂商深度合作' },
        { name: '国资平台', value: '20-30%消纳', desc: '国企/政府信创采购' },
        { name: '银行贷款', value: '补充渠道', desc: '政策性银行/商业银行融资' },
        { name: '超充站+边缘计算', value: '新消纳场景', desc: '1000个充电站/包, 1:9配资' },
        { name: '液冷一体机', value: '已验证', desc: '深大、港科大、海南大学等中标' }
      ],
      zhiyunRelation: '自消纳是智云数科的"安全网"：即使商业市场开拓不顺，自消纳可保底30-50%的芯片出货。智算中心7.6亿已到位：最确定的自消纳渠道。超充站+边缘计算是推理芯片的新消纳场景。垂类大模型是自消纳的"升级版"：从"卖算力"升级到"卖行业解决方案"。',
      related: ['0501', '0304', '0204', '0404']
    }
  },

  /* --- Core Tasks (P1-P4) --- */
  tasks: {
    'P1': {
      id: 'P1',
      title: '高速网卡团队融资结构方案',
      icon: 'banknote',
      priority: 'P1',
      priorityClass: 'p1',
      status: '待启动',
      statusClass: 'pending',
      href: 'p1-financing.html',
      summary: '设计3亿美金收购融资方案，首期2亿→二轮10-15亿人民币，引入战略投资方',
      background: '智云数科拟收购全球排名第五的高速网卡芯片公司，总对价3亿美金（一年内完成迁移；超期降至2亿美金）。首期支付600万美金启动，分10-12期迁移EDA和IP。首期融资2亿人民币（投后估值20亿，出让10%），第二轮10-15亿元引入国内大型机构。',
      coreDemands: [
        '确定总投资本金计划——3亿美金如何分批进入、投向何处、产生多少毛利',
        '设计融资结构——首期2亿→二轮10-15亿的节奏和条款',
        '确保资金链不断裂——各阶段之间如何衔接',
        '引入战略投资方——国家大基金、哈勃投资、通富微电、海淀国资、苏州国新等'
      ],
      keyQuestions: [
        '各期融资金额、估值、出让比例？',
        '资金用途分配（收购IP/人才转移/研发投入/运营）？',
        '对赌协议条款设计（一年内3亿vs超期2亿）？',
        '投资方组合策略（财务投资vs战略投资的比例）？',
        '与P2联动：芯片资产在不同估值下，SPV中51%的股权如何对应？'
      ],
      dependencies: [
        { target: 'P2', type: 'bidirectional', desc: '估值→SPV股权映射；SPV收购路径→融资结构设计' },
        { target: 'P3', type: 'unidirectional', desc: '融资结构确定后，二级市场操作才有标的' }
      ],
      deliverables: ['Markdown方案文档', 'Excel融资模型', '估值模型（DCF + Comps）', '各轮融资节奏时间线'],
      agents: ['cfa_global_investment_advisor', 'model-builder', 'ma_financing_specialist', 'international_tax_specialist', 'legal_compliance_director', 'policy_research_analyst'],
      chartConfig: {
        type: 'financingTimeline',
        title: '融资节奏时间线',
        data: [
          { phase: '首期融资', amount: '2亿人民币', valuation: '20亿（投后）', dilution: '10%', timing: '2026年Q3' },
          { phase: '二轮融资', amount: '10-15亿人民币', valuation: '待定', dilution: '待定', timing: '2026年Q4-2027年Q1' },
          { phase: '收购款-首期', amount: '600万美金', valuation: '-', dilution: '-', timing: '启动即付' },
          { phase: '收购款-总对价', amount: '3亿美金', valuation: '-', dilution: '-', timing: '一年内完成' }
        ]
      }
    },

    'P2': {
      id: 'P2',
      title: '上市公司收购交易结构',
      icon: 'building',
      priority: 'P2',
      priorityClass: 'p2',
      status: '待启动',
      statusClass: 'pending',
      href: 'p2-acquisition.html',
      summary: 'SPV收购汽车零配件上市公司40%股权，实现实际控制，市值约35亿标的',
      background: '杨总提出"一次性把钱和上市公司控股一并解决，三年目标一年干完"。标的为汽车零配件主板上市公司（市值约35亿，实控人持股61%），计划通过SPV收购40%股权实现实际控制。SPV结构：资金方5亿占49%，智云方芯片资产作价入股占51%。',
      coreDemands: [
        '设计SPV收购结构——资金方5亿占49%，智云方芯片资产作价入股占51%',
        '实现40%股权控制——原实控人保留50%但放弃5年表决权',
        '后续通过上市公司增发在国内进一步融资',
        '业绩预测：2026年装入2-4亿营收→2027年冲10亿→3-5年冲30-50亿估值'
      ],
      keyQuestions: [
        'SPV法律结构和注册地选择？',
        '资金方5亿的回报机制和退出路径？',
        '原实控人放弃表决权5年的保障条款？',
        '上市公司增发的时间窗口和监管审批？',
        '芯片资产估值与51%股权的对应关系（依赖P1）？',
        'SPV执行P1收购任务的合规路径？'
      ],
      dependencies: [
        { target: 'P1', type: 'bidirectional', desc: '估值→51%股权映射；SPV路径→收购高速网卡' },
        { target: 'P3', type: 'unidirectional', desc: '收购完成后，才有二级市场操作标的' }
      ],
      deliverables: ['Markdown方案文档', 'Excel交易模型', 'SPV股权结构模型', '增发融资测算'],
      agents: ['ma_financing_specialist', 'investment-banking', 'model-builder', 'legal_compliance_director', 'domestic_international_abs_expert', 'international_domestic_banker'],
      chartConfig: {
        type: 'spvStructure',
        title: 'SPV股权结构'
      }
    },

    'P3': {
      id: 'P3',
      title: '一二级市场联动资本运作',
      icon: 'trending-up',
      priority: 'P3',
      priorityClass: 'p3',
      status: '待启动',
      statusClass: 'pending',
      href: 'p3-capital-operation.html',
      summary: '二级市场为一级市场服务，建仓→资产注入→变现的联动操作框架',
      background: '关总理念：二级市场为一级市场服务，两线并行操作。核心资源：上海导师团队，资金体量100亿以内可安排。典型逻辑：先在二级市场建仓→设计资产注入方案→上市公司与二级市场联动→资产端变现。',
      coreDemands: [
        '设计一二级市场联动的操作框架',
        '二级市场建仓节奏与一级市场资产注入的时间配合',
        '定增定价与二级市场股价的关系管理',
        '实控人需求：股东收益增长、底仓解禁变现、控股权稳定性',
        '100亿以内资金的操作策略'
      ],
      keyQuestions: [
        '建仓时机和节奏？（需P2收购完成后才有操作标的）',
        '定增方案中20日股价如何管理？',
        '资产注入的节奏与二级市场释放利好如何配合？',
        '风控底线是什么？如何避免触发监管红线？',
        '与关总上海导师团队的合作模式？'
      ],
      dependencies: [
        { target: 'P1', type: 'unidirectional', desc: '融资结构确定后，资本运作才有基础' },
        { target: 'P2', type: 'unidirectional', desc: '上市公司收购完成后，才有二级市场操作标的' }
      ],
      deliverables: ['Markdown方案文档', 'Excel运作模型', '建仓节奏和资金分配表', '收益测算和风险压力测试'],
      agents: ['cfa_global_investment_advisor', 'quantitative_investment_manager', 'international_domestic_banker', 'legal_compliance_director', 'fx_risk_management_specialist'],
      chartConfig: {
        type: 'capitalFlow',
        title: '一二级市场联动流程'
      }
    },

    'P4': {
      id: 'P4',
      title: '业务优化管理意见',
      icon: 'settings',
      priority: 'P4',
      priorityClass: 'p4',
      status: '待启动',
      statusClass: 'pending',
      href: 'p4-business-optimization.html',
      summary: '梳理6大业务板块，评估超充站+边缘计算新方向，优化自消纳方案',
      background: '杨总多次强调"业务是根本——业务是真实的，利润也是真实的"。ST重整仅为手段而非目的，核心优先级仍以业务发展为第一。关总提出充电桩+边缘计算创新思路，杨总认为"今天关总给我的灵感和启发就是我们做的事太老实了"。',
      coreDemands: [
        '对现有业务线进行梳理和优化建议',
        '评估超充站+边缘计算新方向（充电桩内搭建服务器→边缘计算节点）',
        '充电桩三层收益逻辑评估：运营收益→数据经营→电力Token',
        '"县县通算力"→"家家通算力"的远期愿景路径',
        '芯片业务自消纳方案（智算中心+大厂+国资平台+银行贷款）'
      ],
      keyQuestions: [
        '各业务线的盈利能力和优先级排序？',
        '超充站+边缘计算的商业模式可行性？',
        '自消纳vs外销的芯片业务收入比例？',
        '6大核心业务板块之间的协同效应和资源分配优先级？',
        '新爱算100亿-150亿目标的可行性评估？',
        '垂类大模型的商业化变现模式？'
      ],
      dependencies: [
        { target: 'P1', type: 'unidirectional', desc: '融资结构影响业务投入节奏' },
        { target: 'P2', type: 'unidirectional', desc: '上市公司收购影响业务并表策略' }
      ],
      deliverables: ['Markdown方案文档（概要级）'],
      agents: ['company_ceo_expert', 'quantitative_dialectic_strategist', 'cfa_global_investment_advisor', 'market-researcher', 'policy_research_analyst'],
      chartConfig: {
        type: 'priorityMatrix',
        title: '6大业务板块优先级矩阵'
      }
    }
  },

  /* --- Dashboard Metrics --- */
  dashboardMetrics: {
    kpiCards: [
      { id: 'revenue', label: '2026核心销售目标', value: '13.6亿', unit: 'RMB', trend: 'up', color: 'blue' },
      { id: 'financing1', label: '首期融资', value: '2亿', unit: 'RMB', trend: 'up', color: 'green', sub: '投后估值20亿' },
      { id: 'acquisition', label: '收购总对价', value: '3亿', unit: 'USD', trend: 'stable', color: 'purple', sub: '一年内完成' },
      { id: 'chip_perf', label: '推理芯片INT8算力', value: '1000+', unit: 'TOPS', trend: 'up', color: 'yellow', sub: '对标4090' },
      { id: 'datacenter', label: '智算中心规模', value: '2万P', unit: '', trend: 'up', color: 'teal', sub: '预计总规模超50亿' },
      { id: 'confirmed', label: '已到位资金', value: '7.6亿', unit: 'RMB', trend: 'up', color: 'green', sub: '移动+港区项目' }
    ],
    smartnicMarket: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        { label: 'SmartNIC（亿美金）', data: [25, 34, 46, 62, 80], color: '#89b4fa' },
        { label: 'DPU（亿美金）', data: [15, 21, 30, 42, 60], color: '#a6e3a1' },
        { label: '中国DPU（亿美金）', data: [3, 5, 8, 11, 15], color: '#cba6f7' }
      ]
    },
    aiInferenceMarket: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        { label: '全球AI推理芯片（亿美金）', data: [150, 210, 300, 420, 600], color: '#89b4fa' },
        { label: '中国AI推理芯片（亿美金）', data: [30, 48, 72, 108, 150], color: '#a6e3a1' },
        { label: '信创推理（亿美金）', data: [5, 9, 17, 28, 40], color: '#cba6f7' }
      ]
    },
    marketShare: {
      labels: ['NVIDIA', 'Broadcom', 'Intel', 'AMD', '其他', '智云目标'],
      data: [60, 20, 10, 3, 5, 2],
      colors: ['#89b4fa', '#a6e3a1', '#f9e2af', '#fab387', '#6c7086', '#f38ba8']
    },
    riskMatrix: [
      { risk: '7nm制裁（中芯国际EUV受限）', severity: '极高', probability: '高', impact: '推理芯片量产受阻', color: 'red' },
      { risk: '流片失败（首次成功率30-40%）', severity: '中高', probability: '中', impact: '估值下跌、重流成本', color: 'yellow' },
      { risk: 'EDA授权受限', severity: '高', probability: '高', impact: '设计能力受限', color: 'red' },
      { risk: 'IP迁移超时', severity: '高', probability: '中', impact: '对价降至2亿、资产不完整', color: 'yellow' },
      { risk: '人才流失', severity: '中高', probability: '中', impact: '技术能力削弱', color: 'yellow' },
      { risk: 'NVIDIA捆绑销售挤压', severity: '中', probability: '高', impact: '独立网卡市场份额下降', color: 'orange' },
      { risk: '市场窗口关闭', severity: '中', probability: '低', impact: '竞品迭代快', color: 'teal' }
    ]
  }
};
