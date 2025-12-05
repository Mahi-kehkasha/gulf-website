# Quick Netlify Deployment Guide

## 🚀 Quick Start

### Method 1: Deploy via Netlify Dashboard (Easiest)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your Git provider
   - Select your repository
   - Netlify will auto-detect Next.js settings
   - Click **"Deploy site"**

3. **That's it!** Your site will be live in a few minutes.

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 📋 Build Settings (Auto-detected)

Netlify will automatically detect:
- **Build command**: `npm run build`
- **Publish directory**: `.next` (handled by plugin)
- **Node version**: 18

## ✅ What's Already Configured

- ✅ `netlify.toml` - Configuration file created
- ✅ Next.js plugin - Auto-installed by Netlify
- ✅ i18n routing - Redirects configured
- ✅ Static assets - Images and videos handled

## 🌐 Your Site URLs

After deployment, you'll get:
- **Production URL**: `https://your-site-name.netlify.app`
- **Deploy Preview**: Created for each pull request

## 🔧 Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow DNS configuration instructions

## 📝 Notes

- The site supports English (`/en`) and Arabic (`/ar`)
- Default locale is English (redirects from `/` to `/en`)
- All Next.js features work including SSR, ISR, and API routes
- Images are optimized automatically

## 🐛 Troubleshooting

**Build fails?**
- Check build logs in Netlify dashboard
- Ensure Node version is 18+
- Verify all dependencies are installed

**Routing issues?**
- The `netlify.toml` includes proper redirect rules
- Default locale redirects work automatically

**Need help?**
- Check Netlify docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/

