'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'

export default function SearchParamAccessor() {
    const searchParams = useSearchParams()
    const error = searchParams.getAll('error')
    const pathname = usePathname()

    useEffect(() =>{
        if(error?.length > 0){
            setTimeout(()=>{   
                error.map(err=> toast.error(err))
            },300)
        }
    },[pathname])

    return (
        <></>
    )
}