gsap.registerPlugin(ScrollTrigger)

window.addEventListener("DOMContentLoaded", () => {

    /* LENIS SMOOTH SCROLL (OPTIONAL) */
    lenis = new Lenis({
        autoRaf: true,
    })
    /* LIENIS SMOOTH SCROLL (OPTIONAL) */


    const sec1Container = document.querySelector('.section1 .container')
    const cardsContainer = sec1Container.querySelector('.cards')
    const cards = document.querySelectorAll('.card')
    const distance = cardsContainer.clientWidth - window.innerWidth
    
    gsap.to('.scroll', {
        autoAlpha:0,
        duration:0.2,
        scrollTrigger: {
            trigger: cardsContainer,
            start:'top top',
            end:'top top-=1',
            toggleActions: "play none reverse none"
        }
    })

    const scrollTween = gsap.to(cardsContainer, {
        x: - distance,
        ease: 'none', // linear progression
        // let's pin our container while our cardsContainer is animating
        scrollTrigger: {
            trigger: sec1Container,
            pin: true,
            scrub: true, // progress with the scroll
            start: 'top top',
            end: '+=' + distance
        }
    });

    cards.forEach(card => {
        const values = {
            // get a value between 30 and 50 or -30 and -50
            x: (Math.random() * 20 + 30) * (Math.random() < 0.5 ? 1 : -1),
            // get a value between 10 and 16 or -16 and -10
            y: (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1),
            // get a value between 10 and 20 or -10 and -20
            rotation: (Math.random() * 10 + 10) * (Math.random() < 0.5 ? 1 : -1)
        };

        gsap.fromTo(card, {
            // let's start from this 3 values
            rotation: values.rotation,
            xPercent: values.x,
            yPercent: values.y
        }, {
            // and finish to its 3 opposite values
            rotation: - values.rotation,
            xPercent: - values.x,
            yPercent: - values.y,
            ease: 'none', // linear progression
            scrollTrigger:{
                trigger:card,
                containerAnimation: scrollTween, // our tween will listen to our scrollTween container position
                start:'left 120%' ,
                end:'right -20%',
                scrub:true, // the animation progress with the scroll
            }
        })
    })



    const root = document.querySelector('.section2')
    const sentences = root.querySelectorAll('.sentence')

    const pinHeight = root.querySelector('.pin-height')
    const sec2Container = root.querySelector('.container')
    
    sentences.forEach(sentence => {
        wrapLettersInSpan(sentence)
    })

    ScrollTrigger.create({
        trigger: pinHeight, // Monitor the position of pin-height
        start: 'top top',
        end: 'bottom bottom',
        pin: sec2Container // The pinned section
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: pinHeight,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true // Progress linked to scrolling
        }
    })

    sentences.forEach((sentence, index) => {

        if(sentences[index+1]) {
            // Move the sentence above the viewport using y & yPercent
            tl.to(sentences[index], {
                yPercent: -50,
                y: '-50vh',
                ease: 'power4.in',
            })

            // Move the letters above the sentence using y & yPercent
            tl.to(sentences[index].querySelectorAll('span'), {
                yPercent: -50,
                y: '-50vh',
                stagger: -0.02, // Stagger in the appearance
                ease: 'power2.in',
            }, '<') // Means the animation starts at the start of the previous tween

            // Move the next sentence (index+1) 
            // to the middle of the viewport using y & yPercent
            tl.from(sentences[index+1], {
                yPercent: 50, // Starts at 50 and ends at 0
                y: '50vh', // Starts at 50vh and ends at 0
                ease: 'power4.out',
            }, '<')

            // Move the next letters (index+1)
            // to the middle of the viewport using y & yPercent
            tl.from(sentences[index+1].querySelectorAll('span'), {
                yPercent: 50, // Starts at 50 and ends at 0
                y: '50vh', // Starts at 50vh and ends at 0
                ease: 'power2.out',
                stagger: -0.02, // Stagger in the appearance
            }, '<')
        }
    })
    

})


function wrapLettersInSpan(element) {
    const text = element.textContent;
    element.innerHTML = text
        .split('')
        .map(char => char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`)
        .join(' ');
}