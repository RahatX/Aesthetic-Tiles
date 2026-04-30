# Aesthetic Tiles

Responsive tile gallery assignment built with Next.js App Router, Tailwind CSS, DaisyUI, and Better Auth with a MongoDB adapter.

## Purpose

This project showcases a curated tile gallery with public browsing, protected tile detail pages, profile management, and Better Auth-based login, registration, Google sign-in, and profile updating.

## Live URL

Add your deployed URL here after publishing:

`https://your-live-url-here.vercel.app`

## Key Features

- Responsive custom UI for mobile, tablet, and desktop screens
- Explicit UI-library usage with DaisyUI components blended into the custom design
- Home page banner, marquee, and featured tiles loaded from the server
- JSON-backed tile catalog served through Next.js API routes
- Public gallery page with live tile search by title
- Private tile details route with auth redirect support
- Better Auth email/password and Google authentication flow
- Protected profile page plus update-name-and-image route
- Custom `not-found` page and loading states for data fetching
- Proxy-based protection for private routes
- Environment-variable-based configuration for auth and MongoDB

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `tailwindcss`
- `daisyui`
- `animate.css`
- `lucide-react`
- `clsx`
- `zod`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and provide real values:

```bash
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Notes

- For Google OAuth, add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI in Google Cloud.
- Better Auth profile updates follow the official `updateUser` flow from the Better Auth users/accounts documentation.
- Replace the live URL in this README after deployment.
