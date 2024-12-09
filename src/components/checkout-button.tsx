"use client";

import { useRouter } from "next/navigation";

interface CheckoutButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean,
    product: string, 
}
export const CheckoutButton = ({
    children,
    mode = "redirect",
    asChild,
    product,
}: CheckoutButtonProps) => {
    const router = useRouter();
    // const socket = "https://api.netdefender.cloud"
    const apiURL = process.env.SOCKET_URL || "https://api.netdefender.cloud";

    const onClick = () => {
        console.log(apiURL);
        router.push(`${apiURL}/v1/stripe/${product}`)
    }

    return (
        <p onClick={onClick}>
            {children}
        </p>
    )
}
