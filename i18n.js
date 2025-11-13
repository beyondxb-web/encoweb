```javascript
// ===================================
// Internationalization (i18n) Module
// ===================================

const translations = {
    'zh-CN': {
        // Navigation
        'nav.nmp': 'NMP工艺',
        'nav.chlorine': '超高纯氯气',
        'nav.hydrogen': '氢能工程',
        'nav.guanidine': '硝基胍工艺',
        'nav.process': '工艺包服务',
        
        // Hero
        'hero.title': '专业工艺包设计与工程服务',
        'hero.subtitle': '20年技术积累 | 60+工业化工艺包 | 全球化服务',
        'hero.stat1': '专业员工',
        'hero.stat2': '工艺包技术',
        'hero.stat3': '国际项目',
        
        // Contact
        'contact.title': '联系我们',
        'contact.address': '地址',
        'contact.phone': '电话',
        'contact.email': '邮箱',
        'contact.person': '联系人',
        
        // Footer
        'footer.slogan': '为客户提供一站式的工程服务',
        'footer.link1': 'NMP工艺',
        'footer.link2': '超高纯氯气',
        'footer.link3': '氢能工程',
        'footer.link4': '硝基胍工艺',
        'footer.link5': '工艺包服务'
    },
    
    'en': {
        // Navigation
        'nav.nmp': 'NMP Process',
        'nav.chlorine': 'Ultra-Pure Chlorine',
        'nav.hydrogen': 'Hydrogen Energy',
        'nav.guanidine': 'Nitroguanidine Process',
        'nav.process': 'Process Package Services',
        
        // Hero
        'hero.title': 'Professional Process Package Design & Engineering Services',
        'hero.subtitle': '20 Years of Experience | 60+ Industrial Process Packages | Global Services',
        'hero.stat1': 'Professional Staff',
        'hero.stat2': 'Process Technologies',
        'hero.stat3': 'International Projects',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.person': 'Contact Person',
        
        // Footer
        'footer.slogan': 'One-Stop Engineering Services for Clients',
        'footer.link1': 'NMP Process',
        'footer.link2': 'Ultra-Pure Chlorine',
        'footer.link3': 'Hydrogen Energy',
        'footer.link4': 'Nitroguanidine Process',
        'footer.link5': 'Process Packages'
    }
};

let currentLanguage = 'zh-CN';

function initTranslation() {
    const translateBtn = document.getElementById('translate-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangSpan = document.getElementById('current-lang');
    const langItems = langDropdown.querySelectorAll('li');

    // Toggle dropdown
    translateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    // Language selection
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            changeLanguage(selectedLang);
            currentLangSpan.textContent = item.textContent;
            langDropdown.classList.remove('active');
        });
    });
}
function changeLanguage(lang) {
currentLanguage = lang;
// TODO: Integrate Youdao Translation API for full-page translation
// API Endpoint: https://openapi.youdao.com/api
// For now, using pre-defined translations for key elements

if (translations[lang]) {
    // Translate elements with data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
} else {
    // Call Youdao Translation API for unsupported languages
    translateWithYoudaoAPI(lang);
}
}
/**