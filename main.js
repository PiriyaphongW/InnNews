function toggle(open) {
  const toggleClose = document.getElementById('nav-open')
  toggleClose.classList.remove('active-mobile')

  const toggleCloseMain = document.getElementById('nav-main')
  toggleCloseMain.classList.add('d-none')
}

function toggleHidden(close) {
  const toggleCloseMain = document.getElementById('nav-main')
  toggleCloseMain.classList.remove('d-none')
  const toggleClose = document.getElementById('nav-open')
  toggleClose.classList.add('active-mobile')
}



$('.owl-carousel-first').owlCarousel({
  items: 1,
  loop: true,
  merge: true,
  nav: true,
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],

});


$('.owl-carousel-second').owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  responsive: {
    576: {
      items: 5,
    },

  }

});


$('.owl-carousel-third').owlCarousel({
  items: 1,
  merge: true,
  loop: true,
  video: true,
  lazyLoad:true,
  center: true,
  videoWidth: 400,
  videoHeight: 400,

  responsive: {
    480: {
      items: 2
    },
    600: {
      items: 4
    }
  }
})





// function clickSubmenu(openSub){
//     const toggleSubmenu = document.getElementById('toggle-sub-topic')   
//     console.log(toggleSubmenu.classList); 

//     let array = [];
//     toggleSubmenu.classList.forEach(element => {

//         array.push(element)
//     }); 
//     console.log(array);

//     if(array .includes('d-none')){
//         toggleSubmenu.classList.remove('d-none') 
//     }else{
//         toggleSubmenu.classList.add('d-none') 
//     }

// }