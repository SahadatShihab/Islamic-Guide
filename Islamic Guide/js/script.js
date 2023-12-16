
$('.slider_item').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});

// ================ counter part start ========

$('.count').counterUp({
  delay: 10,
  time: 1000
});



// ======== sticky part ========

let main_menu = document.querySelector('.main_menu');

window.addEventListener("scroll", function(){
  let scrolling = this.scrollY

  if(scrolling >100){
    main_menu.classList.add("menu_fixed");
  }
  else{
    main_menu.classList.remove("menu_fixed");
  }
})
 

// =======

AOS.init();