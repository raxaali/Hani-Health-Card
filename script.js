/* Hani Health Discount Card — front-end prototype only.
   All membership/provider data in this file is sample data held in memory.
   Production membership, payment, mapping and admin access require secure services. */
const translations = {
  en: {
    announce:"A simpler way to find care and member offers", scanLink:'Scan for locations <span aria-hidden="true">↗</span>', brandTagline:'Affordable, Inclusive Healthcare',
    navBenefits:'Benefits',navDirectory:'Find care',navCard:'Digital card',navVerify:'Verify membership',navAdmin:'Admin demo',navGetCard:'Get your card <span aria-hidden="true">↗</span>',
    heroEyebrow:'YOUR HEALTH, MADE MORE ACCESSIBLE',heroTitle:'Healthcare savings, <span class="title-accent">closer to home.</span>',heroDesc:'One convenient membership to help you discover participating hospitals, clinics and pharmacies — and access the offers available to Hani Health members.',heroFind:'Explore healthcare providers <span aria-hidden="true">→</span>',heroJoin:'Get a digital card',reassureTitle:'Clear. Convenient. Member-focused.',reassureText:'Provider participation and offers are shown in the directory.',floatingNetwork:'Healthcare network',floatingDigital:'Digital-ready membership',
    cardMemberNo:'MEMBERSHIP NO.',cardIssue:'ISSUE',cardExpiry:'EXPIRY',cardIqama:'IQAMA / PASSPORT',cardholder:'CARDHOLDER NAME',cardNameSpace:'Member name goes here',qrCaption:'SCAN FOR LOCATIONS',cardSample:'SAMPLE CARD',cardDisclaimer:'Illustrative card preview · Not a valid membership card',
    proofOneTitle:'One membership',proofOneText:'A convenient card experience',proofTwoTitle:'Care near you',proofTwoText:'Search providers by category',proofThreeTitle:'Five languages',proofThreeText:'A more inclusive experience',
    benefitKicker:'THE HANI HEALTH DIFFERENCE',benefitTitle:'Healthcare access, made simpler.',benefitDesc:'A clear, convenient way to discover participating healthcare providers and understand your membership.',benefitOneTitle:'Applicable member offers',benefitOneText:"Discover discounts offered by participating providers. Offers and exclusions depend on each provider's terms.",benefitTwoTitle:'One searchable directory',benefitTwoText:'Find hospitals, clinics and pharmacies from one place, then open directions for a selected location.',benefitThreeTitle:'Membership on your device',benefitThreeText:'Use a digital-first experience to start registration and check your membership status.',benefitNote:'Hani Health is a discount membership concept, not a substitute for health insurance or medical advice. Confirm the final terms before purchasing.',
    directoryKicker:'YOUR CARE, AT YOUR FINGERTIPS',directoryTitle:'Find a healthcare provider.',directoryDesc:'Search hospitals, clinics and pharmacies in the Hani Health directory.',demoData:'Prototype listings',searchPlaceholder:'Search provider, area or service',filterLabel:'Provider type',filterAll:'All providers',typeHospital:'Hospitals',typeClinic:'Clinics',typePharmacy:'Pharmacies',typeHospitalSingular:'Hospital',typeClinicSingular:'Clinic',typePharmacySingular:'Pharmacy',nearMe:'Use my location',resultsNote:'Provider information must be confirmed before launch',noResults:'No providers found',noResultsText:'Try another search term or provider type.',mapLabel:'LOCATION EXPLORER',mapTitle:'Care around you',samplePins:'Sample locations only',mapHelp:'Connect the production site to Google Maps to display verified contracted providers on a live map.',openMaps:'Open Google Maps',resultSingular:'demo listing',resultPlural:'demo listings',
    memberKicker:'YOUR MEMBERSHIP JOURNEY',memberTitle:'Start with Hani Health.',memberDesc:'Register for a digital card or check the status of an existing membership.',registrationLabel:'NEW MEMBER',registrationTitle:'Get your digital card',registrationText:'Enter your contact details to preview the registration flow. Secure payment is not connected in this demo.',fullNameLabel:'Full name',namePlaceholder:'As shown on your ID',phonePlaceholder:'+966 5X XXX XXXX',emailPlaceholder:'you@example.com',providerNamePlaceholder:'Sample healthcare provider',providerAreaPlaceholder:'Riyadh (demo)',phoneLabel:'Mobile number',emailLabel:'Email address',consentText:'I agree to be contacted about this membership request and understand this is a prototype.',createCard:'Create digital card preview <span aria-hidden="true">→</span>',privacyHint:'Demo only. Do not enter real identity or payment information.',paymentButton:'Continue to payment (demo)',
    verifyLabel:'EXISTING MEMBER',verifyTitle:'Check membership',verifyText:'Check a demo membership ID to see how eligibility status will appear on the live website.',membershipIdLabel:'Membership ID',demoIdHint:'Try the demo ID: HH-DEMO-2026',useDemoId:'Use ID',checkStatus:'Check status <span aria-hidden="true">→</span>',verifyFootnote:'Live eligibility checks must be connected to the protected membership database before launch.',
    locationsKicker:'NEED TO FIND A PROVIDER?',locationsTitle:'Scan. Search. Get directions.',locationsDesc:"Your card's QR code is designed to take members straight to contracted provider locations. The live destination will be set after deployment.",locationsButton:'Explore the directory <span aria-hidden="true">→</span>',qrBadge:'LOCATIONS',qrDemoNote:'Prototype QR code — replace with your live domain',
    stepsKicker:'DESIGNED AROUND YOU',stepsTitle:'Simple from start to visit.',stepsDesc:'A future-ready membership flow, with the key information kept close at hand.',stepsLink:'Start registration <span aria-hidden="true">→</span>',stepOneTitle:'Register your details',stepOneText:'Submit a membership request and choose the digital card option.',stepTwoTitle:'Find a participating provider',stepTwoText:'Search by type, location or service and open directions.',stepThreeTitle:'Present and verify your card',stepThreeText:'Show your membership details and confirm eligibility with the provider.',
    contactKicker:"WE'RE HERE TO HELP",contactTitle:'Questions about your membership?',contactText:'Official customer-support phone, email and business details can be added here before the website goes live.',contactButton:'Explore membership <span aria-hidden="true">→</span>',
    adminKicker:'OPERATIONS PREVIEW',adminTitle:'Admin dashboard',adminDesc:'A clickable front-end preview using sample records only.',adminPrototype:'Prototype mode',closeAdmin:'Close dashboard',adminWarningTitle:'Not secured for production',adminWarningText:'This demo has no login, authorization, encrypted storage or live database. Do not use it to manage real members.',adminMembers:'Member records',adminProviders:'Provider listings',adminExpiring:'Expiring soon',adminSample:'Sample records',adminMembersHeading:'Recent memberships',adminTableText:'Example entries to demonstrate the table layout.',exportCsv:'Export CSV',tableMember:'Member',tableId:'Membership ID',tableStatus:'Status',tableExpiry:'Expiry',addProviderTitle:'Add a provider (demo)',addProviderText:'Adds to this page only; nothing is saved.',providerNameLabel:'Provider name',providerTypeLabel:'Type',providerAreaLabel:'Area',addProviderButton:'Add demo listing <span aria-hidden="true">＋</span>',adminAddNote:'Use this to preview how provider maintenance will feel. Connect an authenticated API for real updates.',
    footerBlurb:'A convenient way to discover participating healthcare providers and manage your membership journey.',footerExplore:'Explore',footerSupport:'Support',footerContact:'Contact information',supportPending:'Official contact details pending',footerHours:'Support hours to be confirmed',footerLanguage:'Choose a language',footerLanguageText:'The interface supports five languages.',footerDemo:'Website prototype · Demo data only',backTop:'Back to top ↑',
    registrationSuccess:'Digital card preview created in this browser only. No information was sent and no payment was taken.',paymentPending:'Payment processing is not connected. No charge has been made; connect a payment provider before launch.',verificationActive:'Active (demo)',verificationActiveText:'This is a sample result only. A live website must confirm the status in the secure membership database.',verificationInvalid:'Membership not found',verificationInvalidText:'This ID is not present in the sample dataset. No live membership lookup was performed.',locationDenied:'Location access was unavailable. Showing sample provider locations.',locationSorting:'Browser location received. Sample providers sorted by approximate distance.',adminProviderAdded:'Demo provider added to the directory view only.',adminProviderInvalid:'Add a provider name and area first.',
    providerPhonePending:'Contact details pending',providerServicesPending:'Services to be confirmed',directions:'Directions',details:'Details',distanceAway:'away',distanceUnknown:'Distance unavailable',hospitalService:'General care · Diagnostics',clinicService:'Family care · Consultations',pharmacyService:'Prescription · OTC products',providerAddressDemo:'Sample location',providerDemoBadge:'DEMO',mapDirectionNote:'Demo address — confirm before use'
  },
  ar: {
    announce:'طريقة أبسط للعثور على الرعاية ومزايا الأعضاء',scanLink:'امسح لمعرفة المواقع <span aria-hidden="true">↗</span>',brandTagline:'رعاية صحية ميسّرة وشاملة',navBenefits:'المزايا',navDirectory:'ابحث عن الرعاية',navCard:'البطاقة الرقمية',navVerify:'التحقق من العضوية',navAdmin:'عرض الإدارة',navGetCard:'احصل على بطاقتك <span aria-hidden="true">↗</span>',
    heroEyebrow:'رعايتك الصحية أصبحت أقرب وأسهل',heroTitle:'وفّر في الرعاية الصحية، <span class="title-accent">بالقرب منك.</span>',heroDesc:'عضوية واحدة تساعدك في اكتشاف المستشفيات والعيادات والصيدليات المشاركة والوصول إلى العروض المتاحة لأعضاء هاني هيلث.',heroFind:'استكشف مقدمي الرعاية <span aria-hidden="true">→</span>',heroJoin:'احصل على بطاقة رقمية',reassureTitle:'واضحة، مريحة، ومصممة للأعضاء',reassureText:'تظهر الجهات المشاركة والعروض في الدليل.',floatingNetwork:'شبكة الرعاية الصحية',floatingDigital:'عضوية جاهزة للاستخدام الرقمي',
    cardMemberNo:'رقم العضوية',cardIssue:'الإصدار',cardExpiry:'الانتهاء',cardIqama:'الإقامة / جواز السفر',cardholder:'اسم حامل البطاقة',cardNameSpace:'يُكتب اسم العضو هنا',qrCaption:'امسح لمعرفة المواقع',cardSample:'بطاقة تجريبية',cardDisclaimer:'معاينة توضيحية · ليست بطاقة عضوية صالحة',proofOneTitle:'عضوية واحدة',proofOneText:'تجربة بطاقة مريحة',proofTwoTitle:'الرعاية بالقرب منك',proofTwoText:'ابحث حسب نوع الجهة',proofThreeTitle:'خمس لغات',proofThreeText:'تجربة أكثر شمولاً',
    benefitKicker:'ما يميز هاني هيلث',benefitTitle:'الوصول إلى الرعاية أصبح أسهل.',benefitDesc:'طريقة واضحة ومريحة لاكتشاف الجهات الصحية المشاركة وفهم عضويتك.',benefitOneTitle:'عروض الأعضاء المتاحة',benefitOneText:'اكتشف الخصومات التي تقدمها الجهات المشاركة. تخضع العروض والاستثناءات لشروط كل جهة.',benefitTwoTitle:'دليل واحد قابل للبحث',benefitTwoText:'اعثر على المستشفيات والعيادات والصيدليات في مكان واحد وافتح الاتجاهات للموقع المختار.',benefitThreeTitle:'عضويتك على جهازك',benefitThreeText:'ابدأ التسجيل رقمياً وتحقق من حالة عضويتك.',benefitNote:'هاني هيلث عضوية للخصومات وليست بديلاً عن التأمين الصحي أو المشورة الطبية. تحقق من الشروط النهائية قبل الشراء.',
    directoryKicker:'الرعاية بين يديك',directoryTitle:'اعثر على مقدم رعاية صحية.',directoryDesc:'ابحث عن المستشفيات والعيادات والصيدليات في دليل هاني هيلث.',demoData:'قوائم تجريبية',searchPlaceholder:'ابحث عن جهة أو منطقة أو خدمة',filterLabel:'نوع الجهة',filterAll:'جميع الجهات',typeHospital:'المستشفيات',typeClinic:'العيادات',typePharmacy:'الصيدليات',typeHospitalSingular:'مستشفى',typeClinicSingular:'عيادة',typePharmacySingular:'صيدلية',nearMe:'استخدم موقعي',resultsNote:'يجب تأكيد معلومات الجهات قبل الإطلاق',noResults:'لم يتم العثور على جهات',noResultsText:'جرّب كلمة بحث أو نوع جهة آخر.',mapLabel:'استكشاف المواقع',mapTitle:'الرعاية من حولك',samplePins:'مواقع تجريبية فقط',mapHelp:'اربط الموقع الإنتاجي بخرائط Google لعرض الجهات المتعاقدة التي تم التحقق منها على خريطة مباشرة.',openMaps:'افتح خرائط Google',resultSingular:'قائمة تجريبية',resultPlural:'قوائم تجريبية',
    memberKicker:'رحلة عضويتك',memberTitle:'ابدأ مع هاني هيلث.',memberDesc:'سجّل للحصول على بطاقة رقمية أو تحقق من حالة عضوية موجودة.',registrationLabel:'عضو جديد',registrationTitle:'احصل على بطاقتك الرقمية',registrationText:'أدخل بيانات التواصل لمعاينة التسجيل. الدفع الآمن غير متصل في هذا العرض التجريبي.',fullNameLabel:'الاسم الكامل',namePlaceholder:'كما يظهر في الهوية',phonePlaceholder:'+966 5X XXX XXXX',emailPlaceholder:'you@example.com',providerNamePlaceholder:'مقدم رعاية صحية تجريبي',providerAreaPlaceholder:'الرياض (تجريبي)',phoneLabel:'رقم الجوال',emailLabel:'البريد الإلكتروني',consentText:'أوافق على التواصل معي بشأن طلب العضوية وأفهم أن هذا نموذج تجريبي.',createCard:'إنشاء معاينة البطاقة <span aria-hidden="true">→</span>',privacyHint:'للتجربة فقط. لا تدخل بيانات هوية أو دفع حقيقية.',paymentButton:'المتابعة إلى الدفع (تجريبي)',verifyLabel:'عضو حالي',verifyTitle:'تحقق من العضوية',verifyText:'تحقق من رقم عضوية تجريبي لمشاهدة طريقة عرض حالة الأهلية في الموقع الفعلي.',membershipIdLabel:'رقم العضوية',demoIdHint:'جرّب الرقم: HH-DEMO-2026',useDemoId:'استخدم الرقم',checkStatus:'تحقق من الحالة <span aria-hidden="true">→</span>',verifyFootnote:'يجب ربط التحقق الفعلي بقاعدة بيانات العضوية المحمية قبل الإطلاق.',
    locationsKicker:'هل تبحث عن مقدم رعاية؟',locationsTitle:'امسح. ابحث. احصل على الاتجاهات.',locationsDesc:'صُمم رمز QR على البطاقة لفتح مواقع الجهات المتعاقدة مباشرة. سيتم ضبط الرابط النهائي بعد نشر الموقع.',locationsButton:'استكشف الدليل <span aria-hidden="true">→</span>',qrBadge:'المواقع',qrDemoNote:'رمز QR تجريبي — استبدله بنطاقك الفعلي',stepsKicker:'مصمم لاحتياجاتك',stepsTitle:'خطوات بسيطة حتى الزيارة.',stepsDesc:'رحلة عضوية رقمية مستقبلية مع إبقاء المعلومات المهمة في متناولك.',stepsLink:'ابدأ التسجيل <span aria-hidden="true">→</span>',stepOneTitle:'سجّل بياناتك',stepOneText:'أرسل طلب العضوية واختر البطاقة الرقمية.',stepTwoTitle:'اعثر على جهة مشاركة',stepTwoText:'ابحث حسب النوع أو الموقع أو الخدمة وافتح الاتجاهات.',stepThreeTitle:'اعرض بطاقتك وتحقق منها',stepThreeText:'اعرض تفاصيل عضويتك وتأكد من الأهلية لدى مقدم الخدمة.',
    contactKicker:'نحن هنا للمساعدة',contactTitle:'لديك أسئلة حول عضويتك؟',contactText:'يمكن إضافة رقم هاتف الدعم الرسمي والبريد الإلكتروني وبيانات الشركة قبل إطلاق الموقع.',contactButton:'استكشف العضوية <span aria-hidden="true">→</span>',adminKicker:'معاينة العمليات',adminTitle:'لوحة الإدارة',adminDesc:'معاينة تفاعلية للواجهة باستخدام سجلات تجريبية فقط.',adminPrototype:'الوضع التجريبي',closeAdmin:'إغلاق اللوحة',adminWarningTitle:'غير آمنة للاستخدام الفعلي',adminWarningText:'لا يتضمن هذا العرض تسجيل دخول أو صلاحيات أو تخزيناً مشفراً أو قاعدة بيانات مباشرة. لا تستخدمه لإدارة أعضاء حقيقيين.',adminMembers:'سجلات الأعضاء',adminProviders:'قوائم مقدمي الخدمة',adminExpiring:'قرب انتهاء الصلاحية',adminSample:'سجلات تجريبية',adminMembersHeading:'العضويات الأخيرة',adminTableText:'أمثلة لتوضيح شكل الجدول.',exportCsv:'تصدير CSV',tableMember:'العضو',tableId:'رقم العضوية',tableStatus:'الحالة',tableExpiry:'الانتهاء',addProviderTitle:'إضافة مقدم خدمة (تجريبي)',addProviderText:'يُضاف إلى هذه الصفحة فقط ولا يتم حفظه.',providerNameLabel:'اسم مقدم الخدمة',providerTypeLabel:'النوع',providerAreaLabel:'المنطقة',addProviderButton:'إضافة قائمة تجريبية <span aria-hidden="true">＋</span>',adminAddNote:'استخدم هذا لمعاينة إدارة الجهات. يلزم ربط واجهة API موثّقة لإجراء تحديثات حقيقية.',
    footerBlurb:'طريقة مريحة لاكتشاف الجهات الصحية المشاركة وإدارة خطوات عضويتك.',footerExplore:'استكشف',footerSupport:'الدعم',footerContact:'معلومات التواصل',supportPending:'بيانات التواصل الرسمية قيد الإضافة',footerHours:'سيتم تأكيد ساعات الدعم',footerLanguage:'اختر اللغة',footerLanguageText:'تدعم الواجهة خمس لغات.',footerDemo:'نموذج أولي للموقع · بيانات تجريبية فقط',backTop:'العودة للأعلى ↑',registrationSuccess:'تم إنشاء معاينة البطاقة في هذا المتصفح فقط. لم يتم إرسال أي بيانات أو تحصيل أي مبلغ.',paymentPending:'معالجة الدفع غير متصلة. لم يتم تحصيل أي مبلغ؛ يجب ربط مزود دفع قبل الإطلاق.',verificationActive:'نشطة (تجريبي)',verificationActiveText:'هذه نتيجة تجريبية فقط. يجب على الموقع الفعلي التحقق من الحالة في قاعدة بيانات العضوية الآمنة.',verificationInvalid:'لم يتم العثور على العضوية',verificationInvalidText:'رقم العضوية غير موجود في البيانات التجريبية. لم يتم إجراء تحقق مباشر.',locationDenied:'تعذر الوصول إلى الموقع. يتم عرض مواقع تجريبية.',locationSorting:'تم استلام موقع المتصفح. تم ترتيب الجهات التجريبية حسب المسافة التقريبية.',adminProviderAdded:'تمت إضافة جهة تجريبية إلى عرض الدليل فقط.',adminProviderInvalid:'أدخل اسم مقدم الخدمة والمنطقة أولاً.',providerPhonePending:'بيانات التواصل قيد الإضافة',providerServicesPending:'الخدمات بحاجة إلى تأكيد',directions:'الاتجاهات',details:'التفاصيل',distanceAway:'على بُعد',distanceUnknown:'المسافة غير متاحة',hospitalService:'رعاية عامة · فحوصات',clinicService:'رعاية عائلية · استشارات',pharmacyService:'وصفات طبية · منتجات دون وصفة',providerAddressDemo:'موقع تجريبي',providerDemoBadge:'تجريبي',mapDirectionNote:'عنوان تجريبي — يُرجى التأكيد قبل الاستخدام'
  },
  ur: {
    announce:'صحت کی سہولتیں اور ممبر آفرز تلاش کرنے کا آسان طریقہ',scanLink:'مقامات کے لیے اسکین کریں <span aria-hidden="true">↗</span>',brandTagline:'سستی اور سب کے لیے صحت کی سہولت',navBenefits:'فوائد',navDirectory:'علاج تلاش کریں',navCard:'ڈیجیٹل کارڈ',navVerify:'ممبرشپ کی تصدیق',navAdmin:'ایڈمن ڈیمو',navGetCard:'اپنا کارڈ حاصل کریں <span aria-hidden="true">↗</span>',
    heroEyebrow:'آپ کی صحت، مزید آسان اور قابلِ رسائی',heroTitle:'صحت پر بچت، <span class="title-accent">آپ کے قریب۔</span>',heroDesc:'ایک آسان ممبرشپ کے ذریعے شریک ہسپتال، کلینک اور فارمیسی تلاش کریں اور ہانی ہیلتھ ممبرز کے لیے دستیاب آفرز دیکھیں۔',heroFind:'صحت کی سہولتیں دیکھیں <span aria-hidden="true">→</span>',heroJoin:'ڈیجیٹل کارڈ حاصل کریں',reassureTitle:'واضح، آسان اور ممبرز کے لیے',reassureText:'شریک سہولتیں اور آفرز ڈائریکٹری میں درج ہیں۔',floatingNetwork:'صحت کی سہولتوں کا نیٹ ورک',floatingDigital:'ڈیجیٹل ممبرشپ',
    cardMemberNo:'ممبرشپ نمبر',cardIssue:'اجرا',cardExpiry:'میعاد ختم',cardIqama:'اقامہ / پاسپورٹ',cardholder:'کارڈ ہولڈر کا نام',cardNameSpace:'ممبر کا نام یہاں ہوگا',qrCaption:'مقامات کے لیے اسکین کریں',cardSample:'نمونہ کارڈ',cardDisclaimer:'نمائشی کارڈ · اصل ممبرشپ کارڈ نہیں',proofOneTitle:'ایک ممبرشپ',proofOneText:'آسان کارڈ کا تجربہ',proofTwoTitle:'قریب کی صحت سہولت',proofTwoText:'قسم کے مطابق تلاش کریں',proofThreeTitle:'پانچ زبانیں',proofThreeText:'زیادہ جامع تجربہ',
    benefitKicker:'ہانی ہیلتھ کا فرق',benefitTitle:'صحت کی سہولت تک رسائی آسان۔',benefitDesc:'شریک صحت مراکز تلاش کرنے اور اپنی ممبرشپ سمجھنے کا آسان طریقہ۔',benefitOneTitle:'ممبرز کے لیے آفرز',benefitOneText:'شریک مراکز کی رعایتیں دیکھیں۔ آفرز اور شرائط ہر مرکز کے مطابق ہوں گی۔',benefitTwoTitle:'ایک قابلِ تلاش ڈائریکٹری',benefitTwoText:'ہسپتال، کلینک اور فارمیسی ایک جگہ تلاش کریں اور راستہ دیکھیں۔',benefitThreeTitle:'آپ کے آلے پر ممبرشپ',benefitThreeText:'ڈیجیٹل رجسٹریشن شروع کریں اور ممبرشپ کی حیثیت چیک کریں۔',benefitNote:'ہانی ہیلتھ رعایتی ممبرشپ ہے، ہیلتھ انشورنس یا طبی مشورے کا متبادل نہیں۔ خریدنے سے پہلے حتمی شرائط کی تصدیق کریں۔',
    directoryKicker:'صحت کی سہولت آپ کی انگلیوں پر',directoryTitle:'صحت کی سہولت تلاش کریں۔',directoryDesc:'ہانی ہیلتھ ڈائریکٹری میں ہسپتال، کلینک اور فارمیسی تلاش کریں۔',demoData:'نمائشی فہرستیں',searchPlaceholder:'مرکز، علاقہ یا سروس تلاش کریں',filterLabel:'مرکز کی قسم',filterAll:'تمام مراکز',typeHospital:'ہسپتال',typeClinic:'کلینک',typePharmacy:'فارمیسی',typeHospitalSingular:'ہسپتال',typeClinicSingular:'کلینک',typePharmacySingular:'فارمیسی',nearMe:'میرا مقام استعمال کریں',resultsNote:'لانچ سے پہلے فراہم کنندگان کی معلومات کی تصدیق ضروری ہے',noResults:'کوئی مرکز نہیں ملا',noResultsText:'دوسرا لفظ یا مرکز کی قسم آزمائیں۔',mapLabel:'مقامات دیکھیں',mapTitle:'آپ کے آس پاس کی سہولتیں',samplePins:'صرف نمونہ مقامات',mapHelp:'اصل ویب سائٹ کو Google Maps سے جوڑیں تاکہ تصدیق شدہ مراکز نقشے پر دکھائے جا سکیں۔',openMaps:'Google Maps کھولیں',resultSingular:'نمونہ فہرست',resultPlural:'نمونہ فہرستیں',
    memberKicker:'آپ کی ممبرشپ کا سفر',memberTitle:'ہانی ہیلتھ کے ساتھ شروع کریں۔',memberDesc:'ڈیجیٹل کارڈ کے لیے رجسٹر کریں یا موجودہ ممبرشپ چیک کریں۔',registrationLabel:'نیا ممبر',registrationTitle:'ڈیجیٹل کارڈ حاصل کریں',registrationText:'رجسٹریشن کا نمونہ دیکھنے کے لیے رابطے کی معلومات درج کریں۔ اس ڈیمو میں ادائیگی منسلک نہیں۔',fullNameLabel:'پورا نام',namePlaceholder:'شناختی کارڈ کے مطابق',phonePlaceholder:'+966 5X XXX XXXX',emailPlaceholder:'you@example.com',providerNamePlaceholder:'نمونہ صحت مرکز',providerAreaPlaceholder:'ریاض (ڈیمو)',phoneLabel:'موبائل نمبر',emailLabel:'ای میل',consentText:'میں ممبرشپ کی درخواست کے بارے میں رابطے کی اجازت دیتا/دیتی ہوں اور سمجھتا/سمجھتی ہوں کہ یہ نمونہ ہے۔',createCard:'ڈیجیٹل کارڈ کا نمونہ بنائیں <span aria-hidden="true">→</span>',privacyHint:'صرف ڈیمو۔ اصل شناخت یا ادائیگی کی معلومات درج نہ کریں۔',paymentButton:'ادائیگی پر جائیں (ڈیمو)',verifyLabel:'موجودہ ممبر',verifyTitle:'ممبرشپ چیک کریں',verifyText:'ڈیمو ممبرشپ نمبر چیک کریں تاکہ معلوم ہو کہ اصل ویب سائٹ پر حیثیت کیسی دکھے گی۔',membershipIdLabel:'ممبرشپ نمبر',demoIdHint:'ڈیمو نمبر آزمائیں: HH-DEMO-2026',useDemoId:'نمبر استعمال کریں',checkStatus:'حیثیت چیک کریں <span aria-hidden="true">→</span>',verifyFootnote:'لانچ سے پہلے اصل تصدیق کو محفوظ ممبرشپ ڈیٹابیس سے جوڑنا ضروری ہے۔',
    locationsKicker:'کیا آپ مرکز تلاش کر رہے ہیں؟',locationsTitle:'اسکین کریں۔ تلاش کریں۔ راستہ دیکھیں۔',locationsDesc:'کارڈ کا QR کوڈ ممبرز کو شریک مراکز کے مقامات تک لے جانے کے لیے ہے۔ اصل لنک ویب سائٹ شائع ہونے کے بعد مقرر ہوگا۔',locationsButton:'ڈائریکٹری دیکھیں <span aria-hidden="true">→</span>',qrBadge:'مقامات',qrDemoNote:'نمونہ QR کوڈ — اصل ڈومین سے تبدیل کریں',stepsKicker:'آپ کو سامنے رکھ کر بنایا گیا',stepsTitle:'رجسٹریشن سے وزٹ تک آسان۔',stepsDesc:'ایک ڈیجیٹل ممبرشپ عمل جس میں اہم معلومات قریب رہیں۔',stepsLink:'رجسٹریشن شروع کریں <span aria-hidden="true">→</span>',stepOneTitle:'اپنی معلومات درج کریں',stepOneText:'ممبرشپ کی درخواست بھیجیں اور ڈیجیٹل کارڈ منتخب کریں۔',stepTwoTitle:'شریک مرکز تلاش کریں',stepTwoText:'قسم، مقام یا سروس کے مطابق تلاش کریں اور راستہ کھولیں۔',stepThreeTitle:'کارڈ دکھائیں اور تصدیق کریں',stepThreeText:'ممبرشپ دکھائیں اور مرکز سے اہلیت کی تصدیق کریں۔',
    contactKicker:'ہم مدد کے لیے موجود ہیں',contactTitle:'ممبرشپ سے متعلق سوالات؟',contactText:'سرکاری سپورٹ فون، ای میل اور کاروباری تفصیلات ویب سائٹ کے اجرا سے پہلے شامل کی جا سکتی ہیں۔',contactButton:'ممبرشپ دیکھیں <span aria-hidden="true">→</span>',adminKicker:'انتظامی پیش نظارہ',adminTitle:'ایڈمن ڈیش بورڈ',adminDesc:'صرف نمونہ ریکارڈز کے ساتھ کلک کرنے کے قابل پیش نظارہ۔',adminPrototype:'ڈیمو موڈ',closeAdmin:'ڈیش بورڈ بند کریں',adminWarningTitle:'اصل استعمال کے لیے محفوظ نہیں',adminWarningText:'اس ڈیمو میں لاگ ان، اجازتیں، محفوظ اسٹوریج یا براہِ راست ڈیٹابیس نہیں۔ اصل ممبرز کو منظم کرنے کے لیے استعمال نہ کریں۔',adminMembers:'ممبر ریکارڈز',adminProviders:'مرکز کی فہرستیں',adminExpiring:'جلد ختم ہونے والی',adminSample:'نمونہ ریکارڈز',adminMembersHeading:'حالیہ ممبرشپس',adminTableText:'ٹیبل کی مثالیں۔',exportCsv:'CSV برآمد کریں',tableMember:'ممبر',tableId:'ممبرشپ نمبر',tableStatus:'حیثیت',tableExpiry:'میعاد',addProviderTitle:'مرکز شامل کریں (ڈیمو)',addProviderText:'صرف اس صفحے پر شامل ہوگا؛ محفوظ نہیں ہوگا۔',providerNameLabel:'مرکز کا نام',providerTypeLabel:'قسم',providerAreaLabel:'علاقہ',addProviderButton:'نمونہ فہرست شامل کریں <span aria-hidden="true">＋</span>',adminAddNote:'مرکز کی دیکھ بھال کا پیش نظارہ کریں۔ اصل تبدیلیوں کے لیے محفوظ API درکار ہے۔',
    footerBlurb:'شریک صحت مراکز تلاش کرنے اور اپنی ممبرشپ سنبھالنے کا آسان طریقہ۔',footerExplore:'دریافت کریں',footerSupport:'مدد',footerContact:'رابطے کی معلومات',supportPending:'سرکاری رابطے کی تفصیلات شامل ہونا باقی ہیں',footerHours:'مدد کے اوقات کی تصدیق باقی ہے',footerLanguage:'زبان منتخب کریں',footerLanguageText:'یہ انٹرفیس پانچ زبانوں کو سپورٹ کرتا ہے۔',footerDemo:'ویب سائٹ کا نمونہ · صرف ڈیمو ڈیٹا',backTop:'اوپر واپس جائیں ↑',registrationSuccess:'ڈیجیٹل کارڈ کا نمونہ صرف اسی براؤزر میں بنا ہے۔ کوئی معلومات نہیں بھیجی گئیں اور ادائیگی نہیں ہوئی۔',paymentPending:'ادائیگی منسلک نہیں ہے۔ کوئی رقم نہیں لی گئی؛ لانچ سے پہلے ادائیگی فراہم کنندہ جوڑیں۔',verificationActive:'فعال (ڈیمو)',verificationActiveText:'یہ صرف نمونہ نتیجہ ہے۔ اصل ویب سائٹ محفوظ ممبرشپ ڈیٹابیس سے حیثیت کی تصدیق کرے گی۔',verificationInvalid:'ممبرشپ نہیں ملی',verificationInvalidText:'یہ نمبر نمونہ ڈیٹا میں موجود نہیں۔ براہِ راست ممبرشپ چیک نہیں کی گئی۔',locationDenied:'مقام تک رسائی دستیاب نہیں۔ نمونہ مقامات دکھائے جا رہے ہیں۔',locationSorting:'براؤزر کا مقام موصول ہوگیا۔ نمونہ مراکز کو اندازاً فاصلے کے مطابق ترتیب دیا گیا ہے۔',adminProviderAdded:'نمونہ مرکز صرف ڈائریکٹری کے پیش نظارہ میں شامل ہوا ہے۔',adminProviderInvalid:'پہلے مرکز کا نام اور علاقہ درج کریں۔',providerPhonePending:'رابطے کی معلومات باقی ہیں',providerServicesPending:'خدمات کی تصدیق باقی ہے',directions:'راستہ',details:'تفصیلات',distanceAway:'دور',distanceUnknown:'فاصلہ دستیاب نہیں',hospitalService:'عمومی نگہداشت · تشخیص',clinicService:'خاندانی نگہداشت · مشاورت',pharmacyService:'نسخے · بغیر نسخے کی مصنوعات',providerAddressDemo:'نمونہ مقام',providerDemoBadge:'ڈیمو',mapDirectionNote:'نمونہ پتہ — استعمال سے پہلے تصدیق کریں'
  },
  hi: {
    announce:'देखभाल और सदस्य ऑफ़र खोजने का आसान तरीका',scanLink:'स्थान देखने के लिए स्कैन करें <span aria-hidden="true">↗</span>',brandTagline:'किफायती, समावेशी स्वास्थ्य सेवा',navBenefits:'लाभ',navDirectory:'देखभाल खोजें',navCard:'डिजिटल कार्ड',navVerify:'सदस्यता सत्यापित करें',navAdmin:'एडमिन डेमो',navGetCard:'अपना कार्ड लें <span aria-hidden="true">↗</span>',
    heroEyebrow:'आपकी स्वास्थ्य सेवा, अब और सुलभ',heroTitle:'स्वास्थ्य पर बचत, <span class="title-accent">आपके पास।</span>',heroDesc:'एक सुविधाजनक सदस्यता से भाग लेने वाले अस्पताल, क्लिनिक और फ़ार्मेसी खोजें और Hani Health सदस्यों के लिए उपलब्ध ऑफ़र देखें।',heroFind:'स्वास्थ्य सेवा प्रदाता देखें <span aria-hidden="true">→</span>',heroJoin:'डिजिटल कार्ड लें',reassureTitle:'स्पष्ट, सुविधाजनक, सदस्यों के लिए',reassureText:'भाग लेने वाले प्रदाता और ऑफ़र निर्देशिका में दिखते हैं।',floatingNetwork:'स्वास्थ्य सेवा नेटवर्क',floatingDigital:'डिजिटल सदस्यता',
    cardMemberNo:'सदस्यता संख्या',cardIssue:'जारी',cardExpiry:'समाप्ति',cardIqama:'इकामा / पासपोर्ट',cardholder:'कार्डधारक का नाम',cardNameSpace:'सदस्य का नाम यहाँ',qrCaption:'स्थान देखने के लिए स्कैन करें',cardSample:'नमूना कार्ड',cardDisclaimer:'केवल उदाहरण · वैध सदस्यता कार्ड नहीं',proofOneTitle:'एक सदस्यता',proofOneText:'सुविधाजनक कार्ड अनुभव',proofTwoTitle:'पास में देखभाल',proofTwoText:'श्रेणी के अनुसार खोजें',proofThreeTitle:'पाँच भाषाएँ',proofThreeText:'अधिक समावेशी अनुभव',
    benefitKicker:'HANI HEALTH का अंतर',benefitTitle:'स्वास्थ्य सेवा तक पहुँच आसान।',benefitDesc:'भाग लेने वाले स्वास्थ्य सेवा प्रदाताओं को खोजने और सदस्यता समझने का आसान तरीका।',benefitOneTitle:'सदस्यों के लिए लागू ऑफ़र',benefitOneText:'भाग लेने वाले प्रदाताओं की छूट देखें। ऑफ़र और अपवाद हर प्रदाता की शर्तों पर निर्भर हैं।',benefitTwoTitle:'एक खोज योग्य निर्देशिका',benefitTwoText:'अस्पताल, क्लिनिक और फ़ार्मेसी एक ही जगह खोजें और चुने गए स्थान के लिए दिशा-निर्देश खोलें।',benefitThreeTitle:'आपके डिवाइस पर सदस्यता',benefitThreeText:'डिजिटल पंजीकरण शुरू करें और सदस्यता की स्थिति जाँचें।',benefitNote:'Hani Health छूट सदस्यता है; यह स्वास्थ्य बीमा या चिकित्सा सलाह का विकल्प नहीं है। खरीदने से पहले अंतिम शर्तें देखें।',
    directoryKicker:'देखभाल आपकी उँगलियों पर',directoryTitle:'स्वास्थ्य सेवा प्रदाता खोजें।',directoryDesc:'Hani Health निर्देशिका में अस्पताल, क्लिनिक और फ़ार्मेसी खोजें।',demoData:'डेमो सूची',searchPlaceholder:'प्रदाता, क्षेत्र या सेवा खोजें',filterLabel:'प्रदाता का प्रकार',filterAll:'सभी प्रदाता',typeHospital:'अस्पताल',typeClinic:'क्लिनिक',typePharmacy:'फ़ार्मेसी',typeHospitalSingular:'अस्पताल',typeClinicSingular:'क्लिनिक',typePharmacySingular:'फ़ार्मेसी',nearMe:'मेरी लोकेशन उपयोग करें',resultsNote:'लॉन्च से पहले प्रदाता की जानकारी की पुष्टि आवश्यक है',noResults:'कोई प्रदाता नहीं मिला',noResultsText:'दूसरा खोज शब्द या प्रदाता प्रकार आज़माएँ।',mapLabel:'स्थान खोजें',mapTitle:'आपके आसपास देखभाल',samplePins:'केवल नमूना स्थान',mapHelp:'सत्यापित अनुबंधित प्रदाताओं को लाइव नक्शे पर दिखाने के लिए उत्पादन वेबसाइट को Google Maps से जोड़ें।',openMaps:'Google Maps खोलें',resultSingular:'डेमो सूची',resultPlural:'डेमो सूचियाँ',
    memberKicker:'आपकी सदस्यता यात्रा',memberTitle:'Hani Health के साथ शुरुआत करें।',memberDesc:'डिजिटल कार्ड के लिए पंजीकरण करें या मौजूदा सदस्यता की स्थिति जाँचें।',registrationLabel:'नया सदस्य',registrationTitle:'अपना डिजिटल कार्ड लें',registrationText:'पंजीकरण अनुभव देखने के लिए संपर्क विवरण दर्ज करें। इस डेमो में सुरक्षित भुगतान जुड़ा नहीं है।',fullNameLabel:'पूरा नाम',namePlaceholder:'पहचान पत्र के अनुसार',phonePlaceholder:'+966 5X XXX XXXX',emailPlaceholder:'you@example.com',providerNamePlaceholder:'नमूना स्वास्थ्य प्रदाता',providerAreaPlaceholder:'रियाद (डेमो)',phoneLabel:'मोबाइल नंबर',emailLabel:'ईमेल पता',consentText:'मैं इस सदस्यता अनुरोध के बारे में संपर्क करने की सहमति देता/देती हूँ और समझता/समझती हूँ कि यह प्रोटोटाइप है।',createCard:'डिजिटल कार्ड का पूर्वावलोकन बनाएँ <span aria-hidden="true">→</span>',privacyHint:'केवल डेमो। वास्तविक पहचान या भुगतान जानकारी न दर्ज करें।',paymentButton:'भुगतान पर जाएँ (डेमो)',verifyLabel:'मौजूदा सदस्य',verifyTitle:'सदस्यता जाँचें',verifyText:'देखें कि लाइव वेबसाइट पर पात्रता की स्थिति कैसे दिखाई देगी।',membershipIdLabel:'सदस्यता आईडी',demoIdHint:'डेमो आईडी आज़माएँ: HH-DEMO-2026',useDemoId:'आईडी उपयोग करें',checkStatus:'स्थिति जाँचें <span aria-hidden="true">→</span>',verifyFootnote:'लॉन्च से पहले लाइव पात्रता जाँच को सुरक्षित सदस्यता डेटाबेस से जोड़ना होगा।',
    locationsKicker:'प्रदाता खोजना है?',locationsTitle:'स्कैन करें। खोजें। दिशा पाएँ।',locationsDesc:'कार्ड का QR कोड सदस्यों को अनुबंधित प्रदाताओं के स्थानों तक ले जाने के लिए है। लाइव लिंक वेबसाइट प्रकाशित होने के बाद सेट होगा।',locationsButton:'निर्देशिका देखें <span aria-hidden="true">→</span>',qrBadge:'स्थान',qrDemoNote:'डेमो QR कोड — लाइव डोमेन से बदलें',stepsKicker:'आपके लिए बनाया गया',stepsTitle:'पंजीकरण से विज़िट तक आसान।',stepsDesc:'एक डिजिटल सदस्यता प्रक्रिया, जिसमें ज़रूरी जानकारी आपके पास रहती है।',stepsLink:'पंजीकरण शुरू करें <span aria-hidden="true">→</span>',stepOneTitle:'अपना विवरण दर्ज करें',stepOneText:'सदस्यता अनुरोध भेजें और डिजिटल कार्ड विकल्प चुनें।',stepTwoTitle:'भाग लेने वाला प्रदाता खोजें',stepTwoText:'प्रकार, स्थान या सेवा से खोजें और दिशा-निर्देश खोलें।',stepThreeTitle:'कार्ड दिखाएँ और सत्यापित करें',stepThreeText:'अपनी सदस्यता दिखाएँ और प्रदाता से पात्रता की पुष्टि करें।',
    contactKicker:'हम सहायता के लिए हैं',contactTitle:'सदस्यता के बारे में सवाल हैं?',contactText:'वेबसाइट लाइव होने से पहले आधिकारिक ग्राहक सहायता फोन, ईमेल और व्यवसाय का विवरण यहाँ जोड़ा जा सकता है।',contactButton:'सदस्यता देखें <span aria-hidden="true">→</span>',adminKicker:'संचालन पूर्वावलोकन',adminTitle:'एडमिन डैशबोर्ड',adminDesc:'केवल नमूना रिकॉर्ड वाला क्लिक करने योग्य फ्रंट-एंड पूर्वावलोकन।',adminPrototype:'प्रोटोटाइप मोड',closeAdmin:'डैशबोर्ड बंद करें',adminWarningTitle:'उत्पादन के लिए सुरक्षित नहीं',adminWarningText:'इस डेमो में लॉगिन, अनुमति, एन्क्रिप्टेड स्टोरेज या लाइव डेटाबेस नहीं है। वास्तविक सदस्यों को प्रबंधित करने के लिए उपयोग न करें।',adminMembers:'सदस्य रिकॉर्ड',adminProviders:'प्रदाता सूची',adminExpiring:'जल्द समाप्त',adminSample:'नमूना रिकॉर्ड',adminMembersHeading:'हाल की सदस्यताएँ',adminTableText:'तालिका दिखाने के लिए उदाहरण।',exportCsv:'CSV निर्यात करें',tableMember:'सदस्य',tableId:'सदस्यता आईडी',tableStatus:'स्थिति',tableExpiry:'समाप्ति',addProviderTitle:'प्रदाता जोड़ें (डेमो)',addProviderText:'केवल इस पृष्ठ पर जुड़ेगा; सेव नहीं होगा।',providerNameLabel:'प्रदाता का नाम',providerTypeLabel:'प्रकार',providerAreaLabel:'क्षेत्र',addProviderButton:'डेमो सूची जोड़ें <span aria-hidden="true">＋</span>',adminAddNote:'प्रदाता प्रबंधन का पूर्वावलोकन करें। वास्तविक बदलाव के लिए प्रमाणित API जोड़ें।',
    footerBlurb:'भाग लेने वाले स्वास्थ्य प्रदाताओं को खोजने और सदस्यता प्रबंधित करने का आसान तरीका।',footerExplore:'देखें',footerSupport:'सहायता',footerContact:'संपर्क जानकारी',supportPending:'आधिकारिक संपर्क जानकारी बाकी है',footerHours:'सहायता समय की पुष्टि बाकी है',footerLanguage:'भाषा चुनें',footerLanguageText:'इंटरफ़ेस पाँच भाषाओं में उपलब्ध है।',footerDemo:'वेबसाइट प्रोटोटाइप · केवल डेमो डेटा',backTop:'ऊपर जाएँ ↑',registrationSuccess:'डिजिटल कार्ड का पूर्वावलोकन केवल इस ब्राउज़र में बना। कोई जानकारी भेजी नहीं गई और कोई भुगतान नहीं हुआ।',paymentPending:'भुगतान प्रक्रिया जुड़ी नहीं है। कोई शुल्क नहीं लिया गया; लॉन्च से पहले भुगतान प्रदाता जोड़ें।',verificationActive:'सक्रिय (डेमो)',verificationActiveText:'यह केवल नमूना परिणाम है। लाइव वेबसाइट सुरक्षित डेटाबेस में स्थिति की पुष्टि करेगी।',verificationInvalid:'सदस्यता नहीं मिली',verificationInvalidText:'यह आईडी नमूना डेटा में नहीं है। लाइव जाँच नहीं की गई।',locationDenied:'लोकेशन उपलब्ध नहीं है। नमूना स्थान दिखाए जा रहे हैं।',locationSorting:'ब्राउज़र लोकेशन मिल गई। नमूना प्रदाताओं को अनुमानित दूरी से क्रमबद्ध किया गया।',adminProviderAdded:'डेमो प्रदाता केवल निर्देशिका पूर्वावलोकन में जोड़ा गया।',adminProviderInvalid:'पहले प्रदाता का नाम और क्षेत्र दर्ज करें।',providerPhonePending:'संपर्क विवरण बाकी है',providerServicesPending:'सेवाओं की पुष्टि बाकी है',directions:'दिशा-निर्देश',details:'विवरण',distanceAway:'दूर',distanceUnknown:'दूरी उपलब्ध नहीं',hospitalService:'सामान्य देखभाल · जाँच',clinicService:'पारिवारिक देखभाल · परामर्श',pharmacyService:'प्रिस्क्रिप्शन · OTC उत्पाद',providerAddressDemo:'नमूना स्थान',providerDemoBadge:'डेमो',mapDirectionNote:'नमूना पता — उपयोग से पहले पुष्टि करें'
  },
  bn: {
    announce:'চিকিৎসা সেবা ও সদস্যদের অফার খুঁজে পাওয়ার সহজ উপায়',scanLink:'লোকেশন দেখতে স্ক্যান করুন <span aria-hidden="true">↗</span>',brandTagline:'সাশ্রয়ী, অন্তর্ভুক্তিমূলক স্বাস্থ্যসেবা',navBenefits:'সুবিধা',navDirectory:'সেবা খুঁজুন',navCard:'ডিজিটাল কার্ড',navVerify:'সদস্যতা যাচাই',navAdmin:'অ্যাডমিন ডেমো',navGetCard:'আপনার কার্ড নিন <span aria-hidden="true">↗</span>',
    heroEyebrow:'আপনার স্বাস্থ্যসেবা, আরও সহজলভ্য',heroTitle:'স্বাস্থ্যসেবায় সাশ্রয়, <span class="title-accent">আপনার কাছেই।</span>',heroDesc:'একটি সুবিধাজনক সদস্যতার মাধ্যমে অংশগ্রহণকারী হাসপাতাল, ক্লিনিক ও ফার্মেসি খুঁজুন এবং Hani Health সদস্যদের জন্য উপলভ্য অফার দেখুন।',heroFind:'স্বাস্থ্যসেবা প্রদানকারী দেখুন <span aria-hidden="true">→</span>',heroJoin:'ডিজিটাল কার্ড নিন',reassureTitle:'স্পষ্ট, সুবিধাজনক, সদস্যদের জন্য',reassureText:'অংশগ্রহণকারী প্রতিষ্ঠান ও অফার ডিরেক্টরিতে দেখানো হয়েছে।',floatingNetwork:'স্বাস্থ্যসেবা নেটওয়ার্ক',floatingDigital:'ডিজিটাল সদস্যতা',
    cardMemberNo:'সদস্যতা নম্বর',cardIssue:'ইস্যু',cardExpiry:'মেয়াদ শেষ',cardIqama:'ইকামা / পাসপোর্ট',cardholder:'কার্ডধারীর নাম',cardNameSpace:'সদস্যের নাম এখানে থাকবে',qrCaption:'লোকেশন দেখতে স্ক্যান করুন',cardSample:'নমুনা কার্ড',cardDisclaimer:'উদাহরণ কার্ড · বৈধ সদস্যতা কার্ড নয়',proofOneTitle:'একটি সদস্যতা',proofOneText:'সুবিধাজনক কার্ড অভিজ্ঞতা',proofTwoTitle:'কাছাকাছি সেবা',proofTwoText:'ধরন অনুযায়ী খুঁজুন',proofThreeTitle:'পাঁচটি ভাষা',proofThreeText:'আরও অন্তর্ভুক্তিমূলক অভিজ্ঞতা',
    benefitKicker:'HANI HEALTH-এর পার্থক্য',benefitTitle:'স্বাস্থ্যসেবায় প্রবেশ আরও সহজ।',benefitDesc:'অংশগ্রহণকারী স্বাস্থ্যসেবা প্রতিষ্ঠান খুঁজে পাওয়া এবং সদস্যতা বোঝার সহজ উপায়।',benefitOneTitle:'সদস্যদের জন্য প্রযোজ্য অফার',benefitOneText:'অংশগ্রহণকারী প্রতিষ্ঠানের ছাড় দেখুন। অফার ও ব্যতিক্রম প্রতিষ্ঠানের শর্তের ওপর নির্ভর করে।',benefitTwoTitle:'একটি অনুসন্ধানযোগ্য ডিরেক্টরি',benefitTwoText:'এক জায়গায় হাসপাতাল, ক্লিনিক ও ফার্মেসি খুঁজুন এবং নির্বাচিত স্থানের দিকনির্দেশ খুলুন।',benefitThreeTitle:'আপনার ডিভাইসে সদস্যতা',benefitThreeText:'ডিজিটাল নিবন্ধন শুরু করুন এবং সদস্যতার অবস্থা যাচাই করুন।',benefitNote:'Hani Health একটি ছাড়ভিত্তিক সদস্যতা, স্বাস্থ্যবিমা বা চিকিৎসা পরামর্শের বিকল্প নয়। কেনার আগে চূড়ান্ত শর্ত নিশ্চিত করুন।',
    directoryKicker:'আপনার হাতের নাগালে সেবা',directoryTitle:'স্বাস্থ্যসেবা প্রতিষ্ঠান খুঁজুন।',directoryDesc:'Hani Health ডিরেক্টরিতে হাসপাতাল, ক্লিনিক ও ফার্মেসি খুঁজুন।',demoData:'নমুনা তালিকা',searchPlaceholder:'প্রতিষ্ঠান, এলাকা বা সেবা খুঁজুন',filterLabel:'প্রতিষ্ঠানের ধরন',filterAll:'সব প্রতিষ্ঠান',typeHospital:'হাসপাতাল',typeClinic:'ক্লিনিক',typePharmacy:'ফার্মেসি',typeHospitalSingular:'হাসপাতাল',typeClinicSingular:'ক্লিনিক',typePharmacySingular:'ফার্মেসি',nearMe:'আমার লোকেশন ব্যবহার করুন',resultsNote:'চালুর আগে প্রতিষ্ঠানের তথ্য নিশ্চিত করতে হবে',noResults:'কোনো প্রতিষ্ঠান পাওয়া যায়নি',noResultsText:'অন্য অনুসন্ধান শব্দ বা ধরন চেষ্টা করুন।',mapLabel:'লোকেশন এক্সপ্লোরার',mapTitle:'আপনার আশেপাশে সেবা',samplePins:'শুধু নমুনা লোকেশন',mapHelp:'যাচাইকৃত চুক্তিবদ্ধ প্রতিষ্ঠান লাইভ মানচিত্রে দেখাতে উৎপাদন ওয়েবসাইটকে Google Maps-এর সঙ্গে যুক্ত করুন।',openMaps:'Google Maps খুলুন',resultSingular:'নমুনা তালিকা',resultPlural:'নমুনা তালিকা',
    memberKicker:'আপনার সদস্যতার যাত্রা',memberTitle:'Hani Health দিয়ে শুরু করুন।',memberDesc:'ডিজিটাল কার্ডের জন্য নিবন্ধন করুন অথবা বিদ্যমান সদস্যতার অবস্থা যাচাই করুন।',registrationLabel:'নতুন সদস্য',registrationTitle:'ডিজিটাল কার্ড নিন',registrationText:'নিবন্ধনের অভিজ্ঞতা দেখতে যোগাযোগের তথ্য দিন। এই ডেমোতে নিরাপদ পেমেন্ট সংযুক্ত নেই।',fullNameLabel:'পুরো নাম',namePlaceholder:'পরিচয়পত্র অনুযায়ী',phonePlaceholder:'+966 5X XXX XXXX',emailPlaceholder:'you@example.com',providerNamePlaceholder:'নমুনা স্বাস্থ্যসেবা প্রতিষ্ঠান',providerAreaPlaceholder:'রিয়াদ (ডেমো)',phoneLabel:'মোবাইল নম্বর',emailLabel:'ইমেইল ঠিকানা',consentText:'এই সদস্যতার অনুরোধ সম্পর্কে আমার সঙ্গে যোগাযোগে সম্মতি দিচ্ছি এবং বুঝি এটি একটি প্রোটোটাইপ।',createCard:'ডিজিটাল কার্ডের প্রিভিউ তৈরি করুন <span aria-hidden="true">→</span>',privacyHint:'শুধু ডেমো। আসল পরিচয় বা পেমেন্টের তথ্য দেবেন না।',paymentButton:'পেমেন্টে যান (ডেমো)',verifyLabel:'বিদ্যমান সদস্য',verifyTitle:'সদস্যতা যাচাই করুন',verifyText:'লাইভ ওয়েবসাইটে যোগ্যতার অবস্থা কীভাবে দেখাবে তা দেখতে ডেমো সদস্যতা নম্বর যাচাই করুন।',membershipIdLabel:'সদস্যতা আইডি',demoIdHint:'ডেমো আইডি চেষ্টা করুন: HH-DEMO-2026',useDemoId:'আইডি ব্যবহার করুন',checkStatus:'অবস্থা যাচাই করুন <span aria-hidden="true">→</span>',verifyFootnote:'চালুর আগে লাইভ যাচাইকে সুরক্ষিত সদস্যতা ডেটাবেসের সঙ্গে যুক্ত করতে হবে।',
    locationsKicker:'প্রতিষ্ঠান খুঁজতে চান?',locationsTitle:'স্ক্যান করুন। খুঁজুন। দিকনির্দেশ নিন।',locationsDesc:'কার্ডের QR কোড সদস্যদের চুক্তিবদ্ধ প্রতিষ্ঠানের অবস্থানে নিয়ে যাওয়ার জন্য। লাইভ লিংক ওয়েবসাইট চালুর পরে নির্ধারণ করা হবে।',locationsButton:'ডিরেক্টরি দেখুন <span aria-hidden="true">→</span>',qrBadge:'লোকেশন',qrDemoNote:'নমুনা QR কোড — লাইভ ডোমেইন দিয়ে বদলান',stepsKicker:'আপনাকে মাথায় রেখে তৈরি',stepsTitle:'নিবন্ধন থেকে ভিজিট—সহজ।',stepsDesc:'একটি ডিজিটাল সদস্যতার ধাপ, যেখানে গুরুত্বপূর্ণ তথ্য হাতের কাছেই থাকে।',stepsLink:'নিবন্ধন শুরু করুন <span aria-hidden="true">→</span>',stepOneTitle:'আপনার তথ্য দিন',stepOneText:'সদস্যতার অনুরোধ জমা দিন এবং ডিজিটাল কার্ড বেছে নিন।',stepTwoTitle:'অংশগ্রহণকারী প্রতিষ্ঠান খুঁজুন',stepTwoText:'ধরন, অবস্থান বা সেবা দিয়ে খুঁজুন এবং দিকনির্দেশ খুলুন।',stepThreeTitle:'কার্ড দেখান ও যাচাই করুন',stepThreeText:'সদস্যতার তথ্য দেখান এবং প্রতিষ্ঠানের কাছে যোগ্যতা নিশ্চিত করুন।',
    contactKicker:'আমরা সাহায্য করতে আছি',contactTitle:'সদস্যতা নিয়ে প্রশ্ন আছে?',contactText:'ওয়েবসাইট চালুর আগে অফিসিয়াল সহায়তা ফোন, ইমেইল ও ব্যবসার তথ্য এখানে যোগ করা যাবে।',contactButton:'সদস্যতা দেখুন <span aria-hidden="true">→</span>',adminKicker:'অপারেশন প্রিভিউ',adminTitle:'অ্যাডমিন ড্যাশবোর্ড',adminDesc:'শুধু নমুনা রেকর্ড দিয়ে তৈরি ক্লিকযোগ্য ফ্রন্টএন্ড প্রিভিউ।',adminPrototype:'প্রোটোটাইপ মোড',closeAdmin:'ড্যাশবোর্ড বন্ধ করুন',adminWarningTitle:'প্রোডাকশনের জন্য সুরক্ষিত নয়',adminWarningText:'এই ডেমোতে লগইন, অনুমতি, এনক্রিপ্টেড স্টোরেজ বা লাইভ ডেটাবেস নেই। প্রকৃত সদস্য পরিচালনায় ব্যবহার করবেন না।',adminMembers:'সদস্য রেকর্ড',adminProviders:'প্রতিষ্ঠানের তালিকা',adminExpiring:'শিগগির মেয়াদ শেষ',adminSample:'নমুনা রেকর্ড',adminMembersHeading:'সাম্প্রতিক সদস্যতা',adminTableText:'টেবিলের বিন্যাস দেখানোর উদাহরণ।',exportCsv:'CSV রপ্তানি',tableMember:'সদস্য',tableId:'সদস্যতা আইডি',tableStatus:'অবস্থা',tableExpiry:'মেয়াদ',addProviderTitle:'প্রতিষ্ঠান যোগ করুন (ডেমো)',addProviderText:'শুধু এই পৃষ্ঠায় যুক্ত হবে; সংরক্ষিত হবে না।',providerNameLabel:'প্রতিষ্ঠানের নাম',providerTypeLabel:'ধরন',providerAreaLabel:'এলাকা',addProviderButton:'নমুনা তালিকা যোগ করুন <span aria-hidden="true">＋</span>',adminAddNote:'প্রতিষ্ঠান ব্যবস্থাপনার প্রিভিউ দেখুন। প্রকৃত পরিবর্তনের জন্য অনুমোদিত API সংযুক্ত করুন।',
    footerBlurb:'অংশগ্রহণকারী স্বাস্থ্যসেবা প্রতিষ্ঠান খুঁজে পাওয়া এবং সদস্যতার ধাপ পরিচালনার সহজ উপায়।',footerExplore:'এক্সপ্লোর করুন',footerSupport:'সহায়তা',footerContact:'যোগাযোগের তথ্য',supportPending:'অফিসিয়াল যোগাযোগের তথ্য যোগ করা বাকি',footerHours:'সহায়তার সময় নিশ্চিত করা হবে',footerLanguage:'ভাষা বেছে নিন',footerLanguageText:'ইন্টারফেস পাঁচটি ভাষা সমর্থন করে।',footerDemo:'ওয়েবসাইট প্রোটোটাইপ · শুধু ডেমো ডেটা',backTop:'উপরে যান ↑',registrationSuccess:'ডিজিটাল কার্ডের প্রিভিউ শুধু এই ব্রাউজারে তৈরি হয়েছে। কোনো তথ্য পাঠানো হয়নি এবং পেমেন্ট নেওয়া হয়নি।',paymentPending:'পেমেন্ট ব্যবস্থা সংযুক্ত নয়। কোনো চার্জ নেওয়া হয়নি; চালুর আগে পেমেন্ট প্রদানকারী যুক্ত করুন।',verificationActive:'সক্রিয় (ডেমো)',verificationActiveText:'এটি শুধু নমুনা ফলাফল। লাইভ ওয়েবসাইট সুরক্ষিত ডেটাবেসে অবস্থা নিশ্চিত করবে।',verificationInvalid:'সদস্যতা পাওয়া যায়নি',verificationInvalidText:'এই আইডি নমুনা ডেটায় নেই। লাইভ সদস্যতা যাচাই করা হয়নি।',locationDenied:'লোকেশন পাওয়া যায়নি। নমুনা অবস্থান দেখানো হচ্ছে।',locationSorting:'ব্রাউজারের লোকেশন পাওয়া গেছে। নমুনা প্রতিষ্ঠান আনুমানিক দূরত্ব অনুযায়ী সাজানো হয়েছে।',adminProviderAdded:'নমুনা প্রতিষ্ঠান শুধু ডিরেক্টরি প্রিভিউতে যুক্ত হয়েছে।',adminProviderInvalid:'আগে প্রতিষ্ঠানের নাম ও এলাকা দিন।',providerPhonePending:'যোগাযোগের তথ্য যোগ করা বাকি',providerServicesPending:'সেবার তথ্য নিশ্চিত করা বাকি',directions:'দিকনির্দেশ',details:'বিস্তারিত',distanceAway:'দূরে',distanceUnknown:'দূরত্ব পাওয়া যায়নি',hospitalService:'সাধারণ সেবা · পরীক্ষা',clinicService:'পারিবারিক সেবা · পরামর্শ',pharmacyService:'প্রেসক্রিপশন · OTC পণ্য',providerAddressDemo:'নমুনা অবস্থান',providerDemoBadge:'ডেমো',mapDirectionNote:'নমুনা ঠিকানা — ব্যবহারের আগে নিশ্চিত করুন'
  }
};
translations.en.typeHealthCenter = 'Health centers';
translations.en.typeHealthCenterSingular = 'Health center';

