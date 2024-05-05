import { Suspense } from 'react'
import { DeviceConnectionCard } from "./_components/DeviceConnectionCard"
import { auth } from "@/auth"
import { getAllDeviceConnectionsByDevice } from "@/data/deviceConnection";

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { AddDummyPorts } from '@/data/ports';

export default async function DevicePage({ params }: { params: { device: string } }) {
    const session = await auth();
    const getDeviceConnection = await getAllDeviceConnectionsByDevice(params.device, session?.user?.id)


    return (
        <section className="h-full max-h-[20rem]  grid grid-cols-4 gap-y-4 gap-x-4 p-10">
            {getDeviceConnection!.map((device) => {
                return (

                    <ContextMenu key={device.id_dc}>
                        <ContextMenuTrigger>
                            <DeviceConnectionCard name={device.name || undefined} ip={device.ip} mac={device.mac} />
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                            <form action={async () => {
                                "use server";

                                await AddDummyPorts(device.id_dc);
                            }}>
                                <button className="w-full">
                                    <ContextMenuItem className="">
                                        Add Dummy Ports
                                    </ContextMenuItem>
                                </button>
                            </form>
                        </ContextMenuContent>
                    </ContextMenu>


                )
            })}
        </section>
    )
}
