import Swiper from './swiper';

let swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// cursor 
document.addEventListener("DOMContentLoaded", function (event) {
    let cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll(".hoverable");
    let initCursor = false;

    for (let i = 0; i < links.length; i++) {
        let selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--link");
        });
    }

    window.onmousemove = function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        if (!initCursor) {
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };
});


const openNav = document.querySelector('.header__container__open-menu');
const closeNav = document.querySelector('.header__container__mobile-nav__close-menu');

function openMenu(){
    const menu = gsap.timeline();
    menu.to('body', {})
    menu.to('.header__container__mobile-nav', {opacity: 1, visibility: 'visible'});
    menu.to('.link-anime', {stagger: 0.2, opacity: 1, marginLeft: 0})
  
    closeNav.addEventListener('click', () => {
        menu.reversed(true)
    })
};

openNav.addEventListener('click', openMenu);

function toggleLinks(){
    const links = document.querySelectorAll('.a');
    
    for(let i = 0; i < links.length; i++) {
        console.log(links[i])

        links[0].addEventListener('click', () => {
            links[1].classList.remove('active')
            links[2].classList.remove('active')
            links[3].classList.remove('active')
            links[4].classList.remove('active')
            links[5].classList.remove('active')
            links[0].classList.add('active')
        });

        links[1].addEventListener('click', () => {
            links[1].classList.add('active')
            links[2].classList.remove('active')
            links[3].classList.remove('active')
            links[4].classList.remove('active')
            links[5].classList.remove('active')
            links[0].classList.remove('active')
        });

        links[2].addEventListener('click', () => {
            links[1].classList.remove('active')
            links[2].classList.add('active')
            links[3].classList.remove('active')
            links[4].classList.remove('active')
            links[5].classList.remove('active')
            links[0].classList.remove('active')
        });

        links[3].addEventListener('click', () => {
            links[1].classList.remove('active')
            links[2].classList.remove('active')
            links[3].classList.add('active')
            links[4].classList.remove('active')
            links[5].classList.remove('active')
            links[0].classList.remove('active')
        });

        links[4].addEventListener('click', () => {
            links[1].classList.remove('active')
            links[2].classList.remove('active')
            links[3].classList.remove('active')
            links[4].classList.add('active')
            links[5].classList.remove('active')
            links[0].classList.remove('active')
        });

        links[5].addEventListener('click', () => {
            links[1].classList.remove('active')
            links[2].classList.remove('active')
            links[3].classList.remove('active')
            links[4].classList.remove('active')
            links[5].classList.add('active')
            links[0].classList.remove('active')
        });
    }
};
toggleLinks();