const modules = [
  { id: "sistem-komputer", title: "Sistem Komputer", summary: "Pelajari hubungan hardware, software, dan cara kerja komputasi.", heading: "Sistem Komputer", intro: "Memahami bagaimana hardware dan software berinteraksi untuk menjalankan instruksi komputasi.", boxes: [{ title: "Perangkat Keras", body: "CPU memproses instruksi, RAM menyimpan data sementara, SSD atau HDD menyimpan data permanen, dan GPU mempercepat visual serta komputasi paralel." }, { title: "Perangkat Lunak", body: "Sistem operasi mengelola sumber daya, firmware menyiapkan proses boot, dan driver menjembatani sistem operasi dengan hardware." }], callout: "Pilih spesifikasi berdasarkan kebutuhan. Editing video membutuhkan RAM dan GPU lebih besar, sedangkan administrasi kantor cukup dengan RAM 8 GB dan SSD." },
  { id: "jaringan-komputer", title: "Jaringan Komputer", summary: "Kenali skala jaringan, topologi, dan cara mendiagnosis koneksi.", heading: "Jaringan dan Komunikasi Data", intro: "Mempelajari bagaimana data berpindah dari satu node ke node lain dalam skala global.", boxes: [{ title: "Skala Geografis", body: "PAN berarti personal, LAN berarti lokal, MAN mencakup wilayah metropolitan, dan WAN mencakup area yang luas." }, { title: "Topologi Utama", body: "Star bersifat terpusat, Mesh menawarkan redundansi tinggi, dan Bus menggunakan jalur linear yang sederhana." }], callout: "Gunakan ping untuk memeriksa konektivitas dasar dan tracert untuk melihat jalur router yang dilewati paket data." },
  { id: "keamanan-digital", title: "Keamanan Digital", summary: "Bangun kebiasaan melindungi akun, perangkat, dan jaringan.", heading: "Keamanan Digital dan Data", intro: "Mengenali lapisan pertahanan untuk menjaga identitas dan data pribadi.", boxes: [{ title: "Keamanan Personal", body: "Gunakan password manager, password unik, dan 2FA atau MFA sebagai lapisan pertahanan kedua." }, { title: "Keamanan Jaringan", body: "Gunakan WPA3 untuk Wi-Fi dan VPN saat mengakses jaringan publik untuk membantu melindungi lalu lintas data." }], callout: "Keamanan digital adalah kebiasaan: perbarui perangkat, tinjau izin aplikasi, dan buat cadangan data secara berkala." },
  { id: "transaksi-digital", title: "Transaksi Digital", summary: "Pahami alur pembayaran online dan kenali pola yang merugikan.", heading: "Ekosistem Transaksi Digital", intro: "Melihat hubungan antara antarmuka, payment gateway, database, dan perlindungan konsumen.", boxes: [{ title: "Tiga Lapisan", body: "Front-end menampilkan katalog dan keranjang, payment gateway memvalidasi pembayaran, sedangkan back-end mengelola database, API, dan deteksi penipuan." }, { title: "Dark Patterns", body: "Waspadai timer palsu, biaya tersembunyi, dan desain yang mendorong keputusan terburu-buru." }], callout: "Jika saldo terpotong tetapi status transaksi masih pending, jangan membayar ulang. Simpan bukti dan hubungi kanal resmi." },
  { id: "literasi-hukum", title: "Literasi dan Hukum", summary: "Cari informasi secara cermat dan pahami tanggung jawab digital.", heading: "Literasi dan Hukum Digital", intro: "Menggunakan sumber tepercaya dan memahami prinsip dasar perlindungan data serta aktivitas elektronik.", boxes: [{ title: "Advanced Search", body: "Gunakan \"frasa\" untuk pencarian persis, site:gov.id untuk membatasi domain, dan filetype:pdf untuk menyaring format." }, { title: "Hukum Digital", body: "UU ITE mengatur transaksi elektronik dan tindak pidana siber. UU PDP mengatur perlindungan data pribadi." }], callout: "Gunakan protokol STOP: Stop, Think, Observe, Prove sebelum membagikan informasi atau mempercayai sebuah klaim." },
  { id: "algoritma-pemrograman", title: "Algoritma dan Pemrograman", summary: "Susun solusi logis sebelum menerjemahkannya menjadi program.", heading: "Algoritma dan Pemrograman", intro: "Menyusun langkah logis dan menerjemahkannya menjadi program yang dapat dijalankan komputer.", boxes: [{ title: "Struktur Algoritma", body: "Input adalah data yang diproses, proses adalah langkah pengolahan, dan output adalah hasil penyelesaian." }, { title: "Konsep Dasar", body: "Sequence menjalankan instruksi berurutan, selection memilih aksi dengan if, iteration mengulang aksi, dan variable menyimpan nilai." }], callout: "Masalah yang dipahami dengan baik menghasilkan algoritma yang lebih mudah diuji dan dipelihara.", code: "MULAI\nBaca nilai\nJika nilai >= 75\n  Tampilkan Lulus\nJika tidak\n  Tampilkan Belum lulus\nSELESAI" }
];

