// 1. Language Data Structure
const translations = {
    'en': {
        'title': 'Product Feasibility Report: Move-Connect Pro',
        'header-title': 'Market Feasibility Report: Portable Smart Screen (Move-Connect Pro)',
        'header-subtitle': 'Objective: Assess overseas market feasibility and define strategic positioning.',
        'lang-switch-en': '中文 / EN',
        'section1-title': '1. Market Analysis & Strategic Segments',
        'section1-summary': 'The product sits at the intersection of Collaboration Technology and Digital Signage, driven by Hybrid Work and Remote Learning trends.',
        's1-segment-corp': 'Corporate Sector (Hybrid Work)',
        's1-corp-data': '**Data:** 57% of U.S. workers are in hybrid/remote environments. **VP:** The flexible huddle-room solution.',
        's1-segment-edu': 'Education Sector (Interactive Learning)',
        's1-edu-data': '**Data:** Global EdTech market CAGR of 30% (2020-2025). **VP:** One device for all interactive learning spaces.',
        's1-segment-health': 'Healthcare Sector (Telemedicine)',
        's1-health-data': '**Data:** Telemedicine market to reach $395.3B by 2030. **VP:** HIPAA-compliant, point-of-care mobility.',
        's1-segment-retail': 'Retail & Service (Digital Signage)',
        's1-retail-data': '**Data:** Global Digital Signage market CAGR of 12.1%. **VP:** Dynamic, repositionable digital customer interface.',
        's1-chart-title': 'Geographic Market Demand Potential (CAGR %)',
        
        'section2-title-new': '2. Product Usage Scenarios & Renderings',
        'section2-summary-new': "The Move-Connect Pro's intrinsic portability and all-in-one design unlock a multitude of dynamic use cases.",
        's2-scenario1-title': 'Scenario 2.1: Agile Corporate Team Huddle',
        's2-scenario1-desc': 'In a modern office, a team quickly pulls the Move-Connect Pro into an open space for a spontaneous digital whiteboard session or video conference.',
        's2-scenario2-title': 'Scenario 2.2: Dynamic Classroom Engagement',
        's2-scenario2-desc': 'An educator easily wheels the Move-Connect Pro from the main classroom to a smaller breakout group for interactive lessons or online tutoring sessions.',
        's2-scenario3-title': 'Scenario 2.3: Mobile Telehealth Consultation',
        's2-scenario3-desc': 'A healthcare professional moves the Move-Connect Pro into a patient\'s room for a remote consultation with a specialist, leveraging its HD camera.',
        's2-scenario4-title': 'Scenario 2.4: Interactive Retail Pop-Up Store',
        's2-scenario4-desc': 'In a bustling mall, a brand uses the Move-Connect Pro as an interactive product catalog, digital signage, and virtual assistant for engaging customers.',
        's2-scenario5-title': 'Scenario 2.5: Mobile Live Streaming Studio',
        's2-scenario5-desc': 'Influencers or corporate trainers can wheel the Move-Connect Pro into any space for a stable, large-screen display and camera platform for professional live streams and content creation.',
        's2-scenario6-title': 'Scenario 2.6: Mobile Home Movie Watching',
        's2-scenario6-desc': 'The device is easily moved to the living room, bedroom, or patio, providing a large, 4K display for family movie nights or casual viewing, leveraging the built-in battery.',
        's2-scenario7-title': 'Scenario 2.7: Mobile Home Fitness Trainer',
        's2-scenario7-desc': 'Users can wheel the screen in front of a yoga mat or treadmill to follow fitness instructors on a large, clear display without the need for fixed wall-mounting or cables.',
        's2-scenario8-title': 'Scenario 2.8: Independent Business Handling',
        's2-scenario8-desc': 'Perfect for mobile notaries, real estate agents, or financial advisors who need a secure, interactive screen to present documents and collect digital signatures at a client\'s location.',

        'section3-title-old': '3. Strategic Pricing & Revenue Model',
        'section3-summary-old': 'Targeting a mid-range price point to undercut high-end fixed systems while maintaining a strong margin.',
        's3-th-model': 'Model Tier',
        's3-th-price': 'Retail Price Range (RRP)',
        's3-th-margin': 'Target Gross Margin',
        's3-td-economy': 'Economy (43" FHD)',
        's3-td-premium': 'Premium (55" 4K)',

        'section4-title-old': '4. Demand Analysis & Triple P Strategy',
        's4-chart-title': 'Demand Forecast: 5-Year CAGR Projection',
        's4-comp-title': 'Core Differentiation: The "Triple P" Strategy',
        's4-p1-title': 'P1: Portability',
        's4-p1-text': 'Built-in wheels AND battery: True mobility, unlike competitors (Surface Hub, Jamboard) which require fixed power.',
        's4-p2-title': 'P2: Positioning',
        's4-p2-text': 'Mid-range price point ($1.5k-$4k) undercuts high-end systems while offering superior features to generic carts.',
        's4-p3-title': 'P3: Platform Flexibility',
        's4-p3-text': 'OS-agnostic (Android/Windows option) integration for seamless compatibility with all major enterprise tech stacks.',
        's4-label-collab': 'Remote Collaboration Tools',
        's4-label-telemed': 'Telemedicine Hardware',
        's4-label-display': 'Portable Digital Displays',
        's4-label-blended': 'Blended Forecast (Target)',
        
        'section5-title-new': '5. Competitive Product Analysis',
        'section5-summary-new': 'A data-driven view of market share and sales channel dominance among key competitors.',
        's5-chart1-title': 'Collaboration Display Market Share by Brand (Global, 2024)',
        's5-insight1-title': 'North American Sales Channel Layout',
        's5-insight1-text': '**Dominant Channel:** Direct B2B Integrators (55%) and Strategic Resellers (30%). E-commerce sales are minor (15%). Focus on high-touch enterprise sales.',
        's5-insight2-title': 'APAC Sales Channel Layout',
        's5-insight2-text': '**Dominant Channel:** Localized E-commerce (40%) and Volume Distributors (40%). Direct enterprise sales are lower (20%). Requires strong online presence and local partnership.',
        's5-brand1': 'Surface Hub (Microsoft)',
        's5-brand2': 'Jamboard (Google)',
        's5-brand3': 'SMART Tech',
        's5-brand4': 'Samsung/LG Fixed Displays',
        's5-brand5': 'Others',

        // NEW SECTION 6 TRANSLATIONS
        'section6-title': '6. Amazon Platform Competitor Analysis',
        'section6-summary': 'Direct competitors on the Amazon platform, focusing on portable smart displays.',
        's6-comp1-title': 'Competitor Product 1 (43-inch Portable Screen)',
        's6-comp2-title': 'Competitor Product 2 (27-inch Smart Screen on Wheels)',
        's6-comp3-title': 'Competitor Product 3 (55-inch Wireless Display)',
        's6-comp4-title': 'Competitor Product 4 (43-inch Mobile Smart Monitor)',

        // RENUMBERED SECTIONS
        'section7-title': '7. Product Review & User Sentiment (Synthesis)',
        'section6-summary-old': 'User feedback highlights portability and ease of setup as key strengths, with screen size and connectivity as areas for improvement.',
        's6-positive-title': 'Positive Feedback Synthesis',
        's6-positive-text': 'Portability and Ease of Setup are the product\'s strongest selling points. The all-in-one nature simplifies deployment. Users praise screen quality and freedom from external power.',
        's6-negative-title': 'Concerns & Actionable Recommendations',
        's6-negative-text': 'Screen size (43"-55") is often cited as too small for larger teams. Connectivity issues in areas with poor Wi-Fi. **Action:** Prioritize a 65-inch Premium Model and implement advanced Wi-Fi stability software.',

        'section8-title': '8. Conclusion & Recommendations',
        's7-conclusion-1': '**Market Viability:** The market gap for a highly mobile, all-in-one, mid-priced collaborative display is significant and supported by strong growth in Telemedicine and Hybrid Work.',
        's7-conclusion-2': '**Key Recommendations:** 1) Prioritize the development of a 65-inch Premium model to address user feedback on screen size. 2) Develop the proprietary \'Connect-Pro\' subscription software to maximize recurring revenue (SaaS).',
        'footer-text': 'Analysis Generated: October 2025'
    },
    'zh': {
        'title': '产品可行性报告：Move-Connect Pro',
        'header-title': '市场可行性报告：带轮便携式智能屏 (Move-Connect Pro)',
        'header-subtitle': '目标：评估海外市场可行性并确定战略定位。',
        'lang-switch-en': 'EN / 中文',
        'section1-title': '1. 市场分析与战略细分',
        'section1-summary': '该产品位于协作技术和数字标牌的交叉点，受混合办公和远程学习趋势驱动。',
        's1-segment-corp': '企业部门（混合办公）',
        's1-corp-data': '**数据：** 57%的美国员工处于混合/远程工作环境。**价值主张：** 灵活的临时会议室解决方案。',
        's1-segment-edu': '教育部门（互动学习）',
        's1-edu-data': '**数据：** 全球教育技术市场复合年增长率（CAGR）为30%。**价值主张：** 一个设备适用于所有互动学习空间。',
        's1-segment-health': '医疗保健部门（远程医疗）',
        's1-health-data': '**数据：** 远程医疗市场到2030年将达到3953亿美元。**价值主张：** 符合HIPAA标准的移动护理点。',
        's1-segment-retail': '零售与服务（数字标牌）',
        's1-retail-data': '**数据：** 全球数字标牌市场复合年增长率为12.1%。**价值主张：** 动态、可重新定位的数字客户界面。',
        's1-chart-title': '地理市场需求潜力（复合年增长率 %）',

        'section2-title-new': '2. 产品使用场景与渲染图',
        'section2-summary-new': "Move-Connect Pro 内置的便携性和一体化设计，解锁了多种动态使用场景。",
        's2-scenario1-title': '场景 2.1：敏捷企业团队讨论',
        's2-scenario1-desc': '在现代办公室中，团队迅速将Move-Connect Pro从充电站拉到开放协作区，进行即时数字白板会议或视频会议。',
        's2-scenario2-title': '场景 2.2：动态课堂互动',
        's2-scenario2-desc': '教育工作者可以轻松地将Move-Connect Pro从主教室推到小型分组讨论区，进行互动课程或在线辅导。',
        's2-scenario3-title': '场景 2.3：移动远程医疗咨询',
        's2-scenario3-desc': '医护人员将Move-Connect Pro带入病房，利用其高清摄像头与专家进行远程会诊。',
        's2-scenario4-title': '场景 2.4：互动式零售快闪店',
        's2-scenario4-desc': '在繁华的商场中，品牌利用Move-Connect Pro作为互动产品目录、数字标牌和虚拟助手，吸引顾客。',
        's2-scenario5-title': '场景 2.5：移动直播工作室',
        's2-scenario5-desc': '影响者或企业培训师可以将Move-Connect Pro推到任何空间，作为稳定的大屏幕显示和摄像头平台，进行专业的直播和内容创作。',
        's2-scenario6-title': '场景 2.6：移动家庭影院',
        's2-scenario6-desc': '该设备可轻松移动到客厅、卧室或露台，利用内置电池为家庭电影之夜或休闲观影提供4K大屏。',
        's2-scenario7-title': '场景 2.7：移动家庭健身教练',
        's2-scenario7-desc': '用户可以将屏幕推到瑜伽垫或跑步机前，通过清晰的大显示屏跟练健身教练，无需固定墙面安装或连接线。',
        's2-scenario8-title': '场景 2.8：独立业务办理',
        's2-scenario8-desc': '非常适合需要安全、互动屏幕来展示文件并在客户所在地收集数字签名的移动公证人、房地产经纪人或金融顾问。',

        'section3-title-old': '3. 战略定价与营收模式',
        'section3-summary-old': '目标是中档价格点，以削弱高端固定系统，同时保持高利润率。',
        's3-th-model': '型号等级',
        's3-th-price': '零售价范围（RRP）',
        's3-th-margin': '目标毛利率',
        's3-td-economy': '经济型（43" FHD）',
        's3-td-premium': '高级型（55" 4K）',

        'section4-title-old': '4. 需求分析与三P战略',
        's4-chart-title': '需求预测：5年复合年增长率（CAGR）预测',
        's4-comp-title': '竞争定位：“三P”战略',
        's4-p1-title': 'P1：便携性 (Portability)',
        's4-p1-text': '内置轮子和电池：真正的移动性，与需要固定电源的竞争对手（Surface Hub、Jamboard）不同。',
        's4-p2-title': 'P2：定位 (Positioning)',
        's4-p2-text': '中档价格点（$1.5k-$4k），低于高端系统，同时提供优于普通手推车的特性。',
        's4-p3-title': 'P3：平台灵活性 (Platform Flexibility)',
        's4-p3-text': '操作系统无关（可选Android/Windows），与所有主要企业技术栈无缝兼容。',
        's4-label-collab': '远程协作工具',
        's4-label-telemed': '远程医疗硬件',
        's4-label-display': '便携式数字显示器',
        's4-label-blended': '综合预测（目标）',

        'section5-title-new': '5. 竞争产品分析',
        'section5-summary-new': '关键竞争对手的市场份额和销售渠道主导地位的数据驱动视图。',
        's5-chart1-title': '协作显示器市场份额（全球，2024年）',
        's5-insight1-title': '北美销售渠道布局',
        's5-insight1-text': '**主导渠道：** 直接B2B集成商 (55%) 和战略经销商 (30%)。电子商务销售较少 (15%)。重点是高接触企业销售。',
        's5-insight2-title': '亚太地区销售渠道布局',
        's5-insight2-text': '**主导渠道：** 本地化电子商务 (40%) 和批量分销商 (40%)。直接企业销售较低 (20%)。需要强大的在线影响力和本地合作关系。',
        's5-brand1': 'Surface Hub (微软)',
        's5-brand2': 'Jamboard (谷歌)',
        's5-brand3': 'SMART Tech',
        's5-brand4': '三星/LG 固定显示器',
        's5-brand5': '其他品牌',

        // NEW SECTION 6 TRANSLATIONS
        'section6-title': '6. 亚马逊平台竞品分析',
        'section6-summary': '亚马逊平台上的直接竞品分析，侧重于便携式智能显示器。',
        's6-comp1-title': '竞品 1（43英寸便携屏）',
        's6-comp2-title': '竞品 2（27英寸带轮智能屏）',
        's6-comp3-title': '竞品 3（55英寸无线显示器）',
        's6-comp4-title': '竞品 4（43英寸移动智能显示器）',

        // RENUMBERED SECTIONS
        'section7-title': '7. 产品评论与用户情绪（综合）',
        'section6-summary-old': '用户反馈突出便携性和易于设置是主要优点，屏幕尺寸和连接性是需要改进的领域。',
        's6-positive-title': '积极反馈总结',
        's6-positive-text': '便携性和易于设置是产品的最大卖点。一体化特性简化了部署。用户赞扬屏幕质量和无需外部电源的自由。',
        's6-negative-title': '担忧与可行建议',
        's6-negative-text': '屏幕尺寸（43"-55"）对于大型团队协作常被认为太小。Wi-Fi信号差的区域存在连接问题。**行动：** 优先开发65英寸高级型号，并实施先进的Wi-Fi稳定性软件。',

        'section8-title': '8. 结论与建议',
        's7-conclusion-1': '**市场可行性：** 高度移动、一体化、中等价位的协作显示器存在显著市场空白，并受到远程医疗和混合办公强劲增长的支持。',
        's7-conclusion-2': '**主要建议：** 1) 优先开发65英寸高级型号，以解决用户对屏幕尺寸的反馈。 2) 开发专有的“Connect-Pro”订阅软件以最大化经常性收入（SaaS）。',
        'footer-text': '分析生成日期：2025年10月'
    }
};

