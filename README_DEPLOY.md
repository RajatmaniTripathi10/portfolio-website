# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.

## 🚀 Automatic Deployment (GitHub Actions)

The site is automatically deployed using GitHub Actions. Here's how it works:

1. **Workflow Location**: `.github/workflows/gh-pages.yml`
2. **Trigger**: Automatically runs on every push to the `main` branch
3. **Process**: 
   - Checks out the repository
   - Publishes all files from the repository root to the `gh-pages` branch
   - Uses the official `peaceiris/actions-gh-pages` action
   - Cleans previous files before publishing

### How It Works

- When you push code to `main`, GitHub Actions automatically:
  1. Runs the workflow
  2. Publishes your `index.html`, `styles.css`, `script.js`, and `assets/` folder to the `gh-pages` branch
  3. GitHub Pages serves the site from the `gh-pages` branch

- **No manual steps required!** Just push to `main` and the site will be live in a few minutes.

### Viewing Your Site

Once deployed, your site will be available at:
**https://RajatmaniTripathi10.github.io/portfolio-website/**

*(Note: Replace `portfolio-website` with your actual repository name if different)*

## 📝 Manual Deployment (Alternative)

If you prefer to deploy manually or if GitHub Actions isn't working:

### Option 1: Using Git Subtree (Recommended)

```bash
# Make sure you're on the main branch
git checkout main

# Deploy to gh-pages branch
git subtree push --prefix . origin gh-pages
```

### Option 2: Direct Push to gh-pages Branch

```bash
# Create and checkout gh-pages branch
git checkout -b gh-pages

# Remove all files except your site files
# (Keep: index.html, styles.css, script.js, assets/)

# Commit and push
git add .
git commit -m "Deploy site to GitHub Pages"
git push origin gh-pages

# Switch back to main
git checkout main
```

### Option 3: Using GitHub CLI

```bash
# Install GitHub CLI if not already installed
# brew install gh (on macOS)

# Push to gh-pages branch
gh repo deploy gh-pages --source=. --branch=gh-pages
```

## ⚙️ GitHub Pages Settings

To enable GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

Your site will be available at: `https://[username].github.io/[repository-name]/`

## 🔧 Troubleshooting

### Site Not Updating?

- Wait 1-2 minutes after pushing (GitHub Pages can take time to update)
- Check the **Actions** tab in your GitHub repository to see if the workflow ran successfully
- Verify the `gh-pages` branch exists and contains your files
- Clear your browser cache

### Workflow Not Running?

- Ensure the workflow file is in `.github/workflows/gh-pages.yml`
- Check that you're pushing to the `main` branch (not `master`)
- Verify GitHub Actions is enabled in repository settings

### 404 Error?

- Make sure `index.html` is in the repository root
- Verify the repository name matches the URL path
- Check that GitHub Pages is enabled in repository settings

## 📌 Important Notes

- **Branch Name**: This setup uses `main` as the source branch. If your repository uses `master` instead, update the workflow file:
  ```yaml
  branches:
    - master  # Change from 'main' to 'master'
  ```

- **Repository Name**: The site URL depends on your repository name. If your repo is named `portfolio-website`, the URL will be:
  `https://RajatmaniTripathi10.github.io/portfolio-website/`

- **Custom Domain**: To use a custom domain, add a `CNAME` file in the repository root with your domain name.

## 🔍 Verification Steps

After deployment, verify your site is live:

1. **Check GitHub Actions**: Go to the **Actions** tab in your repository and verify the workflow completed successfully
2. **Check gh-pages Branch**: Go to the **Code** tab, switch to `gh-pages` branch, and verify your files are there
3. **Visit the Site**: Open `https://RajatmaniTripathi10.github.io/portfolio-website/` in your browser
4. **Test Navigation**: Click through all sections to ensure everything works

---

**Need Help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue in the repository.

