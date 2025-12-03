# Next.js + Tailwind Migration Guide

This directory contains a scaffold for migrating the portfolio to Next.js with Tailwind CSS.

## 📁 File Structure

```
nextjs-variant/
├── pages/
│   └── index.tsx          # Main portfolio page
├── components/
│   ├── Header.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects grid
│   ├── Testimonials.tsx   # Testimonials
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── Modal.tsx          # Project modal
│   └── ThemeToggle.tsx    # Dark mode toggle
├── public/
│   └── assets/            # Static assets
├── styles/
│   └── globals.css        # Global styles + Tailwind
├── hooks/
│   ├── useTheme.ts        # Dark mode hook
│   └── useScrollAnimation.ts  # Scroll animations
├── utils/
│   └── constants.ts       # Project data, constants
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## 🚀 Setup Steps

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app
cd portfolio-nextjs
```

### 2. Install Dependencies

```bash
npm install
# Or
yarn install
```

### 3. Configure Tailwind

Update `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0b5ed7',
          'blue-dark': '#0848a8',
          'blue-light': '#3b82f6',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 4. Component Migration

Map vanilla HTML/CSS/JS to React components:

#### HTML → JSX
- Convert HTML elements to JSX
- Use `className` instead of `class`
- Use `onClick` instead of `addEventListener`
- Use React state for dynamic content

#### CSS → Tailwind
- Replace CSS classes with Tailwind utilities
- Use `@apply` for complex styles
- Keep CSS variables in `globals.css`

#### JavaScript → React Hooks
- `useState` for component state
- `useEffect` for side effects
- `useRef` for DOM references
- Custom hooks for reusable logic

## 📝 Component Examples

### Header Component

```tsx
// components/Header.tsx
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Navigation content */}
      </nav>
    </header>
  );
}
```

### Theme Toggle Hook

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { theme, toggleTheme };
}
```

## 🎨 Styling Approach

### Option 1: Pure Tailwind
Convert all CSS to Tailwind utility classes.

### Option 2: Hybrid
- Use Tailwind for layout and spacing
- Keep custom CSS for complex animations
- Use CSS modules for component-specific styles

### Option 3: Styled Components
Use `styled-components` or `emotion` for component-scoped styles.

## 🔄 Migration Checklist

- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Create component structure
- [ ] Migrate Header component
- [ ] Migrate Hero section
- [ ] Migrate About section
- [ ] Migrate Skills section
- [ ] Migrate Experience timeline
- [ ] Migrate Projects grid
- [ ] Migrate Contact form
- [ ] Migrate Footer
- [ ] Implement dark mode hook
- [ ] Add scroll animations
- [ ] Implement project modals
- [ ] Add form validation
- [ ] Set up SEO (next/head)
- [ ] Optimize images (next/image)
- [ ] Add analytics
- [ ] Test responsive design
- [ ] Test accessibility
- [ ] Deploy to Vercel/Netlify

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Custom Server
```bash
npm run build
npm start
```

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

## 🎯 Benefits of Next.js

1. **Performance**: Automatic code splitting, image optimization
2. **SEO**: Server-side rendering, meta tag management
3. **Developer Experience**: Hot reload, TypeScript support
4. **Deployment**: Easy deployment to Vercel
5. **API Routes**: Can add backend functionality if needed

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hooks](https://react.dev/reference/react)

---

**Note**: This is a scaffold. Full implementation requires converting all HTML/CSS/JS to React components and Tailwind classes.

