# Portfolio Website - Rajat Mani Tripathi

A modern, one-page scrolling portfolio website showcasing my experience as a Backend Developer specializing in Java, Spring Boot, Microservices, and Temporal Workflows.

## 🚀 Features

- **Modern Design**: Clean, corporate blue and white theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Scroll Animations**: Fade-in and slide-in animations on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **One-Page Layout**: All sections accessible via smooth scrolling navigation

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
└── assets/
    └── profile.jpg     # Profile photo (replace with your own)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, and grid
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **Google Fonts**: Inter font family

## 📋 Sections

1. **Header/Navigation**: Sticky header with smooth scroll navigation
2. **Hero Section**: Introduction with profile photo
3. **About Me**: Professional background and expertise
4. **Skills**: Technology stack and tools
5. **Experience**: Work experience timeline
6. **Projects**: Featured projects showcase
7. **Contact**: Contact information and form
8. **Footer**: Copyright and attribution

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio-website` (or your preferred name)
   - Make it public (required for free GitHub Pages)

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files: `index.html`, `styles.css`, `script.js`
   - Upload the `assets` folder with your `profile.jpg`
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - Under "Source", select **main branch** (or `master` if that's your default)
   - Click **Save**
   - Your site will be live at: `https://[your-username].github.io/portfolio-website/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/[your-username]/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow **Step 3** from Method 1 to enable GitHub Pages.

### Method 3: Using GitHub CLI

```bash
# Install GitHub CLI if not already installed
# brew install gh (on macOS)

# Login to GitHub
gh auth login

# Create repository and push
gh repo create portfolio-website --public --source=. --remote=origin --push
```

Then follow **Step 3** from Method 1 to enable GitHub Pages.

## 📝 Customization

### Update Profile Photo

1. Replace `assets/profile.jpg` with your own photo
2. Recommended size: 400x400px or larger (square aspect ratio)
3. The image will be automatically cropped to a circle

### Update Contact Links

Edit the contact section in `index.html`:

```html
<a href="https://www.linkedin.com/in/rajat-tripathi-1a37691b6/" target="_blank" rel="noopener noreferrer" class="contact__link">
    <span class="contact__icon">💼</span>
    LinkedIn
</a>
<a href="https://github.com/RajatmaniTripathi10" target="_blank" rel="noopener noreferrer" class="contact__link">
    <span class="contact__icon">🔗</span>
    GitHub
</a>
```

### Update Content

- Edit `index.html` to update any text content
- Modify `styles.css` to change colors, fonts, or layout
- Adjust `script.js` for custom interactions

### Color Scheme

The color scheme uses CSS variables defined in `styles.css`:

```css
--primary-blue: #2563eb;
--primary-blue-dark: #1e40af;
--white: #ffffff;
```

Change these values to customize the color theme.

## 🔧 Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Or use a local server**:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Rajat Mani Tripathi**
- Email: rajat.tripathi10jan@gmail.com
- LinkedIn: [https://www.linkedin.com/in/rajat-tripathi-1a37691b6/](https://www.linkedin.com/in/rajat-tripathi-1a37691b6/)
- GitHub: [https://github.com/RajatmaniTripathi10](https://github.com/RajatmaniTripathi10)

---

Made with ❤️ by Rajat Mani Tripathi

