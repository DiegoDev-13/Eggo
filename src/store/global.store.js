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

    openSidebar: true,
    setOpenSidebar: (state) => (set({openSidebar: state})) ,

    //State Modal add Batche
    activeModalAddBatche: false,
    setActiveModalAddBatche: (state) => (set({activeModalAddBatche: state})),

    //State Modal details Batche
    batcheDetails: null,
    setBatcheDetails: (state) => (set({batcheDetails: state})),
    activeModalDatailsBatche: false,
    setActiveModalDatailsBatche: (state) => (set({activeModalDatailsBatche: state})),
}))