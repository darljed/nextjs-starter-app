import { createAuthClient } from "better-auth/react";

const {useSession} = createAuthClient()

export function useClientSession() {
    const session = useSession()
    return session
}

