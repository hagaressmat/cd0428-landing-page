/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navMenu = document.querySelector('#navbar__list');
const list = document.createDocumentFragment() ;
const sections =  document.querySelectorAll('section');

function addNav(){
    for (let section of sections){
        const element = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = section.getAttribute('data-nav');
        link.href = `#${section.getAttribute('id')}`;
        link.className ="menu__link";
        link.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        element.appendChild(link);
        list.appendChild(element);

        
    }
    navMenu.appendChild(list);
}
addNav();

// Add class 'active' to section when near top of viewport

function activeClass(){
    const sectionActive = document.querySelectorAll('section');
    for (let section of sectionActive){
        const distance = section.getBoundingClientRect();

        if (distance.top <= 300 && distance.bottom >= 400) {
            section.classList.add('your-active-class');
            
        } else {
            section.classList.remove('your-active-class');
          }
    }
}

document.addEventListener('scroll', activeClass);



function activeNav(){

    const navItem = document.querySelectorAll('.menu__link');
    let counter = sections.length;

    while(--counter && window.scrollY + 300 < sections[counter].offsetTop) {
    for (let item of navItem){
        item.classList.remove('active');
    }}
    navItem[counter].classList.add('active');

    
}

document.addEventListener('scroll', activeNav);

// Scroll to anchor ID using scrollTO event
window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


