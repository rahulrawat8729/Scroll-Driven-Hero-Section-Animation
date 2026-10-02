import gsap from 'gsap'

export function createIntroAnimation() {
  const title = document.querySelector('.hero-title')

  const cards = [
    document.querySelector('.stat-card-1'),
    document.querySelector('.stat-card-2'),
    document.querySelector('.stat-card-3'),
    document.querySelector('.stat-card-4'),
  ].filter(Boolean)

  if (!title) {
    return () => {}
  }

  const ctx = gsap.context(() => {
    /* =========================================
       TITLE INTRO

       We animate the title container only.
       Individual letters are controlled by
       the scroll animation.
    ========================================= */

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    )

    /* =========================================
       CARD INTRO

       Do NOT animate opacity here because
       ScrollTrigger controls card opacity.

       We only give the cards a small vertical
       entrance movement.
    ========================================= */

    if (cards.length) {
      gsap.set(cards, {
        y: 20,
      })

      gsap.to(cards, {
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.5,
      })
    }
  })

  return () => {
    ctx.revert()
  }
}