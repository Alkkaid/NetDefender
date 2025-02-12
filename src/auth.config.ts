import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user"
import bcrypt from 'bcryptjs';
import { getUser } from "./actions/getUser"

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    
                    // TODO: USAR NEON DATABASE
                    
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    // console.log(password, user.password);
                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    )

                    if (passwordMatch)
                        return user;
                }

                return null
            }
        })
    ]
} satisfies NextAuthConfig
