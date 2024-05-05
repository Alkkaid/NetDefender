"use server";

import { db } from "@/db";
import { devicesConnections } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getAllDeviceConnectionsByDevice = async (id_device: string, userId: any) => {
    try {
        const query = await db.select().from(devicesConnections).where(eq(devicesConnections.id_device, id_device));
        

        return query;
    } catch (error) {
        return null;
    }
}
