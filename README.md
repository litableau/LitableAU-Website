<<<<<<< HEAD
# LitableAU-Website
=======
# Litable Scroll Animation

A beautiful scroll animation component built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Smooth scroll-based animations
- Responsive design with mobile optimization
- 3D perspective effects
- Customizable title components
- Built with shadcn/ui design system

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Design System**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with demo
├── components/
│   └── ui/
│       ├── container-scroll-animation.tsx  # Main animation component
│       └── demo.tsx                        # Demo showcase
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Component Usage

### ContainerScroll

The main component that provides scroll-based animations:

```tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

<ContainerScroll titleComponent={<h1>Your Title Here</h1>}>
  <YourContent />
</ContainerScroll>;
```

### Props

- `titleComponent`: React node or string for the animated title
- `children`: Content to be displayed in the animated card

## Customization

The component automatically handles:

- Mobile responsiveness
- Scroll progress tracking
- 3D transformations
- Smooth animations

## Dependencies

- `framer-motion`: For smooth animations and scroll tracking
- `lucide-react`: For icon components
- `@radix-ui/react-slot`: For component composition
- `class-variance-authority`: For component variants
- `clsx` & `tailwind-merge`: For conditional styling

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

>>>>>>> 2956099 (feat: Base App and Home page)
