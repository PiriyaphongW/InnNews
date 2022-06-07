function toggle(open) {
    const toggleClose = document.getElementById('nav-open')
    toggleClose.classList.remove('active')

    const toggleCloseMain = document.getElementById('nav-main')
    toggleCloseMain.classList.add('d-none')
}

function toggleHidden(close) {
    const toggleCloseMain = document.getElementById('nav-main')
    toggleCloseMain.classList.remove('d-none')
    const toggleClose = document.getElementById('nav-open')
    toggleClose.classList.add('active')
}



$('.owl-carousel-first').owlCarousel({
  items:1,
  loop:true,
  merge:true,
  nav:true,
  navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],

});


$('.owl-carousel-second').owlCarousel({
  items:5,
  loop:true,
  dots:false,
  nav:true,
 

});
 
 



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