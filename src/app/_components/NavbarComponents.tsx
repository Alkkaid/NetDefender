"use client";
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import * as React from "react"
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const valores: { title: string; href: string; description: string }[] = [
    {
        title: "Mision",
        href: "/",
        description:
            "Pequeña Introduccion",
    },
    {
        title: "Vision",
        href: "/",
        description:
            "Pequeña Introduccion",
    },
]


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export const NavbarComponents = () => {
     return (
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Mision
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Vision
                                </NavigationMenuLink>
                            </Link>
                            {/* <NavigationMenuTrigger>Getting started</NavigationMenuTrigger> */}
                            {/* <NavigationMenuContent> */}
                            {/*     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
                            {/*         <ListItem href="/docs" title="Introduction"> */}
                            {/*             Re-usable components built using Radix UI and Tailwind CSS. */}
                            {/*         </ListItem> */}
                            {/*         <ListItem href="/docs/installation" title="Installation"> */}
                            {/*             How to install dependencies and structure your app. */}
                            {/*         </ListItem> */}
                            {/*         <ListItem href="/docs/primitives/typography" title="Typography"> */}
                            {/*             Styles for headings, paragraphs, lists...etc */}
                            {/*         </ListItem> */}
                            {/*     </ul> */}
                            {/* </NavigationMenuContent> */}
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Valores</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {valores.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    ¿Quienes Somos?
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

     )
}
