'use client'

import { useAuth } from '@/providers/AuthProvider'
import Link from 'next/link'
import SignOut from './SignOut'

export default function NavBar() {
    const { user } = useAuth()
    console.log(user)
  return (
    <nav className="h-14 bg-foreground w-full flex justify-between items-center text-white px-4">
        <Link href="/">Next.js Starter App</Link>
        <span>
            { user && (
              <span className='flex gap-2 justify-end items-center'>{user.name} <SignOut /></span>
            )}
        </span>
    </nav>
  )
}
