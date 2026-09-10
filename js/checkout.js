/**
 * ARTİSAN MOBİLYA & KAPI SİSTEMLERİ - ÖDEME & CHECKOUT YÖNETİMİ (checkout.js)
 * Göktaş Mobilya Sanal Ödeme benzeri Güvenli Ödeme ve Sipariş Tamamlama.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  initPaymentTabs();
  initCardFormatters();
  initCheckoutForm();
});

function renderCheckoutSummary() {
  const summaryContainer = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const taxEl = document.getElementById('checkout-tax');
  const totalEl = document.getElementById('checkout-total');

  if (!summaryContainer) return;

  const items = Cart.getItems();

  if (items.length === 0) {
    summaryContainer.innerHTML = `
      <div style="text-align:center; padding:30px 10px; color:#64748b;">
        <p>Sepetinizde ürün bulunmamaktadır.</p>
        <a href="urunler.html" class="btn btn-sm btn-accent" style="margin-top:10px;">Ürünleri İncele</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = '₺0';
    return;
  }

  summaryContainer.innerHTML = items.map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:0.9rem;">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${item.image}" alt="${item.name}" style="width:45px; height:45px; border-radius:4px; object-fit:cover;">
        <div>
          <strong style="color:var(--primary); font-size:0.85rem;">${item.name}</strong>
          <div style="font-size:0.75rem; color:#64748b;">${item.quantity} Adet × ${formatPrice(item.price)}</div>
        </div>
      </div>
      <span style="font-weight:700; color:var(--primary);">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');

  const subtotal = Cart.getSubtotal();
  const shipping = Cart.getShipping();
  const tax = Cart.getTax();
  const total = Cart.getTotal();

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Ücretsiz' : formatPrice(shipping);
  if (taxEl) taxEl.textContent = formatPrice(tax);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function initPaymentTabs() {
  const tabBtns = document.querySelectorAll('.payment-tab-btn');
  const tabPanes = document.querySelectorAll('.payment-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function initCardFormatters() {
  const cardInput = document.getElementById('card-number');
  const expInput = document.getElementById('card-exp');
  const cvvInput = document.getElementById('card-cvv');

  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = value.substring(0, 19);
    });
  }

  if (expInput) {
    expInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      e.target.value = value.substring(0, 5);
    });
  }

  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });
  }
}

function initCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-form');
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Cart.getItems().length === 0) {
      alert('Sepetinizde henüz ürün bulunmuyor. Lütfen önce ürün ekleyin.');
      return;
    }

    const submitBtn = document.getElementById('btn-complete-order');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> İşlem Yapılıyor (3D Secure)...';
    }

    setTimeout(() => {
      const orderNum = 'ART-' + Math.floor(100000 + Math.random() * 900000);
      const name = document.getElementById('bill-name') ? document.getElementById('bill-name').value : 'Müşterimiz';

      // Sipariş başarılı modalı göster
      showOrderSuccess(orderNum, name);
      Cart.clear();
    }, 1800);
  });
}

function showOrderSuccess(orderNum, customerName) {
  const modal = document.getElementById('order-success-modal');
  if (modal) {
    document.getElementById('order-number-display').textContent = orderNum;
    document.getElementById('order-customer-display').textContent = customerName;
    modal.classList.add('active');
  } else {
    alert(`Siparişiniz başarıyla alındı! Sipariş No: ${orderNum}`);
    window.location.href = 'index.html';
  }
}
