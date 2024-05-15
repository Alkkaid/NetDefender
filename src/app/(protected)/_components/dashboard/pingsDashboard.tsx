"use client";
import { InferSelectModel } from 'drizzle-orm';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'
import {pings } from '@/db/schema';

export const PingsDashboard = () => {
    // const socket = io(process.env.SOCKET_URL || 'http://localhost:3001');
    const SOCKET_URL = process.env.SOCKET_URL;
    // const socket = io(SOCKET_URL as string);

    // NOTE: CHANGE IN DEV
    const socket = io("https://api.netdefender.cloud");
    const [data, setData] = useState<InferSelectModel<typeof pings>>()
    const jitter = data?.jitter;
    const latency = data?.latency;
    // @ts-ignore
    const packets_lost = data?.packetsLost;

    useEffect(() => {
        const handlerPing = (serverData: any) => {
            setData(serverData)


            console.log(serverData)
        }
        socket.on("latestPing", handlerPing)

        return () => {
            socket.off('latestPing');
        }
    })

    socket.on("connect", () => {
        console.log("conectado")
    })


    return (
        <div className='flex flex-col'>
            <div>Jitter: {jitter}</div>
            <div>Latency: {latency}</div>
            <div>Packets_Lost: {packets_lost}</div>
        </div>
    )
}
