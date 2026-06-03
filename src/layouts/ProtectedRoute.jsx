import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { supabase } from "../supabase/supabase.config"
import { SpinnerStart } from "../components/shared/SpinnerStart"

export const ProtectedRoute = () => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {  
        // 1: Usamos getSession para obtener la sesión inicial
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        })

        // 2: Escuchamos los cambios de la autenticación en tiempo real
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })

        return () => subscription.unsubscribe();
    }, [])
    
    if (loading) return <SpinnerStart loading={loading} /> 

    if (!session) return <Navigate to='/login' replace />

    return <Outlet />
}
