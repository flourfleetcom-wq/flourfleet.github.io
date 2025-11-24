# Quick Reference - Flour Fleet Advisory Website

## Edit These Files

### 1. Site Information
**File:** `config/site.ts`
- Company name
- Contact email (hello@flourfleet.com)
- Submission email (flourfleet.com@gmail.com)
- Phone number
- Instagram URL
- Navigation items
- Brand colors

### 2. Homepage
**File:** `app/page.tsx`
- Hero headline and description
- Philosophy section text
- Services overview (3 cards)
- Founder introduction
- Final CTA

### 3. About Page
**File:** `app/about/page.tsx`
- Natalie's bio
- Education/credentials
- Experience
- Values section
- Working approach

### 4. Services Page
**File:** `app/services/page.tsx`
- Service descriptions
- Topic lists for each service
- Process steps

### 5. FAQ
**File:** `components/FAQ.tsx`
Edit the `allFAQs` array to add/modify questions and answers

### 6. Footer Text
**File:** `components/Footer.tsx`
- Disclaimer
- Contact links

### 7. Brand Colors
**File:** `app/globals.css`
CSS variables:
- `--flour-fleet-primary: #1e3a5f` (deep navy)
- `--flour-fleet-accent: #4a9b8e` (soft teal)
- `--flour-fleet-background: #f8f7f5` (light neutral)

## Setup Steps

1. **Get Resend API Key**
   - Sign up at https://resend.com
   - Get your API key
   - Add to `.env.local`: `RESEND_API_KEY=your_key_here`

2. **Test Locally**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. **Test Contact Form**
   - Submit the form at /contact
   - Check email arrives at flourfleet.com@gmail.com
   - Check Supabase for submission storage

4. **Deploy**
   ```bash
   # Build production version
   npm run build

   # Push to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

## Files NOT to Edit

- `app/layout.tsx` - Only edit if changing header/footer structure
- `app/api/contact/route.ts` - Only edit to change email service
- `package.json` - Don't add packages without testing
- TypeScript files in `/lib` - For developers only

## Common Tasks

### Add a New FAQ
Edit `components/FAQ.tsx`:
```typescript
{
  question: 'Your question?',
  answer: 'Your answer here.',
}
```

### Change Brand Colors
Edit `app/globals.css` CSS variables

### Update Contact Email
Edit `config/site.ts`:
```typescript
contact: {
  email: 'newemail@example.com',
  submissionEmail: 'submission@example.com',
}
```

### Update Phone Number
Edit `config/site.ts`:
```typescript
contact: {
  phone: '+44 (0) 20 XXXX XXXX',
}
```

### Update Instagram Link
Edit `config/site.ts`:
```typescript
social: {
  instagram: 'https://instagram.com/yourusername',
}
```

### Test Everything Before Deployment
```bash
npm run build     # Build for production
npm run typecheck # Check TypeScript
npm run lint      # Check code style
```

## Deployment Checklist

- [ ] Email service configured (Resend API key)
- [ ] All content updated
- [ ] Contact form tested
- [ ] Mobile view tested
- [ ] All links work
- [ ] Build succeeds: `npm run build`
- [ ] GitHub push successful
- [ ] Vercel deployment connected
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured
- [ ] Analytics dashboard set up

## Support Resources

- **Next.js:** https://nextjs.org/docs
- **Supabase:** https://supabase.com/docs
- **Tailwind:** https://tailwindcss.com/docs
- **React Hook Form:** https://react-hook-form.com
- **Resend (Email):** https://resend.com/docs

## Key Pages

- Homepage: `/`
- About: `/about`
- Services: `/services`
- FAQ: `/faq`
- Contact: `/contact`

## Database

Contact submissions stored in Supabase:
1. Go to supabase.com
2. Select your project
3. Tables → contact_submissions
4. View all enquiries

---

**Start by editing `config/site.ts` and the content pages above. Everything else is automated!**
