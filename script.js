


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



// vars
'use strict'
var	testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
    
    testim.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })
  
    testim.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
      
        touchPosDiff = touchStartPos - touchEndPos;
      
        console.log(touchPosDiff);
        console.log(touchStartPos);	
        console.log(touchEndPos);	

      
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
          return;
        }
      
    })
}

// Fix para header no iOS (segunda instância)
setTimeout(function() {
  window.scrollTo(0, 0);
}, 200);



