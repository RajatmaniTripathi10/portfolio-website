# Assets Required

## Required Files

### 1. Profile Photo
- **File**: `assets/profile.jpg`
- **Size**: 800x800px (square, 1:1 aspect ratio)
- **Format**: JPG or PNG
- **Optimization**: Compress to < 200KB for web
- **Usage**: Hero section profile image
- **Note**: Image will be automatically cropped to circle

### 2. Resume PDF
- **File**: `assets/resume.pdf`
- **Format**: PDF
- **Size**: Keep under 2MB
- **Usage**: Downloadable via "Download Resume" button
- **Note**: Update the link in HTML if filename changes

### 3. Favicon (SVG)
- **File**: `assets/favicon.svg`
- **Format**: SVG
- **Size**: Any (scalable)
- **Usage**: Modern browser favicon
- **Content**: Your logo or initials in SVG format

### 4. Favicon (PNG Fallback)
- **File**: `assets/favicon-32.png`
- **Format**: PNG
- **Size**: 32x32px
- **Usage**: Fallback for older browsers and Apple touch icon
- **Note**: Can be generated from SVG

## Optional Files

### 5. Open Graph Image
- **File**: `assets/og-image.jpg` (optional)
- **Size**: 1200x630px
- **Format**: JPG
- **Usage**: Social media sharing preview
- **Note**: Update meta tag in HTML if added

## SVG Icons (Already Inline)

All icons are already inline in the HTML for performance:
- GitHub icon
- LinkedIn icon
- Email icon
- Theme toggle icons (sun/moon)
- Project icons
- Skill icons
- Navigation icons

## Creating Assets

### Profile Photo
1. Use a professional headshot
2. Crop to square (1:1 ratio)
3. Resize to 800x800px
4. Optimize with tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)

### Favicon
1. Create SVG version first
2. Use tools like:
   - Figma
   - Adobe Illustrator
   - Online SVG editors
3. Generate PNG from SVG using:
   - CloudConvert
   - Online converters

### Resume PDF
1. Export from your preferred tool (Word, LaTeX, etc.)
2. Ensure it's optimized for web
3. Test download functionality

## File Structure

```
assets/
├── profile.jpg        # Your profile photo (REQUIRED)
├── resume.pdf         # Your resume (REQUIRED)
├── favicon.svg        # SVG favicon (REQUIRED)
├── favicon-32.png     # PNG favicon (REQUIRED)
└── og-image.jpg       # Open Graph image (OPTIONAL)
```

## Quick Setup

1. **Add Profile Photo**: Place your photo at `assets/profile.jpg`
2. **Add Resume**: Place your resume at `assets/resume.pdf`
3. **Create Favicons**: Generate SVG and PNG favicons
4. **Test**: Verify all assets load correctly

## Optimization Tips

- **Images**: Use WebP format if possible (with fallbacks)
- **PDFs**: Optimize PDFs to reduce file size
- **SVGs**: Minimize SVG code, remove unnecessary elements
- **Lazy Loading**: Profile image uses `loading="eager"` (above fold), others can use `loading="lazy"`

---

**Note**: All assets should be optimized for web to ensure fast page load times.

