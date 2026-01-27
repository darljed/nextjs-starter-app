'use client'
import { useClientSession } from "@/hooks/useClientSession";
import { createContext, ReactNode, useContext } from "react";

type AuthContextType = {
    session: ReturnType<typeof useClientSession> | null;
}

export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const session = useClientSession();

    return (
        <AuthContext.Provider value={{session}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return {
        session: context?.session?.data?.session || null,
        user: context?.session?.data?.user || null,
        context: context?.session
    };
}