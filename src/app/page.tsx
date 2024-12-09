import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { NavbarComponents } from "./_components/NavbarComponents";

import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiHackaday, SiWireshark } from "react-icons/si";



//TODO: Delete if it doesnt work
import { CheckoutButton } from "@/components/checkout-button";
import { IoCart } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";


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
                <section className="flex flex-row gap-x-4 justify-center w-9/12 pt-20">
                    {/* <article className="flex flex-row justify-center items-center  "> */}
                    {/*     <AiOutlineSecurityScan className="size-48" /> */}
                    {/*     <div className="text-5xl"> */}
                    {/*         Escaneo */}
                    {/*     </div> */}
                    {/* </article> */}
                    {/* <article className="flex flex-row justify-center items-center "> */}
                    {/*     <IoStatsChartSharp className="size-48" /> */}
                    {/*     <div className="text-5xl"> */}
                    {/*         Monitoreo */}
                    {/*     </div> */}
                    {/* </article> */}
                    {/* <article className="flex flex-row justify-center items-center "> */}
                    {/*     <SiHackaday className="size-48" /> */}
                    {/*     <div className="text-5xl"> */}
                    {/*         Ataques */}
                    {/*     </div> */}
                    {/* </article> */}
                    {/* <article className="flex flex-row justify-center items-center "> */}
                    {/*     <SiWireshark className="size-48" /> */}
                    {/*     <div className="text-5xl"> */}
                    {/*         Trafico de Datos */}
                    {/*     </div> */}
                    {/* </article> */}
                    <article className="w-3/12 flex flex-col items-center p-2 text-5xl border-black rounded border-2">
                        <AiOutlineSecurityScan className="size-32" />
                        <article className="pb-2">
                            NetGuardian
                        </article>
                        <article className="text-3xl flex flex-row items-end">
                            $20 USD
                            <article className="text-xl text-gray-600">
                                /al mes

                            </article>
                        </article>
                        <article className="w-full">
                            <CheckoutButton product="netGuardian">
                                <Button className="w-full bg-indigo-700 hover:bg-indigo-800">
                                    <IoCart className="size-5" />
                                    Comprar
                                </Button>
                            </CheckoutButton>

                        </article>
                        <article className=" w-11/12 text-2xl mt-9">
                            Resalta la idea de protección y vigilancia continua sobre la red. Es profesional, confiable y atractivo para clientes empresariales.
                        </article>
                    </article>

                    <article className="w-3/12 flex flex-col items-center p-2 text-5xl border-black rounded border-2">
                        <FaServer className="size-32" />
                        <article className="pb-2">
                            CloudWatch360
                        </article>
                        <article className="text-3xl flex flex-row items-end">
                            $40 USD
                            <article className="text-xl text-gray-600">
                                /al mes

                            </article>
                        </article>
                        <article className="w-full">
                            <CheckoutButton product="cloudWatch">
                                <Button className="w-full bg-indigo-700 hover:bg-indigo-800">
                                    <IoCart className="size-5" />
                                    Comprar
                                </Button>
                            </CheckoutButton>

                        </article>
                        <article className=" w-11/12 text-2xl mt-9">
                            Destaca la capacidad de monitorear desde la nube con una visión integral y en tiempo real, enfatizando la tecnología avanzada y la flexibilidad.
                        </article>
                    </article>

                    <article className="w-3/12 flex flex-col items-center p-2 text-5xl border-black rounded border-2">
                        <SiSecurityscorecard className="size-32" />
                        <article className="pb-2">
                            SafeLink Pro
                        </article>
                        <article className="text-3xl flex flex-row items-end">
                            $80 USD
                            <article className="text-xl text-gray-600">
                                /al mes

                            </article>
                        </article>
                        <article className="w-full">
                            <CheckoutButton product="safeLink">
                                <Button className="w-full bg-indigo-700 hover:bg-indigo-800">
                                    <IoCart className="size-5" />
                                    Comprar
                                </Button>
                            </CheckoutButton>

                        </article>
                        <article className=" w-11/12 text-2xl mt-9">
                            Enfatiza la seguridad y estabilidad de las conexiones, algo crítico para empresas que dependen de redes confiables
                        </article>
                    </article>
                </section>

            </main>
        </>
    );
}
