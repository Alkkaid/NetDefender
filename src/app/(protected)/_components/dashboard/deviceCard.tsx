import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getDeviceByID } from "@/data/device"
import { db } from "@/db"
import { devices, devicesConnections } from "@/db/schema"
import { count, eq } from "drizzle-orm"
import { Suspense } from "react"

interface DeviceCardProps {
    // children: React.ReactNode,
    deviceName: string,
    id_device: string,
}

export const DeviceCard = async ({
    deviceName,
    id_device,
}: DeviceCardProps) => {
    const device = await getDeviceByID(id_device);
    const numberOfDevices = await db.select({
        count: count()
    }).from(devicesConnections) 
        // @ts-ignore
    .where(eq(id_device, devicesConnections.id_device))



    const date = device?.at(0)?.createdAt;
    return (
        <article>
            {/* <Card className="hover:bg-slate-50 h-full"> */}
            {/*     <CardHeader> */}
            {/*         <CardTitle>{DeviceName}</CardTitle> */}
            {/*         <CardDescription>Number of IPs founded: {NumberOfIPs}</CardDescription> */}
            {/*     </CardHeader> */}
            {/*     <CardContent> */}
            {/* NOTE: I hate this way of typing if's, find another way */}
            {/*         { */}
            {/*             VulnerabitiesFounded == 0 && */}
            {/*             ( */}
            {/*                 <p className="text-emerald-500">Vulnerabilities Founded: {VulnerabitiesFounded}</p> */}
            {/*             ) */}
            {/*         } */}
            {/*         { */}
            {/*             VulnerabitiesFounded > 0 && */}
            {/*             ( */}
            {/*                 <p className="text-destructive">Vulnerabilities Founded: {VulnerabitiesFounded}</p> */}
            {/*             ) */}
            {/*         } */}
            {/*     </CardContent> */}
            {/*     <CardFooter> */}
            {/*         <p>Card Footer</p> */}
            {/*     </CardFooter> */}
            {/* </Card> */}

            <Card className="hover:bg-slate-50 h-full max-h-[20rem]">
                <CardHeader>
                    <CardTitle>{deviceName}</CardTitle>
                    <Suspense>
                        <CardDescription>Number of IPs founded:  </CardDescription>
                    </Suspense>
                </CardHeader>
                <CardContent>
                    <Suspense>
                        Numero de Dispositivos: {numberOfDevices[0].count}
                    </Suspense>
                    {/* NOTE: I hate this way of typing if's, find another way */}
                    {/* { */}
                    {/*     VulnerabitiesFounded == 0 && */}
                    {/*     ( */}
                    {/*         <p className="text-emerald-500">Vulnerabilities Founded: {VulnerabitiesFounded}</p> */}
                    {/*     ) */}
                    {/* } */}
                    {/* { */}
                    {/*     VulnerabitiesFounded > 0 && */}
                    {/*     ( */}
                    {/*         <p className="text-destructive">Vulnerabilities Founded: {VulnerabitiesFounded}</p> */}
                    {/*     ) */}
                    {/* } */}

                </CardContent>
                <CardFooter>
                    {/* TODO: After the migration of the new Database, fix this */}
                    <p className="text-muted-foreground">Last time updated:  {date?.toLocaleDateString('es-MX')}</p>
                </CardFooter>
            </Card>
        </article>
    )
}
