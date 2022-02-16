//  ========  Show Menu .:.  ==========

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
        console.log('toggled on')  
        // to-fix  
    })
}

//  ========  Hide Menu .:.  ==========
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
        console.log('toggled off')  
    })
}

//  ========  Remove Mobile Menu .:.  ==========
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))


//  ========  Change BG header  .:.  ==========
function scrollHeader() {
    // console.log(scrollY)
    // const header = document.getElementById('header');
    // if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

    // console.log(scrollY)
    const header = document.getElementById('header-bg');
    // header.style.opacity = `${(scrollY / 200)}`
    // fadeFX(1)

    if ( (scrollY / 200) < 0.9) {
        header.style.opacity = `${(scrollY / 200)}`
    } else {
        header.style.opacity = 0.9
    }

    console.log(`opacity is ${header.style.opacity}`)
}
window.addEventListener('scroll', scrollHeader)

// function scrollFade (num) {
//     if ( (scrollY / 200) > 1) {
//         header.style.opacity = num
//     } else {
//         header.style.opacity = `${(scrollY / 200)}`
//     }
// }

// 10*s - add to Anki, header bg on scroll effect


//  ========  Discover Swiper .:.  ==========
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});

// 5s - add to Anki



//  ========  Video .:.  ==========

const videoFile = document.querySelector('#video-file'),
    videoButton = document.querySelector('#video-button'),
    videoIcon = document.querySelector('#video-icon')

function playPause() {
    if(videoFile.paused) {
        videoFile.play()

        videoIcon.classList.add("ri-pause-line")
        videoIcon.classList.remove("ri-play-line")
    } else {
        videoFile.pause()

        videoIcon.classList.remove("ri-pause-line")
        videoIcon.classList.add("ri-play-line")
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', finalVideo)



//  ========  Form .:.  ==========

const form = document.querySelector('.subscribe__form')
form.addEventListener('submit', (e)=> e.preventDefault() )
// 5s - add to Anki, 



//  ========  Show scroll up .:.  ==========
const scrollTop = () => {
    const scrollUp = document.querySelector('#scroll-up')
    if(this.scrollY >= 780) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    // 5*s - add to Anki,  scroll to top button
}
window.addEventListener('scroll', scrollTop)

//  ========  Scroll Sections Active Link  .:.  ==========
            // 5*s - add to Anki,  study this until its clear as day
const sections = document.querySelectorAll('section[id]')  // add to Anki, selector

const scrollActive = () => {
    const scrollY = window.pageYOffset // add to Anki,

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id') // add to Anki,
            // console.log(sectionId)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



//  ========  Dark/light theme .:.  ==========
            // 10*s - add to Anki,  study this until its clear as day
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// validate what the current theme is
function getCurrentTheme () {document.body.classList.contains(darkTheme) ? 'dark' : 'light'}
    // add to Anki, contains, ternary
function  getCurrentIcon () {themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'}


// Has user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme)
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove' ](iconTheme)
}


// Toggle theme w/ the button
themeButton.addEventListener('click', () => {
    const buttonShadow = document.querySelector('.buttonShadow')
    console.log(buttonShadow)

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    buttonShadow.classList.toggle(darkTheme)

// save the theme and icon chosen
    localStorage.setItem('selected-theme', getCurrentTheme() )
    localStorage.setItem('selected-icon', getCurrentIcon() )
})

        // to-fix  local storage not working


//  ========  Reveal on scroll .:.  ==========
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true
})

sr.reveal(`.home__data, .home__social-link, 
                .home__info, discover__container, 
                .experience__data, .experience__overlay
                .place__card, .sponsor__content,
                .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})
 
sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: 'left',
})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: 'right',
    interval: 100,
}) 