'use client' 

import { useAuth } from '@/providers/AuthProvider'
import React from 'react'
import { Button } from './ui/button'
import { UserCircle2 } from 'lucide-react'

export default function UserButton() {
    const { user } = useAuth()
  return (
    <Button variant='outline' className="flex flex-row gap-2">
        <UserCircle2 />
        {user?.name || 'Welcome'}
    </Button>
  )
}
