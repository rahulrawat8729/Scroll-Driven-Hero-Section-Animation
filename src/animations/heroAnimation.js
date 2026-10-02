import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function createHeroScrollAnimation() {
  const section = document.querySelector('.hero-section')

  if (!section) {
    return () => {}
  }

  const stage = section.querySelector('.hero-stage')
  const road = section.querySelector('.hero-road')
  const car = section.querySelector('.hero-car')
  const trail = section.querySelector('.hero-trail')
  const title = section.querySelector('.hero-title')

  const letters = section.querySelectorAll('.value-letter')

  const card1 = section.querySelector('.stat-card-1')
  const card2 = section.querySelector('.stat-card-2')
  const card3 = section.querySelector('.stat-card-3')
  const card4 = section.querySelector('.stat-card-4')

  if (
    !stage ||
    !road ||
    !car ||
    !trail ||
    !title ||
    !letters.length
  ) {
    return () => {}
  }

  const ctx = gsap.context(() => {
    /*
      IMPORTANT:
      The original reference uses 150px as the
      animation width even though the actual
      car image is visually much wider.
    */
    const animationCarWidth = 150

    /* =========================================
       INITIAL STATE
    ========================================= */

    gsap.set(car, {
      x: 0,
    })

    /*
      Use transform-based scaling for the trail
      instead of changing its width on every
      scroll update.
    */
    gsap.set(trail, {
      width: '100%',
      scaleX: 0,
      transformOrigin: 'left center',
    })

    gsap.set(letters, {
      opacity: 0,
    })

    gsap.set([card1, card2, card3, card4], {
      opacity: 0,
    })

    /* =========================================
       LETTER POSITIONS
    ========================================= */

    const titleRect = title.getBoundingClientRect()

    const letterOffsets = Array.from(letters).map(
      (letter) => letter.offsetLeft
    )

    /* =========================================
       MAIN CAR SCROLL ANIMATION
    ========================================= */

    gsap.to(car, {
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: stage,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },

      x: () => {
        return window.innerWidth - animationCarWidth
      },

      ease: 'none',

      onUpdate: function () {
        /*
          Match the original reference:
          use 150px for calculating the car
          position.
        */
        const carX =
          Number(gsap.getProperty(car, 'x')) +
          animationCarWidth / 2

        /* =========================================
           REVEAL LETTERS
        ========================================= */

        letters.forEach((letter, index) => {
          const letterX =
            titleRect.left + letterOffsets[index]

          if (carX >= letterX) {
            letter.style.opacity = '1'
          } else {
            letter.style.opacity = '0'
          }
        })

        /* =========================================
           GREEN TRAIL

           Transform-based animation is cheaper
           than changing width during scrolling.
        ========================================= */

        const roadWidth = road.getBoundingClientRect().width

        const trailProgress = Math.min(
          Math.max(carX / roadWidth, 0),
          1
        )

        gsap.set(trail, {
          scaleX: trailProgress,
        })
      },
    })

    /* =========================================
       STAT CARD 1
    ========================================= */

    if (card1) {
      gsap.to(card1, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: 'top+=400 top',
          end: 'top+=600 top',
          scrub: true,
        },
      })
    }

    /* =========================================
       STAT CARD 2
    ========================================= */

    if (card2) {
      gsap.to(card2, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: 'top+=600 top',
          end: 'top+=800 top',
          scrub: true,
        },
      })
    }

    /* =========================================
       STAT CARD 3
    ========================================= */

    if (card3) {
      gsap.to(card3, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: 'top+=800 top',
          end: 'top+=1000 top',
          scrub: true,
        },
      })
    }

    /* =========================================
       STAT CARD 4
    ========================================= */

    if (card4) {
      gsap.to(card4, {
        opacity: 1,

        scrollTrigger: {
          trigger: section,
          start: 'top+=1000 top',
          end: 'top+=1200 top',
          scrub: true,
        },
      })
    }

    /* =========================================
       REFRESH AFTER CAR LOAD
    ========================================= */

    if (car.complete) {
      ScrollTrigger.refresh()
    } else {
      car.addEventListener('load', ScrollTrigger.refresh)
    }
  }, section)

  return () => {
    ctx.revert()
  }
}