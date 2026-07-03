import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit, MdOutlineEggAlt, MdOutlineHeartBroken, MdOutlineInventory2, MdOutlinePictureAsPdf, MdOutlineVaccines } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BatchesDatailsMetricCards } from "../batches/BatchesDatailsMetricCards";
import { FarmTabsBatches } from "../batches/FarmTabsBatches";

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
        document.getElementById('modalDetails').classList.add('animated-exitRight')
        setTimeout(() => {
            setActiveModalDatailsBatche(false);
            
        }, 400);
    };

    console.log(batcheDetails)

  return (
    <div className="w-full h-full fixed top-0 left-0 inset-0 bg-black/50 backdrop-blur-[1px] flex justify-center items-center z-50" onClick={handleClose}> 
  {/* SE AGREGÓ: max-h-[90vh], max-w-5xl, w-full, flex y flex-col */}
        <div id="modalDetails" className="max-h-[90vh] w-full max-w-7xl bg-white animated-sideRight rounded-lg flex flex-col" onClick={(e) => e.stopPropagation()}> 
            
            {/* Cabecera: Se agregó flex-shrink-0 para que nunca se reduzca su tamaño */}
            <div className="w-full h-20 border-b border-gray-400 py-5 px-6 rounded-t-lg flex justify-between items-center shrink-0"> 
                <div className="flex space-x-3 items-center"> 
                    <div className="p-2 bg-green-600/15 rounded-lg"> 
                    <MdOutlineInventory2 size={26} className="text-green-600" /> 
                    </div> 
                    <div className="flex flex-col space-y-0"> 
                    <h2 className="text-black dark:text-white text-lg font-medium">Batch Detail: {batcheDetails.name_batche}</h2> 
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Code: BATCH-{batcheDetails.id} Updated 2 hours ago</span> 
                    </div> 
                    <div className="px-3 py-0.2 rounded-full bg-green-600/15 border border-green-600 flex items-center gap-1"> 
                    <div className="h-3 w-3 bg-green-600 rounded-full" /> 
                    <h4>Active</h4> 
                    </div> 
                </div> 
                <div className="flex items-center space-x-3"> 
                    <button className="px-3 py-1 font-semibold flex items-center gap-2 rounded-lg border border-gray-400 hover:border-gray-900 cursor-pointer hover:scale-105 transition-all duration-300"> 
                        <MdOutlineEdit size={22} /> Editar Lote 
                    </button> 
                    <button className="cursor-pointer"> 
                        <FiPrinter size={22} className="text-black hover:text-gray-600 hover:scale-120 transition-all duration-300" /> 
                    </button> 
                    <button className="cursor-pointer"> 
                        <MdOutlinePictureAsPdf size={22} className="text-black hover:text-gray-600 hover:scale-120 transition-all duration-300" /> 
                    </button> 
                    <div className="w-px h-8 bg-gray-300"/> 
                    <button className="cursor-pointer" onClick={handleClose}> 
                        <IoMdClose size={22} className="text-black hover:text-gray-500 hover:scale-120 transition-all duration-300" /> 
                    </button> 
                </div> 
            </div> 

            <div className="grid grid-cols-[75%_25%] flex-1 min-h-0 overflow-hidden rounded-b-lg"> 

                <div className="bg-slate-100 overflow-y-auto py-4 px-8 flex flex-col space-y-3"> 
                    <BatchesDatailsMetricCards />
                    <FarmTabsBatches />
                </div> 

                
                <div className="bg-white border-l border-gray-400 overflow-y-auto p-5"> 
                    <h2 className="uppercase text-lg text-gray-700 font-semibold">Acciones Rápidas</h2>

                    <div className="flex flex-col space-y-3">
                        <button type="button" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold border border-black dark:border-none px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-102 transition-all duration-300">
                            <LuCirclePlus size={22} className="text-white" />
                            Registrar Producción
                        </button>
                        <button className="px-6 py-2 font-semibold flex items-center gap-2 rounded-lg border border-gray-400 hover:border-gray-900 cursor-pointer hover:scale-102 transition-all duration-300"> 
                            <MdOutlineHeartBroken size={22} /> 
                            Anotar Muertes
                        </button> 
                        <button className="px-6 py-2 font-semibold flex items-center gap-2 rounded-lg border border-gray-400 hover:border-gray-900 cursor-pointer hover:scale-102 transition-all duration-300"> 
                            <MdOutlineVaccines size={22} /> 
                            Agregar Vacunación
                        </button> 
                        <button className="px-6 py-2 font-semibold flex items-center gap-2 rounded-lg border border-gray-400 hover:border-gray-900 cursor-pointer hover:scale-102 transition-all duration-300"> 
                            <MdOutlineEggAlt size={22} /> 
                            Agregar Alimento
                        </button> 
                        <div className="w-full h-px bg-gray-400" />
                        <button className="px-6 py-2 text-red-500 font-semibold flex items-center gap-2 cursor-pointer hover:scale-102 transition-all duration-300"> 
                            <FaRegTrashAlt size={18} /> 
                            Eliminar Lote
                        </button> 
                    </div>

                    <div className="py-3 px-5 bg-slate-200 mt-8 rounded-lg border border-gray-400">
                        <h3 className="text-green-700 uppercase font-semibold">Farm tip</h3>
                        <p className="mt-2">
                            El lote A-102 se encuentra actualmente en su ciclo pico. Supervise atentamente la ventilación a medida que aumenten las temperaturas esta semana.
                        </p>
                    </div>
                </div> 
            </div> 

        </div> 
    </div>

  )
}