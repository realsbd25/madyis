# MADYIS - Your Business-in-a-Box

A modern, enterprise-level website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. This project showcases MADYIS, a digital solutions company offering native mobile applications and complete CRM systems.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Animated UI**: Smooth transitions and micro-animations using Tailwind animate utilities
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Component Library**: Pre-built shadcn/ui components
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance Optimized**: Fast loading times with Next.js optimization

## Brand Colors

- **Primary**: #38B6FF (Blue)
- **Secondary**: #00346E (Dark Blue)
- **Accent**: #2881B5 (Light Blue)
- **Base**: #FFFFFF (White)

## Pages

1. **Home** (`/`) - Hero section, features overview, CRM showcase, global directory
2. **Features** (`/features`) - Detailed feature breakdown for customers and businesses
3. **How It Works** (`/how-it-works`) - Timeline showing the 10-day launch process
4. **Pricing** (`/pricing`) - Pricing plans with currency converter (USD, EUR, CHF)
5. **Contact** (`/contact`) - Contact form with validation

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd madyis
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
madyis/
├── app/
│   ├── contact/          # Contact page
│   ├── features/         # Features page
│   ├── how-it-works/     # How it works page
│   ├── pricing/          # Pricing page
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles and theme colors
├── components/
│   ├── layout/
│   │   ├── header.tsx    # Navigation header with theme toggle
│   │   └── footer.tsx    # Footer component
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (via shadcn/ui)
- **Form Handling**: React Hook Form + Zod
- **Theme**: next-themes
- **Icons**: Lucide React
- **Notifications**: Sonner

## Key Features Implementation

### Theme Toggle
- Supports light, dark, and system preferences
- Smooth transitions between themes
- Persistent theme selection

### Currency Converter (Pricing Page)
- Supports USD, EUR, and CHF
- Real-time price conversion
- Monthly/Annual billing options

### Form Validation (Contact Page)
- Client-side validation with Zod schemas
- User-friendly error messages
- Accessible form fields

### Responsive Navigation
- Desktop: Horizontal menu with CTAs
- Mobile: Hamburger menu with full-screen overlay
- Sticky header with scroll effects

## Performance Optimizations

- Server-side rendering (SSR) for initial page loads
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Optimized font loading

## Accessibility

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Color contrast compliance (WCAG AA)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Future Enhancements

- [ ] Integrate Google reCAPTCHA for contact form
- [ ] Add blog section with CMS integration
- [ ] Implement actual email sending (currently simulated)
- [ ] Add multilingual support (i18n)
- [ ] Integrate analytics (Google Analytics, Plausible, etc.)
- [ ] Add customer testimonials section
- [ ] Implement case studies page
- [ ] Add live chat support

## Support

For support, email contact@madyis.com or visit the [contact page](/contact).

---

Built with ❤️ by the MADYIS team
