"use server";

import * as z from 'zod';

import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth'
import { DEFAULT_REDIRECT } from "@/routes"
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/data/user';

export const loginGoogle = async () => {
    try {
        await signIn("google", {
            redirectTo: DEFAULT_REDIRECT,
        })
    } catch (error){
        if (error instanceof AuthError) {
            switch (error.type) {
                default:
                    return { error: "Algo salio mal" }
            }

        }

        throw error;
    }
}
