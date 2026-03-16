/* ============================================================
   KarsaLabs IT Solutions — main.js
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   EMAIL JS CONFIG
   ─────────────────────────────────────────────────────────
   Langkah setup:
   1. Daftar gratis di https://www.emailjs.com
   2. Add Email Service → pilih Gmail → connect infomaskoding@gmail.com
   3. Create Email Template dengan variabel:
      {{from_name}}, {{from_email}}, {{company}}, {{whatsapp}},
      {{service}}, {{message}}, {{reply_to}}
   4. Isi PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID di bawah ini
   ══════════════════════════════════════════════════════════ */
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← ganti
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← ganti
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← ganti

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════════════════════════ */
const translations = {
  id: {
    'nav.services': 'Layanan', 'nav.process': 'Proses', 'nav.tech': 'Teknologi',
    'nav.portfolio': 'Portfolio', 'nav.testimonials': 'Testimoni', 'nav.cta': 'Konsultasi Gratis',

    'hero.badge': 'IT Solution Terpercaya', 'hero.title': 'Transformasi Digital',
    'hero.titleAccent': 'Bisnis Anda',
    'hero.desc': 'Kami membangun aplikasi web & mobile berkualitas tinggi, serta menyediakan konsultasi IT strategis untuk mendorong pertumbuhan bisnis Anda ke level berikutnya.',
    'hero.btnServices': 'Lihat Layanan', 'hero.btnPortfolio': 'Lihat Portfolio',
    'hero.card.activeProject': 'Proyek Aktif', 'hero.card.progress': '78% selesai',
    'hero.card.happyClients': 'Klien Puas', 'hero.card.successProjects': 'Proyek berhasil',

    'stats.clients': 'Klien Puas', 'stats.projects': 'Proyek Selesai',
    'stats.years': 'Tahun Pengalaman', 'stats.satisfaction': 'Kepuasan Klien',

    'services.tag': 'Layanan Kami', 'services.title': 'Solusi Digital Lengkap',
    'services.subtitle': 'Dari pengembangan aplikasi hingga konsultasi strategis, kami siap menjadi mitra teknologi andalan Anda.',
    'services.learnMore': 'Pelajari Lebih Lanjut',
    'services.web.desc':    'Kami membangun aplikasi web modern yang responsif, cepat, dan skalabel menggunakan teknologi terkini.',
    'services.web.f1': 'Landing Page & Company Profile', 'services.web.f2': 'E-commerce & Marketplace',
    'services.web.f3': 'SaaS & Web Application',         'services.web.f4': 'API Development & Integration',
    'services.mobile.desc': 'Kami membuat aplikasi mobile iOS dan Android yang intuitif dan berperforma tinggi.',
    'services.mobile.f1': 'Native iOS & Android App',     'services.mobile.f2': 'Cross-platform (React Native / Flutter)',
    'services.mobile.f3': 'UI/UX Design & Prototyping',   'services.mobile.f4': 'App Store & Play Store Publishing',
    'services.consult.desc': 'Tim konsultan berpengalaman kami membantu merancang strategi teknologi yang tepat.',
    'services.consult.f1': 'IT Strategy & Roadmap',       'services.consult.f2': 'Digital Transformation',
    'services.consult.f3': 'System Architecture Design',  'services.consult.f4': 'Security Audit & Compliance',

    'how.tag': 'Proses Kerja', 'how.title': 'Bagaimana Kami Bekerja?',
    'how.subtitle': 'Proses transparan dan terstruktur untuk memastikan proyek Anda selesai tepat waktu.',
    'how.s1.label': 'Tahap Pertama',  'how.s1.title': 'Konsultasi & Discovery',
    'how.s1.desc':  'Kami mendengar kebutuhan bisnis Anda secara mendalam dan mengidentifikasi solusi terbaik.',
    'how.s2.label': 'Tahap Kedua',    'how.s2.title': 'Perencanaan & Desain',
    'how.s2.desc':  'Tim kami merancang arsitektur sistem dan prototype UI/UX yang detail.',
    'how.s3.label': 'Tahap Ketiga',   'how.s3.title': 'Pengembangan Agile',
    'how.s3.desc':  'Pengembangan iteratif dengan sprint dua mingguan, update progres transparan.',
    'how.s4.label': 'Tahap Keempat',  'how.s4.title': 'Testing & QA',
    'how.s4.desc':  'Setiap fitur diuji menyeluruh — fungsional, performa, dan keamanan.',
    'how.s5.label': 'Tahap Kelima',   'how.s5.title': 'Deploy & Launch',
    'how.s5.desc':  'Produk diluncurkan dengan zero-downtime deployment dan monitoring real-time.',
    'how.s6.label': 'Tahap Keenam',   'how.s6.title': 'Maintenance & Support',
    'how.s6.desc':  'Dukungan purna jual 24/7 untuk memastikan aplikasi selalu berjalan optimal.',

    'tech.tag': 'Teknologi', 'tech.title': 'Tech Stack Modern',
    'tech.subtitle': 'Kami menggunakan teknologi terdepan yang terbukti menghadirkan solusi berkualitas enterprise.',
    'tech.tab.frontend': 'Frontend', 'tech.tab.backend': 'Backend',
    'tech.tab.mobile': 'Mobile',     'tech.tab.cloud': 'Cloud & DevOps',

    'portfolio.tag': 'Portfolio', 'portfolio.title': 'Karya Terbaik Kami',
    'portfolio.subtitle': 'Setiap proyek adalah bukti komitmen kami terhadap kualitas dan inovasi.',
    'portfolio.filter.all': 'Semua', 'portfolio.filter.web': 'Web', 'portfolio.filter.mobile': 'Mobile',
    'portfolio.p1.desc': 'Platform marketplace multi-vendor dengan pembayaran terintegrasi, real-time chat, dan analytics.',
    'portfolio.p1.users': '👥 50K+ pengguna',
    'portfolio.p2.desc': 'Aplikasi mobile telemedicine untuk konsultasi dokter online dan manajemen rekam medis.',
    'portfolio.p3.desc': 'Platform analitik keuangan real-time dengan visualisasi data interaktif.',
    'portfolio.p3.clients': '🏢 30+ perusahaan',
    'portfolio.p4.desc': 'Aplikasi belajar online dengan fitur kelas live, kuis interaktif, sertifikasi, dan progress tracking lengkap.',
    'portfolio.p4.users': '👥 100K+ pengguna',
    'portfolio.p5.desc': 'Platform pemesanan hotel dan villa dengan sistem rekomendasi AI, ulasan pengguna, dan integrasi payment gateway.',
    'portfolio.p5.bookings': '📅 20K+ booking/bulan',
    'portfolio.p6.desc': 'Aplikasi dompet digital dengan fitur transfer, split bill, investasi reksa dana, dan laporan keuangan personal otomatis.',
    'portfolio.p6.users': '💳 80K+ pengguna',

    'testi.tag': 'Testimoni', 'testi.title': 'Apa Kata Klien Kami',
    'testi.subtitle': 'Kepercayaan klien adalah aset terbesar kami.',
    'testi.t1.quote': '"KarsaLabs mengubah cara kami berbisnis sepenuhnya. Aplikasi yang mereka bangun sangat responsif dan melampaui ekspektasi kami. Tim mereka profesional dan selalu siap membantu."',
    'testi.t1.role': 'CEO, TokoBesarku',
    'testi.t2.quote': '"Konsultasi IT dari KarsaLabs memberikan kami roadmap yang sangat jelas. Dalam 6 bulan, efisiensi operasional kami meningkat 40%. Sangat direkomendasikan!"',
    'testi.t2.role': 'CTO, HealthFirst ID',
    'testi.t3.quote': '"Mobile app yang dibuat KarsaLabs sudah didownload lebih dari 100K kali dalam 3 bulan pertama. Kualitasnya setara aplikasi internasional."',
    'testi.t3.role': 'Founder, EduGrow',

    'contact.tag': 'Hubungi Kami',
    'contact.heading': 'Siap Memulai Proyek', 'contact.headingAccent': 'Impian Anda?',
    'contact.subtitle': 'Konsultasikan kebutuhan teknologi Anda bersama kami secara gratis. Tim ahli kami siap memberikan solusi terbaik.',
    'contact.info.addressLabel': 'Alamat', 'contact.info.phoneLabel': 'Telepon',
    'contact.form.nameLabel': 'Nama', 'contact.form.companyLabel': 'Perusahaan',
    'contact.form.serviceLabel': 'Layanan yang Dibutuhkan',
    'contact.form.serviceDefault': 'Pilih layanan...',
    'contact.form.serviceOther': 'Lainnya',
    'contact.form.messageLabel': 'Pesan',
    'contact.form.name': 'Nama Anda', 'contact.form.company': 'Perusahaan',
    'contact.form.email': 'Email Anda', 'contact.form.whatsapp': 'Nomor WhatsApp',
    'contact.form.message': 'Ceritakan kebutuhan Anda...',
    'contact.form.submit': 'Kirim & Mulai Konsultasi',
    'contact.form.successMsg': 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.',
    'contact.form.errorMsg': 'Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.',
    'contact.form.errName': 'Nama wajib diisi.',
    'contact.form.errEmail': 'Email tidak valid.',
    'contact.form.errMessage': 'Pesan wajib diisi.',

    'footer.desc': 'Mitra teknologi terpercaya untuk transformasi digital bisnis Anda.',
    'footer.col.services': 'Layanan', 'footer.consulting': 'IT Consulting', 'footer.cloud': 'Cloud Services',
    'footer.col.company': 'Perusahaan', 'footer.about': 'Tentang Kami', 'footer.team': 'Tim Kami', 'footer.career': 'Karir',
    'footer.col.contact': 'Kontak',
    'footer.copy': '© 2025 KarsaLabs IT Solutions. All rights reserved.',
    'footer.made': 'Dibuat dengan penuh semangat di Indonesia',
  },

  en: {
    'nav.services': 'Services', 'nav.process': 'Process', 'nav.tech': 'Technology',
    'nav.portfolio': 'Portfolio', 'nav.testimonials': 'Testimonials', 'nav.cta': 'Free Consultation',

    'hero.badge': 'Trusted IT Solution', 'hero.title': 'Digital Transformation for',
    'hero.titleAccent': 'Your Business',
    'hero.desc': 'We build high-quality web & mobile applications and provide strategic IT consulting to accelerate your business growth to the next level.',
    'hero.btnServices': 'Our Services', 'hero.btnPortfolio': 'View Portfolio',
    'hero.card.activeProject': 'Active Project', 'hero.card.progress': '78% complete',
    'hero.card.happyClients': 'Happy Clients', 'hero.card.successProjects': 'Successful projects',

    'stats.clients': 'Happy Clients', 'stats.projects': 'Projects Done',
    'stats.years': 'Years Experience', 'stats.satisfaction': 'Client Satisfaction',

    'services.tag': 'Our Services', 'services.title': 'Complete Digital Solutions',
    'services.subtitle': 'From application development to strategic consulting, we are your trusted technology partner.',
    'services.learnMore': 'Learn More',
    'services.web.desc':    'We build modern, responsive, fast, and scalable web applications using cutting-edge technology.',
    'services.web.f1': 'Landing Page & Company Profile', 'services.web.f2': 'E-commerce & Marketplace',
    'services.web.f3': 'SaaS & Web Application',         'services.web.f4': 'API Development & Integration',
    'services.mobile.desc': 'We create intuitive, high-performance iOS and Android apps with outstanding UX.',
    'services.mobile.f1': 'Native iOS & Android App',     'services.mobile.f2': 'Cross-platform (React Native / Flutter)',
    'services.mobile.f3': 'UI/UX Design & Prototyping',   'services.mobile.f4': 'App Store & Play Store Publishing',
    'services.consult.desc': 'Our experienced consultants help you design the right technology strategy efficiently.',
    'services.consult.f1': 'IT Strategy & Roadmap',       'services.consult.f2': 'Digital Transformation',
    'services.consult.f3': 'System Architecture Design',  'services.consult.f4': 'Security Audit & Compliance',

    'how.tag': 'Our Process', 'how.title': 'How Do We Work?',
    'how.subtitle': 'A transparent and structured process to deliver your project on time and on target.',
    'how.s1.label': 'Step One',   'how.s1.title': 'Consultation & Discovery',
    'how.s1.desc':  'We listen deeply to your business needs and identify the best solution for your goals and budget.',
    'how.s2.label': 'Step Two',   'how.s2.title': 'Planning & Design',
    'how.s2.desc':  'We design system architecture and detailed UI/UX prototypes so all stakeholders share the same vision.',
    'how.s3.label': 'Step Three', 'how.s3.title': 'Agile Development',
    'how.s3.desc':  'Iterative development with two-week sprints, giving you transparent real-time progress updates.',
    'how.s4.label': 'Step Four',  'how.s4.title': 'Testing & QA',
    'how.s4.desc':  'Every feature is thoroughly tested — functional, performance, and security — before launch.',
    'how.s5.label': 'Step Five',  'how.s5.title': 'Deploy & Launch',
    'how.s5.desc':  'Released to production with zero-downtime deployment, real-time monitoring, and full documentation.',
    'how.s6.label': 'Step Six',   'how.s6.title': 'Maintenance & Support',
    'how.s6.desc':  '24/7 post-launch support to keep your application running optimally and securely.',

    'tech.tag': 'Technology', 'tech.title': 'Modern Tech Stack',
    'tech.subtitle': 'We use industry-leading technologies proven to deliver enterprise-grade solutions.',
    'tech.tab.frontend': 'Frontend', 'tech.tab.backend': 'Backend',
    'tech.tab.mobile': 'Mobile',     'tech.tab.cloud': 'Cloud & DevOps',

    'portfolio.tag': 'Portfolio', 'portfolio.title': 'Our Best Work',
    'portfolio.subtitle': 'Every project proves our commitment to quality and uncompromising innovation.',
    'portfolio.filter.all': 'All', 'portfolio.filter.web': 'Web', 'portfolio.filter.mobile': 'Mobile',
    'portfolio.p1.desc': 'Multi-vendor marketplace with integrated payments, real-time chat, and analytics dashboard.',
    'portfolio.p1.users': '👥 50K+ users',
    'portfolio.p2.desc': 'Telemedicine mobile app for online doctor consultations and medical record management.',
    'portfolio.p3.desc': 'Real-time financial analytics platform with interactive visualizations and automated reports.',
    'portfolio.p3.clients': '🏢 30+ companies',
    'portfolio.p4.desc': 'Online learning app with live classes, interactive quizzes, certifications, and full progress tracking.',
    'portfolio.p4.users': '👥 100K+ users',
    'portfolio.p5.desc': 'Hotel and villa booking platform with AI recommendations, user reviews, and payment gateway integration.',
    'portfolio.p5.bookings': '📅 20K+ bookings/month',
    'portfolio.p6.desc': 'Digital wallet app with transfer, split bill, mutual fund investing, and automated personal finance reports.',
    'portfolio.p6.users': '💳 80K+ users',

    'testi.tag': 'Testimonials', 'testi.title': 'What Our Clients Say',
    'testi.subtitle': 'Client trust is our greatest asset. Hear their success stories with KarsaLabs.',
    'testi.t1.quote': '"KarsaLabs completely transformed the way we do business. The app they built is highly responsive and exceeded all our expectations. Their team is professional and always ready to help."',
    'testi.t1.role': 'CEO, TokoBesarku',
    'testi.t2.quote': '"KarsaLabs\'s IT consulting gave us a crystal-clear roadmap. Within 6 months, our operational efficiency improved by 40%. Highly recommended!"',
    'testi.t2.role': 'CTO, HealthFirst ID',
    'testi.t3.quote': '"The mobile app KarsaLabs built reached 100K downloads in just 3 months. The quality truly matches international standards."',
    'testi.t3.role': 'Founder, EduGrow',

    'contact.tag': 'Contact Us',
    'contact.heading': 'Ready to Start Your Project', 'contact.headingAccent': 'Dream Project?',
    'contact.subtitle': 'Consult your technology needs with us for free. Our expert team is ready to deliver the best solution.',
    'contact.info.addressLabel': 'Address', 'contact.info.phoneLabel': 'Phone',
    'contact.form.nameLabel': 'Name', 'contact.form.companyLabel': 'Company',
    'contact.form.serviceLabel': 'Service Needed',
    'contact.form.serviceDefault': 'Select a service...',
    'contact.form.serviceOther': 'Other',
    'contact.form.messageLabel': 'Message',
    'contact.form.name': 'Your Name', 'contact.form.company': 'Company',
    'contact.form.email': 'Your Email', 'contact.form.whatsapp': 'WhatsApp Number',
    'contact.form.message': 'Tell us about your needs...',
    'contact.form.submit': 'Send & Start Consultation',
    'contact.form.successMsg': 'Message sent successfully! We will contact you shortly.',
    'contact.form.errorMsg': 'Failed to send message. Please try again or contact us directly.',
    'contact.form.errName': 'Name is required.',
    'contact.form.errEmail': 'Please enter a valid email.',
    'contact.form.errMessage': 'Message is required.',

    'footer.desc': 'Your trusted technology partner for digital transformation. Building tomorrow\'s solutions today.',
    'footer.col.services': 'Services', 'footer.consulting': 'IT Consulting', 'footer.cloud': 'Cloud Services',
    'footer.col.company': 'Company', 'footer.about': 'About Us', 'footer.team': 'Our Team', 'footer.career': 'Careers',
    'footer.col.contact': 'Contact',
    'footer.copy': '© 2025 KarsaLabs IT Solutions. All rights reserved.',
    'footer.made': 'Built with passion in Indonesia',
  }
};

