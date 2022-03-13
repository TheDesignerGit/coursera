const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('.navbar__logo')
const body = document.querySelector('body')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-hero", {
    duration:  0.65, 
    ease: "power.in",
    opacity: 0,
    y: -150,
    stagger: 0.3,
})
        // add to Anki ,10*s 

gsap.from(".animate-services", {
    scrollTrigger: '.animate-services',
    duration:  0.45, 
    ease: "power.in",
    opacity: 0,
    x: -150,
    stagger: 0.2,
})
        // add to Anki, scrollTrigger

gsap.from(".animate-img", {
    scrollTrigger: '.animate-services',
    duration:  2, 
    opacity: 0,
    x: 200,
    stagger: 0.3,
    delay: 0.3,
})

gsap.from(".animate-membership", {
    scrollTrigger: '.animate-membership',
    duration:  0.6, 
    ease: "power.in",
    opacity: 0,
    y: 150,
    stagger: 0.2,
})


        
gsap.from(".animate-card", {
    scrollTrigger: '.animate-card',
    duration:  0.6, 
    ease: "power.in",
    opacity: 0,
    y: 150,
    stagger: 0.2,
    delay: 0.2,
})
        // add to Anki, delay property

gsap.from(".animate-team", {
    scrollTrigger: '.animate-team',
    duration:  0.8, 
    ease: "power.in",
    opacity: 0,
    y: 150,
    stagger: 0.2,
})

gsap.from(".animate-email", {
    scrollTrigger: '.email__content',
    duration:  0.6, 
    ease: "power.in",
    opacity: 0,
    y: 150,
    stagger: 0.1,
    delay: 0.2,
})