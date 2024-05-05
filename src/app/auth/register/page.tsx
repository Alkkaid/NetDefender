import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Register',
}
export default function RegisterPage() {
    return (
        <main className="">
            <RegisterForm/>
        </main>
    );
}

