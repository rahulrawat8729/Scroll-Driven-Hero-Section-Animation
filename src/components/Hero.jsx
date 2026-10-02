import { useLayoutEffect } from 'react'
import { createHeroScrollAnimation } from '../animations/heroAnimation'
import { createIntroAnimation } from '../animations/introAnimation'

function Hero() {
  const letters = [
    'W',
    'E',
    'L',
    'C',
    'O',
    'M',
    'E',
    ' ',
    'I',
    'T',
    'Z',
    'F',
    'I',
    'Z',
    'Z',
  ]

  useLayoutEffect(() => {
    const introCleanup = createIntroAnimation()
    const scrollCleanup = createHeroScrollAnimation()

    return () => {
      introCleanup()
      scrollCleanup()
    }
  }, [])

  return (
    <section className="hero-section relative h-[200vh] w-full bg-[#d1d1d1]">

      {/* =========================================
          STICKY HERO STAGE
      ========================================= */}
      <div className="hero-stage sticky top-0 flex h-screen w-full items-center justify-center">

        {/* =========================================
            ROAD
        ========================================= */}
        <div
          className="
            hero-road
            relative
            h-[200px]
            w-full
            overflow-hidden
            bg-[#1e1e1e]
          "
        >

          {/* =========================================
              GREEN TRAIL
          ========================================= */}
          <div
            className="
              hero-trail
              absolute
              left-0
              top-0
              z-[1]
              h-full
              w-full
              origin-left
              scale-x-0
              bg-[#45db7d]
            "
          />

          {/* =========================================
              WELCOME ITZFIZZ
          ========================================= */}
          <div
            className="
              hero-title
              absolute
              left-[5%]
              top-[15%]
              z-[5]
              flex
              gap-[0.3rem]
              whitespace-nowrap
              text-[8rem]
              font-bold
              leading-none
            "
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="value-letter text-[#111]"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>

          {/* =========================================
              CAR
          ========================================= */}
          <img
            src="/assets/car.png"
            alt="Orange sports car"
            className="
              hero-car
              absolute
              left-0
              top-0
              z-10
              h-[200px]
              w-auto
              max-w-none
              select-none
              pointer-events-none
            "
          />
        </div>

        {/* =========================================
            58%
        ========================================= */}
        <div
          className="
            stat-card
            stat-card-1
            absolute
            right-[30%]
            top-[5%]
            z-20
            flex
            flex-col
            items-start
            rounded-[10px]
            bg-[#def54f]
            px-[30px]
            py-[30px]
            text-[#111]
            opacity-0
          "
        >
          <span className="text-[58px] font-semibold leading-none">
            58%
          </span>

          Increase in pick up point use
        </div>

        {/* =========================================
            23%
        ========================================= */}
        <div
          className="
            stat-card
            stat-card-2
            absolute
            bottom-[5%]
            right-[35%]
            z-20
            flex
            flex-col
            items-start
            rounded-[10px]
            bg-[#6ac9ff]
            px-[30px]
            py-[30px]
            text-[#111]
            opacity-0
          "
        >
          <span className="text-[58px] font-semibold leading-none">
            23%
          </span>

          Decreased in customer phone calls
        </div>

        {/* =========================================
            27%
        ========================================= */}
        <div
          className="
            stat-card
            stat-card-3
            absolute
            right-[10%]
            top-[5%]
            z-20
            flex
            flex-col
            items-start
            rounded-[10px]
            bg-[#333]
            px-[30px]
            py-[30px]
            text-white
            opacity-0
          "
        >
          <span className="text-[58px] font-semibold leading-none">
            27%
          </span>

          Increase in pick up point use
        </div>

        {/* =========================================
            40%
        ========================================= */}
        <div
          className="
            stat-card
            stat-card-4
            absolute
            bottom-[5%]
            right-[12.5%]
            z-20
            flex
            flex-col
            items-start
            rounded-[10px]
            bg-[#fa7328]
            px-[30px]
            py-[30px]
            text-[#111]
            opacity-0
          "
        >
          <span className="text-[58px] font-semibold leading-none">
            40%
          </span>

          Decreased in customer phone calls
        </div>

      </div>
    </section>
  )
}

export default Hero