import { AddDevice } from "./addDevice";
import { DeviceSidebar } from "./deviceSidebar";
import { HomeIcon } from '@radix-ui/react-icons';
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { getAllDevicesFromUser, DeleteDeviceByID, AddDummyDataByID } from "@/data/device";
import Link from "next/link";

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const Sidebar = async () => {
    const session = await auth();
    // Gracias a dios no ocupo usar useState
    const AllDevicesFromUser = await getAllDevicesFromUser(session?.user?.id!);

    return (
        <aside className="fixed z-[1] left-0 p-3 h-full gap-y-4 w-[206px] flex flex-col shadow-md text-white bg-blue-950">
            <div className="divide-white divide-y ">
                <div className="text-3xl">
                    NetDefender
                </div>
                <div></div>
            </div>

            <div className="text-2xl font-semibold flex flex-row items-center ">
                <HomeIcon className="h-6 w-6" />

                <Link href={"/dashboard"}>
                    Inicio
                </Link>
            </div>
            {AllDevicesFromUser!.map((device) => {
                return (
                    <ContextMenu key={device.id_device} >
                        <ContextMenuTrigger>
                            <Link href={`/dashboard/${device.id_device}`}  >
                                <DeviceSidebar Name={device.name} />
                            </Link>
                        </ContextMenuTrigger>
                        <ContextMenuContent className="">
                            {/* NOTE: I DIDNT WANT TO USE CLIENT COMPONENTS */}
                            <form action={async () => {
                                "use server";

                                await DeleteDeviceByID(device.id_device);
                            }}>
                                <button className="w-full">
                                    <ContextMenuItem className="">
                                        Delete
                                    </ContextMenuItem>
                                </button>
                            </form>
                            <form action={async () => {
                                "use server";

                                await AddDummyDataByID(device.id_device);
                            }}>
                                <button className="w-full">
                                    <ContextMenuItem className="">
                                        Add Dummy Data
                                    </ContextMenuItem>
                                </button>
                            </form>
                        </ContextMenuContent>
                    </ContextMenu>
                )
            })}

            {/* NOTE: I DONT KNOW IF THIS LOOKS ALRIGHT*/}
            {/* <Accordion type="single" collapsible> */}
            {/*     <AccordionItem value="item-1"> */}
            {/*         <AccordionTrigger>Devices</AccordionTrigger> */}
            {/*         <AccordionContent> */}
            {/*         </AccordionContent> */}
            {/*     </AccordionItem> */}
            {/* </Accordion> */}
            <AddDevice />
            <form action={async () => {
                "use server";

                await signOut();
            }}>
                <Button className="bottom-0">
                    Sign Out
                </Button>
            </form>
        </aside>
    )
}
