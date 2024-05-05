import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from "./db"
import { LoginSchema } from "./schemas"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async session({ session, token, user }) {
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            // console.log({
            //     sessionToken: token,
            //     session,
            // });

            return session;
        },
        async jwt({ token }) {
            // console.log({ token });
            return token;
        }

    },
    session: {
        strategy: "jwt"
    },
    adapter: DrizzleAdapter(db),
    ...authConfig,
})
