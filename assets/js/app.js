// import barba from '@barba/core'


// ==== GSAP .:. ====

function pageTransition() {
    console.log('page transition working')
    const tl = gsap.timeline()
    tl
        .to('.loading-screen', {
        duration: 1.2,
        width: '100%',
        left: '0%',
        ease: 'Expo.easeInOut'
        })
        .to('.loading-screen', {
        duration: 1,
        width: '100%',
        left: '100%',
        ease: 'Expo.easeInOut',
        delay: 0.3
        })
        .set('.loading-screen', {
        left: '-100%'
        })
}

function contentAnimation() {
    console.log('content animation working')
    // const tl = gsap.timeline()
    // tl
    //     .from('.animate-this', {
    //         duration: 1,
    //         y: 30, //add to Anki
    //         opacity: 0, 
    //         stagger: 0.4, //add to Anki, 5*s -
    //         delay: 0.2
    //     })
}

// === Barba JS ==== .:.

function delay(n) {
    n = n || 2000
    return new Promise( (done) => {
        setTimeout( () => {
            done()
        }, n)
    })
}

$(function() {
    console.log('barba-init working')
    barba.init({
        sync: true,
        transitions: [
            { 
                async leave(){
                    console.log('barba-leave working')
                    const done = this.async()
                    pageTransition()
                    await delay(1000)
                    done()
                },

                async enter(){
                    console.log('barba-enter working')                    
                    contentAnimation()
                },

                async once(){
                    console.log('barba-once working')
                    contentAnimation()
                }
            }
        ]
    })
})