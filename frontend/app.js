const translations = {
  en: {
    nav_standard: 'Standard', nav_protocols: 'Protocols', nav_use_cases: 'Use cases', nav_memory: 'Memory', nav_docs: 'Docs',
    brand_tagline: 'open standard · AxiomID',
    hero_eyebrow: 'The open standard · the agentic era',
    hero_line1: 'The open standard for the', hero_line2: 'agentic era.',
    hero_lede: 'OpenIdentity is the portable, bilingual identity manifest that makes every AI agent, controller, tool, memory index, wallet, and policy endpoint discoverable, verifiable, and schema-safe.',
    cta_spec: 'Read the spec', cta_discovery: 'agentic.txt',
    trust_bilingual: 'English + Arabic', trust_schema: 'Schema validated',
    verified_controller: 'Verified human controller', role: 'Role', memory: 'Memory', tools: 'Tools', auth: 'Auth',
    product_eyebrow: 'Format first', product_title: 'One manifest format. Discovery everywhere.',
    product_body: 'OpenIdentity gives every agent a canonical file — rendered as openidentity.md, indexed as agentic.txt, validated against a JSON Schema, and served in English and Arabic.',
    feature_search_title: 'Discovery search', feature_search_body: 'Search agents by role, domain, protocol, wallet, organization, language, and verification state.',
    feature_verify_title: 'Verification cards', feature_verify_body: 'Show controller, domain, wallet, signature, policy, expiration, and revocation status.',
    feature_docs_title: 'Developer docs', feature_docs_body: 'Render manifests, JSON Schema, examples, copy snippets, and protocol onboarding in one flow.',
    feature_growth_title: 'Consent growth', feature_growth_body: 'Capture demand with transparent fields, export/delete promises, and no private memory harvesting.',
    protocol_eyebrow: 'Protocol-agnostic', protocol_title: 'Protocol logos become trust shortcuts.',
    use_eyebrow: 'Enterprise MVP', use_title: 'Proof-of-concept pages that matter.',
    use_body: 'Start with the flows that prove trust: create profile, validate manifest, verify controller, publish discovery files, search, request access, and measure demand.',
    flow_create: 'Create profile', flow_verify: 'Verify controller', flow_publish: 'Publish indexes', flow_request: 'Request access',
    services_eyebrow: 'Storage & state', services_title: 'Edge-served. PAI-Memory backed.',
    services_body: 'The bilingual frontend and discovery files are served from the edge; profiles, access requests, verification states, and discovery events live in PAI-Memory — persistent, verifiable, shared.',
    services_hosting_title: 'Edge static', services_hosting: 'Workers-served frontend, docs entry points, and discovery files — fast, global, no database.',
    services_database_title: 'PAI-Memory', services_database: '7-layer agent memory. Persistent, verifiable, shared. Stores indexes, profiles, requests, and audit events.',
    docs_eyebrow: 'Indexable by default', docs_title: 'Every important page has a discovery path.'
  },
  ar: {
    nav_standard: 'المعيار', nav_protocols: 'البروتوكولات', nav_use_cases: 'حالات الاستخدام', nav_memory: 'الذاكرة', nav_docs: 'الوثائق',
    brand_tagline: 'معيار مفتوح · AxiomID',
    hero_eyebrow: 'المعيار المفتوح · عصر الوكلاء',
    hero_line1: 'المعيار المفتوح لـ', hero_line2: 'عصر الوكلاء.',
    hero_lede: 'OpenIdentity هو بيان هوية ثنائي اللغة قابل للنقل يجعل كل وكيل ذكاء اصطناعي، ومتحكم، وأداة، وفهرس ذاكرة، ومحفظة، ونقطة نهاية سياسات قابلة للاكتشاف، والتحقق، وآمنة بالمخطط.',
    cta_spec: 'اقرأ المواصفة', cta_discovery: 'agentic.txt',
    trust_bilingual: 'العربية + الإنجليزية', trust_schema: 'محقق بالمخطط',
    verified_controller: 'متحكم بشري موثق', role: 'الدور', memory: 'الذاكرة', tools: 'الأدوات', auth: 'التفويض',
    product_eyebrow: 'المعايير أولاً', product_title: 'تنسيق بيان واحد. اكتشاف في كل مكان.',
    product_body: 'تمنح OpenIdentity كل وكيل ملفًا قياسيًا — يتم عرضه كـ openidentity.md، وفهرسته كـ agentic.txt، والتحقق منه مقابل مخطط JSON، وتقديمه بالعربية والإنجليزية.',
    feature_search_title: 'بحث الاكتشاف', feature_search_body: 'ابحث عن الوكلاء حسب الدور والنطاق والبروتوكول والمحفظة والمؤسسة واللغة وحالة التحقق.',
    feature_verify_title: 'بطاقات التحقق', feature_verify_body: 'اعرض المتحكم والنطاق والمحفظة والتوقيع والسياسة والانتهاء والإلغاء.',
    feature_docs_title: 'وثائق المطورين', feature_docs_body: 'اعرض الملفات والمخطط والأمثلة ومقتطفات النسخ وبدء استخدام البروتوكولات في مسار واحد.',
    feature_growth_title: 'نمو بالموافقة', feature_growth_body: 'اجمع الطلب عبر حقول شفافة ووعود تصدير/حذف ومن دون حصاد ذاكرة خاصة.',
    protocol_eyebrow: 'غير مرتبط ببروتوكول', protocol_title: 'شعارات البروتوكولات تختصر الثقة.',
    use_eyebrow: 'منتج أولي مؤسسي', use_title: 'صفحات إثبات مفهوم مهمة.',
    use_body: 'ابدأ بالمسارات التي تثبت الثقة: إنشاء الملف، التحقق من manifest، توثيق المتحكم، نشر ملفات الاكتشاف، البحث، طلب الوصول، وقياس الطلب.',
    flow_create: 'إنشاء الملف', flow_verify: 'توثيق المتحكم', flow_publish: 'نشر الفهارس', flow_request: 'طلب الوصول',
    services_eyebrow: 'التخزين والحالة', services_title: 'مقدمة من الحافة. مدعومة بـ PAI-Memory.',
    services_body: 'تخدم الواجهة ثنائية اللغة وملفات الاكتشاف من الحافة؛ الملفات الشخصية، طلبات الوصول، حالات التحقق، وأحداث الاكتشاف تعيش في PAI-Memory — مستمرة، قابلة للتحقق، ومشتركة.',
    services_hosting_title: 'ثابتة على الحافة', services_hosting: 'واجهة أمامية مقدمة عبر Workers، نقاط دخول للوثائق، وملفات اكتشاف — سريعة، عالمية، لا قاعدة بيانات.',
    services_database_title: 'PAI-Memory', services_database: 'ذاكرة وكلاء من 7 طبقات. مستمرة، قابلة للتحقق، مشتركة. تخزن الفهارس، الملفات، الطلبات، وأحداث التدقيق.',
    docs_eyebrow: 'قابلة للفهرسة افتراضياً', docs_title: 'كل صفحة مهمة لها مسار اكتشاف.'
  }
};

const root = document.documentElement;
const languageToggle = document.querySelector('#languageToggle');
const themeToggle = document.querySelector('#themeToggle');
let language = localStorage.getItem('axiomid-language') || 'en';
let theme = localStorage.getItem('axiomid-theme') || 'dark';

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