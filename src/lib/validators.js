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

export const useAddBatcheShema = z.object({
    nameBatche: z.string().min(3, 'El nombre de lote debe tener minimo 3 caracteres').max(25, 'No maximo 25 caracteres'),
    dateAdmission: z.string({ required_error: "La fecha de ingreso es requerida" }).date("El formato de fecha no es válido"),
    birthDate: z.string({ required_error: "La fecha de nacimiento es requerida" }).date("El formato de fecha no es válido"),
    geneticLine: z.string().min(3, 'La raza debe tener minimo 3 caracteres').max(20, 'No maximo 20 caracteres'),
    initialAmount: z.coerce.number({ required_error: "El monto inicial es requerido", invalid_type_error: "Debes ingresar un número válido" }).min(1, "El monto inicial debe ser mayor a 0") .max(999999, "El monto supera el límite permitido"),
    totalDeaths: z.coerce.number({ required_error: "El total de aves muertas es requerido", invalid_type_error: "Debes ingresar un número válido" }).min(0, "El total no debe ser menor a 0") .max(999999, "El monto supera el límite permitido"),
    totalSold: z.coerce.number({ required_error: "El total de aves vendidas es requerido", invalid_type_error: "Debes ingresar un número válido" }).min(0, "El total no debe ser menor a 0") .max(999999, "El monto supera el límite permitido"),
})
