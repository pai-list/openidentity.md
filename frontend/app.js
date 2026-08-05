const translations = {
  en: {
    nav_product: 'Product', nav_protocols: 'Protocols', nav_use_cases: 'Use cases', nav_services: 'Services', nav_docs: 'Docs',
    hero_eyebrow: 'Built for agents, trusted by humans', hero_title: 'Identity for the agentic era.', hero_lede: 'AxiomID turns every AI agent, controller, tool, memory index, wallet, and policy endpoint into a discoverable OpenIdentity profile.',
    cta_create: 'Create an OpenIdentity', cta_spec: 'Read the spec', trust_bilingual: 'English + Arabic', trust_dark: 'Light/Dark', trust_schema: 'Schema validated',
    verified_controller: 'Verified human controller', role: 'Role', passport: 'Passport', passport_value: 'Agent QR · DID', memory: 'Memory', tools: 'Tools', auth: 'Auth',
    product_eyebrow: 'Complete UI/UX system', product_title: 'A frontend that explains, verifies, and converts.', product_body: 'Use these page patterns for the MVP landing site, docs portal, proof-of-concept workspace, and enterprise trust center.',
    feature_search_title: 'Discovery search', feature_search_body: 'Search agents by role, domain, protocol, wallet, organization, language, and verification state.',
    feature_verify_title: 'Verification cards', feature_verify_body: 'Show controller, domain, wallet, signature, policy, expiration, and revocation status.',
    feature_docs_title: 'Developer docs', feature_docs_body: 'Render manifests, JSON Schema, examples, copy snippets, and protocol onboarding in one flow.',
    feature_growth_title: 'Consent growth', feature_growth_body: 'Capture demand with transparent fields, export/delete promises, and no private memory harvesting.',
    protocol_eyebrow: 'Marketing strip', protocol_title: 'Protocol logos become trust shortcuts.',
    use_eyebrow: 'Enterprise MVP', use_title: 'Proof-of-concept pages that matter.', use_body: 'Start with the flows that prove trust: create profile, validate manifest, verify controller, publish discovery files, search, request access, and measure demand.',
    flow_create: 'Create profile', flow_verify: 'Verify controller', flow_publish: 'Publish indexes', flow_request: 'Request access',
    services_eyebrow: 'Agentic services', services_title: 'How.now for hosting. Ghost for database.', services_body: 'Deploy the bilingual frontend and discovery files to How.now, then store profiles, access requests, verification states, and discovery events in Ghost Postgres.', services_hosting: 'Agentic hosting target for the static frontend, docs entry points, and discovery files.', services_database: 'Agent-native Postgres database layer for indexes, profiles, requests, and audit events.',
    docs_eyebrow: 'Indexable by default', docs_title: 'Every important page has a discovery path.'
  },
  ar: {
    nav_product: 'المنتج', nav_protocols: 'البروتوكولات', nav_use_cases: 'حالات الاستخدام', nav_services: 'الخدمات', nav_docs: 'الوثائق',
    hero_eyebrow: 'مصمم للوكلاء وموثوق للبشر', hero_title: 'الهوية لعصر الوكلاء.', hero_lede: 'تحوّل AxiomID كل وكيل ذكاء اصطناعي ومتحكم وأداة وفهرس ذاكرة ومحفظة وسياسة إلى ملف OpenIdentity قابل للاكتشاف.',
    cta_create: 'أنشئ OpenIdentity', cta_spec: 'اقرأ المواصفة', trust_bilingual: 'العربية + الإنجليزية', trust_dark: 'فاتح/داكن', trust_schema: 'تحقق بالمخطط',
    verified_controller: 'متحكم بشري موثق', role: 'الدور', passport: 'جواز الوكلاء', passport_value: 'QR الوكيل · DID', memory: 'الذاكرة', tools: 'الأدوات', auth: 'التفويض',
    product_eyebrow: 'نظام واجهة وتجربة كامل', product_title: 'واجهة تشرح وتتحقق وتحول الاهتمام إلى طلب.', product_body: 'استخدم هذه الأنماط لصفحة الهبوط، بوابة الوثائق، مساحة إثبات المفهوم، ومركز الثقة المؤسسي.',
    feature_search_title: 'بحث الاكتشاف', feature_search_body: 'ابحث عن الوكلاء حسب الدور والنطاق والبروتوكول والمحفظة والمؤسسة واللغة وحالة التحقق.',
    feature_verify_title: 'بطاقات التحقق', feature_verify_body: 'اعرض المتحكم والنطاق والمحفظة والتوقيع والسياسة والانتهاء والإلغاء.',
    feature_docs_title: 'وثائق المطورين', feature_docs_body: 'اعرض الملفات والمخطط والأمثلة ومقتطفات النسخ وبدء استخدام البروتوكولات في مسار واحد.',
    feature_growth_title: 'نمو بالموافقة', feature_growth_body: 'اجمع الطلب عبر حقول شفافة ووعود تصدير/حذف ومن دون حصاد ذاكرة خاصة.',
    protocol_eyebrow: 'شريط تسويقي', protocol_title: 'شعارات البروتوكولات تختصر الثقة.',
    use_eyebrow: 'منتج أولي مؤسسي', use_title: 'صفحات إثبات مفهوم مهمة.', use_body: 'ابدأ بالمسارات التي تثبت الثقة: إنشاء الملف، التحقق من manifest، توثيق المتحكم، نشر ملفات الاكتشاف، البحث، طلب الوصول، وقياس الطلب.',
    flow_create: 'إنشاء الملف', flow_verify: 'توثيق المتحكم', flow_publish: 'نشر الفهارس', flow_request: 'طلب الوصول',
    services_eyebrow: 'خدمات وكيلية', services_title: 'How.now للاستضافة و Ghost لقاعدة البيانات.', services_body: 'انشر الواجهة ثنائية اللغة وملفات الاكتشاف على How.now، ثم خزّن الملفات وطلبات الوصول وحالات التحقق وأحداث الاكتشاف في Ghost Postgres.', services_hosting: 'هدف استضافة وكيلي للواجهة الثابتة ومداخل الوثائق وملفات الاكتشاف.', services_database: 'طبقة Postgres موجهة للوكلاء للفهرسة والملفات والطلبات وأحداث التدقيق.',
    docs_eyebrow: 'قابل للفهرسة افتراضياً', docs_title: 'كل صفحة مهمة لها مسار اكتشاف.'
  },
  zh: {
    nav_product: '产品', nav_protocols: '协议', nav_use_cases: '用例', nav_services: '服务', nav_docs: '文档',
    hero_eyebrow: '为智能体而生，值得人类信赖', hero_title: '智能体时代的身份。', hero_lede: 'AxiomID 将每个 AI 智能体、控制者、工具、记忆索引、钱包与策略端点，变成可发现的 OpenIdentity 档案。',
    cta_create: '创建 OpenIdentity', cta_spec: '阅读规范', trust_bilingual: '中文 + English + العربية', trust_dark: '浅色/深色', trust_schema: '模式验证',
    verified_controller: '已验证的人类控制者', role: '角色', passport: '智能体护照', passport_value: 'Agent QR · DID', memory: '记忆', tools: '工具', auth: '认证',
    product_eyebrow: '完整 UI/UX 体系', product_title: '能解释、能验证、能转化的前端。', product_body: '将这些页面模式用于 MVP 落地页、文档门户、概念验证工作区与企业信任中心。',
    feature_search_title: '发现搜索', feature_search_body: '按角色、域名、协议、钱包、组织、语言与验证状态搜索智能体。',
    feature_verify_title: '验证卡片', feature_verify_body: '展示控制者、域名、钱包、签名、策略、有效期与撤销状态。',
    feature_docs_title: '开发者文档', feature_docs_body: '在一个流程中渲染清单、JSON Schema、示例、代码片段与协议入门。',
    feature_growth_title: '同意驱动增长', feature_growth_body: '通过透明字段、导出/删除承诺、不采集私有记忆来收集需求。',
    protocol_eyebrow: '营销横幅', protocol_title: '协议标志成为信任捷径。',
    use_eyebrow: '企业 MVP', use_title: '真正重要的概念验证页面。', use_body: '从证明信任的流程开始：创建档案、验证清单、验证控制者、发布发现文件、搜索、请求访问与衡量需求。',
    flow_create: '创建档案', flow_verify: '验证控制者', flow_publish: '发布索引', flow_request: '请求访问',
    services_eyebrow: '智能体服务', services_title: 'How.now 负责托管，Ghost 负责数据库。', services_body: '将双语前端与发现文件部署到 How.now，然后把档案、访问请求、验证状态与发现事件存入 Ghost Postgres。', services_hosting: '为静态前端、文档入口与发现文件提供的智能体托管目标。', services_database: '面向智能体的 Postgres 数据层，用于索引、档案、请求与审计事件。',
    docs_eyebrow: '默认可索引', docs_title: '每个重要页面都有发现路径。'
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
    const ORDER = ['en', 'ar', 'zh'];
  const next = ORDER[(ORDER.indexOf(language) + 1) % ORDER.length];
  languageToggle.textContent = next === 'en' ? 'English' : next === 'ar' ? 'العربية' : '中文';
  localStorage.setItem('axiomid-language', language);
}

function renderTheme(nextTheme) {
  theme = nextTheme;
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀' : '◐';
  localStorage.setItem('axiomid-theme', theme);
}

languageToggle.addEventListener('click', () => {
  const order = ['en', 'ar', 'zh'];
  renderLanguage(order[(order.indexOf(language) + 1) % order.length]);
});
themeToggle.addEventListener('click', () => renderTheme(theme === 'dark' ? 'light' : 'dark'));
renderLanguage(language);
renderTheme(theme);
