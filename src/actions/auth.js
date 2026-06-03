import { supabase } from "../supabase/supabase.config"

export const singUp = async ({dataUser}) => {
    try {
        // 1: Se crea o registra el usuario 
        const {data, error} = await supabase.auth.signUp({
            email: dataUser.email,
            password: dataUser.password
        })

        if(error) {
            console.log(error.message)
            throw new Error("Error al intentar registrar usuario");
        }

        const userId = data.user?.id
        const userEmail = data.user?.email

        if(!userId || !userEmail) {
            throw new Error("Error al obtener id del usuario o email");
            
        }

        // 2: Authenticamos al usuario 
        const { error: singInError } = await supabase.auth.signInWithPassword({
            email: dataUser.email,
            password: dataUser.password
        })

        if(singInError) {
            console.log(singInError)
            throw new Error(singInError.message);   
        }   

        // 3: agregamos el nombre de usuario a su tabla con su rol
        const {error: errorData} = await supabase.from('users').insert({
            user_id: userId,
            full_name: dataUser.userName,
            farm_name: dataUser.farmName,
            role: 'user',
            email: userEmail
        })

        if(errorData) {
            console.log(errorData)
            throw new Error("Error al dar intentar guardar datos de usuario");   
        }   


    } catch (error) {
        console.log(error)
        throw new Error("Error al registrase");
    }
}

export const singIn = async ({dataUser}) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: dataUser.email,
            password: dataUser.password
        })

        if(error) {
            throw new Error("Correo o contraseña incorrecta");
        }
        
    } catch (error) {
        throw new Error("Correo o contraseña incorrecta");
        
    }
}

export const singOut = async () => {
    try {
        const { error } = await supabase.auth.signOut()

        if(error) {
            console.log(error)
            throw new Error("error al intentar cerrar sesion");
        }
    } catch (error) {
        console.log(error)
        throw new Error("error al intentar cerrar sesion");
    }
}