import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
}
export default function LoginPage() {
    return (
        <main className="">
            <LoginForm/>
        </main>
    );
}
