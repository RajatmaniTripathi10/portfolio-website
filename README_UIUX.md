# Portfolio Website - UI/UX Design Documentation

## 🎨 Design Decisions

### Color Palette
- **Primary Blue**: `#0b5ed7` - Corporate, trustworthy, professional
- **Primary Blue Dark**: `#0848a8` - For hover states and emphasis
- **Primary Blue Light**: `#3b82f6` - For gradients and accents
- **Neutral Grays**: Scale from `#f9fafb` (lightest) to `#111827` (darkest)
- **Accent Colors**: Orange `#f97316` for timeline markers, Green `#10b981` for success states

### Typography
- **Headings**: Poppins (Semi-Bold 600, Bold 700) - Modern, friendly, professional
- **Body**: Inter (Regular 400, Medium 500, Semi-Bold 600) - Highly readable, clean
- **Fallbacks**: System font stack for performance

### Layout Principles
- **Mobile-First**: All designs start from mobile (320px) and scale up
- **Grid System**: CSS Grid for main layouts, Flexbox for components
- **Spacing Scale**: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
- **Max Width**: 1200px container for optimal readability

### Accessibility (WCAG AA)
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ Skip-to-content link
- ✅ Color contrast ratios meet WCAG AA (4.5:1 for text)
- ✅ Reduced motion support
- ✅ Screen reader friendly

### Performance Optimizations
- Critical CSS considerations (can be inlined)
- Lazy loading for images
- Deferred JavaScript
- Optimized SVG icons (inline)
- Minimal external dependencies

## 📁 File Structure

```
/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete stylesheet with dark mode
├── script.js           # All interactions and functionality
└── assets/
    ├── profile.jpg     # Profile photo (800x800px recommended)
    ├── resume.pdf      # Downloadable resume
    ├── favicon.svg     # SVG favicon
    ├── favicon-32.png  # PNG fallback favicon
    └── [SVG icons are inline in HTML]
```

## 🔧 Customization Guide

### Replace Profile Photo
1. Add your photo to `assets/profile.jpg`
2. Recommended size: 800x800px (square)
3. Format: JPG or PNG
4. The image will be automatically cropped to a circle

### Update Resume
1. Add your resume PDF to `assets/resume.pdf`
2. The "Download Resume" button will automatically link to it

### Update Project Data
Edit the `projectData` object in `script.js`:
```javascript
const projectData = {
    subscription: {
        title: 'Your Project Title',
        problem: 'Problem statement...',
        approach: 'Your approach...',
        results: ['Result 1', 'Result 2'],
        tech: ['Tech 1', 'Tech 2'],
        metrics: { 'Metric 1': 'Value 1' }
    }
};
```

### Update Contact Information
Edit the contact section in `index.html`:
- Email: `rajat.tripathi10jan@gmail.com`
- LinkedIn: Update the href
- GitHub: Update the href

### Update Analytics
Uncomment and configure in `index.html`:
- Google Analytics: Add your tracking ID
- Plausible: Add your domain

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #0b5ed7;  /* Change this */
    --primary-blue-dark: #0848a8;
    --primary-blue-light: #3b82f6;
}
```

## 🚀 Deployment to GitHub Pages

### Quick Steps
1. Push all files to your GitHub repository
2. Go to Settings → Pages
3. Select `gh-pages` branch (or `main` if using root)
4. Your site will be live at: `https://[username].github.io/[repo-name]/`

### Using GitHub Actions (Recommended)
The `.github/workflows/gh-pages.yml` file will automatically deploy on push to `main`.

## ✅ Accessibility Checklist

- [x] Semantic HTML5 elements
- [x] ARIA labels and roles
- [x] Keyboard navigation
- [x] Focus indicators
- [x] Skip-to-content link
- [x] Color contrast (WCAG AA)
- [x] Alt text for images
- [x] Form labels and error messages
- [x] Modal focus trap
- [x] Reduced motion support

## 🧪 Testing Checklist

### Manual Testing
- [ ] Navigation links work correctly
- [ ] Mobile menu opens/closes properly
- [ ] Dark mode toggle works and persists
- [ ] Project modals open and close correctly
- [ ] Contact form validation works
- [ ] Toast notifications appear
- [ ] Skill bars animate on scroll
- [ ] Smooth scrolling works
- [ ] All sections are accessible
- [ ] Resume downloads correctly

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- [ ] Lighthouse Performance: 85+
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1200px
- **Large Desktop**: 1201px+

## 🎯 Key Features

1. **Dark Mode**: Toggle with system preference detection
2. **Project Modals**: Accessible modals with focus trap
3. **Scroll Animations**: IntersectionObserver for performance
4. **Skill Bars**: Animated progress bars on scroll
5. **Form Validation**: Client-side validation with error messages
6. **Toast Notifications**: User feedback for actions
7. **Smooth Scrolling**: Enhanced navigation experience
8. **Mobile Menu**: Hamburger menu with animations

## 🔍 SEO Optimization

- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 📊 Analytics Integration

Placeholder code included for:
- Google Analytics (GA4)
- Plausible Analytics

Uncomment and configure in `index.html`.

## 🎨 Design Tokens

See `COLOR_TOKENS.md` for complete color and typography reference.

## 📝 Notes

- All icons are inline SVG for performance
- No external CSS frameworks used
- Vanilla JavaScript only (no jQuery)
- Progressive enhancement approach
- Print styles included

---

**Need Help?** Check the main README.md or open an issue in the repository.

