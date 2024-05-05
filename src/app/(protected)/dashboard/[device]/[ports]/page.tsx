
export default async function PortsPage({ params }: { params: { ports: string } }) {
    return (
        <div>
            {params.ports}
        </div>
    )
}
