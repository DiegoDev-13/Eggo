import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useUserStore = create((set, get) => ({
    user: null,
    userData: [],
    session: null,
    isLoading: true,

    // Acción para cargar la sesión inicial
    initialize: async () => {
        const {data: {session}} = await supabase.auth.getSession()
        const {data} = await supabase.from('users').select('*').eq('user_id', session?.user.id).single()

        set({
            session,
            user: session?.user ?? null,
            userData: data,
            isLoading: false
        })

        // Escucha los eventos de (Login, Logout) en tiempo real 
        supabase.auth.onAuthStateChange((_event, session) => {
            set({ session, user: session?.user ?? null})
        })
    }
}))