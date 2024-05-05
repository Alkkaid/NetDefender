"use server";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { DeviceCard } from "../_components/dashboard/deviceCard";
import { getAllDevicesFromUser } from "@/data/device";
import Link from 'next/link'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Suspense } from "react";


const DashboardPage = async () => {
    const session = await auth();
    const allDevicesFromUser = await getAllDevicesFromUser(session?.user?.id!);
    return (
        <div className="flex flex-col min-h-screen ">
            {/* {JSON.stringify(session)} */}
            {/* <form action={async () => { */}
            {/*     "use server"; */}
            {/**/}
            {/*     await signOut(); */}
            {/* }}> */}
            {/*     <Button> */}
            {/*         Sign Out */}
            {/*     </Button> */}
            {/* </form> */}

            <nav className="w-full bg-slate-400">

            </nav>
            <div className="text-4xl font-semibold pt-4 pl-10">
                Overview
            </div>
            {/* NOTE: TOP THING */}
            <section className="flex flex-row p-4 gap-x-4 gap-y-4">
                {/* FIX: I DONT KNOW WHAT TO DO WITH THIS */}
                <Card className="w-3/12 bg-red-200/65">
                    <CardHeader className="pb-2">
                        <CardDescription>Vulnerabilities Founded</CardDescription>
                        <CardTitle className="text-4xl text-destructive">16</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-3/12 bg-emerald-100/65">
                    <CardHeader className="pb-2">
                        <CardDescription>Recommendations</CardDescription>
                        <CardTitle className="text-4xl text-emerald-400">5</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            To-be implemented
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-3/12 ">
                    <CardHeader className="pb-2">
                        <CardDescription>Amount of Devices</CardDescription>
                        <CardTitle className="text-4xl">4</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-3/12 ">
                    <CardHeader className="pb-2">
                        <CardDescription>Number of Ports Scanned</CardDescription>
                        <CardTitle className="text-4xl">641</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            ?????
                        </div>
                    </CardContent>
                </Card>
            </section>
            <div className="text-4xl font-semibold pt-4 pl-10">
                Devices
            </div>
            <section className="grid grid-cols-4 gap-y-4 gap-x-4 p-10 ">
                {allDevicesFromUser!.map((device) => {
                    return (
                        <Suspense key={device.id_device}>
                            <Link key={device.id_device} href={`/dashboard/${device.id_device}`}>
                                <DeviceCard deviceName={device.name!} id_device={device.id_device} />
                            </Link>
                        </Suspense>
                    )
                })}
                {/* <DeviceCard DeviceName="Device Name Placeholder" NumberOfIPs={6} VulnerabitiesFounded={4} /> */}
                {/* <DeviceCard DeviceName="Device Name Placeholder" NumberOfIPs={6} VulnerabitiesFounded={0} /> */}
                {/* <DeviceCard DeviceName="Device Name Placeholder" NumberOfIPs={6} VulnerabitiesFounded={4} /> */}
                {/* <DeviceCard DeviceName="Device Name Placeholder" NumberOfIPs={6} VulnerabitiesFounded={0} /> */}
            </section>



        </div>
    )
}

export default DashboardPage;
