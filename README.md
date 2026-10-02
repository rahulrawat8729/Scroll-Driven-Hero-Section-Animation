# ITZFIZZ Scroll-Driven Hero Animation

A React + Vite frontend project that recreates a scroll-driven hero section inspired by the ITZFIZZ reference animation.

The main interaction uses GSAP and ScrollTrigger to connect the car movement, green trail, headline letter reveal, and statistic cards to the user's scroll position.

## Features

- Scroll-driven hero animation
- Orange sports car moving horizontally across the road
- Green trail expanding behind the car
- `WELCOME ITZFIZZ` headline revealed progressively as the car moves
- Four animated statistics cards
- Scroll-up reverses the animation naturally
- Sticky full-screen hero stage
- Smooth transform-based animations
- Desktop-focused layout

## Tech Stack

- React
- Vite
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- JavaScript
- HTML/CSS

## Project Structure

```text
itzfizz-scroll-animation/
├── public/
│   └── assets/
│       └── car.png
├── src/
│   ├── animations/
│   │   ├── heroAnimation.js
│   │   └── introAnimation.js
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Car.jsx
│   │   ├── StatCard.jsx
│   │   └── Stats.jsx
│   ├── data/
│   │   └── stats.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Requirements

Before running the project, make sure you have:

- Node.js installed
- npm installed

Check them with:

```bash
node -v
npm -v
```

## Installation

Install the project dependencies:

```bash
npm install
```

## Run the Project

Start the Vite development server:

```bash
npm run dev
```

Vite will show a local development URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

## Production Build

Create the optimized production version with:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

The `dist` folder is generated automatically and normally does not need to be committed to GitHub.

## Preview Production Build

After building the project:

```bash
npm run preview
```

## Lint

Check the project with ESLint:

```bash
npm run lint
```

## Animation Behavior

The main animation is controlled by GSAP ScrollTrigger.

### Car Movement

The car moves horizontally according to the user's scroll progress.

### Green Trail

The green trail expands from the left side of the road as the car moves.

### Headline Reveal

The letters in:

```text
WELCOME ITZFIZZ
```

are progressively revealed based on the car's position.

### Statistic Cards

The four cards appear at different scroll positions:

- 58% — Increase in pick up point use
- 23% — Decreased in customer phone calls
- 27% — Increase in pick up point use
- 40% — Decreased in customer phone calls

Scrolling upward reverses the animation because the animations are tied to scroll progress.

## Important Files

### `src/components/Hero.jsx`

Contains the main hero layout, road, car, headline, and statistic cards.

### `src/animations/heroAnimation.js`

Contains the main GSAP and ScrollTrigger animation logic.

### `src/animations/introAnimation.js`

Contains the initial reveal animation.

### `src/index.css`

Contains global styles and the Tailwind CSS import.

### `public/assets/car.png`

Contains the transparent car image used in the hero animation.

## Development Notes

This project is currently designed and tested primarily for desktop screen sizes.

The animation uses GSAP ScrollTrigger and transform-based animation to keep the scroll interaction smooth.

## Available npm Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Reference

The project was created as a recreation/inspiration of the ITZFIZZ scroll animation reference:

https://paraschaturvedi.github.io/car-scroll-animation/

## License

This project was created as a frontend assignment/recreation for learning and demonstration purposes.
