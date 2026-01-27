# Next.js Starter Template

A modern, production-ready full-stack boilerplate with authentication, database integration, form validation, and beautiful UI components. Built with the latest technologies and best practices.

## 🚀 Tech Stack

### Core Framework
- **[Next.js 16.1.5](https://nextjs.org/docs)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Authentication
- **[BetterAuth 1.4.17](https://www.better-auth.com/docs)** - Modern authentication solution
- Email/Password authentication
- Session management with token-based auth
- Protected routes with middleware

### Database & ORM
- **[Drizzle ORM 0.45.1](https://orm.drizzle.team/docs/overview)** - TypeScript-first ORM
- **[NeonDB](https://neon.tech/docs/introduction)** - Serverless Postgres database
- **[@neondatabase/serverless](https://neon.tech/docs/serverless/serverless-driver)** - Neon HTTP driver

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com/docs)** - Beautiful, accessible UI components
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Montserrat](https://fonts.google.com/specimen/Montserrat)** - Google Font

### Form Management
- **[React Hook Form 7.71.1](https://react-hook-form.com/)** - Performant form library
- **[Zod 4.3.6](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### Additional Libraries
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[class-variance-authority](https://cva.style/docs)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility functions

## ✨ Features

### Authentication System
- ✅ Email/Password registration with validation
- ✅ User sign-in with "Remember Me" option
- ✅ Secure session management
- ✅ Protected routes with automatic redirects
- ✅ Client and server-side authentication
- ✅ User context provider for global state

### Form Validation
- ✅ Zod schema validation
- ✅ Real-time form error handling
- ✅ Password confirmation matching
- ✅ Terms and conditions acceptance
- ✅ Email format validation

### UI Components
- ✅ Responsive design
- ✅ Dark mode support (via next-themes)
- ✅ Toast notifications
- ✅ Form components (Input, Button, Checkbox, Select)
- ✅ Card layouts
- ✅ Navigation bar with user info

### Database
- ✅ User management
- ✅ Session tracking with IP and User Agent
- ✅ Account linking support
- ✅ Email verification system
- ✅ Automatic timestamps (createdAt, updatedAt)

## 📁 Project Structure

```
nextjs-starter-app/
├── app/                          # Next.js App Router
│   ├── (protected)/              # Protected route group
│   │   ├── dashboard/            # Dashboard page (requires auth)
│   │   │   └── page.tsx
│   │   └── layout.tsx            # Protected layout with auth check
│   ├── api/                      # API routes
│   │   └── auth/
│   │       └── [...all]/         # BetterAuth catch-all route
│   │           └── route.ts
│   ├── signin/                   # Sign-in page
│   │   ├── page.tsx
│   │   └── signin-form.tsx
│   ├── signup/                   # Sign-up page
│   │   ├── success/              # Success page after signup
│   │   ├── page.tsx
│   │   └── signup-form.tsx
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── field.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   └── sonner.tsx
│   └── NavBar.tsx                # Navigation component
├── db/                           # Database configuration
│   ├── index.ts                  # Drizzle instance
│   └── schema.ts                 # Database schema (user, session, account, verification)
├── drizzle/                      # Database migrations
│   ├── meta/
│   └── 0000_remarkable_thunderbolts.sql
├── hooks/                        # Custom React hooks
│   └── useClientSession.ts       # Client-side session hook
├── lib/                          # Utility libraries
│   ├── auth.ts                   # BetterAuth server configuration
│   ├── auth-client.ts            # BetterAuth client configuration
│   └── utils.ts                  # Utility functions (cn)
├── models/                       # Zod validation schemas
│   ├── signin.ts                 # Sign-in form schema
│   └── signup.ts                 # Sign-up form schema
├── providers/                    # React context providers
│   └── AuthProvider.tsx          # Authentication context
├── utils/                        # Utility functions
│   └── links.ts                  # Navigation links
├── .env                          # Environment variables (gitignored)
├── .template.env                 # Environment template
├── components.json               # shadcn/ui configuration
├── drizzle.config.ts             # Drizzle Kit configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🗄️ Database Schema

### User Table
```typescript
- id: text (primary key)
- name: text (required)
- email: text (unique, required)
- emailVerified: boolean (default: false)
- image: text (optional)
- createdAt: timestamp
- updatedAt: timestamp
```

### Session Table
```typescript
- id: text (primary key)
- expiresAt: timestamp
- token: text (unique)
- createdAt: timestamp
- updatedAt: timestamp
- ipAddress: text
- userAgent: text
- userId: text (foreign key → user.id, cascade delete)
```

### Account Table
```typescript
- id: text (primary key)
- accountId: text
- providerId: text
- userId: text (foreign key → user.id, cascade delete)
- accessToken: text
- refreshToken: text
- idToken: text
- accessTokenExpiresAt: timestamp
- refreshTokenExpiresAt: timestamp
- scope: text
- password: text (hashed)
- createdAt: timestamp
- updatedAt: timestamp
```

### Verification Table
```typescript
- id: text (primary key)
- identifier: text (indexed)
- value: text
- expiresAt: timestamp
- createdAt: timestamp
- updatedAt: timestamp
```

## 🔧 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# BetterAuth Configuration
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://username:password@host/database

# SMTP Configuration (optional, for email verification)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=your-smtp-username
SMTP_PASSWORD=your-smtp-password
```

### Getting Your Environment Variables

1. **BETTER_AUTH_SECRET**: Generate a random string (32+ characters)
   ```bash
   openssl rand -base64 32
   ```

2. **DATABASE_URL**: 
   - Sign up at [NeonDB](https://neon.tech/)
   - Create a new project
   - Copy the connection string

3. **SMTP** (Optional):
   - Use [Mailtrap](https://mailtrap.io/) for development
   - Or configure your own SMTP server

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- PostgreSQL database (NeonDB recommended)

### Step 1: Clone and Install
```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-starter-app

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Step 2: Configure Environment
```bash
# Copy the template
cp .template.env .env

# Edit .env with your actual values
nano .env
```

### Step 3: Setup Database
```bash
# Generate BetterAuth schema
npm run betterauth:generate

# Run database migrations
npm run betterauth:migrate
```

### Step 4: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📜 Available Scripts

```json
{
  "dev": "next dev",                    // Start development server
  "build": "next build",                // Build for production
  "start": "next start",                // Start production server
  "lint": "eslint",                     // Run ESLint
  "test:smtp": "node ./tests/test-smtp.js",  // Test SMTP configuration
  "betterauth:generate": "npx @better-auth/cli@latest generate --output \"./db/schema.ts\"",  // Generate auth schema
  "betterauth:migrate": "npx drizzle-kit generate && npx drizzle-kit migrate"  // Run migrations
}
```

## 🔐 Authentication Flow

### Sign Up Process
1. User fills out registration form ([signup-form.tsx](app/signup/signup-form.tsx))
2. Form validates with Zod schema (name, email, password, confirmPassword, acceptTerms)
3. POST request to `/api/auth/sign-up/email`
4. BetterAuth creates user and account records
5. Session created and user redirected to success page
6. Auth context refetched to update global state

### Sign In Process
1. User enters credentials ([signin-form.tsx](app/signin/signin-form.tsx))
2. Form validates email and password (min 8 characters)
3. POST request to `/api/auth/sign-in/email`
4. BetterAuth verifies credentials and creates session
5. User redirected to dashboard
6. Auth context refetched

### Protected Routes
- Routes in `app/(protected)/` require authentication
- Layout checks session server-side
- Redirects to `/signin` if not authenticated
- Passes query parameter for user feedback

### Sign Out
- Client calls `authClient.signOut()`
- Session invalidated
- User redirected to home page
- Auth context refetched

## 🎨 Key Components

### AuthProvider
Global authentication context provider that wraps the entire app. Provides:
- `session`: Current session data
- `user`: Current user data
- `context`: Session methods (refetch, etc.)

### NavBar
Navigation component that displays:
- App branding
- Current user's name (when authenticated)

### Form Components (shadcn/ui)
- **Button**: Customizable button with variants
- **Input**: Text input with error states
- **Checkbox**: Accessible checkbox component
- **Card**: Container with header, content, and footer
- **Form**: React Hook Form integration with Zod validation

## 🛣️ API Routes

### BetterAuth Endpoints
All authentication endpoints are handled by BetterAuth via the catch-all route:

```
POST /api/auth/sign-up/email       - Register new user
POST /api/auth/sign-in/email       - Sign in user
POST /api/auth/sign-out            - Sign out user
GET  /api/auth/session             - Get current session
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Make sure to set all environment variables in your hosting platform:
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL` (your production URL)
- `DATABASE_URL`
- SMTP variables (if using email features)

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm run start
```

## 📚 Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [BetterAuth Documentation](https://www.better-auth.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [NeonDB Documentation](https://neon.tech/docs/introduction)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and modern web technologies.
