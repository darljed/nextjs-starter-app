import AppSidebar from '@/components/AppSidebar';
import SignOut from '@/components/SignOut';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import UserButton from '@/components/UserButton';
import { auth } from '@/lib/auth';
import { useAuth } from '@/providers/AuthProvider';
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
    <SidebarProvider >
        <AppSidebar />
        <SidebarInset className='overflow-hidden'>
            <main className="w-full p-2">
                <div className="h-[44px] flex justify-between items-center p-1">
                    <SidebarTrigger />
                    <UserButton />
                </div>
                { children }
            </main>
        </SidebarInset>
    </SidebarProvider>
  )
}
