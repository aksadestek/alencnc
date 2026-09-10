/**
 * ALEN CNC MOBİLYA & KAPI SİSTEMLERİ - ÜRÜN VERİTABANI & VİTRİN YÖNETİMİ
 * CNC işleme, PVC membran kapı ve kapak modelleri, seriler ve teknik veriler.
 */

const PRODUCTS = [
  // --- PARAMETRİK 3D AHŞAP DUVAR SANATI & ÖZEL CNC PROJELERİ ---
  {
    id: 'duvar-vuna',
    code: 'ALEN-VUNA',
    name: 'VUNA Cafe 3D Parametrik Ahşap Duvar Sanatı',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 38500,
    oldPrice: 44000,
    badge: 'Son Projemiz',
    badgeType: 'badge-new',
    image: 'assets/projects/vuna_cafe_wall.jpg',
    colors: ['#b48c5b', '#78350f', '#1c1917'],
    spec: '5 Eksenli CNC Çıta Kesim • Doğal Meşe Vernik • 3D Heykelsi Yüz • Akustik Dalga',
    desc: 'VUNA Cafe için atölyemizde özel olarak tasarlayıp ürettiğimiz, yüzlerce ahşap çıtanın bir araya gelerek 3D heykelsi bir kadın yüzü oluşturduğu parametrik akustik duvar dekorasyonu.',
    inStock: true
  },
  {
    id: 'duvar-reception',
    code: 'ALEN-RECEPT',
    name: 'Klinik & Lobi Danışma Bankosu 3D Dev Ahşap Yüz Rölyefi',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 46000,
    oldPrice: 52000,
    badge: 'Mimari Tasarım',
    badgeType: 'badge-stock',
    image: 'assets/projects/reception_face_relief.jpg',
    colors: ['#d7ccc8', '#a1887f', '#3e2723'],
    spec: 'Dev Yüz Rölyefi • Gizli LED Işık Kanallı • Akustik Çıtalı Zemin • Özel Ölçü İmalat',
    desc: 'Estetik klinik, otel ve plaza girişleri için tasarlanan, mekana benzersiz bir sanatsal prestij katan 3D parametrik heykelsi ahşap duvar çalışması.',
    inStock: true
  },
  {
    id: 'duvar-dental',
    code: 'ALEN-DENTAL',
    name: 'Diş Kliniği 3D Parametrik Diş Duvar Heykeli',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 28000,
    oldPrice: 32500,
    badge: 'Klinik Özel',
    badgeType: 'badge-stock',
    image: 'assets/projects/dental_clinic_tooth.jpg',
    colors: ['#e2e8f0', '#b48c5b', '#475569'],
    spec: 'Tematik Diş Formu • Masif Ahşap Çıta Dizilimi • Sıcak LED Gizli Işık Uyumlu',
    desc: 'Diş klinikleri bekleme salonları için tematik ve prestijli; diş anatomisini parametrik ahşap dalgalarla heykelleştiren özel CNC duvar paneli.',
    inStock: true
  },
  {
    id: 'duvar-gym',
    code: 'ALEN-GYM',
    name: 'Gym & Fitness Koşan Atlet 3D Parametrik Ahşap Duvarı',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 34500,
    oldPrice: 39000,
    badge: 'Trend Proje',
    badgeType: 'badge-new',
    image: 'assets/projects/gym_running_man.jpg',
    colors: ['#1e293b', '#b48c5b', '#0f172a'],
    spec: 'Dinamik Koşan Atlet • Koyu Antrasit & Ahşap Kontrast • Spor Salonu Konsepti',
    desc: 'Fitness ve spor merkezleri için dinamizmi ve gücü simgeleyen, koşan insan figürünün parametrik dalgalarla canlandırıldığı 3D ahşap duvar sanatı.',
    inStock: true
  },
  {
    id: 'duvar-cafebar',
    code: 'ALEN-CAFEBAR',
    name: 'Cafe & Bar Arkası 3D Ahşap Kadın Yüzü Heykel Panel',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 32000,
    oldPrice: null,
    badge: 'Cafe Konsept',
    badgeType: 'badge-stock',
    image: 'assets/projects/cafe_bar_parametric.jpg',
    colors: ['#8d6e63', '#4e342e', '#212121'],
    spec: 'Bar Tezgah Arkası • Sıcak LED Aydınlatma Kanallı • 1. Sınıf Ahşap İşçiliği',
    desc: 'Cafe ve restoran bar arkalarına derinlik ve lüks katan, mekan aydınlatmasıyla bütünleşen 3D parametrik heykel paneli.',
    inStock: true
  },
  {
    id: 'duvar-hallway',
    code: 'ALEN-HALL',
    name: 'Lobi & Antre Çerçeveli 3D Parametrik Ahşap Tablo',
    category: 'duvar',
    categoryName: '3D Parametrik Duvar',
    price: 18500,
    oldPrice: 21000,
    badge: 'Rezidans & Villa',
    badgeType: 'badge-stock',
    image: 'assets/projects/hallway_parametric_art.jpg',
    colors: ['#a1887f', '#5d4037', '#d7ccc8'],
    spec: 'Çerçeveli Monoblok • 120 x 220 cm • Doğal Ahşap Çıta • Asmaya Hazır',
    desc: 'Villaların, daire antrelerinin ve ofis koridorlarının duvarlarına lüks ve sanatsal bir derinlik kazandıran çerçeveli 3D ahşap sanat eseri.',
    inStock: true
  },

  // --- KAPI SERİSİ ---
  {
    id: 'kapi-1',
    code: 'GK-5004',
    name: 'GK-5004 Soft Koyu Gri Kapı',
    category: 'kapi',
    categoryName: 'PVC Kapı Serisi',
    price: 4850,
    oldPrice: 5600,
    badge: 'Çok Satan',
    badgeType: 'badge-stock',
    image: 'assets/kapi.svg',
    colors: ['#475569', '#334155', '#1e293b'],
    spec: 'MDF Dolu Gövde • PVC Kaplama • Manyetik Kilit Uyumlu',
    desc: 'Özel PVC membran kaplama teknolojisi ile üretilen GK-5004, darbelere ve neme ekstra dayanıklıdır. Modern konut ve ofis projeleri için ideal minimalist çizgilere sahiptir.',
    inStock: true
  },
  {
    id: 'kapi-2',
    code: 'GK-686',
    name: 'GK-686 Bute Beyaz Lake Kapı',
    category: 'kapi',
    categoryName: 'Lake Kapı Serisi',
    price: 6200,
    oldPrice: 7100,
    badge: 'Yeni',
    badgeType: 'badge-new',
    image: 'assets/kapi.svg',
    colors: ['#ffffff', '#f1f5f9', '#e2e8f0'],
    spec: 'Ultra Mat İpek Lake • Masif Ağaç Seren • Akustik Fitil',
    desc: 'Yüksek kaliteli İtalyan lake boya uygulaması ile sararmaya karşı dirençli, ipeksi yüzey dokulu prestijli iç mekan kapısı.',
    inStock: true
  },
  {
    id: 'kapi-3',
    code: 'GK-669',
    name: 'GK-669 Soft Açık Gri Kapı',
    category: 'kapi',
    categoryName: 'PVC Kapı Serisi',
    price: 4650,
    oldPrice: null,
    badge: 'Stoktan Teslim',
    badgeType: 'badge-stock',
    image: 'assets/kapi.svg',
    colors: ['#94a3b8', '#cbd5e1', '#f8fafc'],
    spec: 'CNC Desenli • Suya Dayanıklı Kompozit Kasa',
    desc: 'Stoktan anında teslim avantajıyla projelerinizde zamandan tasarruf sağlayan, estetik gri tonuyla modern mekan kapısı.',
    inStock: true
  },
  {
    id: 'kapi-4',
    code: 'GK-501',
    name: 'GK-501 Doğal Safir Meşe Kapı',
    category: 'kapi',
    categoryName: 'Melamin & Ahşap Seri',
    price: 3950,
    oldPrice: 4400,
    badge: '%15 İndirim',
    badgeType: 'badge-discount',
    image: 'assets/kapi.svg',
    colors: ['#a2703f', '#78350f', '#d97706'],
    spec: 'Doğal Ahşap Dokusu • Çizilmez Melamin Yüzey',
    desc: 'Doğallığı ve sıcaklığı yaşam alanlarınıza taşıyan, darbelere ve çizilmelere karşı maksimum mukavemetli melamin seri.',
    inStock: true
  },

  // --- KAPAK SERİSİ ---
  {
    id: 'kapak-1',
    code: '309-I',
    name: '309 I Soft Kaşmir Kapak',
    category: 'kapak',
    categoryName: 'Soft Seri Kapak',
    price: 1850,
    oldPrice: 2200,
    badge: 'Favori',
    badgeType: 'badge-stock',
    image: 'assets/kapak.svg',
    colors: ['#d7ccc8', '#bcaaa4', '#8d6e63'],
    spec: 'Parmak İzi Tutmaz • Kadife Yüzey • 18mm E1 MDF',
    desc: 'Mutfak ve gardıroplarınızda parmak izi bırakmayan, kadifemsi pürüzsüz dokuya sahip özel soft kaşmir kapak serisi.',
    inStock: true
  },
  {
    id: 'kapak-2',
    code: '742-I',
    name: '742 I Soft İpek Gri Kapak',
    category: 'kapak',
    categoryName: 'Soft Seri Kapak',
    price: 1800,
    oldPrice: null,
    badge: 'Yeni Seri',
    badgeType: 'badge-new',
    image: 'assets/kapak.svg',
    colors: ['#cbd5e1', '#94a3b8', '#64748b'],
    spec: 'Anti-Bakteriyel • Çift Yüz Melamin • PVC Kenar Bantlı',
    desc: 'Göz alıcı ipek gri matlığı, modern mutfak dolaplarında yalın ve lüks bir mimari hava yaratır.',
    inStock: true
  },
  {
    id: 'kapak-3',
    code: '301-I',
    name: '301 I Soft Kozmik Mavi Kapak',
    category: 'kapak',
    categoryName: 'Lake & Akrilik Seri',
    price: 2150,
    oldPrice: 2600,
    badge: '%20 İndirim',
    badgeType: 'badge-discount',
    image: 'assets/kapak.svg',
    colors: ['#1e3a8a', '#1e40af', '#3b82f6'],
    spec: 'Özel Pigment Lake • Derin Matlık • Su İtici',
    desc: 'Derin mavi ve lacivert tonlarının ihtişamını modern mutfaklarınıza getiren cesur ve sofistike tasarım.',
    inStock: true
  },
  {
    id: 'kapak-4',
    code: 'JK-01',
    name: 'Kendinden Entegre J-Kulp Kapak',
    category: 'kapak',
    categoryName: 'Kulpsuz Seri',
    price: 2400,
    oldPrice: 2800,
    badge: 'Trend',
    badgeType: 'badge-stock',
    image: 'assets/kapak.svg',
    colors: ['#ffffff', '#1f2937', '#b48c5b'],
    spec: 'CNC Frezeli J Kulp • Monoblok Gövde • Kulpsuz Tasarım',
    desc: 'Dıştan kulp takmaya gerek bırakmayan entegre gizli J profil frezesi ile mutfaklarda kesintisiz estetik.',
    inStock: true
  },

  // --- BANYO MODÜLLERİ ---
  {
    id: 'banyo-1',
    code: 'GBD-01',
    name: 'GBD-01 Arrow Ceviz Banyo Takımı',
    category: 'banyo',
    categoryName: 'Premium Banyo',
    price: 12800,
    oldPrice: 14500,
    badge: 'Set Ürün',
    badgeType: 'badge-new',
    image: 'assets/banyo.svg',
    colors: ['#78350f', '#f5f5f4'],
    spec: 'Lavabo Dahil • LED Aynalı • Frenli Ray Sistemi • 100 cm',
    desc: 'Doğal ceviz kaplama gövde ve neme dayanıklı lake ön yüzeyler. Dokunmatik LED aydınlatmalı ayna ve seramik lavabo dahildir.',
    inStock: true
  },
  {
    id: 'banyo-2',
    code: 'GBDP-03',
    name: 'GBDP-03 Padova Oksit Banyo Modülü',
    category: 'banyo',
    categoryName: 'Classic Seri',
    price: 9800,
    oldPrice: null,
    badge: 'Stokta',
    badgeType: 'badge-stock',
    image: 'assets/banyo.svg',
    colors: ['#475569', '#334155'],
    spec: 'MDF Lam • Su Geçirmez Boya • 80 cm Askılı Modül',
    desc: 'Asma tipi kompakt banyo dolabı; küçük ve orta boy banyolarda maksimum depolama alanı ve kolay zemin temizliği sunar.',
    inStock: true
  },

  // --- MODÜLER MUTFAK & DOLAPLAR ---
  {
    id: 'modul-1',
    code: 'KDNW-80',
    name: 'Ankastre Fırın & Eviye Alt Modülü',
    category: 'modul',
    categoryName: 'Alt Modüller',
    price: 3450,
    oldPrice: 3900,
    badge: 'Standart Ölçü',
    badgeType: 'badge-stock',
    image: 'assets/modul.svg',
    colors: ['#ffffff', '#94a3b8'],
    spec: '18mm Beyaz Gövde • Ayarlanabilir Baza Ayakları',
    desc: 'Tüm standart ankastre fırın ve eviye boyutlarına uygun, kolay montajlı sağlam alt dolap gövdesi.',
    inStock: true
  },
  {
    id: 'modul-2',
    code: 'KUNH-90',
    name: 'Kalkar Kapaklı Üst Mutfak Dolabı',
    category: 'modul',
    categoryName: 'Üst Modüller',
    price: 4100,
    oldPrice: 4700,
    badge: 'Aventos Uyumlu',
    badgeType: 'badge-stock',
    image: 'assets/modul.svg',
    colors: ['#ffffff', '#1e293b'],
    spec: 'Blum/Samet Kalkar Mekanizma Uyumlu • Çift Kat Raf',
    desc: 'Baş hizasını engellemeyen yukarı kalkar kapak mekanizmasıyla ergonomik ve geniş depolama alanı.',
    inStock: true
  }
];

