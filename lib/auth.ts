import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index"
import * as schema from "@/db/schema"
import { transporter } from "./email";
import { redirect } from "next/navigation";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite",
        schema
    }),
    emailAndPassword: { 
        enabled: true, 
        requireEmailVerification: false
    },
    emailVerification: {
        sendOnSignUp: false,
        sendVerificationEmail: async ({ user, url }) => {
            await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: user.email,
                subject: "Verify your email",
                html: `<p>Please verify your email by clicking <a href="${url}">this link</a>.</p>`,
            })
        }
    }
});