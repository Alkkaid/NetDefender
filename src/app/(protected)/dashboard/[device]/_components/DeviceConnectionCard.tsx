import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface DeviceConnectionCardProps {
    ip: string,
    mac: string,
    name?: string,
    os?: string,
    brand?: string
}
export const DeviceConnectionCard = ({
    ip,
    mac,
    name,
    os,
    brand
}: DeviceConnectionCardProps) => {
    return (
        <article>
            <Card className="hover:bg-slate-50 h-full">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>Number of IPs founded: </CardDescription>
                </CardHeader>
                <CardContent>
                    <section className="flex flex-col">
                        <article>
                            IP: {ip}
                        </article>
                        <article>
                            MAC: {mac}
                        </article>
                    </section>
                </CardContent>
                <CardFooter>
                    {/* <p className="text-destructive">Se han detectado vulnerabilidades</p> */}
                </CardFooter>
            </Card>
        </article>
    )
}