/* ══════════════════════════════════════════════════════════
   LANGUAGE
   ══════════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('karsalabs-lang') || 'id';

function applyTranslations(lang) {
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n-placeholder')];
    if (v !== undefined) el.placeholder = v;
  });

  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem('karsalabs-lang', lang);

  /* desktop toggle */
  document.getElementById('langID').classList.toggle('active', lang === 'id');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');

  /* mobile toggle */
  const mID = document.getElementById('mobileLangID');
  const mEN = document.getElementById('mobileLangEN');
  if (mID) mID.classList.toggle('active', lang === 'id');
  if (mEN) mEN.classList.toggle('active', lang === 'en');
}

function toggleLang() {
  applyTranslations(currentLang === 'id' ? 'en' : 'id');
}

/* ══════════════════════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════════════════════ */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ══════════════════════════════════════════════════════════ */
function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function smoothScrollTo(targetY, duration = 860) {
  const startY = window.scrollY;
  const dist   = targetY - startY;
  let   t0     = null;
  function step(now) {
    if (!t0) t0 = now;
    const p = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, startY + dist * easeInOutQuart(p));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function goTo(id) {
  const el   = document.getElementById(id);
  const navH = document.getElementById('navbar').offsetHeight;
  smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - navH, 860);
}

/* ══════════════════════════════════════════════════════════
   PORTFOLIO FILTER
   ══════════════════════════════════════════════════════════ */
