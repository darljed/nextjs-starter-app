'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client';
import { useAuth } from '@/providers/AuthProvider';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function SendVerificationEmail() {
    const [sending, setSending] = useState<boolean>(false)
    const [timer, setTimer] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    const { user } = useAuth()

    useEffect(()=>{
        const countdown = setInterval(()=>{
            setTimer(prev => prev - 1)
            if(timer === 0){
                clear()
            }
        },1000)

        function clear(){
            clearInterval(countdown)
            setSending(false)
        }

        return clear
    },[count])


    async function handleResendLink(){
        if(user){
            setSending(true)
            const resend = await authClient.sendVerificationEmail({
                email: user?.email,
                callbackURL: "/signup/success", // The redirect URL after verification
            });

            if(!resend.error){
                toast.success("Verification link sent successfully")
                setCount(prev => prev + 1)
                setTimer(10)
            }
            else{
                toast.error(resend.error.message)
            }

            
        }
    }
    
  return (
    <Button className="w-full" variant='outline' disabled={sending || timer > 0} onClick={handleResendLink}>
        { sending && <span className='flex gap-2'>Sending verification link <Loader className="animate-spin"/></span>}
        { (timer > 0) && `Resend link in ${timer}`}
        { (!sending && timer <= 0) && "Send Verification Link"}
    </Button>
  )
}
