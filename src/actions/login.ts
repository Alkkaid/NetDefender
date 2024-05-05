"use server";

import * as z from 'zod';

import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth'
import { DEFAULT_REDIRECT } from "@/routes"
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/data/user';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedValues = LoginSchema.safeParse(values);

    if (!validatedValues.success) {
        return { error: "Invalid Fields!" };
    }

    const { email, password } = validatedValues.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_REDIRECT,
        })

    } catch (error){
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials" }
                default:
                    return { error: "Algo salio mal" }
            }

        }

        throw error;
    }
}
