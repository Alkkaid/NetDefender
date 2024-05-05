"use server"
import { db } from '@/db';
import { devices, users_devices, devicesConnections } from '@/db/schema';
import { AddDeviceSchema } from '@/schemas';
import * as z from 'zod';
import { revalidatePath } from 'next/cache'
import { auth } from '@/auth';

export const addNewDevice = async (values: z.infer<typeof AddDeviceSchema>) => {
    const session = await auth();
    // console.log(values)

    const { name, code } = values;

    // @ts-ignore
    const newDevice = await db.insert(devices).values({
        name,
        code,
    }).returning({
        id_device: devices.id_device,
    });

    await db.insert(users_devices).values({
        id_device: newDevice[0].id_device,
        userId: session?.user?.id!,
    })


    // console.log('----------------')
    // console.log(session?.user?.id)
    // console.log(newDevice[0].id_device);
    // console.log('----------------')
    revalidatePath('/dashboard')

}