let currentLanguage = 'en';
let userCoordinates = null;
let toastTimer = null;
function loadDemoData(key, fallback){
  try {
    const stored=localStorage.getItem(key);
    if(stored){const parsed=JSON.parse(stored);if(Array.isArray(parsed))return parsed;}
  } catch(error) { /* Storage may be unavailable; use in-memory demo data. */ }
  return fallback.map(item=>({...item}));
}
function saveDemoData(){
  try {
    localStorage.setItem('haniHealthDemoProviders',JSON.stringify(providers));
    localStorage.setItem('haniHealthDemoMembers',JSON.stringify(demoMembers));
    return true;
  } catch(error) {
    showToast('Browser storage is unavailable. Changes may not persist after closing this page.');
    return false;
  }
}
const defaultProviders = [
  {id:1,name:'Hani Partner Hospital (Demo)',type:'hospital',area:'Olaya District, Riyadh',address:'Sample site, Olaya District, Riyadh',phone:'Contact details pending',services:'General care · Diagnostics',lat:24.7136,lng:46.6753,demo:true},
  {id:2,name:'Hani Family Clinic (Demo)',type:'clinic',area:'Al Malaz, Riyadh',address:'Sample site, Al Malaz, Riyadh',phone:'Contact details pending',services:'Family care · Consultations',lat:24.6741,lng:46.7242,demo:true},
  {id:3,name:'Hani Care Pharmacy (Demo)',type:'pharmacy',area:'Al Nakheel, Riyadh',address:'Sample site, Al Nakheel, Riyadh',phone:'Contact details pending',services:'Prescription · OTC products',lat:24.7743,lng:46.6378,demo:true},
  {id:4,name:'Hani Specialist Centre (Demo)',type:'clinic',area:'King Fahd Road, Riyadh',address:'Sample site, King Fahd Road, Riyadh',phone:'Contact details pending',services:'Specialist consultations · Diagnostics',lat:24.7482,lng:46.6599,demo:true},
  {id:5,name:'Hani Community Health Centre (Demo)',type:'health-center',area:'Al Wurud, Riyadh',address:'Sample site, Al Wurud, Riyadh',phone:'Contact details pending',services:'Primary care · Health checks',lat:24.7241,lng:46.6813,demo:true}
];
const defaultMembers = [
  {name:'Demo Member A',id:'HH-DEMO-2026',nationalId:'0000000000',phone:'',email:'',issueDate:'2026-01-01',status:'active',expiry:'2026-12-30',cardIssued:false},
  {name:'Demo Member B',id:'HH-DEMO-2025',nationalId:'0000000000',phone:'',email:'',issueDate:'2025-11-15',status:'active',expiry:'2026-11-15',cardIssued:false},
  {name:'Demo Member C',id:'HH-DEMO-2024',nationalId:'0000000000',phone:'',email:'',issueDate:'2024-06-01',status:'inactive',expiry:'2025-06-01',cardIssued:false}
];
let providers = loadDemoData('haniHealthDemoProviders',defaultProviders);
let demoMembers = loadDemoData('haniHealthDemoMembers',defaultMembers);
let nextProviderId = Math.max(0,...providers.map(p=>Number(p.id)||0))+1;
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
function t(key){return (translations[currentLanguage] && translations[currentLanguage][key]) || translations.en[key] || key;}
function applyLanguage(lang){
  currentLanguage = translations[lang] ? lang : 'en';
  const rtl = currentLanguage === 'ar' || currentLanguage === 'ur';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.body.dir = rtl ? 'rtl' : 'ltr';
  $('#languageSelect').value = currentLanguage;
  $$('[data-i18n]').forEach(el => { const key=el.dataset.i18n; if(t(key)!==key) el.innerHTML=t(key); });
  $$('[data-i18n-placeholder]').forEach(el => { const key=el.dataset.i18nPlaceholder; if(t(key)!==key) el.placeholder=t(key); });
  document.title = currentLanguage === 'en' ? 'Hani Health Discount Card | Affordable, Inclusive Healthcare' : `Hani Health Discount Card | ${t('brandTagline')}`;
  renderProviders();
}
function typeLabel(type){return t(type==='hospital'?'typeHospitalSingular':type==='clinic'?'typeClinicSingular':type==='health-center'?'typeHealthCenterSingular':'typePharmacySingular');}
function typeIcon(type){
  if(type==='hospital') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5h16v16M2 21h20M9 9h6M12 6v6M8 15h2M14 15h2"></path></svg>';
  if(type==='clinic') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 12h6M12 9v6M9 17h2M14 17h2"></path></svg>';
  if(type==='health-center') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21h16M6 21V5h12v16M9 9h6M12 6v6M9 16h2M14 16h2"></path></svg>';
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21h16M6 21V5h12v16M9 8h6M12 5v6M9 15h6"></path></svg>';
}
function locationIcon(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-13A7 7 0 0 0 5 9c0 6.8 7 13 7 13Z"></path><circle cx="12" cy="9" r="2.4"></circle></svg>';}
function phoneIcon(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5c0 8.8 7.2 16 16 16a1.5 1.5 0 0 0 1.5-1.5v-2l-4-2-2 2a14 14 0 0 1-6-6l2-2z"></path></svg>';}
function distanceKm(a,b,c,d){const rad=x=>x*Math.PI/180;const R=6371;const dLat=rad(c-a),dLon=rad(d-b);const x=Math.sin(dLat/2)**2+Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(x));}
function providerDistance(provider){return userCoordinates ? distanceKm(userCoordinates.lat,userCoordinates.lng,provider.lat,provider.lng) : null;}
function providerCard(provider){
  const dist=providerDistance(provider);
  const distanceText=dist!==null ? `<span class="distance-badge">${dist<1?(dist*1000).toFixed(0)+' m':dist.toFixed(1)+' km'} ${t('distanceAway')}</span>` : '';
  const mapQuery=encodeURIComponent(`${provider.name}, ${provider.address}`);
  const directionsUrl=`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
  return `<article class="provider-card" data-type="${provider.type}">
    <div class="provider-card-top"><div class="provider-icon">${typeIcon(provider.type)}</div><div class="provider-heading"><h3>${escapeHtml(provider.name)}</h3><span class="provider-type-label">${escapeHtml(typeLabel(provider.type))}</span><span class="provider-demo">${t('providerDemoBadge')}</span></div></div>
    <div class="provider-info"><p>${locationIcon()}<span>${escapeHtml(provider.address)}${distanceText?' · '+distanceText:''}</span></p><p>${phoneIcon()}<span>${escapeHtml(provider.phone || t('providerPhonePending'))}</span></p></div>
    <div class="provider-services">${escapeHtml(provider.services || t('providerServicesPending'))}</div>
    <div class="provider-actions"><a href="${directionsUrl}" target="_blank" rel="noopener noreferrer">${t('directions')} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></a><button type="button" class="provider-details" data-provider-id="${provider.id}">${t('details')}</button></div>
  </article>`;
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function renderProviders(){
  const query=($('#providerSearch').value || '').trim().toLowerCase();
  const type=$('#providerType').value;
  const matched=providers.filter(p=> (type==='all'||p.type===type) && `${p.name} ${p.area} ${p.address} ${p.services} ${p.type}`.toLowerCase().includes(query));
  if(userCoordinates) matched.sort((a,b)=>providerDistance(a)-providerDistance(b));
  $('#providerGrid').innerHTML=matched.map(providerCard).join('');
  $('#providerGrid').hidden=matched.length===0;
  $('#emptyState').hidden=matched.length!==0;
  const countKey=matched.length===1?'resultSingular':'resultPlural';
  $('#resultsCount').textContent=`${matched.length} ${t(countKey)}`;
  $('#adminProviderCount').textContent=providers.length;
  if(typeof renderAdminDashboard==='function') renderAdminDashboard();
}
function showToast(message){
  const toast=$('#toast');toast.textContent=message;toast.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4200);
}
function setMessage(el,message,isError=false){el.textContent=message;el.hidden=false;el.classList.toggle('error',isError);}
function updateVerificationResult(active){
  const el=$('#verificationResult');
  el.hidden=false;el.classList.toggle('invalid',!active);
  el.innerHTML=`<span class="result-check">${active?'✓':'!'}</span><div><strong>${active?t('verificationActive'):t('verificationInvalid')}</strong><p>${active?t('verificationActiveText'):t('verificationInvalidText')}</p></div>`;
}
function buildCsv(){
  const rows=[['Member','Membership ID','National ID / Passport','Phone','Email','Issue date','Status','Expiry','Card issued'],...demoMembers.map(m=>[m.name,m.id,m.nationalId||'',m.phone||'',m.email||'',m.issueDate||'',m.status,m.expiry,m.cardIssued?'Yes':'No'])];
  return rows.map(row=>row.map(cell=>'"'+String(cell??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
}

$('#languageSelect').addEventListener('change',e=>applyLanguage(e.target.value));
$('#providerSearch').addEventListener('input',renderProviders);
$('#providerType').addEventListener('change',renderProviders);
$('#providerGrid').addEventListener('click',e=>{
  const btn=e.target.closest('.provider-details');if(!btn)return;
  const p=providers.find(item=>item.id===Number(btn.dataset.providerId));if(!p)return;
  showToast(`${p.name} · ${p.address} · ${t('mapDirectionNote')}`);
});
$('#useLocation').addEventListener('click',()=>{
  if(!navigator.geolocation){showToast(t('locationDenied'));return;}
  $('#useLocation').disabled=true;
  navigator.geolocation.getCurrentPosition(pos=>{
    userCoordinates={lat:pos.coords.latitude,lng:pos.coords.longitude};
    $('#useLocation').disabled=false;renderProviders();showToast(t('locationSorting'));
  },()=>{ $('#useLocation').disabled=false;showToast(t('locationDenied')); },{enableHighAccuracy:false,timeout:8000,maximumAge:300000});
});
$('#registrationForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.currentTarget;
  if(!form.checkValidity()){form.reportValidity();return;}
  const name=$('#fullName').value.trim();
  if(!name){$('#fullName').focus();return;}
  $('#generatedName').textContent=name;
  $('#generatedNumber').textContent='HH-DEMO-2026';
  $('#generatedCardWrap').hidden=false;
  setMessage($('#registrationMessage'),t('registrationSuccess'));
  $('#generatedCardWrap').scrollIntoView({behavior:'smooth',block:'nearest'});
});
$('#paymentDemo').addEventListener('click',()=>showToast(t('paymentPending')));
$('#verificationForm').addEventListener('submit',e=>{
  e.preventDefault();
  const id=$('#membershipId').value.trim().toUpperCase();
  if(!id){$('#membershipId').focus();return;}
  const found=demoMembers.find(member=>String(member.id).toUpperCase()===id);
  updateVerificationResult(Boolean(found && found.status==='active' && (!found.expiry || found.expiry>=new Date().toISOString().slice(0,10))));
});
$('#fillDemoId').addEventListener('click',()=>{ $('#membershipId').value='HH-DEMO-2026'; $('#membershipId').focus(); });
const adminPanel=$('#adminPanel');
const adminAuth=$('#adminAuth');
const adminDashboard=$('#adminDashboard');
const ADMIN_DEMO_PASSWORD='HaniAdmin@2026';
let adminAuthenticated=false;
let editingMemberId=null;
let editingProviderId=null;
function readAdminSession(){try{return sessionStorage.getItem('haniHealthDemoAdmin')==='1';}catch(error){return false;}}
function writeAdminSession(isAuthenticated){try{if(isAuthenticated)sessionStorage.setItem('haniHealthDemoAdmin','1');else sessionStorage.removeItem('haniHealthDemoAdmin');}catch(error){/* Session state remains in memory. */}}
adminAuthenticated=readAdminSession();
function syncAdminAccess(){
  adminAuth.hidden=adminAuthenticated;
  adminDashboard.hidden=!adminAuthenticated;
  if(adminAuthenticated)renderAdminDashboard();
}
function openAdmin(){
  adminPanel.hidden=false;
  $('#menuToggle').classList.remove('active');$('#mainNav').classList.remove('open');
  $('#adminToggle').setAttribute('aria-expanded','true');
  syncAdminAccess();
  adminPanel.scrollIntoView({behavior:'smooth',block:'start'});
  if(!adminAuthenticated) setTimeout(()=>$('#adminPassword').focus(),150);
}
function closeAdmin(){adminPanel.hidden=true;$('#adminToggle').setAttribute('aria-expanded','false');$('#contact').scrollIntoView({behavior:'smooth',block:'start'});}
$('#adminToggle').addEventListener('click',openAdmin);
$('#adminClose').addEventListener('click',closeAdmin);
$('#adminLoginForm').addEventListener('submit',e=>{
  e.preventDefault();
  const password=$('#adminPassword').value;
  if(password===ADMIN_DEMO_PASSWORD){
    adminAuthenticated=true;writeAdminSession(true);$('#adminPassword').value='';
    $('#adminLoginMessage').hidden=true;syncAdminAccess();showToast('Admin dashboard unlocked for this browser session.');
  } else {
    setMessage($('#adminLoginMessage'),'Incorrect password. Please try again.',true);
    $('#adminPassword').select();
  }
});
$('#adminLogout').addEventListener('click',()=>{
  adminAuthenticated=false;writeAdminSession(false);$('#adminPassword').value='';
  adminIssuedMemberId=null;$('#adminIssuedCardWrap').hidden=true;syncAdminAccess();
  showToast('You have been logged out of the admin demo.');
});

function localIsoDate(date=new Date()){
  const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function datePlusDays(days){const d=new Date();d.setDate(d.getDate()+days);return localIsoDate(d);}
function formatDate(value){
  if(!value)return '—';
  const parsed=new Date(`${value}T12:00:00`);
  if(Number.isNaN(parsed.getTime()))return String(value);
  return new Intl.DateTimeFormat(currentLanguage,{day:'2-digit',month:'short',year:'numeric'}).format(parsed);
}
function statusText(status){return status==='active'?'Active':status==='suspended'?'Suspended':'Inactive';}
function statusClass(status){return status==='active'?'status-active':status==='suspended'?'status-expiring':'status-inactive';}
function expiringMembersCount(){
  const today=new Date(`${localIsoDate()}T00:00:00`);const limit=new Date(today);limit.setDate(limit.getDate()+60);
  return demoMembers.filter(m=>m.status==='active'&&m.expiry&&new Date(`${m.expiry}T00:00:00`)>=today&&new Date(`${m.expiry}T00:00:00`)<=limit).length;
}
function renderAdminDashboard(){
  const memberCount=$('#adminMemberCount'),providerCount=$('#adminProviderCount');
  if(memberCount)memberCount.textContent=demoMembers.length;
  if(providerCount)providerCount.textContent=providers.length;
  const expiring=$('#adminExpiringCount');if(expiring)expiring.textContent=expiringMembersCount();
  const memberRows=$('#adminMemberRows');
  if(memberRows){
    memberRows.innerHTML=demoMembers.map(m=>`<tr>
      <td><strong>${escapeHtml(m.name)}</strong><small class="admin-table-subtext">${escapeHtml(m.phone||m.email||'Contact not provided')}</small></td>
      <td>${escapeHtml(m.id)}</td>
      <td><span class="status-pill ${statusClass(m.status)}">${statusText(m.status)}</span><small class="admin-table-subtext">${m.cardIssued?'Card issued':'No card issued'}</small></td>
      <td>${escapeHtml(formatDate(m.expiry))}</td>
      <td><div class="admin-row-actions"><button type="button" class="table-action" data-member-action="edit" data-member-id="${escapeHtml(m.id)}">Edit</button><button type="button" class="table-action table-action-primary" data-member-action="issue" data-member-id="${escapeHtml(m.id)}">${m.cardIssued?'View card':'Issue card'}</button><button type="button" class="table-action table-action-danger" data-member-action="delete" data-member-id="${escapeHtml(m.id)}">Remove</button></div></td>
    </tr>`).join('');
    $('#adminMemberEmpty').hidden=demoMembers.length>0;
  }
  const providerRows=$('#adminProviderRows');
  if(providerRows){
    providerRows.innerHTML=providers.map(p=>`<tr>
      <td><strong>${escapeHtml(p.name)}</strong><small class="admin-table-subtext">${escapeHtml(p.address||'Address not provided')}</small></td>
      <td>${escapeHtml(typeLabel(p.type))}</td><td>${escapeHtml(p.area||'—')}</td><td>${escapeHtml(p.phone||'—')}</td>
      <td><div class="admin-row-actions"><button type="button" class="table-action" data-provider-action="edit" data-provider-id="${Number(p.id)}">Edit</button><button type="button" class="table-action table-action-danger" data-provider-action="delete" data-provider-id="${Number(p.id)}">Remove</button></div></td>
    </tr>`).join('');
    $('#adminProviderEmpty').hidden=providers.length>0;
  }
}
function resetMemberForm(){
  editingMemberId=null;$('#memberForm').reset();$('#memberOriginalId').value='';
  $('#memberFormTitle').textContent='Add member';$('#saveMemberButton').textContent='Save member';
  $('#memberIssueDateInput').value=localIsoDate();$('#memberExpiryDateInput').value=datePlusDays(365);
  $('#memberIdInput').value=`HH-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
  $('#memberFormMessage').hidden=true;
}
function openMemberForm(member=null){
  resetMemberForm();
  if(member){
    editingMemberId=member.id;$('#memberOriginalId').value=member.id;
    $('#memberNameInput').value=member.name||'';$('#memberIdInput').value=member.id||'';
    $('#memberNationalIdInput').value=member.nationalId||'';$('#memberPhoneInput').value=member.phone||'';$('#memberEmailInput').value=member.email||'';
    $('#memberIssueDateInput').value=member.issueDate||localIsoDate();$('#memberExpiryDateInput').value=member.expiry||datePlusDays(365);
    $('#memberStatusInput').value=member.status||'active';$('#memberFormTitle').textContent='Edit member';$('#saveMemberButton').textContent='Save changes';
  }
  $('#memberFormPanel').hidden=false;$('#memberFormPanel').scrollIntoView({behavior:'smooth',block:'nearest'});$('#memberNameInput').focus();
}
function closeMemberForm(){ $('#memberFormPanel').hidden=true;resetMemberForm(); }
$('#addMemberToggle').addEventListener('click',()=>openMemberForm());
$('#cancelMemberForm').addEventListener('click',closeMemberForm);
$('#cancelMemberForm2').addEventListener('click',closeMemberForm);
$('#memberForm').addEventListener('submit',e=>{
  e.preventDefault();
  const originalId=$('#memberOriginalId').value;
  const newId=$('#memberIdInput').value.trim().toUpperCase();
  const duplicate=demoMembers.some(m=>m.id.toUpperCase()===newId&&m.id!==originalId);
  if(duplicate){setMessage($('#memberFormMessage'),'That membership ID already exists. Choose a unique ID.',true);return;}
  const old=originalId?demoMembers.find(m=>m.id===originalId):null;
  const member={name:$('#memberNameInput').value.trim(),id:newId,nationalId:$('#memberNationalIdInput').value.trim(),phone:$('#memberPhoneInput').value.trim(),email:$('#memberEmailInput').value.trim(),issueDate:$('#memberIssueDateInput').value,expiry:$('#memberExpiryDateInput').value,status:$('#memberStatusInput').value,cardIssued:old?Boolean(old.cardIssued):false};
  if(originalId){const index=demoMembers.findIndex(m=>m.id===originalId);if(index<0)return;demoMembers[index]=member;}
  else demoMembers.push(member);
  saveDemoData();renderAdminDashboard();closeMemberForm();showToast(originalId?'Member record updated.':'Member added to the demo records.');
});
$('#adminMemberRows').addEventListener('click',e=>{
  const button=e.target.closest('[data-member-action]');if(!button)return;
  const id=button.dataset.memberId;const member=demoMembers.find(m=>m.id===id);if(!member)return;
  if(button.dataset.memberAction==='edit'){openMemberForm(member);return;}
  if(button.dataset.memberAction==='issue'){issueMembershipCard(id);return;}
  if(button.dataset.memberAction==='delete'){
    if(!confirm(`Remove demo member “${member.name}” (${member.id})?`))return;
    demoMembers=demoMembers.filter(m=>m.id!==id);saveDemoData();
    if(adminIssuedMemberId===id){adminIssuedMemberId=null;$('#adminIssuedCardWrap').hidden=true;}
    renderAdminDashboard();showToast('Member removed from the browser demo records.');
  }
});
let adminIssuedMemberId=null;
function issueMembershipCard(id){
  const member=demoMembers.find(m=>m.id===id);if(!member)return;
  if(member.status!=='active'){showToast('Only active members can be issued a card. Update the member status first.');return;}
  member.cardIssued=true;member.cardIssuedAt=localIsoDate();saveDemoData();renderAdminDashboard();
  adminIssuedMemberId=id;
  $('#adminIssuedName').textContent=member.name;
  $('#adminIssuedNumber').textContent=member.id;
  $('#adminIssuedNationalId').textContent=member.nationalId||'0000000000';
  $('#adminIssuedIssue').textContent=formatDate(member.issueDate);
  $('#adminIssuedExpiry').textContent=formatDate(member.expiry);
  $('#adminIssuedCardWrap').hidden=false;
  $('#adminIssuedCardWrap').scrollIntoView({behavior:'smooth',block:'center'});
  showToast(`Membership card preview issued for ${member.name}.`);
}
$('#closeIssuedCard').addEventListener('click',()=>{$('#adminIssuedCardWrap').hidden=true;adminIssuedMemberId=null;});
$('#printIssuedCard').addEventListener('click',()=>{
  if(!adminIssuedMemberId)return;
  document.body.classList.add('print-admin-card');
  const cleanup=()=>document.body.classList.remove('print-admin-card');
  window.addEventListener('afterprint',cleanup,{once:true});window.print();setTimeout(cleanup,1200);
});

function resetProviderForm(){
  editingProviderId=null;$('#addProviderForm').reset();$('#providerEditId').value='';
  $('#providerFormTitle').textContent='Add contracted healthcare provider';$('#saveProviderButton').textContent='Add provider';
  $('#cancelProviderEdit').hidden=true;$('#adminAddMessage').hidden=true;
}
function openProviderForm(provider=null){
  resetProviderForm();
  if(provider){
    editingProviderId=provider.id;$('#providerEditId').value=provider.id;
    $('#newProviderName').value=provider.name||'';$('#newProviderType').value=provider.type||'clinic';
    $('#newProviderArea').value=provider.area||'';$('#newProviderAddress').value=provider.address||'';
    $('#newProviderPhone').value=provider.phone||'';$('#newProviderServices').value=provider.services||'';
    $('#providerFormTitle').textContent='Edit contracted healthcare provider';$('#saveProviderButton').textContent='Save changes';$('#cancelProviderEdit').hidden=false;
  }
  $('#providerFormPanel').scrollIntoView({behavior:'smooth',block:'nearest'});$('#newProviderName').focus();
}
$('#cancelProviderEdit').addEventListener('click',resetProviderForm);
$('#resetProviderForm').addEventListener('click',()=>setTimeout(resetProviderForm,0));
$('#addProviderForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=$('#newProviderName').value.trim(),area=$('#newProviderArea').value.trim(),address=$('#newProviderAddress').value.trim();
  const type=$('#newProviderType').value,phone=$('#newProviderPhone').value.trim(),services=$('#newProviderServices').value.trim();
  if(!name||!area||!address){setMessage($('#adminAddMessage'),'Enter the provider name, area and full address.',true);return;}
  const selectedId=$('#providerEditId').value;
  if(selectedId){
    const index=providers.findIndex(p=>p.id===Number(selectedId));if(index<0)return;
    providers[index]={...providers[index],name,type,area,address,phone:phone||'Contact details pending',services:services||'Services to be confirmed'};
    saveDemoData();renderProviders();renderAdminDashboard();resetProviderForm();showToast('Provider details updated in this browser.');
  } else {
    const base=providers[0]||{lat:24.7136,lng:46.6753};
    providers.push({id:nextProviderId++,name,type,area,address,phone:phone||'Contact details pending',services:services||'Services to be confirmed',lat:(base.lat||24.7136)+(Math.random()-.5)*.04,lng:(base.lng||46.6753)+(Math.random()-.5)*.04,demo:true});
    saveDemoData();renderProviders();renderAdminDashboard();resetProviderForm();showToast('Provider added to the browser demo directory.');
  }
});
$('#adminProviderRows').addEventListener('click',e=>{
  const button=e.target.closest('[data-provider-action]');if(!button)return;
  const id=Number(button.dataset.providerId),provider=providers.find(p=>Number(p.id)===id);if(!provider)return;
  if(button.dataset.providerAction==='edit'){openProviderForm(provider);return;}
  if(button.dataset.providerAction==='delete'){
    if(!confirm(`Remove “${provider.name}” from the demo provider directory?`))return;
    providers=providers.filter(p=>Number(p.id)!==id);saveDemoData();renderProviders();renderAdminDashboard();
    if(Number(editingProviderId)===id)resetProviderForm();showToast('Provider removed from the browser demo directory.');
  }
});
$('#exportMembers').addEventListener('click',()=>{
  const blob=new Blob(['\ufeff',buildCsv()],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='hani-health-demo-members.csv';document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url);
});
$('#menuToggle').addEventListener('click',()=>{
  const isOpen=$('#mainNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(isOpen));
});
$$('#mainNav a').forEach(a=>a.addEventListener('click',()=>{$('#mainNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));
$('#yearNow').textContent=new Date().getFullYear();
renderProviders();
renderAdminDashboard();
applyLanguage('en');
