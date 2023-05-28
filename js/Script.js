// Despliegue de menu-btn & Cierre de Despliegue con nav-close 

const navbar = document.querySelector('.header .navbar');

 document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
 }

 document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
 }

// Dspliegue de search-form y Cirre de Despliegue con close-search

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
    
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

// Window onscroll and onload

window.onscroll = () =>{
   navbar.classList.remove('active');

   if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
   } else {
      document.querySelector('.header').classList.remove('active');
   }

};

window.onload = () =>{
   if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
   } else {
      document.querySelector('.header').classList.remove('active');
   }

   if (window.scrollX > 0) {
      document.querySelector('.header').classList.add('active');
   }

};

//  Animated "home-slider" en Home Section 

var swiper = new Swiper('.home-slider', {
    loop:true,
    grabCursor:true,
   //  mousewheel: true,
   //  keyboard: true,
   //  cssMode: true,
   //  clickable: true,
   navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

//  Animated "product-slider" en Shop Section

var swiper = new Swiper(".product-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   // cssMode: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
         },
        640: {
          slidesPerView: 2,
         },
        768: {
          slidesPerView: 3,
         },
        1024: {
          slidesPerView: 4,
         },
    },
 });

//  Animated "review-slider" en review Section

var swiper = new Swiper(".review-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   // cssMode: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
         },
        640: {
          slidesPerView: 2,
         },
        768: {
          slidesPerView: 3,
         },
      //   1024: {
      //     slidesPerView: 4,
      //    },
    },
 });

 //  Animated "blogs-slider" en blogs Section

var swiper = new Swiper('.blogs-slider',{
   loop:true, 
   grabCursor:true,
   spaceBetween: 10,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
   },
});

//  Animated "clients-slider" clients Section

var swiper = new Swiper('.clients-slider',{
   loop:true, 
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
       0: {
         slidesPerView: 1,
       },
       640: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
   },
});