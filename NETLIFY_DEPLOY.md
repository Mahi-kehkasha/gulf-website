# Netlify Deployment Guide

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   Netlify should auto-detect Next.js, but verify:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (or leave empty - Netlify Next.js plugin handles this)
   - **Node version**: 18 (or higher)

4. **Environment Variables** (if needed)
   - Go to Site settings → Environment variables
   - Add any required variables (currently none needed for this project)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Post-Deployment

### Custom Domain
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables
If you need to add environment variables later:
1. Go to Site settings → Environment variables
2. Add variables for production, deploy previews, or branches

### Build Settings
The `netlify.toml` file is already configured with:
- Next.js plugin for optimal performance
- Proper redirects for i18n routing
- Static asset handling

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure Node version is 18 or higher
- Verify all dependencies are in `package.json`

### Routing Issues
- The `netlify.toml` includes redirect rules for i18n
- Default locale redirects to `/en`
- All routes should work correctly

### Images Not Loading
- Ensure images are in the `public` folder
- Check image paths in your components
- Verify `next/image` optimization settings

## Notes
- The site uses Next.js 14 App Router with SSR
- Netlify's Next.js plugin handles all optimizations automatically
- The site supports English (`/en`) and Arabic (`/ar`) locales
- Default locale is English

