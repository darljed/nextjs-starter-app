'use client'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, useSidebar } from './ui/sidebar'
import { LayoutDashboard, PartyPopper, RocketIcon, SquareDashedIcon, UserCircle } from 'lucide-react'
import Link from 'next/link'
import SignOut from './SignOut'

export default function AppSidebar() {
    const { state } = useSidebar()
  return (
    <Sidebar collapsible='icon' variant='inset'>
        <SidebarHeader>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="#" className="flex"> 
                    <RocketIcon />
                    <span> App Header Here</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Links
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/welcome" className="flex"> 
                            <PartyPopper />
                            <span> Welcome</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/dashboard" className="flex"> 
                            <LayoutDashboard />
                            <span> Dashboard </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="#" className="flex"> 
                            <SquareDashedIcon />
                            <span> Some Link Here</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="#" className="flex"> 
                            <SquareDashedIcon />
                            <span> Some Link Here</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="#" className="flex"> 
                            <SquareDashedIcon />
                            <span> Some Link Here</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SignOut />
        </SidebarFooter>
    </Sidebar>
  )
}
