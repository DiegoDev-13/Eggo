import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export const ModalDetailsBatches = ({activeModalDatailsBatche, setActiveModalDatailsBatche, batcheDetails}) => {

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
        setActiveModalDatailsBatche(false);
    };

    console.log(batcheDetails)

  return (
    <div className="w-full h-full fixed top-0 left-0 inset-0 bg-black/50  backdrop-blur-[1px] flex justify-end items-center z-60" onClick={handleClose}>
        <div className="h-full w-[30%] bg-white animated-sideRight" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-25 bg-primary-green py-5 px-6 flex justify-between items-center">
                <div>
                    <h2 className="text-white text-lg font-medium">Batch-A-{batcheDetails.name_batche} Datails</h2>
                    <span className="uppercase text-gray-300 text-sm">in production since jan 2026</span>
                </div>
                <button className="cursor-pointer" onClick={handleClose}>
                    <IoMdClose size={22} className="text-gray-100 hover:text-gray-200 hover:scale-120 transition-all duration-300" />
                </button>
            </div>

            <div className="px-5 py-2 flex flex-col space-y-3">
                <h3 className="uppercase text-lg">Estadísticas Rápidas</h3>

                <div className="flex justify-between">
                    <div className="w-[47%] h-20 bg-slate-100 border-2 border-slate-200 rounded-lg p-4 space-y-1">
                        <h4 className="uppercase text-xs font-medium">HUEVOS DIARIOS</h4>
                        <span className="text-green-700 text-lg">11,780</span>
                    </div>
                    <div className="w-[47%] h-20 bg-slate-100 border-2 border-slate-200 rounded-lg p-4 space-y-1">
                        <h4 className="uppercase text-xs font-medium">INGESTA DE ALIMENTO</h4>
                        <span className="text-amber-600 text-lg">1,2 Tons</span>
                    </div>
                </div>
            </div>

            <div className="px-5 py-2 flex flex-col space-y-3">
                <h3 className="uppercase text-lg">Detalles de Lote</h3>

                <div className="flex justify-between">
                    <div className="w-[47%] h-20 bg-slate-100 border-2 border-slate-200 rounded-lg p-4 space-y-1">
                        <h4 className="uppercase text-xs font-medium">Cantidad DE GALLINAS</h4>
                        <span className="text-green-700 text-lg">{batcheDetails.current_quantity} birds</span>
                    </div>
                    <div className="w-[47%] h-20 bg-slate-100 border-2 border-slate-200 rounded-lg p-4 space-y-1">
                        <h4 className="uppercase text-xs font-medium">EDAD ACTUAL</h4>
                        <span className="text-amber-600 text-lg">{batcheDetails.current_age} Semanas</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}