function filterPortfolio(btn, type) {
  /* update active filter button */
  document.querySelectorAll('.port-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  /* show/hide cards with animation */
  const cards = document.querySelectorAll('#portfolioGrid .port-card');
  cards.forEach(card => {
    const match = type === 'all' || card.dataset.type === type;
    if (match) {
      card.classList.remove('hidden');
      card.classList.remove('fade-in');
      /* trigger reflow so animation replays */
      void card.offsetWidth;
      card.classList.add('fade-in');
    } else {
      card.classList.add('hidden');
      card.classList.remove('fade-in');
    }
  });
}
/* ══════════════════════════════════════════════════════════
   TECH STACK
   ══════════════════════════════════════════════════════════ */
const techStack = [
  { e: '🐧', n: 'Ubuntu'       },
  { e: '🌐', n: 'Nginx'        },
  { e: '🐙', n: 'GitHub'       },
  { e: '☕', n: 'Java'         },
  { e: '🍃', n: 'Spring Boot'  },
  { e: '🌿', n: 'Thymeleaf'   },
  { e: '🤖', n: 'Kotlin'       },
  { e: '🐘', n: 'PHP'          },
  { e: '🐬', n: 'MySQL'        },
  { e: '🔒', n: 'SSL / TLS'    },
  { e: '💳', n: 'Google Pay'   },
  { e: '▶️', n: 'YouTube API'  },
  { e: '🗺️', n: 'Maps API'     },
  { e: '🔥', n: 'Firebase'     },
];

function renderTech() {
  const grid = document.getElementById('techGrid');
  if (!grid) return;
  grid.innerHTML = techStack.map(t =>
    `<div class="tech-item">
       <span class="tech-emoji">${t.e}</span>
       <div class="tech-name">${t.n}</div>
     </div>`
  ).join('');
}

/* ══════════════════════════════════════════════════════════
   NAV SCROLL SHADOW
   ══════════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 30
    ? '0 4px 32px rgba(163,177,198,0.55)'
    : '0 2px 24px rgba(163,177,198,0.35)';
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   CONTACT FORM — EmailJS
   ══════════════════════════════════════════════════════════ */
function validateForm() {
  const lang  = currentLang;
  const dict  = translations[lang];
  let   valid = true;

  const name    = document.getElementById('f-name');
  const email   = document.getElementById('f-email');
  const message = document.getElementById('f-message');

  /* reset errors */
  ['err-name','err-email','err-message'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
  [name, email, message].forEach(el => el.classList.remove('input-error'));

  if (!name.value.trim()) {
    document.getElementById('err-name').textContent = dict['contact.form.errName'];
    name.classList.add('input-error');
    valid = false;
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email.value.trim())) {
    document.getElementById('err-email').textContent = dict['contact.form.errEmail'];
    email.classList.add('input-error');
    valid = false;
  }
  if (!message.value.trim()) {
    document.getElementById('err-message').textContent = dict['contact.form.errMessage'];
    message.classList.add('input-error');
    valid = false;
  }
  return valid;
}

async function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) return;

  const btn       = document.getElementById('submitBtn');
  const label     = btn.querySelector('.btn-label');
  const spinner   = btn.querySelector('.btn-spinner');
  const successEl = document.getElementById('successMsg');
  const errorEl   = document.getElementById('errorMsg');

  /* loading state */
  btn.disabled    = true;
  label.style.display  = 'none';
  spinner.style.display = 'flex';
  successEl.style.display = 'none';
  errorEl.style.display   = 'none';

  const serviceMap = { web: 'Web Development', mobile: 'Mobile Development', consult: 'IT Consultant', other: 'Lainnya / Other', '': '-' };
  const serviceVal = document.getElementById('f-service').value;

  const templateParams = {
    from_name:  document.getElementById('f-name').value.trim(),
    from_email: document.getElementById('f-email').value.trim(),
    company:    document.getElementById('f-company').value.trim() || '-',
    whatsapp:   document.getElementById('f-wa').value.trim() || '-',
    service:    serviceMap[serviceVal] || serviceVal || '-',
    message:    document.getElementById('f-message').value.trim(),
    reply_to:   document.getElementById('f-email').value.trim(),
    to_email:   'infomaskoding@gmail.com',
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    successEl.style.display = 'flex';
    document.getElementById('contactForm').reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    errorEl.style.display = 'flex';
  } finally {
    btn.disabled = false;
    label.style.display  = 'inline';
    spinner.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderTech();
  applyTranslations(currentLang);
});
