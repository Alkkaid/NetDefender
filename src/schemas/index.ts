import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
    password: z.string().min(1, {
        message: "La contraseña es requerida"
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
    password: z.string().min(8, {
        message: "Minimo 8 caracteres requeridos"
    }),
    name: z.string().min(1, {
        message: "Nombre es requerido"
    })
})

export const AddDeviceSchema = z.object({
    name: z.string().min(1, {
        message: "Nombre es requerido"
    }),
    code: z.string().min(1, {
        message: "Codigo es requerido"
    })
})
