/**
 * ARTİSAN MOBİLYA & KAPI SİSTEMLERİ - ANA KULLANICI ARAYÜZÜ MOTORU (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ürünleri ilk yükleme
  if (typeof renderProducts === 'function') {
    renderProducts('all', 'product-grid');
  }

  // 2. Kategori Filtre Butonları
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      if (typeof renderProducts === 'function') {
        renderProducts(category, 'product-grid');
      }
    });
  });

  // 3. Mobil Çekmece Menü (Mobile Drawer)
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileClose = document.getElementById('mobile-drawer-close');

  function openMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // 4. Sepet Çekmecesi Açma/Kapatma Tetikleyicileri
  const cartBtn = document.getElementById('btn-cart-toggle');
  const cartCloseBtn = document.getElementById('btn-close-cart');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Cart.openDrawer();
    });
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => Cart.closeDrawer());
  }
  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => Cart.closeDrawer());
  }

  // 5. Canlı Arama (Live Search Modal)
  const searchBtn = document.getElementById('btn-search-toggle');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('live-search-input');
  const searchResults = document.getElementById('search-results');
  const searchClose = document.getElementById('btn-search-close');

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('active');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove('active');
      if (searchInput) searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.trim().toLowerCase();
      if (term.length < 2) {
        searchResults.innerHTML = '<div style="padding:15px; color:#94a3b8; text-align:center;">Aramak için en az 2 karakter yazın...</div>';
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.code.toLowerCase().includes(term) ||
        p.categoryName.toLowerCase().includes(term)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<div style="padding:15px; color:#94a3b8; text-align:center;">Eşleşen ürün bulunamadı.</div>';
        return;
      }

      searchResults.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="openProductModal('${p.id}'); document.getElementById('search-modal').classList.remove('active');">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <div style="font-weight:700; color:var(--primary); font-size:0.92rem;">${p.name}</div>
            <div style="font-size:0.8rem; color:var(--accent); font-weight:600;">${formatPrice(p.price)} • ${p.categoryName}</div>
          </div>
        </div>
      `).join('');
    });
  }

  // 6. Scroll To Top Butonu & Sticky Header
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if (scrollTopBtn) scrollTopBtn.classList.add('show');
    } else {
      if (scrollTopBtn) scrollTopBtn.classList.remove('show');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Teklif Formu Gönderimi
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quote-name').value;
      const phone = document.getElementById('quote-phone').value;
      const category = document.getElementById('quote-category').value;
      const note = document.getElementById('quote-note').value;

      Cart.showToast(`Teşekkürler Sayın ${name}, teklif talebiniz ekibimize iletildi.`);
      quoteForm.reset();

      // İsteğe bağlı olarak WhatsApp ile de açma seçeneği
      const wpConfirm = confirm("Talebiniz kaydedildi! Hızlı yanıt almak için WhatsApp müşteri temsilcimize de göndermek ister misiniz?");
      if (wpConfirm) {
        const text = encodeURIComponent(`Merhaba, ben ${name}. İlgilendiğim Kategori: ${category}. İletişim Numaram: ${phone}. Proje Detayı: ${note}`);
        window.open(`https://api.whatsapp.com/send?phone=905533842459&text=${text}`, '_blank');
      }
    });
  }

  // ESC tuşu ile açık modalları kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeSearch();
      Cart.closeDrawer();
      closeMobileMenu();
    }
  });
});
