/**
 * ==========================================================================
 * INTERACTIVE LEARNING SYSTEM - CORE LOGIC
 * ==========================================================================
 */

// Module Data Repository
const MODULE_DATA = {
  'mod1': {
    title: 'Sistem Komputer',
    toc: [
      { id: 'hw-sw', title: 'Hardware vs Software', content: `
        <h2 class="mb-lg">Perangkat Keras (Hardware) & Perangkat Lunak (Software)</h2>
        <p>Sistem komputer terdiri dari dua komponen utama yang saling bergantung agar dapat menjalankan instruksi pengguna.</p>

        <div class="grid-2-col" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
          <section>
            <h3 style="color: var(--color-primary);">📦 Perangkat Keras (Hardware)</h3>
            <ul>
              <li><strong>CPU (Central Processing Unit)</strong>: Bertindak sebagai otak komputasi yang menentukan kecepatan eksekusi data.</li>
              <li><strong>RAM (Random Access Memory)</strong>: Memori penyimpanan sementara berkecepatan tinggi.</li>
              <li><strong>Media Penyimpanan (HDD/SSD)</strong>: SSD menggunakan memori flash NAND untuk kecepatan baca/tulis jauh lebih tinggi.</li>
              <li><strong>GPU (Graphics Processing Unit)</strong>: Dirancang untuk mempercepat pengolahan visual dan komputasi paralel.</li>
              <li><strong>Motherboard & PSU</strong>: Penghubung seluruh komponen dan penyedia daya listrik.</li>
            </ul>
          </section>
          <section>
            <h3 style="color: var(--color-primary);">💿 Perangkat Lunak (Software)</h3>
            <ul>
              <li><strong>Sistem Operasi (OS)</strong>: Mengelola sumber daya hardware (Windows, Linux, macOS).</li>
              <li><strong>Firmware (BIOS/UEFI)</strong>: Software tingkat rendah untuk inisialisasi booting.</li>
              <li><strong>Aplikasi Produktivitas</strong>: Software untuk tugas spesifik (Web Browser, Office).</li>
              <li><strong>Driver Perangkat</strong>: Perantara komunikasi antara OS dan hardware.</li>
            </ul>
          </section>
        </div>
      ` },
      { id: 'spec-guide', title: 'Pemilihan Spesifikasi', content: `
        <h2 class="mb-lg">Panduan Pemilihan Spesifikasi Komputer</h2>
        <p>Pemilihan komponen harus didasarkan pada beban kerja (workload) dan rasio performa-harga.</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Kebutuhan</th>
              <th>CPU Rekomendasi</th>
              <th>RAM</th>
              <th>Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Administrasi Dasar</td><td>Core i3 / Ryzen 3</td><td>8 GB</td><td>SSD 256 GB</td></tr>
            <tr><td>Editing Video / 3D</td><td>Core i7 / Ryzen 7</td><td>16-32 GB</td><td>SSD NVMe 1 TB</td></tr>
            <tr><td>Data Science / ML</td><td>Core i9 / Threadripper</td><td>32 GB+</td><td>SSD NVMe 2 TB+</td></tr>
          </tbody>
        </table>
        <p class="mt-lg"><em>Pertimbangan lain: Skalabilitas (Upgradability) dan Manajemen Thermal.</em></p>
      ` }
    ]
  },
  'mod2': {
    title: 'Jaringan Komputer & Komunikasi Data',
    toc: [
      { id: 'network-model', title: 'Model Jaringan', content: `
        <h2 class="mb-lg">Model Jaringan Komputer</h2>
        <p>Jaringan komputer diklasifikasikan berdasarkan jangkauan, media, dan arsitekturnya.</p>

        <h3>1. Jangkauan Geografis</h3>
        <ul>
          <li><strong>PAN (Personal Area Network)</strong>: Jarak sangat kecil (Bluetooth).</li>
          <li><strong>LAN (Local Area Network)</strong>: Area terbatas (Rumah, Kantor).</li>
          <li><strong>MAN (Metropolitan Area Network)</strong>: Rentang wilayah kota.</li>
          <li><strong>WAN (Wide Area Network)</strong>: Lintas negara/benua (Internet).</li>
        </ul>

        <h3>2. Topologi Jaringan</h3>
        <p>Topologi menentukan cara perangkat terhubung secara fisik/logis.</p>
        <ul>
          <li><strong>Star</strong>: Terpusat pada Hub/Switch. Paling umum dan mudah dikelola.</li>
          <li><strong>Mesh</strong>: Setiap node terhubung ke semua node lain. Redundansi tinggi.</li>
          <li><strong>Bus</strong>: Satu kabel utama (backbone). Sederhana tapi rentan.</li>
        </ul>
      ` },
      { id: 'troubleshooting', title: 'Troubleshooting Lab', content: `
        <h2 class="mb-lg">Simulasi Troubleshooting Jaringan</h2>
        <p>Gunakan simulator di bawah ini untuk memahami alur diagnosa koneksi jaringan.</p>

        <div class="lab-widget" id="widget-network-diag">
          <div class="lab-widget__header"><span>🛠️</span> Network Diagnostics Simulator</div>
          <div class="lab-widget__body">
            <div class="lab-widget__input-group">
              <label class="lab-widget__label">Pilih Perintah Terminal:</label>
              <select class="lab-widget__field" id="net-cmd">
                <option value="ping">ping 8.8.8.8</option>
                <option value="ipconfig">ipconfig /all</option>
                <option value="tracert">tracert google.com</option>
              </select>
            </div>
            <button class="btn btn--primary" id="net-run">Eksekusi Perintah</button>
            <div class="lab-widget__preview" id="net-output">Ketik perintah dan tekan Eksekusi...</div>
          </div>
        </div>
      ` }
    ]
  },
  'mod3': {
    title: 'Keamanan Digital, Data & Jaringan',
    toc: [
      { id: 'personal-security', title: 'Keamanan Diri', content: `
        <h2 class="mb-lg">Keamanan Diri Digital (Personal Security)</h2>
        <p>Langkah pertama keamanan adalah melindungi identitas akses Anda.</p>
        <div class="card" style="padding: 1rem; margin: 1rem 0; cursor: default;">
          <h4>🔑 Password Manager & 2FA</h4>
          <p>Gunakan <strong>Password Manager</strong> untuk membuat sandi kompleks secara otomatis. Aktifkan <strong>MFA (Multi-Factor Authentication)</strong> menggunakan TOTP (Time-based One Time Password) via aplikasi seperti Google Authenticator.</p>
        </div>
      ` },
      { id: 'data-security', title: 'Enkripsi & Backup', content: `
        <h2 class="mb-lg">Keamanan Data dan Transmisi</h2>
        <p>Data harus dilindungi baik saat disimpan (*at rest*) maupun saat dikirim (*in transit*).</p>
        <ul>
          <li><strong>Strategi Backup</strong>: Full Backup (Utuh) vs Incremental Backup (Hanya perubahan).</li>
          <li><strong>Enkripsi</strong>: Gunakan WPA3 untuk Wi-Fi dan VPN untuk terowongan terenkripsi di jaringan publik.</li>
        </ul>
      ` }
    ]
  },
  'mod4': {
    title: 'Ekosistem Transaksi Digital',
    toc: [
      { id: 'architecture', title: 'Arsitektur 3 Lapisan', content: `
        <h2 class="mb-lg">Arsitektur Tiga Lapisan Transaksi Digital</h2>
        <ol>
          <li><strong>Marketplace (Front-End)</strong>: UI/UX, Katalog, Keranjang.</li>
          <li><strong>Payment Gateway (Mid-End)</strong>: Validasi pembayaran real-time.</li>
          <li><strong>Infrastruktur (Back-End)</strong>: Database, API, Cloud, Fraud Detection.</li>
        </ol>
      ` },
      { id: 'dark-patterns', title: 'Deteksi Dark Patterns', content: `
        <h2 class="mb-lg">Deteksi Manipulasi Antarmuka (Dark Patterns)</h2>
        <p>Waspada terhadap desain yang memaksa pengguna mengambil keputusan merugikan.</p>
        <div class="grid-2-col" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div class="card" style="padding: 1rem; cursor: default;">
            <strong>⌛ Urgency</strong>: Hitung mundur palsu.
          </div>
          <div class="card" style="padding: 1rem; cursor: default;">
            <strong>📦 Scarcity</strong>: "Sisa 1 stok lagi!" (manipulasi).
          </div>
          <div class="card" style="padding: 1rem; cursor: default;">
            <strong>💰 Hidden Fees</strong>: Biaya muncul tiba-tiba di akhir.
          </div>
        </div>
      ` }
    ]
  },
  'mod5': {
    title: 'Literasi Digital, Riset & Hukum Digital',
    toc: [
      { id: 'advanced-search', title: 'Advanced Search', content: `
        <h2 class="mb-lg">Penggunaan Lanjutan Mesin Pencari</h2>
        <p>Kuasai operator pencarian untuk riset yang lebih akurat dan efisien.</p>

        <div class="lab-widget" id="widget-search-playground">
          <div class="lab-widget__header"><span>🔍</span> Advanced Search Operator Playground</div>
          <div class="lab-widget__body">
            <div class="lab-widget__input-group">
              <label class="lab-widget__label">Kata Kunci Utama:</label>
              <input type="text" class="lab-widget__field" id="search-keyword" placeholder="contoh: keamanan jaringan">
            </div>
            <div class="lab-widget__input-group">
              <label class="lab-widget__label">Operator (opsional):</label>
              <select class="lab-widget__field" id="search-op">
                <option value="none">Tanpa Operator</option>
                <option value="site">site: (Batasi Domain)</option>
                <option value="filetype">filetype: (Format File)</option>
                <option value="quotes">" " (Frasa Persis)</option>
                <option value="minus">- (Kecualikan Kata)</option>
              </select>
            </div>
            <div class="lab-widget__input-group" id="op-extra-group" style="display: none;">
              <label class="lab-widget__label">Nilai Operator (contoh: go.id atau pdf):</label>
              <input type="text" class="lab-widget__field" id="search-extra">
            </div>
            <button class="btn btn--primary" id="search-generate">Generate Query</button>
            <div class="lab-widget__preview" id="search-output">Hasil query akan muncul di sini...</div>
          </div>
        </div>
      ` },
      { id: 'digital-law', title: 'Hukum Digital', content: `
        <h2 class="mb-lg">Hukum dan Perundang-undangan Digital</h2>
        <p>Kewajiban dan hak pengguna dalam ekosistem digital diatur oleh hukum.</p>
        <ul>
          <li><strong>UU ITE</strong>: Mengatur transaksi elektronik dan sanksi cybercrime.</li>
          <li><strong>GDPR / UU PDP</strong>: Menjamin hak kerahasiaan data pribadi (Right to be forgotten).</li>
        </ul>
      ` }
    ]
  }
};

