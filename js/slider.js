/**
 * ALEN CNC - REVOLUTION SLIDER STİLİ HERO SLİDER MOTORU (slider.js)
 * Artisan Mobilya & Revolution Slider benzeri yatay yönlü (slidingoverlayleft/right),
 * 3D arka plan paralaksı ve kademeli katman (staggered layer) animasyonlu geçiş sistemi.
 */

class HeroSlider {
  constructor(containerId = 'hero-slider', intervalTime = 6000) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.slides = Array.from(this.container.querySelectorAll('.hero-slide'));
    this.dotsContainer = document.getElementById('slider-dots');
    this.prevBtn = document.getElementById('slider-prev');
    this.nextBtn = document.getElementById('slider-next');
    
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.intervalTime = intervalTime;
    this.timer = null;
    this.isAnimating = false;
    this.animDuration = 900; // 900ms akıcı lüks geçiş

    if (this.totalSlides > 0) {
      this.init();
    }
  }

  init() {
    this.buildDots();
    this.bindEvents();
    this.setupInitialSlide();
    this.startAutoPlay();
  }

  setupInitialSlide() {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('active', 'slide-in-right', 'slide-in-left', 'slide-out-right', 'slide-out-left');
      if (i === 0) {
        slide.classList.add('active');
      }
    });
    this.updateDots(0);
  }

  buildDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('span');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slayt ${i + 1}`);
      dot.addEventListener('click', () => {
        if (i === this.currentIndex || this.isAnimating) return;
        const dir = i > this.currentIndex ? 'next' : 'prev';
        this.transitionTo(i, dir);
        this.resetTimer();
      });
      this.dotsContainer.appendChild(dot);
    }
  }

  updateDots(index) {
    if (!this.dotsContainer) return;
    const dots = this.dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  transitionTo(newIndex, direction = 'next') {
    if (this.isAnimating || newIndex === this.currentIndex) return;
    this.isAnimating = true;

    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[newIndex];

    // Önceki geçiş kalıntılarını temizle
    this.slides.forEach(s => {
      if (s !== currentSlide && s !== nextSlide) {
        s.classList.remove('active', 'slide-in-right', 'slide-in-left', 'slide-out-right', 'slide-out-left');
      }
    });

    currentSlide.classList.remove('active');
    if (direction === 'next') {
      // İleri (Sağdan Sola Geçiş): Yeni slayt sağdan girer, mevcut slayt sola kayar
      currentSlide.classList.add('slide-out-left');
      nextSlide.classList.add('slide-in-right');
    } else {
      // Geri (Soldan Sağa Geçiş): Yeni slayt soldan girer, mevcut slayt sağa kayar
      currentSlide.classList.add('slide-out-right');
      nextSlide.classList.add('slide-in-left');
    }

    nextSlide.classList.remove('active');
    // Reflow tetikle (animasyonun senkronize ve baştan başlaması için)
    void nextSlide.offsetWidth;

    // Hedef slaytı aktif yap (metin ve butonların kayarak giriş animasyonunu başlatır)
    nextSlide.classList.add('active');

    this.currentIndex = newIndex;
    this.updateDots(newIndex);

    // Animasyon tamamlandığında geçiş sınıflarını temizle
    setTimeout(() => {
      currentSlide.classList.remove('slide-out-left', 'slide-out-right');
      nextSlide.classList.remove('slide-in-right', 'slide-in-left');
      this.isAnimating = false;
    }, this.animDuration);
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.transitionTo(nextIndex, 'next');
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.transitionTo(prevIndex, 'prev');
  }

  goToSlide(index) {
    if (index >= 0 && index < this.totalSlides && index !== this.currentIndex) {
      const dir = index > this.currentIndex ? 'next' : 'prev';
      this.transitionTo(index, dir);
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => this.next(), this.intervalTime);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetTimer() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  bindEvents() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.next();
        this.resetTimer();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.prev();
        this.resetTimer();
      });
    }

    // Hover anında otomatik geçişi duraklat
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());

    // Dokunmatik Ekran (Swipe) Desteği
    let touchStartX = 0;
    let touchEndX = 0;

    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchStartX - touchEndX;
      if (Math.abs(diffX) > 45) {
        if (diffX > 0) {
          this.next();
        } else {
          this.prev();
        }
        this.resetTimer();
      }
    }, { passive: true });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.heroSlider = new HeroSlider('hero-slider', 6000);
});
