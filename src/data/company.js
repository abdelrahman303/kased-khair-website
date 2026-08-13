export const offices = [
  {
    id: 'alexandria',
    title: { en: 'Main Headquarters', ar: 'المقر الرئيسي' },
    city: { en: 'Alexandria, Egypt', ar: 'الإسكندرية، مصر' },
    lines: {
      en: ['75 Fawzy Moaz St., Smouha, Alexandria, Egypt'],
      ar: ['75 شارع فوزي معاذ، سموحة، الإسكندرية، مصر'],
    },
    mapsQuery: '75 Fawzy Moaz Street Smouha Alexandria Egypt',
    phones: ['(+203) 428-5959', '(+203) 420-1119', '(+20) 100-5380-832'],
    emails: ['sales@kasedkhair.com'],
  },
  {
    id: 'cairo',
    title: { en: 'Cairo Headquarters', ar: 'مقر القاهرة' },
    city: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    lines: {
      en: ['43, 18th St., Sarayat El Maadi'],
      ar: ['43، شارع 18، سرايات المعادي'],
    },
    mapsQuery: '43 18th Street Sarayat El Maadi Cairo Egypt',
    phones: [],
    emails: ['sales@kasedkhair.com'],
  },
  {
    id: 'ksa',
    title: { en: 'KSA Headquarters', ar: 'مقر المملكة العربية السعودية' },
    city: { en: 'Jeddah, Saudi Arabia', ar: 'جدة، المملكة العربية السعودية' },
    lines: {
      en: ['Saudi Business Center, 2nd Floor, Office 209, Al Madina – Jeddah Road'],
      ar: ['مركز الأعمال السعودي، الدور الثاني، مكتب 209، طريق المدينة – جدة'],
    },
    mapsQuery: 'Saudi Business Center Al Madina Jeddah Road Jeddah Saudi Arabia',
    phones: ['(+966) 549-6080-49'],
    emails: ['sales@kasedkhair.com'],
  },
]

export const SALES_EMAIL = 'sales@kasedkhair.com'

export const socials = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/kasedkhairr/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61564490583616' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/kased-khair/' },
]

export function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function mailUrl({ subject, body, email = SALES_EMAIL }) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const partners = [
  {
    en: 'Egypt Armed Forces (all branches)',
    ar: 'القوات المسلحة المصرية (جميع الأفرع)',
  },
  {
    en: 'Egyptian Public Authority for Shore Protection',
    ar: 'الهيئة المصرية العامة لحماية الشواطئ',
  },
  {
    en: 'Egyptian Authority for Maritime Safety',
    ar: 'الهيئة المصرية لسلامة الملاحة البحرية',
  },
  {
    en: 'Distribution / Transmission Electric Company',
    ar: 'شركات توزيع ونقل الكهرباء',
  },
  {
    en: 'USAID Agency (VCE / ACI)',
    ar: 'الوكالة الأمريكية للتنمية الدولية (VCE / ACI)',
  },
]

export const awards = [
  { en: 'Ministry of Defence', ar: 'وزارة الدفاع' },
  { en: 'Egyptian Authority for Maritime Safety', ar: 'الهيئة المصرية لسلامة الملاحة البحرية' },
  { en: 'Egyptian Armed Forces Engineering Authority', ar: 'الهيئة الهندسية للقوات المسلحة' },
]

export const iso = [
  { code: 'ISO 9001:2015', en: 'Quality Management', ar: 'إدارة الجودة' },
  { code: 'ISO 45001:2018', en: 'Occupational Health & Safety', ar: 'الصحة والسلامة المهنية' },
]