let currentLang = 'en';

// 2. Language Switching Logic (unchanged)
function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLang][key]) {
            if (key.includes('data') || key.includes('conclusion') || key.includes('desc') || key.includes('text') || key.includes('summary')) {
                const text = translations[currentLang][key];
                element.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    const switchBtn = document.getElementById('lang-switch');
    switchBtn.textContent = currentLang === 'en' ? '中文 / EN' : 'EN / 中文';

    drawCharts();
}

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.documentElement.lang = currentLang;
    updateContent();
}

document.getElementById('lang-switch').addEventListener('click', switchLanguage);

// 3. Chart Drawing Logic (Chart.js)
let geoMarketChartInstance = null;
let demandForecastChartInstance = null;
let marketShareChartInstance = null; 

function drawCharts() {
    // Destroy previous instances
    if (geoMarketChartInstance) geoMarketChartInstance.destroy();
    if (demandForecastChartInstance) demandForecastChartInstance.destroy();
    if (marketShareChartInstance) marketShareChartInstance.destroy();

    // --- Chart 1: Geographic Market Demand (Bar) ---
    const ctx1 = document.getElementById('geoMarketChart').getContext('2d');
    geoMarketChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['North America', 'Europe', 'Asia-Pacific', 'Middle East & Africa'],
            datasets: [{
                label: translations[currentLang]['s1-chart-title'].split(':')[0],
                data: [13.5, 12.0, 23.0, 10.6],
                backgroundColor: [
                    'rgba(0, 123, 255, 0.7)', 
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(40, 167, 69, 0.7)',  
                    'rgba(0, 123, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 123, 255, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(40, 167, 69, 1)',
                    'rgba(0, 123, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'CAGR (%)' } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- Chart 2: Demand Forecast (Line) ---
    const ctx2 = document.getElementById('demandForecastChart').getContext('2d');
    demandForecastChartInstance = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [
                translations[currentLang]['s4-label-collab'],
                translations[currentLang]['s4-label-telemed'],
                translations[currentLang]['s4-label-display'],
                translations[currentLang]['s4-label-blended']
            ],
            datasets: [{
                label: '5-Year CAGR',
                data: [15.0, 20.3, 12.0, 15.8],
                fill: false,
                borderColor: 'rgb(255, 193, 7)',
                backgroundColor: 'rgb(255, 193, 7)',
                tension: 0.1,
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'CAGR (%)' } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (context) => context.parsed.y + '%' } }
            }
        }
    });
    
    // --- Chart 3: Market Share by Brand (Doughnut) ---
    const ctx3 = document.getElementById('marketShareChart').getContext('2d');
    marketShareChartInstance = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: [
                translations[currentLang]['s5-brand1'],
                translations[currentLang]['s5-brand2'],
                translations[currentLang]['s5-brand3'],
                translations[currentLang]['s5-brand4'],
                translations[currentLang]['s5-brand5']
            ],
            datasets: [{
                data: [25, 18, 12, 30, 15], // Simulated Market Share Data
                backgroundColor: [
                    '#007bff',
                    '#ffc107',
                    '#28a745',
                    '#dc3545',
                    '#6c757d'
                ],
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.formattedValue + '%';
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateContent(); 
});
