'use client'

import { useAuth } from '@/providers/AuthProvider'
import Link from 'next/link'

export default function NavBar() {
    const { user } = useAuth()
    console.log(user)
  return (
    <nav className="h-10 bg-foreground w-full flex justify-between items-center text-white px-4">
        <Link href="/">NextJS Starter App</Link>
        <span>
            { user && user.name}
        </span>
    </nav>
  )
}
