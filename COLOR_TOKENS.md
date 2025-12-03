# Design Tokens - Color & Typography Reference

## 🎨 Color Palette

### Primary Colors
```css
--primary-blue: #0b5ed7        /* Main brand color */
--primary-blue-dark: #0848a8    /* Hover states, emphasis */
--primary-blue-light: #3b82f6   /* Gradients, accents */
--primary-blue-hover: #0d6efd   /* Interactive states */
```

### Neutral Colors (Light Mode)
```css
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827
```

### Accent Colors
```css
--orange: #f97316    /* Timeline markers, highlights */
--green: #10b981     /* Success states, checkmarks */
--red: #ef4444       /* Error states, alerts */
```

### Dark Mode Colors
Dark mode uses the same color tokens but with adjusted values:
- Backgrounds: Dark slate (`#0f172a`, `#1e293b`, `#334155`)
- Text: Light grays (`#f1f5f9`, `#cbd5e1`, `#94a3b8`)
- Borders: Adjusted opacity and colors

## 📝 Typography

### Font Families
```css
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Weights
- **Inter**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Poppins**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Font Sizes
- Hero Title: `clamp(2.5rem, 5vw, 4rem)` - Responsive scaling
- Section Titles: `clamp(2rem, 4vw, 3rem)` - Responsive scaling
- Body Text: `1rem` (16px base)
- Small Text: `0.875rem` (14px)
- Large Text: `1.1rem` (17.6px)

### Line Heights
- Body: `1.6` - Optimal readability
- Headings: `1.2` - Tighter for headings
- Code/Technical: `1.8` - More spacing for technical content

## 🎯 Usage Guidelines

### Primary Blue Usage
- **Links**: Default link color
- **Buttons**: Primary CTA buttons
- **Highlights**: Important text, badges
- **Borders**: Active states, focus indicators
- **Icons**: Primary icon color

### Neutral Grays Usage
- **Backgrounds**: Section backgrounds, cards
- **Text**: Body text, secondary text
- **Borders**: Dividers, card borders
- **Shadows**: Depth and elevation

### Accent Colors Usage
- **Orange**: Timeline markers, warm highlights
- **Green**: Success messages, positive indicators
- **Red**: Error messages, warnings, delete actions

## 🌓 Dark Mode

Dark mode automatically adjusts:
- Background colors to dark slate
- Text colors to light grays
- Border colors for contrast
- Shadow opacity for depth
- All colors maintain WCAG AA contrast ratios

## 📐 Spacing Scale

```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 1.5rem   /* 24px */
--spacing-lg: 2rem     /* 32px */
--spacing-xl: 3rem     /* 48px */
--spacing-2xl: 4rem    /* 64px */
```

## 🎨 Shadow System

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## 🔄 Transitions

```css
--transition-fast: 150ms ease
--transition-base: 300ms ease
--transition-slow: 500ms ease
```

## 📱 Responsive Typography

All typography uses `clamp()` for fluid scaling:
- Scales smoothly between min and max values
- Adapts to viewport size
- Maintains readability at all sizes

---

**Note**: All colors meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).

