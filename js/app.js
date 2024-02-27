/* #Hamburger
================================================== */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const headerNav = document.querySelector('.header-nav');
const body = document.querySelector('body');
const headerLinks = document.querySelectorAll('.header-links a');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

headerLinks.forEach((a) => {
  a.addEventListener('click', (e) => {
    if (header.classList.contains('show-menu')) {
      hamburgerBtn.classList.remove('is-active');
      header.classList.remove('show-menu');
      body.classList.remove('no-scroll');
    }
  });
});

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    if (accordion.classList.contains('on-hover') && window.innerWidth > 1024) {
      collapsibles.forEach((collapsible) => {
        collapsible.addEventListener('mouseenter', (e) => {
          const collapse = collapsible.querySelector('.collapse');

          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });

          collapsible.classList.add('show');

          if (collapsible.classList.contains('show')) {
            gsap.to(collapse, {
              height: 'auto',
              duration: .4,
              ease: 'power1.inOut'
            });
          } else {
            gsap.to(collapse, {
              height: '0'
            });
          }
        });
      });
    } else {
      accordion.addEventListener('click', (e) => {
        if (e.target.closest('.collapse-toggler')) {
          e.preventDefault();

          const collapsible = e.target.closest('.collapsible');
          const collapse = collapsible.querySelector('.collapse');

          if (!accordion.classList.contains('no-close')) {
            collapsibles.forEach((coll) => {
              if (coll.classList.contains('show') && coll != collapsible) {
                collCollapse = coll.querySelector('.collapse');

                coll.classList.remove('show');
                gsap.to(collCollapse, {
                  height: '0'
                });
              }
            });
          }

          collapsible.classList.toggle('show');

          if (collapsible.classList.contains('show')) {
            gsap.to(collapse, {
              height: 'auto',
              duration: .4,
              ease: 'power1.inOut'
            });
          } else {
            gsap.to(collapse, {
              height: '0'
            });
          }
        }
      });
    }

  })
}

/* #Reviews Swiper
================================================== */
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: true
});

/* #Open Gallery Btn
================================================== */
const openGalleryBtn = document.querySelector('#openGalleryBtn');

openGalleryBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#galleryGrid ul li:nth-of-type(1) a').click();
});