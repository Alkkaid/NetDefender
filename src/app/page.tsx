import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'NetDefender',
}

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-center">
            <LoginButton>
                <Button variant={"outline"} >
                    Sign In
                </Button>
            </LoginButton>
            <RegisterButton>
                <Button variant={"outline"} >
                    Sign Up
                </Button>
            </RegisterButton>
        </main>
    );
}
