"use server";

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { RegisterSchema } from '@/schemas';
import {db} from '@/db/'
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';
import { drizzle } from 'drizzle-orm/node-postgres';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values);


    if (!validatedValues.success) {
        return {error: "Invalid Fields!"};
    }

    const {email, password, name } = validatedValues.data;
    const hashedPassword = await bcrypt.hash(password,10);

    // NOTE: Different ways of querying and getting the query 
    // this is an Array
    const existingUser = await db.select({
        email: users.email,
    }).from(users).where(eq(users.email, email));
    if (existingUser.length > 0) {
        return {error: "Email is already in use"};
    }
    // NOTE: Different ways of querying and getting the query 
    // this is an Object
    //
    // const existingUser = await db.query.users.findFirst({
    //     where: eq(users.email, email)
    // })
    // if (!existingUser) {
    //     return {error: "Email is already in use"};
    // }

    console.log(password);
    await db.insert(users).values({
        name: name,
        email: email,
        password: hashedPassword,
    })

    return {success: "User created"}
}
