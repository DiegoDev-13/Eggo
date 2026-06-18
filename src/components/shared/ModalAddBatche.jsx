import { useEffect } from "react";
import { IoMdClose } from "react-icons/io"

export const ModalAddBatche = ({activeModalAddBatche, setActiveModalAddBatche}) => {

     // Se bloquea el scroll del body cuando el modal esté abierto
    useEffect(() => {
        // Guardamos el estilo original por si ya tenía algún overflow específico
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        // Ocultamos las barras de desplazamiento
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const handleClose = () => {
        setActiveModalAddBatche(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form send')
    }


    return (
        <div className="w-full h-screen absolute top-0 left-0 inset-0 bg-black/50  backdrop-blur-[2px] flex justify-center items-center z-50" onClick={handleClose}>
            
            <div className="bg-white w-130  rounded-2xl relative sideScale" onClick={(e) => e.stopPropagation()} >
                <button className="absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
                    <IoMdClose size={24} className="dark:text-gray-100 dark:hover:text-gray-400 hover:scale-120 transition-all duration-300" />
                </button>

                <div className="w-full bg-gray-200 dark:bg-theme-primary-dark dark:text-white rounded-t-2xl px-8 py-5 border-b border-gray-500 dark:border-gray-600">
                    <h2 className="text-lg font-bold">Agregar Nuevo Lote</h2>
                </div>

                <form onSubmit={handleSubmit} className="w-full bg-gray-50 dark:bg-theme-secondary-dark p-8 flex flex-col space-y-6 rounded-b-2xl" >
                    
                    <div className="w-full flex justify-between">

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="" className="font-semibold dark:text-gray-200">Nombre del Lote</label>
                            <input type="text" className="w-full bg-white dark:bg-theme-third-dark p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Igresa un nombre de lote."/>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="" className="font-semibold dark:text-gray-200">Fecha de Ingreso</label>
                            <input type="date" className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Id"/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="" className="font-semibold dark:text-gray-200">Raza de Lote</label>
                        <input type="text" className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ingra el nombre de la raza."/>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="" className="font-semibold dark:text-gray-200">Cantidad inicial</label>
                        <input type="text" className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ejemplo. 1500"/>
                    </div>

                    <div className="w-full flex justify-end gap-4">
                        <button type="button" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-theme-third-dark dark:hover:bg-gray-700 dark:text-gray-100 font-semibold cursor-pointer rounded-lg transition-all duration-300" onClick={handleClose}>
                            Cancelar
                        </button>

                        <button type="submit" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold border border-black dark:border-none px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300">
                            Crear Lote
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};