const $ = (selector) => document.querySelector(selector);
const moduleById = (id) => modules.find((item) => item.id === id) || modules[0];

function setupMenu() {
  const button = $("[data-menu-button]");
  const nav = $("[data-nav-links]");
  if (button && nav) button.addEventListener("click", () => nav.classList.toggle("is-open"));
}

function moduleLinks(currentId = "") {
  return modules.map((item, index) => `<a href="modules.html?module=${item.id}" ${item.id === currentId ? 'aria-current="page"' : ""}><span class="number">${String(index + 1).padStart(2, "0")}</span> ${item.title}</a>`).join("");
}

function renderHome() {
  const grid = $("[data-module-grid]");
  if (!grid) return;
  grid.innerHTML = modules.map((item, index) => `<a class="module-card" data-animate style="transition-delay:${index * 80}ms" href="modules.html?module=${item.id}"><span class="card-label">Modul ${String(index + 1).padStart(2, "0")}</span><h3>${item.title}</h3><p>${item.summary}</p><span class="card-link">Buka modul &rarr;</span></a>`).join("");
  observeAnimatedElements();
}

function observeAnimatedElements() {
  const animated = document.querySelectorAll('[data-animate]');
  if (!animated.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -20px 0px' });

  animated.forEach((element) => observer.observe(element));
}

function renderModule() {
  const content = $("[data-module-content]");
  const nav = $("[data-module-nav]");
  if (!content || !nav) return;
  const selected = new URLSearchParams(location.search).get("module");
  const item = moduleById(selected);
  nav.innerHTML = moduleLinks(item.id);
  content.innerHTML = `<p class="eyebrow">Materi pembelajaran</p><h1>${item.heading}</h1><p>${item.intro}</p><div class="detail-grid">${item.boxes.map((box) => `<section class="detail-box"><h3>${box.title}</h3><p>${box.body}</p></section>`).join("")}</div><div class="callout"><strong>Catatan penting</strong><br>${item.callout}</div>${item.code ? `<h2 style="margin-top:32px">Contoh pseudocode</h2><pre><code>${item.code}</code></pre>` : ""}<div class="hero-actions"><a class="button button-primary" href="lab.html?lab=${item.id}">Buka lab modul</a><a class="button button-secondary" href="index.html">Kembali ke beranda</a></div>`;
}

function setupLabs() {
  const tabs = $("[data-lab-tabs]");
  const panel = $("[data-lab-panel]");
  if (!tabs || !panel) return;
  const current = new URLSearchParams(location.search).get("lab") || modules[0].id;
  tabs.innerHTML = modules.map((item) => `<a href="lab.html?lab=${item.id}" ${item.id === current ? 'aria-current="page"' : ""}>${item.title}</a>`).join("");
  const lab = current === "sistem-komputer" ? `<h2>Simulator Spesifikasi PC</h2><p>Pilih kebutuhan dan anggaran untuk mendapatkan rekomendasi komponen.</p><div class="form-grid"><div class="field"><label for="job">Tujuan penggunaan</label><select id="job"><option value="office">Administrasi kantor</option><option value="gaming">Gaming dan rendering</option><option value="ml">Machine learning</option></select></div><div class="field"><label for="budget">Anggaran</label><select id="budget"><option value="low">Ekonomis</option><option value="mid">Menengah</option><option value="high">High-end</option></select></div></div><button class="button button-primary" data-pc-button>Rekomendasikan komponen</button><div class="result" data-pc-result hidden></div>` : current === "jaringan-komputer" ? `<h2>Terminal Network Simulator</h2><p>Gunakan perintah help, ipconfig, ping, tracert, atau clear.</p><div class="terminal"><div class="terminal-output" data-terminal-output>NetSim siap menerima perintah.</div><div class="terminal-row"><span>C:\\Siswa&gt;</span><input class="terminal-input" data-terminal-input aria-label="Perintah terminal"></div></div>` : current === "keamanan-digital" ? `<div class="lab-card light"><h2>Checklist Keamanan Digital</h2><div class="checklist">${["Gunakan password berbeda untuk setiap akun", "Aktifkan 2FA", "Perbarui sistem operasi dan aplikasi", "Cadangkan data secara rutin"].map((label) => `<label><input type="checkbox" data-security-check> <span>${label}</span></label>`).join("")}</div><div class="result" data-security-score>Skor: 0%</div></div>` : current === "literasi-hukum" ? `<h2>Advanced Search Playground</h2><p>Susun kueri dengan operator pencarian yang tepat.</p><div class="form-grid"><div class="field"><label for="query">Kata kunci</label><input id="query" placeholder="contoh: keamanan data"></div><div class="field"><label for="operator">Operator</label><select id="operator"><option>site:</option><option>filetype:</option><option>intitle:</option></select></div><div class="field"><label for="value">Nilai filter</label><input id="value" placeholder="gov.id atau pdf"></div></div><button class="button button-primary" data-query-button>Susun kueri</button><div class="result" data-query-result hidden></div>` : `<h2>Kuis ${moduleById(current).title}</h2><p>Jawab tiga pertanyaan singkat untuk memeriksa pemahamanmu.</p><div class="checklist"><label><input type="radio" name="q1" value="0"> Menulis kode adalah langkah pertama.</label><label><input type="radio" name="q1" value="1"> Memahami masalah adalah langkah pertama.</label><label><input type="radio" name="q2" value="1"> Iteration digunakan untuk pengulangan.</label><label><input type="radio" name="q2" value="0"> Selection digunakan untuk pengulangan.</label><label><input type="radio" name="q3" value="1"> Variable menyimpan nilai.</label><label><input type="radio" name="q3" value="0"> Variable menghapus sistem operasi.</label></div><button class="button button-primary" data-quiz-button>Periksa jawaban</button><div class="result" data-quiz-result hidden></div>`;
  panel.innerHTML = lab;
  wireLab(current);
}

function wireLab(current) {
  const pcButton = $(`[data-pc-button]`);
  if (pcButton) pcButton.addEventListener("click", () => { const job = $("#job").value; const budget = $("#budget").value; const names = { office: "CPU: Core i3 / Ryzen 3\nRAM: 8 GB\nStorage: 256 GB SSD\nGPU: Integrated", gaming: "CPU: Core i7 / Ryzen 7\nRAM: 16 GB\nStorage: 1 TB NVMe SSD\nGPU: RTX 4060 atau setara", ml: "CPU: Ryzen 7 / Core i7\nRAM: 32 GB atau lebih\nStorage: 1 TB NVMe SSD\nGPU: RTX series" }; const note = budget === "low" ? "Gunakan generasi sebelumnya untuk menekan biaya." : budget === "high" ? "Pilih komponen kelas atas sesuai kebutuhan." : "Seimbangkan CPU, RAM, dan storage."; const result = $("[data-pc-result]"); result.hidden = false; result.textContent = `${names[job]}\n\n${note}`; });
  const input = $("[data-terminal-input]");
  if (input) input.addEventListener("keydown", (event) => { if (event.key !== "Enter") return; const output = $("[data-terminal-output]"); const command = input.value.trim().toLowerCase(); const answers = { help: "Perintah: help, ipconfig, ping, tracert, clear", ipconfig: "IPv4: 192.168.1.15\nGateway: 192.168.1.1", ping: "Reply from 8.8.8.8: bytes=32 time=12ms TTL=118", tracert: "1  192.168.1.1\n2  10.0.0.1\n3  8.8.8.8" }; if (command === "clear") output.textContent = ""; else output.textContent += `\nC:\\Siswa> ${command}\n${answers[command] || "Perintah tidak dikenali."}`; input.value = ""; });
  const checks = document.querySelectorAll("[data-security-check]");
  checks.forEach((check) => check.addEventListener("change", () => { $("[data-security-score]").textContent = `Skor: ${Math.round([...checks].filter((item) => item.checked).length / checks.length * 100)}%`; }));
  const queryButton = $("[data-query-button]");
  if (queryButton) queryButton.addEventListener("click", () => { const query = $("#query").value.trim(); const value = $("#value").value.trim(); const result = $("[data-query-result]"); result.hidden = false; result.textContent = query && value ? `${$("#operator").value}${value} \"${query}\"` : "Isi kata kunci dan nilai filter terlebih dahulu."; });
  const quizButton = $("[data-quiz-button]");
  if (quizButton) quizButton.addEventListener("click", () => { const selected = [...document.querySelectorAll('input[type="radio"]:checked')]; const result = $("[data-quiz-result]"); result.hidden = false; result.textContent = selected.length < 3 ? "Jawab semua pertanyaan terlebih dahulu." : `Skor: ${selected.filter((item) => item.value === "1").length}/3`; });
}

setupMenu();
renderHome();
renderModule();
setupLabs();