/**
 * Application State
 */
const State = {
  currentPage: 'home',
  currentModule: null,
  progress: 0
};

/**
 * DOM Elements
 */
const Elements = {
  appContent: document.getElementById('appContent'),
  pageHome: document.getElementById('page-home'),
  pageModule: document.getElementById('page-module'),
  moduleToc: document.getElementById('moduleToc'),
  moduleContent: document.getElementById('moduleContent'),
  globalProgress: document.getElementById('globalProgress'),
  navLinks: document.querySelectorAll('.nav__link'),
  moduleCards: document.querySelectorAll('.card')
};

/**
 * Widget Logic
 */
const Widgets = {
  initSearchPlayground() {
    const keywordInput = document.getElementById('search-keyword');
    const opSelect = document.getElementById('search-op');
    const extraInput = document.getElementById('search-extra');
    const extraGroup = document.getElementById('op-extra-group');
    const btn = document.getElementById('search-generate');
    const output = document.getElementById('search-output');

    if (!btn) return;

    opSelect.addEventListener('change', () => {
      extraGroup.style.display = opSelect.value === 'none' || opSelect.value === 'quotes' ? 'none' : 'block';
    });

    btn.addEventListener('click', () => {
      const keyword = keywordInput.value || 'keyword';
      const op = opSelect.value;
      const extra = extraInput.value;
      let finalQuery = '';

      switch(op) {
        case 'site': finalQuery = `${keyword} <span class="highlight">site:${extra || 'go.id'}</span>`; break;
        case 'filetype': finalQuery = `${keyword} <span class="highlight">filetype:${extra || 'pdf'}</span>`; break;
        case 'quotes': finalQuery = `<span class="highlight">"${keyword}"</span>`; break;
        case 'minus': finalQuery = `${keyword} <span class="highlight">-${extra || 'iklan'}</span>`; break;
        default: finalQuery = keyword;
      }
      output.innerHTML = `Google Search Query: ${finalQuery}`;
    });
  },

  initNetworkSim() {
    const cmdSelect = document.getElementById('net-cmd');
    const btn = document.getElementById('net-run');
    const output = document.getElementById('net-output');

    if (!btn) return;

    const mocks = {
      ping: `Pinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=24ms TTL=118\nReply from 8.8.8.8: bytes=32 time=22ms TTL=118\n\n<span class="highlight">Status: Connected!</span>`,
      ipconfig: `Windows IP Configuration\n\nEthernet adapter Ethernet:\n   IPv4 Address. . . . . . . . . . : <span class="highlight">192.168.1.15</span>\n   Subnet Mask . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . : 192.168.1.1`,
      tracert: `Tracing route to google.com [142.251.12.102]\n1  <1ms  192.168.1.1\n2  12ms  10.0.0.1\n3  25ms  172.253.66.124\n\n<span class="highlight">Trace complete.</span>`
    };

    btn.addEventListener('click', () => {
      output.innerHTML = 'Executing...';
      setTimeout(() => {
        output.innerHTML = mocks[cmdSelect.value];
      }, 800);
    });
  }
};

