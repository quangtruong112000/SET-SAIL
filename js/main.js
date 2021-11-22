const openBar = document.querySelector('.openBar');
const closeBar = document.querySelector('.closeBar');
const Bar = document.querySelector('.bar');
const barInfo = document.querySelector('.bar-info');

openBar.addEventListener('click', () => {
    closeBar.style.display = "block",
        Bar.style.display = "block",
        Bar.style.right = "0",
        Bar.style.top = "-10px"
});

closeBar.addEventListener('click', () => {
    openBar.style.display = "block",
        closeBar.style.display = "none",
        Bar.style.display = "none"
});

const openSearch = document.querySelector('.open-Search');
const closeSearch = document.querySelector('.close-Search');
const searchDisplay = document.querySelector('.search');
const searchDisplayEvent = document.querySelector('.search-display');

openSearch.addEventListener('click', () => {
    searchDisplay.style.display = "block",
        closeSearch.style.display = "block"
})

closeSearch.addEventListener('click', () => {
    searchDisplay.style.display = "none"
})

searchDisplayEvent.addEventListener('click', (event) => {
    event.stopPropagation();
})

searchDisplay.addEventListener('click', () => {
    searchDisplay.style.display = "none"
})

// Slider
const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    direcion: 'horizontal',
    loop: true,
    duration: 700,
    autoplay: true,
});

// Address
$('.address-item').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
});

//Review Slide
$('.review-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
});

//Team
$('.team-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
});

//Count
var $findme = $('#numbers');
var exec = false;
function Scrolled() {
  $findme.each(function() {
    var $section = $(this),
      findmeOffset = $section.offset(),
      findmeTop = findmeOffset.top,
      findmeBottom = $section.height() + findmeTop,
      scrollTop = $(document).scrollTop(),
      visibleBottom = window.innerHeight,
      prevVisible = $section.prop('_visible');

    if ((findmeTop > scrollTop + visibleBottom) ||
      findmeBottom < scrollTop) {
      visible = false;
    } else visible = true;

    if (!prevVisible && visible) {
    	if(!exec){
              $('.fig-number').each(function() {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 1000,

            step: function(now) {
              $(this).text(Math.ceil(now));
              exec = true;
            }
          });
        });
      }
    }
    $section.prop('_visible', visible);
  });

}

function Setup() {
  var $top = $('#top'),
    $bottom = $('#bottom');

  $top.height(500);
  $bottom.height(500);

  $(window).scroll(function() {
    Scrolled();
  });
}
$(document).ready(function() {
  Setup();
})

// Responsive
//Header
const barTablet = document.querySelector('.bar-tablet');
const menuNav = document.querySelector('.menu-nav');
const menuLinks = document.querySelectorAll('ul.menu-nav>li');

barTablet.addEventListener('click', () => {
  menuNav.classList.toggle("is-active-menu-nav");
})

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menuLink.classList.toggle(".menu-subnav-is-active");
  })
})

 
