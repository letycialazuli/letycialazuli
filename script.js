


document.addEventListener('DOMContentLoaded', function () {
  // === Particle JS ===
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#ffffff',
    sizeVariations: 2,
    maxParticles: 120,
    speed: 0.5,
    minDistance: 100,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          minDistance: 80,
          color: '#48F2E3',
          connectParticles: true
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          minDistance: 50,
          connectParticles: true
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]
  });

  // === Inputs ===
  document.querySelectorAll('.t-input').forEach(input => {
    input.addEventListener('blur', function () {
      if (this.value === '') {
        this.classList.add('empty');
        this.classList.remove('not-empty');
      } else {
        this.classList.add('not-empty');
        this.classList.remove('empty');
      }
    });
  });

  // === Botão de envio de formulário (placeholder) ===
  document.querySelectorAll('.btn-sub').forEach(btn => {
    btn.addEventListener('click', function () {
      alert("Sorry mate! Form not yet working.");
    });
  });

  // === Scroll suave ===
  document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])').forEach(link => {
    link.addEventListener('click', function (e) {
      const pathname = location.pathname.replace(/^\//, '');
      const hostname = location.hostname;

      if (pathname === this.pathname.replace(/^\//, '') && hostname === this.hostname) {
        let target = document.querySelector(this.hash) || document.getElementsByName(this.hash.slice(1))[0];
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 90,
            behavior: 'smooth'
          });
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      }
    });
  });
});

$('a[href*="#"]:not([href="#"])').click(function (event) {
  var target = $(this.hash);
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top - 90
    }, 1000);
  }
});



// Otimizado para iOS
function initTestimonialSlider() {
  const slider = document.getElementById("testim");
  const dots = [...document.getElementById("testim-dots").children];
  const slides = [...document.getElementById("testim-content").children];
  const arrowLeft = document.getElementById("left-arrow");
  const arrowRight = document.getElementById("right-arrow");
  
  let currentIndex = 0;
  let autoScroll = true;
  let scrollInterval;

  // Função para mostrar slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.classList.toggle("inactive", i !== index);
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    
    currentIndex = index;
  }

  // Controles
  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  // Event Listeners
  arrowLeft.addEventListener("click", () => {
    autoScroll = false;
    clearInterval(scrollInterval);
    prevSlide();
  });

  arrowRight.addEventListener("click", () => {
    autoScroll = false;
    clearInterval(scrollInterval);
    nextSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      autoScroll = false;
      clearInterval(scrollInterval);
      showSlide(i);
    });
  });

  // Toque para mobile
  slider.addEventListener("touchstart", handleTouchStart, {passive: true});
  slider.addEventListener("touchend", handleTouchEnd, {passive: true});

  // Auto-scroll
  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      if (autoScroll) nextSlide();
    }, 4500);
  }

  startAutoScroll();
}

// Inicialize após o DOM carregar
document.addEventListener('DOMContentLoaded', initTestimonialSlider);
