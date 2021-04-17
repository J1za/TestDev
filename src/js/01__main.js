//burger menu 

const burgerMenu = document.querySelector('.burger-menu');
const HeaderMenu = document.querySelector('.mega-menu');

burgerMenu.addEventListener('click', openMenu);
function openMenu() {
  this.classList.toggle('active');
  HeaderMenu.classList.toggle('mega-menu--active');
}

document.addEventListener("DOMContentLoaded", () => {
  let menuBgSwiper = new Swiper('.menu-bg-slider', {
    effect: 'fade',
    slidesPerView: 1,
    speed: 500
  });

  let menuSwiper = new Swiper('.menu-slider', {
    // Optional parameters
    direction: 'vertical',
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    mousewheel: true,
    speed: 400,
    grabCursor: true,
    autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 3,
    thumbs: {
      swiper: menuBgSwiper
    },
    breakpoints: {
      300: {
        spaceBetween: -140,
      },
      768: {
        spaceBetween: -50,
      },
      1024: {
        spaceBetween: 0,
      },
    }
  });
});

const slideIcon = document.querySelectorAll('.swiper-slide__icon');

document.querySelectorAll('.items__content').forEach(n => {
  const itemsTop = new Swiper(n.querySelector('.items-scroll'), {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
        loop: true,
      },
    },
  });


  const itemsThumbs = new Swiper(n.querySelector('.items-slider'), {

    spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
    grabCursor: true,
    breakpoints: {
      950: {
        slidesPerView: 2,
      },
      300: {
        spaceBetween: 70,
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
    on: {
      init: function () {
        slideIcon.forEach(elem => {
          elem.addEventListener('click', () => {
            elem.parentNode.classList.toggle('tolltip--open')
          });
        })
      },
      realIndexChange: function () {
        slideIcon.forEach(elem => {
          elem.parentNode.classList.remove('tolltip--open')
        });
      },
    },
  });
  itemsTop.controller.control = itemsThumbs;
  itemsThumbs.controller.control = itemsTop;
});


const itemsTop = new Swiper('.items-scroll', {
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  mousewheel: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
      loop: true,
    },
  },
});



if (itemsTop[0]) {
  true
} else {
  const itemsThumbs = new Swiper('.items-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    mousewheel: true,
    observer: true,
    observeParents: true,
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 2,
      },
      300: {
        spaceBetween: 70,
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
    on: {
      init: function () {
        slideIcon.forEach(elem => {
          elem.addEventListener('click', () => {
            elem.parentNode.classList.toggle('tolltip--open')
          });
        })


      },
      realIndexChange: function () {
        slideIcon.forEach(elem => {
          elem.parentNode.classList.remove('tolltip--open')
        })
      },
    },
  });
  itemsTop.controller.control = itemsThumbs;
  itemsThumbs.controller.control = itemsTop;
}



document.querySelectorAll('.items__content').forEach(n => {


})

//swiper choose size
const scrollbarSwiper = new Swiper('.items-scrollbar', {
  grabCursor: true,
  observer: true,
  observeParents: true,
  resizeObserver: true,
  scrollbar: {
    el: '.swiper-scrollbar-wallet',
    draggable: true,
    dragSize: 20,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

})





const Header = document.querySelector('header');
const sectionMain = document.querySelector('.main');
const sectionItems = document.querySelector('.items');

if (sectionMain) {
  sectionMain.style.height = (window.innerHeight - Header.clientHeight) + 'px';
  window.addEventListener('resize', () => {
    sectionMain.style.height = (window.innerHeight - Header.clientHeight) + 'px';
  });
}
if (sectionItems) {
  sectionItems.style.height = (window.innerHeight - Header.clientHeight) + 'px';
  window.addEventListener('resize', () => {
    sectionItems.style.height = (window.innerHeight - Header.clientHeight) + 'px';
  });
}







//video Hover and click
const sectionMainInner = document.querySelectorAll('.main__inner');

sectionMainInner.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.childNodes[1].classList.toggle('main__logo--remove');
  })
  for (let i = 0; i < elem.childNodes.length; i++) {

    elem.childNodes[i].addEventListener('mouseover', () => {
      if (elem.childNodes[i].classList.contains('main__video')) {
        for (let k = 0; k < elem.childNodes[i].childNodes.length; k++) {
          console.log()
          if (elem.childNodes[i].childNodes[k].className == "clip") {
            elem.childNodes[i].childNodes[k].play();
            elem.childNodes[i].childNodes[k].muted = true;
            elem.childNodes[i].childNodes[k].style.transform = "scale(1.4)";
            elem.childNodes[i].childNodes[k].classList.add('width');
            if (elem.childNodes[i].childNodes[k].className == "clip width") {
              elem.childNodes[i].classList.add('video--width')
            }

          }
        }
      }
    })
    elem.childNodes[i].addEventListener('click', () => {
      elem.childNodes[i].classList.toggle('video--fixed');
      for (let k = 0; k < elem.childNodes[i].childNodes.length; k++) {
        if (elem.childNodes[i].childNodes[k].className == "clip width") {
          elem.childNodes[i].childNodes[k].play();
          elem.childNodes[i].childNodes[k].muted = false;
          elem.childNodes[i].childNodes[k].muted = true;
          elem.childNodes[i].childNodes[k].muted = false;
        }
        if (!(elem.childNodes[i].classList.contains("video--fixed"))) {
          elem.childNodes[i].childNodes[k].muted = true;
        }
      }
    })

    elem.childNodes[i].addEventListener('mouseleave', () => {
      elem.childNodes[i].classList.remove('video--width');
      for (let k = 0; k < elem.childNodes[i].childNodes.length; k++) {
        if (elem.childNodes[i].childNodes[k].className == "clip width") {
          elem.childNodes[i].childNodes[k].pause();
          elem.childNodes[i].childNodes[k].classList.remove('width');
          elem.childNodes[i].childNodes[k].style.width = ''
        }
        if (elem.childNodes[i].classList.contains("video--fixed")) {
          elem.childNodes[i].childNodes[k].play();
        }
      }

    })
  }
})


const numberWallet = document.querySelectorAll('.swiper-slide__price-wallet span');

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    numberWallet.forEach(elem => {
      elem.style.cssText = "opacity: 1; visibility: visible;";
      elem.textContent = (elem.textContent * data[26].rate).toFixed(0);

      if (elem.textContent == 'NaN') {
        elem.textContent = 'XXX';
      }
    })

  });



//tabs Slider
const btns = document.querySelectorAll(".items__tabs li a");
const tabContent = document.querySelectorAll(".items__content");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    addClassFunc(btns[i], "items__tabs--active");
    clearClassFunc(i, btns, "items__tabs--active");

    addClassFunc(tabContent[i], "items__content--active");
    clearClassFunc(i, tabContent, "items__content--active");
  });
}

function addClassFunc(elem, elemClass) {
  elem.classList.add(elemClass);
}

function clearClassFunc(indx, elems, elemClass) {
  for (let i = 0; i < elems.length; i++) {
    if (i === indx) {
      continue;
    }
    elems[i].classList.remove(elemClass);
  }
}





