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
        'section2-title': '2. Strategic Pricing & Revenue Model',
        'section2-summary': 'Targeting a mid-range price point to undercut high-end fixed systems while maintaining a strong margin.',
        's2-th-model': 'Model Tier',
        's2-th-price': 'Retail Price Range (RRP)',
        's2-th-margin': 'Target Gross Margin',
        's2-td-economy': 'Economy (43" FHD)',
        's2-td-premium': 'Premium (55" 4K)',
        'section3-title': '3. Demand & Competitive Analysis',
        's3-chart-title': 'Demand Forecast: 5-Year CAGR Projection',
        's3-comp-title': 'Competitive Positioning: The "Triple P" Strategy',
        's3-p1-title': 'P1: Portability',
        's3-p1-text': 'Built-in wheels AND battery: True mobility, unlike competitors (Surface Hub, Jamboard) which require fixed power.',
        's3-p2-title': 'P2: Positioning',
        's3-p2-text': 'Mid-range price point ($1.5k-$4k) undercuts high-end systems while offering superior features to generic carts.',
        's3-p3-title': 'P3: Platform Flexibility',
        's3-p3-text': 'OS-agnostic (Android/Windows option) integration for seamless compatibility with all major enterprise tech stacks.',
        's3-label-collab': 'Remote Collaboration Tools',
        's3-label-telemed': 'Telemedicine Hardware',
        's3-label-display': 'Portable Digital Displays',
        's3-label-blended': 'Blended Forecast (Target)',
        'section4-title': '4. Conclusion & Recommendations',
        's4-conclusion-1': '**Market Viability:** The market gap for a highly mobile, all-in-one, mid-priced collaborative display is significant and supported by strong growth in Telemedicine and Hybrid Work.',
        's4-conclusion-2': '**Key Recommendations:** 1) Prioritize the development of a 65-inch Premium model to address user feedback on screen size. 2) Develop the proprietary \'Connect-Pro\' subscription software to maximize recurring revenue (SaaS).',
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
        'section2-title': '2. 战略定价与营收模式',
        'section2-summary': '目标是中档价格点，以削弱高端固定系统，同时保持高利润率。',
        's2-th-model': '型号等级',
        's2-th-price': '零售价范围（RRP）',
        's2-th-margin': '目标毛利率',
        's2-td-economy': '经济型（43" FHD）',
        's2-td-premium': '高级型（55" 4K）',
        'section3-title': '3. 需求与竞争分析',
        's3-chart-title': '需求预测：5年复合年增长率（CAGR）预测',
        's3-comp-title': '竞争定位：“三P”战略',
        's3-p1-title': 'P1：便携性 (Portability)',
        's3-p1-text': '内置轮子和电池：真正的移动性，与需要固定电源的竞争对手（Surface Hub、Jamboard）不同。',
        's3-p2-title': 'P2：定位 (Positioning)',
        's3-p2-text': '中档价格点（$1.5k-$4k），低于高端系统，同时提供优于普通手推车的特性。',
        's3-p3-title': 'P3：平台灵活性 (Platform Flexibility)',
        's3-p3-text': '操作系统无关（可选Android/Windows），与所有主要企业技术栈无缝兼容。',
        's3-label-collab': '远程协作工具',
        's3-label-telemed': '远程医疗硬件',
        's3-label-display': '便携式数字显示器',
        's3-label-blended': '综合预测（目标）',
        'section4-title': '4. 结论与建议',
        's4-conclusion-1': '**市场可行性：** 高度移动、一体化、中等价位的协作显示器存在显著市场空白，并受到远程医疗和混合办公强劲增长的支持。',
        's4-conclusion-2': '**主要建议：** 1) 优先开发65英寸高级型号，以解决用户对屏幕尺寸的反馈。 2) 开发专有的“Connect-Pro”订阅软件以最大化经常性收入（SaaS）。',
        'footer-text': '分析生成日期：2025年10月'
    }
};

let currentLang = 'en';

// 2. Language Switching Logic
function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLang][key]) {
            // Simple check for markdown-style bolding in text
            if (key.includes('data') || key.includes('conclusion')) {
                const text = translations[currentLang][key];
                element.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    // Update button text explicitly
    const switchBtn = document.getElementById('lang-switch');
    switchBtn.textContent = currentLang === 'en' ? '中文 / EN' : 'EN / 中文';

    // Re-draw charts with new labels
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

function drawCharts() {
    // Destroy previous instances to prevent memory leaks and redraw issues
    if (geoMarketChartInstance) {
        geoMarketChartInstance.destroy();
    }
    if (demandForecastChartInstance) {
        demandForecastChartInstance.destroy();
    }
    
    // --- Chart 1: Geographic Market Demand ---
    const ctx1 = document.getElementById('geoMarketChart').getContext('2d');
    geoMarketChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['North America', 'Europe', 'Asia-Pacific', 'Middle East & Africa'],
            datasets: [{
                label: translations[currentLang]['s1-chart-title'].split(':')[0], // Use chart title as label
                data: [13.5, 12.0, 23.0, 10.6], // CAGR Data
                backgroundColor: [
                    'rgba(0, 123, 255, 0.7)', // Primary Blue
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(40, 167, 69, 0.7)',  // Green for highest growth
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
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CAGR (%)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // --- Chart 2: Demand Forecast (5-Year CAGR) ---
    const ctx2 = document.getElementById('demandForecastChart').getContext('2d');
    demandForecastChartInstance = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [
                translations[currentLang]['s3-label-collab'], 
                translations[currentLang]['s3-label-telemed'], 
                translations[currentLang]['s3-label-display'],
                translations[currentLang]['s3-label-blended']
            ],
            datasets: [{
                label: '5-Year CAGR',
                data: [15.0, 20.3, 12.0, 15.8],
                fill: false,
                borderColor: 'rgb(255, 193, 7)', // Warning Yellow
                backgroundColor: 'rgb(255, 193, 7)',
                tension: 0.1,
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CAGR (%)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Initial load: Draw charts and apply default language (English)
document.addEventListener('DOMContentLoaded', () => {
    updateContent(); 
    // Charts are initialized in updateContent via drawCharts()
});
