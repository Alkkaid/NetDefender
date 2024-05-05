"use server";

import { getUserByEmail } from "@/data/user";
import bcrypt from 'bcryptjs';

export const getUser = async (email: string) => {
    const user = await getUserByEmail(email);
    console.log(user)
    // if (!user || !user.password) return null;
    //
    // const passwordMatch = await bcrypt.compare(
    //     password,
    //     user.password,
    // )
    //
    // if (passwordMatch)
        // return user;
    // return getUserByEmail(email);
}
