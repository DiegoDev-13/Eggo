import {email, z} from 'zod'

export const userRegisterSchema = z.object({
    userName: z.string().min(3, 'El nombre de usuario debe tener minimo 3 caracteres').max(25, 'No maximo 25 caracteres'),
    farmName: z.string().min(3, 'El nombre de granja debe tener minimo 3 caracteres').max(25, 'No maximo 25 caracteres'),
    email: z.string().email('Por favor, ingresa un correo electrónico válido'),
    password: z.string().min(6, 'La contraseña debe tener minimo 6 caracteres').max(30, 'La contraseña no debe superar los 30 caracteres').regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula').regex(/[0-9]/, 'Debe contener al menos un número'),
    policyCheck: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar las políticas de privacidad",
    }),
})

export const userLoginShema = z.object({
    email: z.string().email('Por favor, ingresa un correo electrónico válido'),
    password: z.string().min(3, 'Ingresa una contraseña valida')
})