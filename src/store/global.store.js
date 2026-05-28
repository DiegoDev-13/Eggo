import { create } from 'zustand'

export const useGlobalStore = create((set, get) => ({
    darkMode: false,
    changeTheme: () => {
        const currentMode = get().darkMode; 
        const nextMode = !currentMode; 

        if (nextMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        
        set({ darkMode: nextMode });
    },
}))