"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { DEFAULT_REDIRECT } from "@/routes";
import { loginGoogle } from "@/actions/loginGoogle";

export const Social = () => {
    // const onClick = (provider: "google") => {
    //     signIn(provider, {
    //         callbackUrl: DEFAULT_REDIRECT,
    //     })
    // }
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size={"lg"}
                variant={"outline"}
                onClick={() => loginGoogle()}
                className="w-full">
                <FcGoogle className="h-5 w-5" />
            </Button>
        </div>
    )

}

