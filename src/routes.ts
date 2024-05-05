// NOTE: Accesible for anyone
export const publicRoutes = [
    "/",
]

// NOTE: This will redirect logged in 
// users to their Dashboard page
export const authRoutes = [
    "/auth/register",
    "/auth/login",
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_REDIRECT = "/dashboard"
