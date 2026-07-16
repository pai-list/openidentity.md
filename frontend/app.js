const translations = {
  en: {
    nav_product: 'Product', nav_protocols: 'Protocols', nav_use_cases: 'Use cases', nav_docs: 'Docs',
    hero_eyebrow: 'Built for agents, trusted by humans', hero_title: 'Identity for the agentic era.', hero_lede: 'AxiomID turns every AI agent, controller, tool, memory index, wallet, and policy endpoint into a discoverable OpenIdentity profile.',
    cta_create: 'Create an OpenIdentity', cta_spec: 'Read the spec', trust_bilingual: 'English + Arabic', trust_dark: 'Light/Dark', trust_schema: 'Schema validated',
    verified_controller: 'Verified human controller', role: 'Role', memory: 'Memory', tools: 'Tools', auth: 'Auth',
    product_eyebrow: 'Complete UI/UX system', product_title: 'A frontend that explains, verifies, and converts.', product_body: 'Use these page patterns for the MVP landing site, docs portal, proof-of-concept workspace, and enterprise trust center.',
    feature_search_title: 'Discovery search', feature_search_body: 'Search agents by role, domain, protocol, wallet, organization, language, and verification state.',
    feature_verify_title: 'Verification cards', feature_verify_body: 'Show controller, domain, wallet, signature, policy, expiration, and revocation status.',
    feature_docs_title: 'Developer docs', feature_docs_body: 'Render manifests, JSON Schema, examples, copy snippets, and protocol onboarding in one flow.',
    feature_growth_title: 'Consent growth', feature_growth_body: 'Capture demand with transparent fields, export/delete promises, and no private memory harvesting.',
    protocol_eyebrow: 'Marketing strip', protocol_title: 'Protocol logos become trust shortcuts.',
    use_eyebrow: 'Enterprise MVP', use_title: 'Proof-of-concept pages that matter.', use_body: 'Start with the flows that prove trust: create profile, validate manifest, verify controller, publish discovery files, search, request access, and measure demand.',
    flow_create: 'Create profile', flow_verify: 'Verify controller', flow_publish: 'Publish indexes', flow_request: 'Request access',
    docs_eyebrow: 'Indexable by default', docs_title: 'Every important page has a discovery path.'
  },
  ar: {
    nav_product: 'المنتج', nav_protocols: 'البروتوكولات', nav_use_cases: 'حالات الاستخدام', nav_docs: 'الوثائق',
    hero_eyebrow: 'مصمم للوكلاء وموثوق للبشر', hero_title: 'الهوية لعصر الوكلاء.', hero_lede: 'تحوّل AxiomID كل وكيل ذكاء اصطناعي ومتحكم وأداة وفهرس ذاكرة ومحفظة وسياسة إلى ملف OpenIdentity قابل للاكتشاف.',
    cta_create: 'أنشئ OpenIdentity', cta_spec: 'اقرأ المواصفة', trust_bilingual: 'العربية + الإنجليزية', trust_dark: 'فاتح/داكن', trust_schema: 'تحقق بالمخطط',
    verified_controller: 'متحكم بشري موثق', role: 'الدور', memory: 'الذاكرة', tools: 'الأدوات', auth: 'التفويض',
    product_eyebrow: 'نظام واجهة وتجربة كامل', product_title: 'واجهة تشرح وتتحقق وتحول الاهتمام إلى طلب.', product_body: 'استخدم هذه الأنماط لصفحة الهبوط، بوابة الوثائق، مساحة إثبات المفهوم، ومركز الثقة المؤسسي.',
    feature_search_title: 'بحث الاكتشاف', feature_search_body: 'ابحث عن الوكلاء حسب الدور والنطاق والبروتوكول والمحفظة والمؤسسة واللغة وحالة التحقق.',
    feature_verify_title: 'بطاقات التحقق', feature_verify_body: 'اعرض المتحكم والنطاق والمحفظة والتوقيع والسياسة والانتهاء والإلغاء.',
    feature_docs_title: 'وثائق المطورين', feature_docs_body: 'اعرض الملفات والمخطط والأمثلة ومقتطفات النسخ وبدء استخدام البروتوكولات في مسار واحد.',
    feature_growth_title: 'نمو بالموافقة', feature_growth_body: 'اجمع الطلب عبر حقول شفافة ووعود تصدير/حذف ومن دون حصاد ذاكرة خاصة.',
    protocol_eyebrow: 'شريط تسويقي', protocol_title: 'شعارات البروتوكولات تختصر الثقة.',
    use_eyebrow: 'منتج أولي مؤسسي', use_title: 'صفحات إثبات مفهوم مهمة.', use_body: 'ابدأ بالمسارات التي تثبت الثقة: إنشاء الملف، التحقق من manifest، توثيق المتحكم، نشر ملفات الاكتشاف، البحث، طلب الوصول، وقياس الطلب.',
    flow_create: 'إنشاء الملف', flow_verify: 'توثيق المتحكم', flow_publish: 'نشر الفهارس', flow_request: 'طلب الوصول',
    docs_eyebrow: 'قابل للفهرسة افتراضياً', docs_title: 'كل صفحة مهمة لها مسار اكتشاف.'
  }
};

const root = document.documentElement;
const languageToggle = document.querySelector('#languageToggle');
const themeToggle = document.querySelector('#themeToggle');
let language = localStorage.getItem('axiomid-language') || 'en';
let theme = localStorage.getItem('axiomid-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function renderLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || translations.en[key] || node.textContent;
  });
  languageToggle.textContent = language === 'en' ? 'العربية' : 'English';
  localStorage.setItem('axiomid-language', language);
}

function renderTheme(nextTheme) {
  theme = nextTheme;
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀' : '◐';
  localStorage.setItem('axiomid-theme', theme);
}

languageToggle.addEventListener('click', () => renderLanguage(language === 'en' ? 'ar' : 'en'));
themeToggle.addEventListener('click', () => renderTheme(theme === 'dark' ? 'light' : 'dark'));
renderLanguage(language);
renderTheme(theme);
