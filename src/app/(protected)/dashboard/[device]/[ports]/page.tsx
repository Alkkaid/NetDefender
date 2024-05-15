//TODO: TABLE, then active ports 

export default async function PortsPage({ params }: { params: { ports: string } }) {
    return (
        <div>
            {params.ports}
        </div>
    )
}
