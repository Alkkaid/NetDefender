"use server";

import { db } from "@/db";
import { devicesConnections, ports } from "@/db/schema";
import { eq } from "drizzle-orm";

export const AddDummyPorts = async (id_dc: number) => {
    const getRandomNumber = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
        // return Math.floor(Math.random() * max);
    }
    const possiblePorts = [
        { puerto: 21, servicio: 'FTP', vulnerabilidad: 'Denegación de Servicio (DoS), Fuerza Bruta' },
        { puerto: 22, servicio: 'SSH', vulnerabilidad: 'Fuerza Bruta, Acceso no autorizado' },
        { puerto: 23, servicio: 'Telnet', vulnerabilidad: 'Interceptación de contraseñas, Ataques de red' },
        { puerto: 80, servicio: 'HTTP', vulnerabilidad: 'Inyección SQL, Cross-Site Scripting (XSS), Otros ataques web' },
        { puerto: 443, servicio: 'HTTPS', vulnerabilidad: 'Envenenamiento de caché, Man-in-the-Middle (MitM)' },
        { puerto: 25, servicio: 'SMTP', vulnerabilidad: 'Suplantación de identidad (spoofing), Spam' },
        { puerto: 53, servicio: 'DNS', vulnerabilidad: 'Envenenamiento de caché DNS, Denegación de Servicio' },
        { puerto: 3306, servicio: 'MySQL', vulnerabilidad: 'Inyección SQL, Acceso no autorizado' },
        { puerto: 1433, servicio: 'MS-SQL', vulnerabilidad: 'Inyección SQL, Acceso no autorizado' },
        { puerto: 3389, servicio: 'RDP', vulnerabilidad: 'Fuerza Bruta, Acceso no autorizado' }
    ];

    try {
        console.log(possiblePorts.at(getRandomNumber(0, possiblePorts.length))?.puerto)
        // const query = await db.select().from(devicesConnections).where(eq(devicesConnections.id_device, id_device));

        // return query;
    } catch (error) {
        return null;
    }
}