/**
 * Core Functions
 */

function navigateTo(pageId) {
  State.currentPage = pageId;
  Elements.navLinks.forEach(link => {
    link.classList.toggle('nav__link--active', link.dataset.page === pageId);
  });

  if (pageId === 'home') {
    Elements.pageHome.style.display = 'block';
    Elements.pageModule.style.display = 'none';
    window.scrollTo(0, 0);
  } else {
    Elements.pageHome.style.display = 'none';
    Elements.pageModule.style.display = 'block';
    loadModule(pageId);
    window.scrollTo(0, 0);
  }
}

function loadModule(modKey) {
  const module = MODULE_DATA[modKey];
  if (!module) return;

  State.currentModule = modKey;
  Elements.moduleToc.innerHTML = module.toc.map((item, index) => `
    <li class="sidebar__item">
      <a href="#" class="sidebar__link ${index === 0 ? 'sidebar__link--active' : ''}"
         data-section="${item.id}">
         ${item.title}
      </a>
    </li>
  `).join('');

  loadSection(module.toc[0].id);

  Elements.moduleToc.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      loadSection(sectionId);
      Elements.moduleToc.querySelectorAll('.sidebar__link').forEach(l =>
        l.classList.toggle('sidebar__link--active', l.dataset.section === sectionId)
      );
    });
  });
}

function loadSection(sectionId) {
  const module = MODULE_DATA[State.currentModule];
  const section = module.toc.find(s => s.id === sectionId);

  if (section) {
    Elements.moduleContent.innerHTML = `
      <div class="module-section">
        <h1 class="mb-lg">${module.title}</h1>
        ${section.content}
      </div>
    `;

    // Initialize widgets for this section
    Widgets.initSearchPlayground();
    Widgets.initNetworkSim();

    updateProgress(sectionId);
  }
}

function updateProgress(sectionId) {
  const currentProgress = Math.floor(Math.random() * 100);
  Elements.globalProgress.style.width = `${currentProgress}%`;
  Elements.globalProgress.setAttribute('aria-valuenow', currentProgress);
}

function init() {
  Elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  Elements.moduleCards.forEach(card => {
    card.addEventListener('click', () => {
      navigateTo(card.dataset.page);
    });
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
  });
}

document.addEventListener('DOMContentLoaded', init);
