# Aesthetic Tiles

Aesthetic Tiles is a responsive tile gallery web application built with Next.js App Router. The project presents a curated catalog of aesthetic tiles, supports protected user features, and combines a custom visual design with modern authentication and profile management.

## Live Site

`https://aesthetic-tiles.netlify.app/`

## Project Purpose

This application was created to showcase a premium tile gallery experience with:

- Public browsing of a curated tile collection
- Searchable gallery data served through API routes
- Protected tile details for authenticated users
- User registration, login, profile viewing, and profile updating

## Core Features

- Responsive design optimized for mobile, tablet, and desktop screens
- Custom homepage with banner, marquee, and featured tile section
- JSON-backed tile catalog served through Next.js API routes
- Searchable `All Tiles` page with live filtering by title
- Private routes for tile details and user profile pages
- Better Auth integration with MongoDB adapter
- Email/password authentication and Google sign-in support
- Profile update flow for user name and profile image
- Custom loading state and `not-found` page
- Route protection using middleware-style proxy handling
- Environment-variable-based configuration for authentication and database setup

## Technology Stack

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `daisyui`
- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `animate.css`
- `lucide-react`
- `clsx`
- `zod`

## Local Development Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and add your environment values:

```bash
MONGODB_URI=
USE_IN_MEMORY_MONGO=false
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

3. Start the development server:

```bash
npm.cmd run dev
```

4. Open the project in your browser:

```text
http://localhost:3000
```

## Authentication Notes

- For local development without a running MongoDB server, you can set `USE_IN_MEMORY_MONGO=true` in `.env.local`.
- For final submission or production deployment, use a real MongoDB database such as MongoDB Atlas and set `USE_IN_MEMORY_MONGO=false`.
- For Google OAuth, add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI in Google Cloud.
- Better Auth profile updates follow the official `updateUser` flow from the Better Auth users/accounts documentation.

## Route Access Summary

- Public routes: `/`, `/all-tiles`, `/login`, `/register`
- Private routes: `/tile/[id]`, `/my-profile`, `/my-profile/update`

## Submission Checklist

- Responsive layout verified on mobile, tablet, and desktop
- Featured tiles loaded from the server
- Private routes tested after login
- Environment variables configured for authentication and database access
- Live URL added to the README
