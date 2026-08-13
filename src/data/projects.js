const img = (file) =>
  `https://i0.wp.com/www.kasedkhair.com/wp-content/uploads/${file}`

export const categories = [
  { id: 'all', key: 'filterAll' },
  { id: 'buildings', key: 'filterBuildings' },
  { id: 'marine', key: 'filterMarine' },
  { id: 'steel', key: 'filterSteel' },
  { id: 'roads', key: 'filterRoads' },
]

export const projects = [
  {
    slug: 'bernis-naval-base-at-ras-banas',
    category: 'buildings',
    image: img('128.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Bernis Naval Base at Ras Banas',
      ar: 'القاعدة البحرية ببرنيس – رأس بناس',
    },
    description: {
      en: 'Constructing all buildings of the naval base, installing a military quay 1,000 m long and 14 m deep using the diaphragm-wall method with fenders, bollards and marine ladders, a commercial quay of approximately 1,200 m, infrastructure networks (electricity, water, sewage, roads, fuel gas, communications), a seawater desalination plant and a sewage treatment plant.',
      ar: 'إنشاء جميع مباني القاعدة البحرية، وتركيب رصيف عسكري بطول 1000 م وعمق 14 م بطريقة الحائط الحاجز مع الفندر والبولارد والسلالم البحرية، ورصيف تجاري بطول تقريبي 1200 م، وشبكات البنية التحتية (كهرباء، مياه، صرف، طرق، وقود، اتصالات)، ومحطة تحلية مياه البحر ومحطة معالجة الصرف.',
    },
    place: { en: 'Ras Banas (Red Sea)', ar: 'رأس بناس (البحر الأحمر)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'port-said-naval-base-buildings',
    category: 'buildings',
    image: img('40-scaled.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Port Said Naval Base', ar: 'القاعدة البحرية ببورسعيد' },
    description: {
      en: 'Constructing all buildings of the naval base, and a quay 500 m long and 35 m wide with 20 m depth, consisting of 358 pipes (compound section — sheet piles with steel pipes) 2.032 m in diameter and −68.00 m depth. Pile cap constructed on 175,000 m², provided with fenders, bollards and marine ladders.',
      ar: 'إنشاء جميع مباني القاعدة البحرية ورصيف بطول 500 م وعرض 35 م وعمق 20 م مكوّن من 358 ماسورة (قطاع مركّب — خوازيق صاج مع مواسير صلب) قطر 2.032 م وعمق −68.00 م. تنفيذ رأس الخوازيق على 175,000 م² مع الفندر والبولارد والسلالم البحرية.',
    },
    place: { en: 'Sharq El-Tafrea (Port Said)', ar: 'شرق التفريعة (بورسعيد)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'abroad-villas-and-shopping-mall',
    category: 'buildings',
    image: img('4.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Abroad Villas and Shopping Mall',
      ar: 'فيلات ومول تجاري – التجمع الخامس',
    },
    description: {
      en: 'Constructing villas and a shopping mall.',
      ar: 'إنشاء فيلات ومول تجاري.',
    },
    place: { en: 'Fifth Settlement (Cairo)', ar: 'التجمع الخامس (القاهرة)' },
    owner: {
      en: 'Engineering Authority of the Armed Forces',
      ar: 'الهيئة الهندسية للقوات المسلحة',
    },
  },
  {
    slug: 'galala-university-conference-hall',
    category: 'buildings',
    image: img('8.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Conference Hall of Galala University',
      ar: 'قاعة مؤتمرات جامعة الجلالة',
    },
    description: {
      en: 'Constructing a convention hall.',
      ar: 'إنشاء قاعة مؤتمرات.',
    },
    place: { en: 'Galala University', ar: 'جامعة الجلالة' },
    owner: {
      en: 'Engineering Authority of the Armed Forces',
      ar: 'الهيئة الهندسية للقوات المسلحة',
    },
  },
  {
    slug: 'mall-at-gharb-el-shrouq',
    category: 'buildings',
    image: img('2-2.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Mall at Gharb El-Shorouk',
      ar: 'مول غرب الشروق',
    },
    description: {
      en: 'Constructing a mall at Gharb El-Shorouk.',
      ar: 'إنشاء مول غرب الشروق.',
    },
    place: { en: 'Gharb El-Shorouk (Cairo)', ar: 'غرب الشروق (القاهرة)' },
    owner: {
      en: 'Engineering Authority of the Armed Forces',
      ar: 'الهيئة الهندسية للقوات المسلحة',
    },
  },
  {
    slug: 'building-at-new-mansoura',
    category: 'buildings',
    image: img('17.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Buildings at New Mansoura',
      ar: 'إنشاءات المنصورة الجديدة',
    },
    description: {
      en: 'Constructing villas at New Mansoura.',
      ar: 'إنشاء فيلات في المنصورة الجديدة.',
    },
    place: { en: 'New Mansoura City', ar: 'مدينة المنصورة الجديدة' },
    owner: {
      en: 'Urban Communities Authority',
      ar: 'هيئة المجتمعات العمرانية',
    },
  },
  {
    slug: 'egyptian-maritime-authority-safety-building',
    category: 'buildings',
    image: img('84913466_651821555572450_2277079170850750464_n.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Egyptian Maritime Authority Safety Building',
      ar: 'مبنى الهيئة المصرية لسلامة الملاحة البحرية',
    },
    description: {
      en: 'Development of the Egyptian Maritime Authority for Safety building.',
      ar: 'تطوير مبنى الهيئة المصرية لسلامة الملاحة البحرية.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: {
      en: 'Egyptian Maritime Authority',
      ar: 'الهيئة المصرية لسلامة الملاحة البحرية',
    },
  },
  {
    slug: 'playground-at-hurghada',
    category: 'buildings',
    image: img('DSC02985.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Playground Project at Hurghada',
      ar: 'مشروع ملعب بالغردقة',
    },
    description: {
      en: 'Constructing a playground at Hurghada.',
      ar: 'إنشاء ملعب في الغردقة.',
    },
    place: { en: 'Hurghada', ar: 'الغردقة' },
    owner: { en: 'Armed Forces', ar: 'القوات المسلحة' },
  },
  {
    slug: 'air-forces-general-hospital',
    category: 'buildings',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-3.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Air Forces General Hospital',
      ar: 'المستشفى العام للقوات الجوية',
    },
    description: {
      en: 'Development of the Air Forces General Hospital.',
      ar: 'تطوير المستشفى العام للقوات الجوية.',
    },
    place: { en: 'Cairo', ar: 'القاهرة' },
    owner: { en: 'Air Forces', ar: 'القوات الجوية' },
  },
  {
    slug: 'olympic-swimming-pool',
    category: 'buildings',
    image: img('1-4.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'The Olympic Swimming Pool', ar: 'حمام السباحة الأولمبي' },
    description: {
      en: 'Constructing the Olympic swimming pool at Aswan.',
      ar: 'إنشاء حمام السباحة الأولمبي في أسوان.',
    },
    place: { en: 'Aswan', ar: 'أسوان' },
    owner: {
      en: 'Military Works Department Administration',
      ar: 'إدارة الأشغال العسكرية',
    },
  },
  {
    slug: 'heliports-and-landscape-ras-el-tin',
    category: 'buildings',
    image: img('34.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Landscape behind Quay 5 and four helicopter heliports',
      ar: 'تنسيق الموقع خلف الرصيف 5 وإنشاء 4 مهبطات هليكوبتر',
    },
    description: {
      en: 'Landscape and development of the area behind quay (5) and constructing four helicopter heliports.',
      ar: 'تنسيق وتطوير المنطقة خلف الرصيف (5) وإنشاء أربعة مهبطات للطائرات العمودية.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'mustafa-kamel-hospital',
    category: 'buildings',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-5.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Repair and Development of Mustafa Kamel Hospital',
      ar: 'ترميم وتطوير مستشفى مصطفى كامل',
    },
    description: {
      en: 'Repair and development of Mustafa Kamel Hospital.',
      ar: 'ترميم وتطوير مستشفى مصطفى كامل.',
    },
    place: { en: 'Mustafa Kamel (Alexandria)', ar: 'مصطفى كامل (الإسكندرية)' },
    owner: { en: 'Armed Forces', ar: 'القوات المسلحة' },
  },
  {
    slug: 'northern-fleet-command-building',
    category: 'buildings',
    image: img('4b19a4da-cd7a-47e7-b9aa-92ffd7f4d632.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Northern Fleet Command Building (12) at Ras El Tin',
      ar: 'مبنى قيادة الأسطول الشمالي (12) برأس التين',
    },
    description: {
      en: 'Development of the Northern Fleet Command Building (12) at Ras El Tin.',
      ar: 'تطوير مبنى قيادة الأسطول الشمالي (12) برأس التين.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'green-land-terraces-pools-playground',
    category: 'buildings',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-7.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Terraces, swimming pools and a playground at Green Land',
      ar: 'مصاطب وأحواض سباحة وملعب في الأرض الخضراء',
    },
    description: {
      en: 'Constructing terraces, swimming pools, and a fifth playground at Green Land in the naval base at Ras El Tin.',
      ar: 'إنشاء مصاطب وأحواض سباحة وملعب خامس في الأرض الخضراء بالقاعدة البحرية برأس التين.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'naval-forces-gate',
    category: 'buildings',
    image: img('7-2-scaled.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Naval Forces Gate', ar: 'بوابة القوات البحرية' },
    description: {
      en: 'Constructing the Naval Forces Gate.',
      ar: 'إنشاء بوابة القوات البحرية.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'port-said-naval-base-quay',
    category: 'marine',
    image: img('20-3.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Port Said Naval Base Quay', ar: 'رصيف القاعدة البحرية ببورسعيد' },
    description: {
      en: 'Quay 500 m long and 35 m wide with 20 m depth, consisting of 358 pipes (compound section — sheet piles with steel pipes) 2.032 m in diameter and −68.00 m depth. Pile cap constructed on 175,000 m² with fenders, bollards and marine ladders.',
      ar: 'رصيف بطول 500 م وعرض 35 م وعمق 20 م مكوّن من 358 ماسورة (قطاع مركّب — خوازيق صاج مع مواسير صلب) قطر 2.032 م وعمق −68.00 م. تنفيذ رأس الخوازيق على 175,000 م² مع الفندر والبولارد والسلالم البحرية.',
    },
    place: { en: 'Sharq El-Tafrea (Port Said)', ar: 'شرق التفريعة (بورسعيد)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'military-quay-ras-banas',
    category: 'marine',
    image: img('44.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Military Quay at Ras Banas',
      ar: 'الرصيف العسكري برأس بناس',
    },
    description: {
      en: 'Installing a military quay 1,000 m long and 14 m deep using the diaphragm-wall method, provided with fenders, bollards and marine ladders.',
      ar: 'تركيب رصيف عسكري بطول 1000 م وعمق 14 م بطريقة الحائط الحاجز، مجهّز بالفندر والبولارد والسلالم البحرية.',
    },
    place: { en: 'Ras Banas (Red Sea)', ar: 'رأس بناس (البحر الأحمر)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'el-alamein-jetty',
    category: 'marine',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-0.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Jetty 716 m — El Alamein Project',
      ar: 'حاجز بحري 716 م — مشروع العلمين',
    },
    description: {
      en: 'Constructing a jetty with total length 850.50 m and width 32 m, provided with fenders, bollards and marine ladders, to create an area for restaurants and cafés.',
      ar: 'إنشاء حاجز بحري بطول إجمالي 850.50 م وعرض 32 م مجهّز بالفندر والبولارد والسلالم البحرية، لإنشاء منطقة للمطاعم والكافيهات.',
    },
    place: { en: 'El Alamein (North Coast)', ar: 'العلمين (الساحل الشمالي)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'el-mistral-quay',
    category: 'marine',
    image: img('54.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'El-Mistral Quay — 700 m length, 12 m depth',
      ar: 'رصيف المسترال — طول 700 م وعمق 12 م',
    },
    description: {
      en: 'Constructing a quay 700 m long and 12 m deep. The berth consists of CFA piles and compound-section steel pipes and sheet piles. Pipe depth −28.00 m below sea level. Pile cap constructed on 175,000 m² with fenders, bollards and marine ladders, plus landscape for the project area.',
      ar: 'إنشاء رصيف بطول 700 م وعمق 12 م. الرصيف من خوازيق CFA ومواسير صلب قطاع مركّب وخوازيق صاج. عمق المواسير −28.00 م تحت سطح البحر. تنفيذ رأس الخوازيق على 175,000 م² مع الفندر والبولارد والسلالم البحرية وتنسيق الموقع.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'west-quay-ras-el-tin',
    category: 'marine',
    image: img('92.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'West Quay — 1,500 m at Ras El Tin',
      ar: 'الرصيف الغربي 1500 م برأس التين',
    },
    description: {
      en: 'Constructing a quay 1,500 m long and 14 m deep. The berth consists of compound-section steel pipes and sheet piles. Pipe depth −23.00 m below seawater. Pile cap constructed and provided with fenders, bollards and marine ladders.',
      ar: 'إنشاء رصيف بطول 1500 م وعمق 14 م من مواسير صلب قطاع مركّب وخوازيق صاج. عمق المواسير −23.00 م تحت مياه البحر. تنفيذ رأس الخوازيق مع الفندر والبولارد والسلالم البحرية.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'sidi-bishr-submerged-breakwaters',
    category: 'marine',
    image: img('46.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Submerged breakwaters at Sidi Bishr, Alexandria',
      ar: 'سلسلة حواجز غاطسة بسيدي بشر – الإسكندرية',
    },
    description: {
      en: 'Constructing a marine quay of concrete blocks 125 m orthogonal to the shoreline and 30 m parallel to the shoreline, and a breakwater of crushed stones 600 m long.',
      ar: 'إنشاء رصيف بحري من البلوكات الخرسانية بطول 125 م عمودياً على خط الشاطئ و30 م موازياً له، وحاجز أمواج من الأحجار المكسّرة بطول 600 م.',
    },
    place: { en: 'Sidi Bishr (Alexandria)', ar: 'سيدي بشر (الإسكندرية)' },
    owner: {
      en: 'Egyptian Public Authority for Shore Protection',
      ar: 'هيئة حماية الشواطئ',
    },
  },
  {
    slug: 'mustafa-kamel-club-shore-protection',
    category: 'marine',
    image: img('46.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Mustafa Kamel Club shore protection — Alexandria',
      ar: 'حماية شاطئ نادي مصطفى كامل – الإسكندرية',
    },
    description: {
      en: 'Marine quay of concrete blocks 50 m long and 8 m deep, a main breakwater 335 m long, and a submerged breakwater 240 m long.',
      ar: 'رصيف بحري من البلوكات الخرسانية بطول 50 م وعمق 8 م، وحاجز أمواج رئيسي بطول 335 م، وحاجز غاطس بطول 240 م.',
    },
    place: { en: 'Mustafa Kamel (Alexandria)', ar: 'مصطفى كامل (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
  {
    slug: 'dredging-manzala-lake',
    category: 'marine',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-8.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Dredging in Manzala Lake',
      ar: 'تكريك بحيرة المنزلة',
    },
    description: {
      en: 'Dredging in Manzala Lake — 50 million m³ — to clear the channel and achieve adequate depth.',
      ar: 'تكريك بحيرة المنزلة بمقدار 50 مليون م³ لتطهير القناة وتحقيق العمق المناسب.',
    },
    place: { en: 'Manzala Lake', ar: 'بحيرة المنزلة' },
    owner: { en: 'Suez Canal Authority', ar: 'هيئة قناة السويس' },
  },
  {
    slug: 'abu-qeer-seawall-support',
    category: 'marine',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-9.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Abu Qir seawall support', ar: 'تدعيم حائط أبو قير البحري' },
    description: {
      en: 'Construct six footings for the seawall using dolomite stones, then a main supporting layer of 2.5-ton modified cubes.',
      ar: 'إنشاء 6 قواعد لحائط البحر باستخدام أحجار الدولوميت، ثم طبقة حماية رئيسية من المكعب المعدّل وزن 2.5 طن.',
    },
    place: { en: 'Abu Qir (Alexandria)', ar: 'أبو قير (الإسكندرية)' },
    owner: {
      en: 'Egyptian Public Authority for Shore Protection',
      ar: 'هيئة حماية الشواطئ',
    },
  },
  {
    slug: 'abu-zenema-shore-protection',
    category: 'marine',
    image: img('%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9-10.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Abu Zenima shore protection — Red Sea',
      ar: 'حماية شاطئ أبو زنيمة – البحر الأحمر',
    },
    description: {
      en: '700 m of dolomite stones of different weights, with a main protection armour layer of 1–2 ton dolomite stones.',
      ar: '700 م من أحجار الدولوميت بأوزان مختلفة، وطبقة حماية رئيسية من أحجار دولوميت وزن 1–2 طن.',
    },
    place: { en: 'Abu Zenima (South Sinai)', ar: 'أبو زنيمة (جنوب سيناء)' },
    owner: {
      en: 'Egyptian Public Authority for Shore Protection',
      ar: 'هيئة حماية الشواطئ',
    },
  },
  {
    slug: 'borolos-shore-protection',
    category: 'marine',
    image: img('2-8.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Borollos shore protection', ar: 'حماية شاطئ البرلس' },
    description: {
      en: 'Seawall 1,450 m long of two dolomite-stone layers of different weights with a main protection layer of 2-ton Dolos, and a 550 m seawall with the same layers but a main protection of 2-ton modified cubes.',
      ar: 'حائط بحري بطول 1450 م من طبقتين من أحجار الدولوميت بأوزان مختلفة وطبقة حماية رئيسية من دولوس وزن 2 طن، وحائط بحري بطول 550 م بنفس الطبقات مع حماية رئيسية من المكعب المعدّل وزن 2 طن.',
    },
    place: { en: 'Borollos (Kafr El Sheikh)', ar: 'البرلس (كفر الشيخ)' },
    owner: {
      en: 'Egyptian Public Authority for Shore Protection',
      ar: 'هيئة حماية الشواطئ',
    },
  },
  {
    slug: 'ras-el-bar-shore-protection',
    category: 'marine',
    image: img('4-7-scaled.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Ras El Bar shore protection', ar: 'حماية شاطئ رأس البر' },
    description: {
      en: 'Stone seawall 90 m long, then a 450 m dolomite seawall with a 6-ton Dolos main protection layer, sand fill behind the breakwater creating 24,000 m² of new land, a 250 m submerged breakwater with 4-ton Dolos, and supporting eight breakwaters with 6-ton Dolos using marine equipment (pontoon and tug boat).',
      ar: 'حائط بحري حجري بطول 90 م ثم حائط دولوميت بطول 450 م بطبقة حماية دولوس وزن 6 طن، وردم رملي خلف الحاجز لإضافة مساحة 24,000 م²، وحاجز غاطس 250 م بدولوس 4 طن، وتدعيم 8 حواجز بدولوس 6 طن باستخدام معدات بحرية (بنطون وقاطرة).',
    },
    place: { en: 'Ras El Bar', ar: 'رأس البر' },
    owner: {
      en: 'Egyptian Public Authority for Shore Protection',
      ar: 'هيئة حماية الشواطئ',
    },
  },
  {
    slug: 'elastomers-marine-launches-workshop',
    category: 'steel',
    image: img('Picture93.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Elastomers Marine Launches Workshop',
      ar: 'ورشة إطلاق اللنشات البحرية من الإيلاستومر',
    },
    description: {
      en: 'Constructing an elastomers marine launches workshop covering 3,475 m² with 21 m height.',
      ar: 'إنشاء ورشة إطلاق لنشات بحرية من الإيلاستومر بمساحة 3475 م² وارتفاع 21 م.',
    },
    place: {
      en: 'Egyptian Shipbuilding and Repair Yard (Alexandria)',
      ar: 'الترسانة البحرية المصرية (الإسكندرية)',
    },
    owner: {
      en: 'Egyptian Shipbuilding and Repair Company',
      ar: 'الشركة المصرية لبناء وإصلاح السفن',
    },
  },
  {
    slug: 'hurghada-covered-hall',
    category: 'steel',
    image: img('Picture85.jpg?fit=1600%2C900&ssl=1'),
    title: {
      en: 'Hurghada Covered Hall — Second Phase',
      ar: 'الصالة المغطاة بالغردقة – المرحلة الثانية',
    },
    description: {
      en: 'Constructing a covered stadium for 2,000 spectators.',
      ar: 'إنشاء استاد مغطى يتسع لـ 2000 متفرج.',
    },
    place: { en: 'Hurghada City', ar: 'مدينة الغردقة' },
    owner: {
      en: 'Ministry of Youth and Sports',
      ar: 'وزارة الشباب والرياضة',
    },
  },
  {
    slug: 'submarines-hanger',
    category: 'steel',
    image: img('12-5-scaled.jpg?fit=1600%2C900&ssl=1'),
    title: { en: 'Submarines Hangar', ar: 'هنغار الغواصات' },
    description: {
      en: 'Constructing a submarines hangar from steel sections with 8,765 m² area, 25 m height and 110 m span.',
      ar: 'إنشاء هنغار غواصات من القطاعات المعدنية بمساحة 8765 م² وارتفاع 25 م وبحر 110 م.',
    },
    place: { en: 'Ras El Tin (Alexandria)', ar: 'رأس التين (الإسكندرية)' },
    owner: { en: 'Navy Forces', ar: 'القوات البحرية' },
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export function relatedProjects(project, limit = 3) {
  return projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, limit)
}

export const heroImages = [
  projects[0].image,
  projects.find((p) => p.slug === 'port-said-naval-base-quay').image,
  projects.find((p) => p.slug === 'submarines-hanger').image,
  projects.find((p) => p.slug === 'el-mistral-quay').image,
]

export const featuredSlugs = [
  'bernis-naval-base-at-ras-banas',
  'port-said-naval-base-quay',
  'submarines-hanger',
  'dredging-manzala-lake',
  'el-mistral-quay',
  'galala-university-conference-hall',
]