// Para birimi formatlama fonksiyonu
function formatPrice(amount) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0
  }).format(amount);
}

// Ürün kartı HTML oluşturucu
function createProductCard(product) {
  const oldPriceHtml = product.oldPrice 
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` 
    : '';

  const colorDots = product.colors.map(c => 
    `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`
  ).join('');

  return `
    <article class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
        
        <div class="product-quick-actions">
          <button class="btn-quick-action btn-view-modal" onclick="openProductModal('${product.id}')" title="Hızlı İncele">
            <i class="fa fa-eye"></i>
          </button>
          <button class="btn-quick-action" onclick="requestQuote('${product.name}')" title="Teklif İste">
            <i class="fa fa-file-text-o"></i>
          </button>
          <button class="btn-quick-action" onclick="shareWhatsApp('${product.name}', '${product.code}')" title="WhatsApp'tan Sor">
            <i class="fa fa-whatsapp"></i>
          </button>
        </div>
      </div>

      <div class="product-body">
        <span class="product-category">${product.categoryName}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-details-spec"><i class="fa fa-check-circle" style="color:var(--accent);"></i> ${product.spec.split('•')[0]}</p>
        
        <div class="color-swatches">
          ${colorDots}
        </div>

        <div class="product-footer">
          <div class="product-price-box">
            ${oldPriceHtml}
            <span class="current-price">${formatPrice(product.price)}</span>
          </div>
          <button class="btn-add-cart" onclick="Cart.add('${product.id}')">
            <i class="fa fa-shopping-bag"></i> Sepete Ekle
          </button>
        </div>
      </div>
    </article>
  `;
}

// Ürünleri render etme
function renderProducts(filterCategory = 'all', containerId = 'product-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

// Hızlı Bakış Modalı Açma
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('product-modal');
  if (!modalOverlay) return;

  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-badge').innerText = product.badge || 'Standart';
  document.getElementById('modal-category').innerText = product.categoryName;
  document.getElementById('modal-title').innerText = product.name;
  document.getElementById('modal-code').innerText = `Ürün Kodu: ${product.code}`;
  document.getElementById('modal-price').innerText = formatPrice(product.price);
  document.getElementById('modal-desc').innerText = product.desc;
  document.getElementById('modal-spec').innerText = product.spec;

  // Add to cart button binding
  const addBtn = document.getElementById('modal-add-cart');
  if (addBtn) {
    addBtn.onclick = () => {
      const qtyInput = document.getElementById('modal-qty');
      const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
      Cart.add(product.id, qty);
      closeProductModal();
    };
  }

  // Quote button binding
  const quoteBtn = document.getElementById('modal-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      closeProductModal();
      requestQuote(product.name);
    };
  }

  modalOverlay.classList.add('active');
}

function closeProductModal() {
  const modalOverlay = document.getElementById('product-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

// Teklif Al & WhatsApp Yardımcıları
function requestQuote(productName) {
  const quoteSubject = document.getElementById('quote-subject');
  if (quoteSubject) {
    quoteSubject.value = productName ? `${productName} Fiyat Teklifi` : 'Genel Proje Teklifi';
    const quoteSection = document.getElementById('teklif-al');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
  // Sayfa üzerinde form yoksa iletişim sayfasına yönlendir
  window.location.href = `iletisim.html?teklif=${encodeURIComponent(productName)}`;
}

function shareWhatsApp(productName, productCode) {
  const phone = '905533842459'; // Alen CNC WhatsApp hattı (+90 553 384 24 59)
  const msg = encodeURIComponent(`Merhaba, web sitenizdeki "${productName}" (${productCode}) ürünü hakkında fiyat ve teslimat bilgisi almak istiyorum.`);
  window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, '_blank');
}
