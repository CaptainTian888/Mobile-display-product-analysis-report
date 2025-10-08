// scripts.js

// Language data
const content = {
    en: {
        "report-title": "Market Feasibility Report",
        "intro": "Analysis of the Overseas Market Feasibility for the Portable Smart Screen with Wheels, Floor Stand, Touch Screen, Built-In Camera, and Built-In Battery.",
        "market-analysis-title": "1. Market Analysis",
        "market-analysis-text": "Target market segments include corporate sectors, education, healthcare, and retail, with a focus on regions like North America, Europe, Asia, and the Middle East.",
        "market-growth-title": "Growth in Remote Work & Digital Transformation",
        "pricing-title": "2. Pricing Strategy",
        "pricing-text": "The price of the product varies based on features and target markets.",
        "pricing-breakdown-title": "Pricing Breakdown for Smart Screen",
        "demand-title": "3. Demand Analysis",
        "demand-text": "Key demand drivers include hybrid work, digital education, telemedicine, and retail customer engagement.",
        "demand-forecast-title": "Demand Forecast: Global Market",
        "competition-title": "4. Competitive Analysis",
        "competition-text": "The primary competitors include Microsoft Surface Hub, Google Jamboard, and mobile interactive displays from various manufacturers.",
        "market-share-title": "Market Share of Top Competitors",
        "product-reviews-title": "5. Product Reviews & Sentiment",
        "product-reviews-text": "Positive reviews focus on portability, battery life, and ease of use. Negative reviews highlight connectivity issues and screen size limitations.",
        "footer-text": "Market Feasibility Report © 2025"
    },
    zh: {
        "report-title": "市场可行性报告",
        "intro": "关于可移动智能屏幕、轮子、立地支架、触摸屏、内置相机和内置电池的海外市场可行性分析。",
        "market-analysis-title": "1. 市场分析",
        "market-analysis-text": "目标市场包括企业部门、教育、医疗保健和零售，重点关注北美、欧洲、亚洲和中东等地区。",
        "market-growth-title": "远程工作与数字化转型的增长",
        "pricing-title": "2. 定价策略",
        "pricing-text": "产品的定价取决于功能和目标市场。",
        "pricing-breakdown-title": "智能屏幕的定价结构",
        "demand-title": "3. 需求分析",
        "demand-text": "主要需求驱动因素包括混合办公、数字教育、远程医疗和零售客户互动。",
        "demand-forecast-title": "全球市场需求预测",
        "competition-title": "4. 竞争分析",
        "competition-text": "主要竞争对手包括微软Surface Hub、Google Jamboard以及来自各大厂商的移动互动显示器。",
        "market-share-title": "主要竞争者的市场份额",
        "product-reviews-title": "5. 产品评估与用户反馈",
        "product-reviews-text": "用户对产品的正面评价主要集中在便携性、电池寿命和易用性上。负面评论则指出连接问题和屏幕尺寸限制。",
        "footer-text": "市场可行性报告 © 2025"
    }
};

// Function to change language
function changeLanguage(lang) {
    document.getElementById("report-title").innerText = content[lang]["report-title"];
    document.getElementById("intro").innerText = content[lang]["intro"];
    document.getElementById("market-analysis-title").innerText = content[lang]["market-analysis-title"];
    document.getElementById("market-analysis-text").innerText = content[lang]["market-analysis-text"];
    document.getElementById("market-growth-title").innerText = content[lang]["market-growth-title"];
    document.getElementById("pricing-title").innerText = content[lang]["pricing-title"];
    document.getElementById("pricing-text").innerText = content[lang]["pricing-text"];
    document.getElementById("pricing-breakdown-title").innerText = content[lang]["pricing-breakdown-title"];
    document.getElementBy
