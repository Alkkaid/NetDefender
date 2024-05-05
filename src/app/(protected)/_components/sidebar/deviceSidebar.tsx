import Link from "next/link"

interface DeviceSidebarProps {
    Name: string | null,
}
export const DeviceSidebar = ({
    Name,
}: DeviceSidebarProps) => {
    return (
        <div className="flex flex-row hover:underline py-1">
            {Name}
        </div>
    )

}

