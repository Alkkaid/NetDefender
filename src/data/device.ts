"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { devices, devicesConnections, users, users_devices } from "@/db/schema";
import { InferSelectModel, eq } from "drizzle-orm";

//NOTE: NO USAR SI NO OCUPO UN CLIENT COMPONENT
export const getAllDevicesFromUser = async (userID: any) => {
    try {
        const AllDevices = await db.select({
            id_device: devices.id_device,
            name: devices.name,
            userName: users.email,
        })
            .from(devices)
            .innerJoin(users_devices, eq(devices.id_device, users_devices.id_device))
            .innerJoin(users, eq(users.id, users_devices.userId))
            .where(eq(users.id, userID))
        return AllDevices;
    } catch {
        return null;
    }
}

export const getDeviceByID = async (id_device: string) => {
    try {
        const device = await db.select().from(devices)
            .where(eq(devices.id_device, id_device));

        return device;
    } catch (error) {
        return null;
    }
}

export const DeleteDeviceByID = async (id_device: string) => {
    try {
        await db.delete(devices).where(eq(devices.id_device, id_device));
        console.log("xd")


    } catch (error) {
        return null;

    }
}

export const AddDummyDataByID = async (id_device: string) => {
    const getRandomNumber = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
        // return Math.floor(Math.random() * max);
    }
    const getRandomIP = () => {
        return `${getRandomNumber(1, 255)}.${getRandomNumber(1, 255)}.${getRandomNumber(1, 255)}.${getRandomNumber(1, 255)}`
    }
    const getRandomMAC = () => {
        const digits = "123456789ABCDE";
        let result = "";

        for (let i = 0; i < 6; i++) {
            const a = digits.at(getRandomNumber(0, digits.length));
            const b = digits.at(getRandomNumber(0, digits.length));
            result += `${a}${b}:`
        }


        return result.slice(0, 17);
    }


    try {
        console.log("__________ID DEVICE_________")
        console.log(id_device)
        console.log("__________________________________")
        const numberOfDevicesConnections = getRandomNumber(1, 11);
        console.log(`Se han agregado ${numberOfDevicesConnections} deviceConnections a un DEVICE`)
        for (let i = 0; i < numberOfDevicesConnections; i++) {
            // console.log(`Dispositivo ${i + 1}, IP: ${getRandomIP()} MAC: ${getRandomMAC()}`);
            const name = `Dispositivo ${i + 1}`;

            await db.insert(devicesConnections).values({
                name: name, 
                ip: getRandomIP(),
                mac: getRandomMAC(),
                id_device: id_device,
            })
        }

        // await db.delete(devices).where(eq(devices.id_device, id_device));

    } catch (error) {
        return null;

    }
}
