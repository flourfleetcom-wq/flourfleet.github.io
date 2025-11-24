# Deployment Guide - Flour Fleet Advisory

This guide explains how to deploy your website to production.

## Pre-Deployment Checklist

Before deploying, ensure:

1. **Email Service Setup**
   - Create a [Resend account](https://resend.com)
   - Get your API key
   - Set `RESEND_API_KEY` environment variable

2. **Site Configuration**
   - Update `config/site.ts` with correct contact details
   - Verify all navigation links work
   - Check brand colours are correct

3. **Content Review**
   - Review all pages for typos and accuracy
   - Update FAQs in `components/FAQ.tsx` if needed
   - Verify contact email and social links

4. **Local Testing**
   - Run `npm run build` successfully
   - Run `npm run typecheck` - no errors
   - Run `npm run lint` - fix any issues
   - Test all pages and forms locally

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is optimised for Next.js and offers the easiest deployment path.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/flourfleet-advisory.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `RESEND_API_KEY=your_key_here`
   - Supabase variables are already in `.env`

4. **Deploy**
   - Click "Deploy"
   - Your site is live at `yourusername.vercel.app`
   - Set up custom domain in Settings

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Netlify settings

4. **Deploy**
   - Netlify automatically deploys on git push

### Option 3: Other Platforms

The site works on any platform supporting Node.js 18+:

**Build settings:**
- Build command: `npm run build`
- Start command: `npm start`
- Node version: 18 or higher

**Platforms:**
- Railway.app
- Render.com
- DigitalOcean
- AWS Amplify
- Heroku
- Self-hosted server

## Post-Deployment

### 1. Test Everything

```bash
# Visit your deployed site
# Test all links
# Try the contact form
# Check mobile responsiveness
```

### 2. Monitor Submissions

**Contact form submissions:**
- Go to [Supabase dashboard](https://supabase.com)
- Select your project
- Go to Tables → contact_submissions
- View all enquiries

**Email notifications:**
- Confirm emails arrive at `flourfleet.com@gmail.com`
- Set up email filters if needed

### 3. Set Up Analytics

Google Analytics is already configured:
- Go to [Google Analytics](https://analytics.google.com)
- Check that data is coming in
- Set up custom events for CTAs if desired

### 4. Configure Domain

**For custom domain (flourfleet.com):**

If using Vercel:
1. Go to Settings → Domains
2. Add your domain
3. Follow DNS setup instructions

If using another platform:
1. Update DNS records to point to your hosting provider
2. Set up SSL certificate (usually automatic)

### 5. SEO & Monitoring

- Submit sitemap to Google Search Console
- Request indexing of important pages
- Set up uptime monitoring to alert on downtime
- Monitor Lighthouse scores regularly

## Troubleshooting

### Build Fails on Deploy

**Solution:**
```bash
# Locally:
npm run build
npm run typecheck
npm run lint

# Fix any errors, then push again
git add .
git commit -m "Fix build errors"
git push
```

### Contact Form Not Sending Emails

**Check:**
1. `RESEND_API_KEY` environment variable is set
2. Resend API key is valid
3. Check Resend dashboard for errors
4. Verify `flourfleet.com@gmail.com` is correct in `config/site.ts`

### Contact Submissions Not Stored

**Check:**
1. Supabase credentials in `.env`
2. `contact_submissions` table exists in Supabase
3. Row Level Security policies allow inserts
4. Check browser console for errors

### Slow Page Load

**Optimize:**
1. Check Lighthouse in DevTools
2. Review image sizes
3. Consider enabling Vercel Analytics
4. Check database query performance

## Maintenance

### Weekly
- Check contact submissions in Supabase
- Respond to enquiries promptly

### Monthly
- Review Google Analytics data
- Check for any 404 errors
- Monitor uptime
- Update content if needed

### Quarterly
- Review and update FAQ section
- Update credentials/experience if needed
- Test all contact forms

## Updating Content

**After deployment**, to update content:

1. **Edit locally**
   - Update files in your repository
   - Test changes locally with `npm run dev`

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

3. **Automatic Deployment**
   - Vercel/Netlify automatically deploy on push
   - Wait 2-3 minutes for deployment to complete
   - Site updates automatically

## Rollback

If you deploy something broken:

**Vercel:**
1. Go to Deployments
2. Find the previous good deployment
3. Click the three dots → "Promote to Production"

**Netlify:**
1. Go to Deploys
2. Find the previous good build
3. Click "Publish deploy"

## Support

For issues:
1. Check [Next.js docs](https://nextjs.org/docs)
2. Check [Vercel docs](https://vercel.com/docs) (if using Vercel)
3. Check [Supabase docs](https://supabase.com/docs)
4. Review environment variables and configuration

---

**Congratulations! Your Flour Fleet Advisory website is now live!**
