// export { auth as middleware } from "@/auth"
// import { auth } from "./auth"
import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    DEFAULT_REDIRECT,
} from "@/routes"

const { auth } = NextAuth(authConfig);
// export const { auth: middleware } = NextAuth(authConfig)

// NOTE: Here is where we check if the user is logged in
// @ts-ignore
export default auth((req) => {
    // req.auth
    // console.log(req.nextUrl.pathname)
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
        }

        return null;
    }

    if (!isLoggedIn && !isPublicRoutes) {
        return Response.redirect(new URL("/auth/login", nextUrl))

    }
})
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
