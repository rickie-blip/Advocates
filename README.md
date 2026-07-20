# Aegis Lexington Law Chambers

## Project Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Sticky nav with dark mode toggle
│   │   └── Footer.tsx   # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx         # Landing hero with stats
│   │   ├── About.tsx        # Ethos / philosophy cards
│   │   ├── PracticeAreas.tsx # Tabbed practice areas
│   │   ├── Attorneys.tsx    # Attorney profile cards
│   │   ├── Calculator.tsx   # Settlement estimator
│   │   ├── CaseQuiz.tsx     # Multi-step case viability quiz
│   │   ├── ClientPortal.tsx # Secure portal demo
│   │   ├── Booking.tsx      # Strategy session booking form
│   │   ├── FAQ.tsx          # Accordion FAQ
│   │   └── Contact.tsx      # Contact info + map
│   └── ui/
│       ├── Toast.tsx         # Toast notification
│       └── FloatingButtons.tsx # Floating CTA buttons
├── data/
│   └── constants.ts     # PRACTICE_AREAS, ATTORNEYS, FAQS
├── hooks/
│   ├── useToast.ts      # Toast state management
│   └── useQuiz.ts       # Quiz state & scoring logic
├── types/
│   └── index.ts         # All TypeScript interfaces
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Tailwind base styles
```

## Getting Started

```bash
npm install
npm run dev
```
