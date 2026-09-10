/**
 * ALEN CNC MOBİLYA & KAPI SİSTEMLERİ - SEPET YÖNETİMİ (cart.js)
 * LocalStorage destekli, anlık güncellenen sepet ve çekmece (drawer) motoru.
 */

const Cart = {
  storageKey: 'alen_cart_items',

  // Sepetteki ürünleri getir
  getItems() {
    try {
      let items = localStorage.getItem(this.storageKey);
      if (!items) {
        items = localStorage.getItem('artisan_cart_items');
      }
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  },

  // Sepeti kaydet
  saveItems(items) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.updateBadges();
    this.renderDrawer();
  },

  // Ürün ekle
  add(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let items = this.getItems();
    const existingIndex = items.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        code: product.code,
        name: product.name,
        categoryName: product.categoryName,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.saveItems(items);
    this.showToast(`"${product.name}" sepete eklendi.`);
    this.openDrawer();
  },

  // Miktar güncelle
  updateQty(productId, newQty) {
    let items = this.getItems();
    if (newQty <= 0) {
      this.remove(productId);
      return;
    }
    const item = items.find(i => i.id === productId);
    if (item) {
      item.quantity = newQty;
      this.saveItems(items);
      // Sepet sayfasındaysak orayı da güncelle
      if (typeof renderCartPage === 'function') renderCartPage();
    }
  },

  // Ürünü sepetten çıkar
  remove(productId) {
    let items = this.getItems();
    items = items.filter(i => i.id !== productId);
    this.saveItems(items);
    this.showToast('Ürün sepetten çıkarıldı.');
    if (typeof renderCartPage === 'function') renderCartPage();
  },

  // Sepeti temizle
  clear() {
    localStorage.removeItem(this.storageKey);
    this.updateBadges();
    this.renderDrawer();
    if (typeof renderCartPage === 'function') renderCartPage();
  },

  // Toplam ürün adedi
  getTotalCount() {
    const items = this.getItems();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  // Ara toplam tutarı
  getSubtotal() {
    const items = this.getItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // KDV Tutarı (%20)
  getTax() {
    return this.getSubtotal() * 0.20;
  },

  // Kargo Tutarı (5000 TL üzeri ücretsiz, altı 250 TL)
  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 5000 ? 0 : 250;
  },

  // Genel Toplam
  getTotal() {
    return this.getSubtotal() + this.getShipping();
  },

  // Header sepet ikonlarını güncelle
  updateBadges() {
    const count = this.getTotalCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  // Sepet çekmecesini render et
  renderDrawer() {
    const drawerBody = document.getElementById('cart-drawer-items');
    const drawerTotal = document.getElementById('cart-drawer-total');
    if (!drawerBody) return;

    const items = this.getItems();

    if (items.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty">
          <i class="fa fa-shopping-basket"></i>
          <h4>Sepetiniz Henüz Boş</h4>
          <p>Koleksiyonumuzdaki kapı, kapak ve banyo modellerini keşfederek alışverişe başlayabilirsiniz.</p>
        </div>
      `;
      if (drawerTotal) drawerTotal.textContent = '₺0';
      return;
    }

    drawerBody.innerHTML = items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-price">${formatPrice(item.price)}</span>
          <div class="cart-qty-controls">
            <button class="btn-qty" onclick="Cart.updateQty('${item.id}', ${item.quantity - 1})">-</button>
            <span style="font-size:0.85rem; font-weight:600;">${item.quantity}</span>
            <button class="btn-qty" onclick="Cart.updateQty('${item.id}', ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove('${item.id}')" title="Kaldır">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    `).join('');

    if (drawerTotal) {
      drawerTotal.textContent = formatPrice(this.getSubtotal());
    }
  },

  // Çekmeceyi Aç / Kapat
  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    }
  },

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  },

  // Bildirim Toast mesajı
  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa fa-check-circle" style="color:var(--accent);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

// Sayfa yüklendiğinde sepeti başlat
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadges();
  Cart.renderDrawer();
});
