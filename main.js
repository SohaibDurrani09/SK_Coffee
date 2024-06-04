/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id')
  
      // Check if a perfect match exists first
      let matchingLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
  
      // If no perfect match, use partial match as fallback (but less ideal)
      if (!matchingLink) {
        matchingLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      }
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        matchingLink?.classList.add('active-link') // Add active-link only if matchingLink exists
      }else{
        matchingLink?.classList.remove('active-link') // Remove only if matchingLink exists
      }
    })
  }
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

/*==================== changing testimonials ====================*/

const testimonials = [
    {
        description: "The best food in the entire city, with excellent customer service, the best meals and at the best price, visit us. Great variety of dishes and a pleasant atmosphere. ",
        name: "Courtney Henry",
        address: "Islamabad Pakistan",
        rating: 4
    },
    {
        description: "A wonderful experience with fantastic food and exceptional service. Highly recommended! Great variety of dishes and a pleasant atmosphere. Will visit again soon!",
        name: "Jane Doe",
        address: "Lahore Pakistan",
        rating: 5
    },
    {
        description: "Great variety of dishes and a pleasant atmosphere. Will visit again soon! A wonderful experience with fantastic food and exceptional service. Highly recommended!",
        name: "John Smith",
        address: "Karachi Pakistan",
        rating: 4
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.querySelector('.testimonial__description').textContent = testimonial.description;
    document.querySelector('.customer-name').textContent = testimonial.name;
    document.querySelector('.customer-address').textContent = testimonial.address;

    const ratingElements = document.querySelectorAll('.customer-ratings i');
    ratingElements.forEach((star, idx) => {
        star.classList.remove('fa-solid', 'fa-regular');
        star.classList.add(idx < testimonial.rating ? 'fa-solid' : 'fa-regular');
    });
}

document.querySelector('.fa-arrow-left').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
});

document.querySelector('.fa-arrow-right').addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
});

// Initial load
updateTestimonial(currentIndex);
