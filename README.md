# Flour Fleet Advisory - Website

A modern, production-ready marketing website for Flour Fleet Advisory, a UK-based tax advisory firm specialising in personal, business, and international tax strategy.

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (already configured in .env)
# NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are pre-configured
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start

# Verify TypeScript types
npm run typecheck

# Run ESLint for code quality
npm run lint
```

## Project Structure

```
/app
  /about          - About Natalie Hill page
  /contact        - Contact form page with enquiry submission
  /faq            - Frequently asked questions page
  /services       - Services overview page
  /api/contact    - API endpoint for contact form submissions
  layout.tsx      - Root layout with Header and Footer
  page.tsx        - Homepage
  globals.css     - Global styles and CSS variables

/components
  Header.tsx      - Navigation header with mobile menu
  Footer.tsx      - Site footer
  ContactForm.tsx - Contact form with validation
  FAQ.tsx         - Reusable FAQ accordion component
  /ui             - shadcn/ui component library

/config
  site.ts         - Centralized site configuration (EDIT THIS TO CUSTOMIZE)

/lib
  supabase.ts     - Supabase client and utilities
  types.ts        - TypeScript type definitions
```

## Key Customisation Points

### 1. Site Configuration (`config/site.ts`)

This is the main file to edit for non-developers. Update:

- `name` - Company name
- `contact.email` - Public contact email (hello@flourfleet.com)
- `contact.submissionEmail` - Internal email for form submissions (flourfleet.com@gmail.com)
- `contact.phone` - Phone number
- `social.instagram` - Instagram profile URL
- `founder.name` - Founder's name
- `founder.title` - Founder's title
- `navigation` - Navigation menu links
- `colors` - Brand colours (primary, accent, background)

### 2. Brand Colours

Update CSS variables in `app/globals.css`:

```css
--flour-fleet-primary: #1e3a5f;     /* Deep navy */
--flour-fleet-accent: #4a9b8e;      /* Soft teal */
--flour-fleet-background: #f8f7f5;  /* Light neutral */
```

### 3. Content Updates

- **Homepage** - `app/page.tsx`
- **About page** - `app/about/page.tsx`
- **Services** - `app/services/page.tsx`
- **FAQs** - Edit `allFAQs` array in `components/FAQ.tsx`
- **Footer content** - `components/Footer.tsx`

### 4. Contact Form Setup

#### Email Service (Resend)

1. Create a [Resend account](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```
4. The contact form will send emails to `contact.submissionEmail` in `config/site.ts`

To use a different email service (SendGrid, SMTP, etc.), modify `/app/api/contact/route.ts` where it calls Resend.

#### Database Submissions

Contact form submissions are automatically stored in the Supabase `contact_submissions` table. View submissions in your Supabase dashboard.

### 5. Google Analytics

Google Analytics is pre-configured with ID `G-0B9EBSVFGG` in the root layout. To change:

1. Update `app/layout.tsx` - replace both instances of `G-0B9EBSVFGG` with your analytics ID

## Features

### ✅ Fully Responsive
- Mobile-first design
- Optimised for all screen sizes
- Touch-friendly navigation

### ✅ Accessibility
- WCAG AA compliant
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content links

### ✅ SEO Optimised
- Unique page titles and meta descriptions
- Open Graph tags for social sharing
- Structured data markup
- Clean, descriptive URLs
- XML sitemap ready

### ✅ Performance
- Optimised images
- Minimal bundle size
- Fast page loads
- Lighthouse-ready

### ✅ Security
- Server-side form validation
- CSRF protection
- No exposed secrets
- Row Level Security on database tables

## Pages

### Homepage (`/`)
- Hero section with CTAs
- Philosophy section
- Services overview
- Founder introduction
- FAQ preview
- Final call-to-action

### About (`/about`)
- Natalie Hill's biography
- Educational credentials
- Experience summary
- Core values
- Working approach

### Services (`/services`)
- Detailed service descriptions
- Personal Tax
- Business Tax
- International Tax
- Process overview
- Service-specific CTAs

### FAQ (`/faq`)
- Comprehensive FAQ accordion
- 8+ common questions
- Clear, non-jargon answers
- CTA to book consultation

### Contact (`/contact`)
- Contact form with validation
- Contact details
- Instagram link
- Information sidebars
- Quick links to other pages

## Database Schema

### contact_submissions Table

Stores all contact form submissions:

- `id` (uuid) - Unique identifier
- `first_name` (text) - First name
- `last_name` (text) - Last name
- `email` (text) - Email address
- `phone` (text, nullable) - Phone number
- `service_type` (text) - Service inquiry type
- `message` (text) - Inquiry message
- `created_at` (timestamp) - Submission timestamp
- `status` (text) - Processing status

Access in Supabase dashboard to review and manage submissions.

## Form Validation

Contact form includes:

- ✅ Client-side validation with React Hook Form
- ✅ Server-side validation with Zod
- ✅ Clear error messages
- ✅ Loading states
- ✅ Success/error feedback

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then connect to Vercel
# Automatic deployments on push
```

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Add environment variables:
   - `RESEND_API_KEY` (for email)
   - Any others from `.env`
5. Deploy

### Other Platforms

The site works on any platform supporting Node.js 18+:

- Netlify
- Railway
- Render
- AWS Amplify
- DigitalOcean
- Heroku

Build command: `npm run build`
Start command: `npm start`

## Environment Variables

`.env` contains Supabase credentials (pre-configured).

Create `.env.local` for local development:

```
RESEND_API_KEY=your_api_key_here
```

## Dependencies

### Core
- **Next.js 13** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Zod** - Schema validation

### UI Components
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

### Backend
- **Supabase** - Database and auth
- **Resend** - Email service (optional, configure for your choice)

## Common Tasks

### Adding a New FAQ

Edit `components/FAQ.tsx` and add to the `allFAQs` array:

```typescript
{
  question: "Your question here?",
  answer: "Your detailed answer here.",
}
```

### Updating Navigation Links

Edit `config/site.ts`:

```typescript
navigation: [
  { label: 'Home', href: '/' },
  { label: 'Your New Page', href: '/your-page' },
  // ...
]
```

### Changing Service Descriptions

Edit the relevant section in `app/services/page.tsx`.

### Adding a New Page

1. Create folder in `/app` (e.g., `/app/blog`)
2. Create `page.tsx` file
3. Add to navigation in `config/site.ts`

### Managing Contact Submissions

Visit your [Supabase dashboard](https://supabase.com) → select your project → go to "contact_submissions" table to view and manage submissions.

## Troubleshooting

### Build Errors

```bash
# Clear next cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### TypeScript Errors

```bash
npm run typecheck
```

### Linting Issues

```bash
npm run lint
# Fix auto-fixable issues
npx eslint . --fix
```

## Performance Tips

- Images: Use next/image for automatic optimization
- CSS: Tailwind is already optimized
- Fonts: Inter font is system-optimized
- Analytics: Google Analytics is non-blocking

## Security

- ✅ Environment variables not exposed in code
- ✅ Form validation on server and client
- ✅ Supabase Row Level Security enabled
- ✅ No hardcoded secrets
- ✅ HTTPS recommended for production

## Support

For questions or support:

1. Check the FAQ page
2. Email the site contact email
3. Review the [Next.js documentation](https://nextjs.org/docs)
4. Check [Supabase documentation](https://supabase.com/docs)

## License

All rights reserved. Flour Fleet Advisory.

---

**Last updated:** November 2024
