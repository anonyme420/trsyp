# TRSYP 3.0 — Next.js Landing Page

IEEE Tunisian RAS Student & Young Professional Congress

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts**: Orbitron, Rajdhani, Share Tech Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trsyp/
├── app/
│   ├── layout.tsx       # Root layout with fonts + metadata
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Global styles + Tailwind directives
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile hamburger menu
│   ├── HeroSection.tsx   # Hero with countdown, stats, CTAs
│   ├── Countdown.tsx     # Live countdown to Oct 3, 2026
│   ├── AboutSection.tsx  # TRSYP 3.0 about section
│   ├── WhyJoinSection.tsx # Cards: Network, Compete, Learn
│   └── Footer.tsx        # Footer with nav + social links
├── public/               # Place your images here
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Adding Your Hero Image

In `components/HeroSection.tsx`, find the comment:
```
{/* Replace below div with an <Image> component pointing to your actual hero image */}
```

Replace the placeholder div with:
```tsx
import Image from "next/image";

<Image
  src="/hero-image.jpg"        // place image in /public/
  alt="TRSYP robotics event"
  fill
  className="object-cover object-top"
  priority
/>
```

## Colors

| Token     | Hex       | Usage              |
|-----------|-----------|--------------------|
| Cyan      | `#00e5c8` | Primary accent     |
| Pink      | `#ff2d8a` | Secondary accent   |
| Dark BG   | `#050505` | Page background    |
| Card BG   | `#050d0d` | Card backgrounds   |

## Customization

- **Event date**: Update `eventDate` in `components/Countdown.tsx`
- **Nav links**: Edit `navLinks` array in `components/Navbar.tsx`
- **Stats**: Edit the stats array in `components/HeroSection.tsx`
- **Cards**: Edit the `cards` array in `components/WhyJoinSection.tsx`
