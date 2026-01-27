import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Next.js Starter Template
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A modern full-stack boilerplate with authentication, database, and UI components ready to go.
          </p>
          <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <p><span className="font-semibold text-zinc-950 dark:text-zinc-50">Next.js</span> - React framework for production</p>
            <p><span className="font-semibold text-zinc-950 dark:text-zinc-50">BetterAuth</span> - Modern authentication solution</p>
            <p><span className="font-semibold text-zinc-950 dark:text-zinc-50">Drizzle ORM</span> - TypeScript ORM for SQL databases</p>
            <p><span className="font-semibold text-zinc-950 dark:text-zinc-50">NeonDB</span> - Serverless Postgres database</p>
            <p><span className="font-semibold text-zinc-950 dark:text-zinc-50">shadcn/ui</span> - Beautiful UI components</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium w-full">
          <p className="text-zinc-950 dark:text-zinc-50 font-semibold">Documentation:</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">Next.js</a>
            <a href="https://www.better-auth.com/docs" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">BetterAuth</a>
            <a href="https://orm.drizzle.team/docs/overview" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">Drizzle ORM</a>
            <a href="https://neon.tech/docs/introduction" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">NeonDB</a>
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">shadcn/ui</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium w-full">
          <p className="text-zinc-950 dark:text-zinc-50 font-semibold">Pages:</p>
          <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/signup">
              <span>Signup Page</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
