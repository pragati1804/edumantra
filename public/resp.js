burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
rightnav =document.querySelector('.rightnav')
navlist =document.querySelector('.navlist')

console.log("hello");
//add event on click
burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-nav');
    rightnav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
    
});
// remove navbar once options are selected
navlist.addEventListener('click',()=>{
    navlist.classList.toggle('v-nav');
    rightnav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
});





 
