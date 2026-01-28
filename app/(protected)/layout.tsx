import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'
export default async function layout({ children }: {
    children: ReactNode;
}) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    
    if(!session){
        redirect('/signin?error=You must login first')
    }

  return (
    <div>
        { children }
    </div>
  )
}
