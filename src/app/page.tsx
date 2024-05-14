import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { NavbarComponents } from "./_components/NavbarComponents";

import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiHackaday, SiWireshark } from "react-icons/si";


export default function Home() {
    return (
        <>
            <nav className="flex p-4  w-full  top-0 fixed">

                <div className="text-2xl mr-4 font-semibold">
                    NetDefender
                </div>
                <NavbarComponents />

                <div className="w-full flex justify-end flex-row">
                    <LoginButton>
                        <Button variant={"ghost"} >
                            Sign In
                        </Button>
                    </LoginButton>
                    <RegisterButton>
                        <Button variant={"default"} >
                            Sign Up
                        </Button>
                    </RegisterButton>
                </div>

            </nav>
            {/* <main className="flex h-full flex-col items-center justify-center"> */}
            {/* TODO: Make this a component */}
            <main className="pt-20 flex justify-center">
                <section className="flex flex-col gap-y-4 justify-center w-9/12 ">
                    <article className="flex flex-row justify-center items-center  ">
                        <AiOutlineSecurityScan  className="size-48" />
                        <div className="text-5xl">
                            Escaneo
                        </div>
                    </article>
                    <article className="flex flex-row justify-center items-center ">
                        <IoStatsChartSharp className="size-48" />
                        <div className="text-5xl">
                            Monitoreo
                        </div>
                    </article>
                    <article className="flex flex-row justify-center items-center ">
                        <SiHackaday className="size-48" />
                        <div className="text-5xl">
                            Ataques
                        </div>
                    </article>
                    <article className="flex flex-row justify-center items-center ">
                        <SiWireshark className="size-48" />
                        <div className="text-5xl">
                            Trafico de Datos
                        </div>
                    </article>
                </section>

            </main>
        </>
    );
}
