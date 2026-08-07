import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io"
import { useAddBatcheShema } from "../../lib/validators";
import { getCompletedWeeks } from "../../helpers";
import { useUserStore } from "../../store/useUserStore";
import { useAddBatche } from "../../hooks/batches/useAddBatche";
import { SpinnerLoading } from "./SpinnerLoading";
import { MdOutlineEgg, MdOutlineInventory2, MdOutlineLocationOn, MdOutlinePets, MdOutlineSupportAgent } from "react-icons/md";
import { LuCirclePlus } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiMoneyFill, PiTagSimpleLight } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiErrorWarningLine, RiTruckLine } from "react-icons/ri";
import { GiChicken } from "react-icons/gi";

export const ModalAddBatche = ({activeModalAddBatche, setActiveModalAddBatche}) => {

    const {userData} = useUserStore()

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

    const {mutate, isPending, isError} = useAddBatche()
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(useAddBatcheShema)
    })


    const onSubmit = data => {

        const dataBatche = {
            userId: userData.user_id,
            nameBatche: data.nameBatche,
            dateAdmission: data.dateAdmission,
            birthDate: data.birthDate,
            currentAge: getCompletedWeeks(data.birthDate, data.dateAdmission),
            geneticLine: data.geneticLine,
            initialAmount: data.initialAmount,
            totalDeaths: data.totalDeaths,
            totalSold: data.totalSold,
            currentQuantity: data.initialAmount - data.totalDeaths - data.totalSold
        }
        
        // console.log(dataBatche)

      mutate({dataBatche})
  }

    const handleClose = () => {
        setActiveModalAddBatche(false);
    };

    // if(true) return <h1 className="text-2xl">cargando...</h1>


    return (
        <div className="w-full h-full fixed top-0 left-0 inset-0 bg-black/50 backdrop-blur-[1px] flex justify-center items-center z-50" onClick={handleClose}> 
      {/* SE AGREGÓ: max-h-[90vh], max-w-5xl, w-full, flex y flex-col */}
            <div id="modalDetails" className="max-h-[90vh] w-[70%] max-w-7xl bg-white animated-sideRight rounded-lg flex flex-col" onClick={(e) => e.stopPropagation()}> 
                
                
                {
                    isPending 
                        ? <div className="w-full h-200 bg-white rounded-lg">
                            <SpinnerLoading />
                        </div>
                        : <>
                            <div className="w-[full] h-20 dark:bg-theme-primary-dark border-b border-gray-400 py-5 px-6 rounded-t-lg flex justify-between items-center shrink-0"> 
                                <div className="flex space-x-3 items-center"> 
                                    <div className="p-2 bg-green-600/15 rounded-lg"> 
                                        <GiChicken size={26} className="text-green-600" /> 
                                    </div> 
                                    <div className="flex flex-col space-y-0"> 
                                        <h2 className="text-black dark:text-white text-lg font-medium">Crear Nuevo Lote</h2> 
                                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Registre un nuevo lote de aves de corral ingresando su información general.</span> 
                                    </div> 
                                </div> 
                                <div className="flex items-center space-x-3"> 
                                     
                                    <button className="cursor-pointer" onClick={handleClose}> 
                                        <IoMdClose size={22} className="text-black hover:text-gray-500 dark:text-gray-300 hover:dark:text-white hover:scale-120 transition-all duration-300" /> 
                                    </button> 
                                </div> 
                            </div> 
    
                            <div className=" grid grid-cols-[70%_30%] flex-1 min-h-0 overflow-hidden rounded-b-lg"> 
    
                                <div className="bg-slate-100 dark:bg-theme-secondary-dark overflow-y-auto py-4 px-8 flex flex-col space-y-3"> 

                                    

                                    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-100 dark:bg-theme-secondary-dark py-6 flex flex-col space-y-6 rounded-b-2xl" >

                                        <div className="flex space-x-1">
                                            <div className="h-full w-1.25 bg-green-700 rounded-lg" />
                                            <h2 className="text-base font-semibold uppercase">Información General</h2>
                                        </div>

                                        <div className="w-full flex justify-between space-x-6">


                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="nameBatche" className="font-semibold dark:text-gray-200 text-gray-800">Nombre del Lote <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <PiTagSimpleLight size={24} />
                                                    <input type="text" id="nameBatche" {...register("nameBatche")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingresa un nombre de lote."/>
                                                </div>
                                                {
                                                    errors.nameBatche && <span className="text-sm text-red-500">{errors.nameBatche.message}</span>
                                                }
                                            </div>

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="dateAdmission" className="font-semibold text-gray-800 dark:text-gray-200 ">Fecha de Ingreso <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <IoCalendarClearOutline size={20} />
                                                    <input type="date" id="dateAdmission" {...register("dateAdmission")} className="w-full ml-1 p-2  rounded-lg focus:outline-none dark:text-white transition-all duration-300" />
                                                </div>
                                                {
                                                    errors.dateAdmission && <span className="text-sm text-red-500">{errors.dateAdmission.message}</span>
                                                }
                                            </div>
                                        </div>


                                        <div className="w-full flex justify-between space-x-6">

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="birthDate" className="font-semibold dark:text-gray-200 text-gray-800">Fecha de Nacimiento <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <MdOutlineEgg size={26} />
                                                    <input type="date" id="birthDate" {...register("birthDate")} className="w-full ml-1 p-2  rounded-lg focus:outline-none dark:text-white transition-all duration-300" />
                                                </div>
                                                {
                                                    errors.birthDate && <span className="text-sm text-red-500">{errors.birthDate.message}</span>
                                                }
                                            </div>

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="geneticLine" className="font-semibold dark:text-gray-200 text-gray-800">Raza de Lote <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <MdOutlinePets size={22} />
                                                    <input type="text" id="geneticLine" {...register("geneticLine")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingra el nombre de la raza."/>
                                                </div>
                                                {
                                                    errors.geneticLine && <span className="text-sm text-red-500">{errors.geneticLine.message}</span>
                                                }
                                            </div>
                                        </div>


                                        <div className="w-full flex justify-between space-x-6">

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="initialAmount" className="font-semibold dark:text-gray-200 text-gray-800">Cantidad inicial <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <MdOutlineInventory2 size={22} />
                                                    <input type="number" id="initialAmount" {...register("initialAmount")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ejemplo. 1500"/>
                                                </div>
                                                {
                                                    errors.initialAmount && <span className="text-sm text-red-500">{errors.initialAmount.message}</span>
                                                }
                                            </div>

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="initialAmount" className="font-semibold dark:text-gray-200 text-gray-800">Ubicación de Lote <span className="text-red-600 text-xl">*</span></label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <MdOutlineLocationOn size={26} />
                                                    <input type="text" id="initialAmount" {...register("initialAmount")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingresa ubicación"/>
                                                </div>
                                                {
                                                    errors.initialAmount && <span className="text-sm text-red-500">{errors.initialAmount.message}</span>
                                                }
                                            </div>

                                        </div>

                                        <div className="w-full flex justify-between  space-x-6">


                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="totalDeaths" className="font-semibold dark:text-gray-200 text-gray-800">Total Muertas</label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <RiErrorWarningLine size={24} />
                                                    <input type="number" id="totalDeaths" {...register("totalDeaths")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingresa el total muertas"/>
                                                </div>
                                                {
                                                    errors.totalDeaths && <span className="text-sm text-red-500">{errors.totalDeaths.message}</span>
                                                }
                                            </div>

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="totalSold" className="font-semibold dark:text-gray-200 text-gray-800">Total Vendidas</label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <PiMoneyFill size={22} />
                                                    <input type="number" id="totalSold" {...register("totalSold")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingresa el total vendidas"/>
                                                </div>
                                                {
                                                    errors.totalSold && <span className="text-sm text-red-500">{errors.totalSold.message}</span>
                                                }
                                            </div>
                                        </div>

                                        <div className="w-full flex justify-between  space-x-6">


                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="totalDeaths" className="font-semibold dark:text-gray-200 text-gray-800">Proveedor</label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <RiTruckLine size={22} />
                                                    <input type="text" id="totalDeaths" {...register("totalDeaths")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Ingresa proveedor"/>
                                                </div>
                                                {
                                                    errors.totalDeaths && <span className="text-sm text-red-500">{errors.totalDeaths.message}</span>
                                                }
                                            </div>

                                            <div className="w-full flex flex-col space-y-1">
                                                <label htmlFor="totalSold" className="font-semibold dark:text-gray-200 text-gray-800">Líder de lote</label>
                                                <div className="bg-white dark:bg-theme-third-dark flex items-center pl-3 border border-gray-500 rounded-lg">
                                                    <MdOutlineSupportAgent size={24} />
                                                    <input type="text" id="totalSold" {...register("totalSold")} className="w-full ml-1 p-2 rounded-lg focus:outline-none dark:text-white transition-all duration-300"  placeholder="Nombre de lider"/>
                                                </div>
                                                {
                                                    errors.totalSold && <span className="text-sm text-red-500">{errors.totalSold.message}</span>
                                                }
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col space-y-1">
                                            <label htmlFor="totalSold" className="font-semibold dark:text-gray-200 text-gray-800">Notas Adicionales</label>
                                            <textarea name="" id="notes" {...register("totalSold")} className="w-full h-50 resize-none bg-white dark:bg-theme-third-dark p-4 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300" 
                                            placeholder="Notas adicionales..."
                                            ></textarea>
                                            {
                                                errors.totalSold && <span className="text-sm text-red-500">{errors.totalSold.message}</span>
                                            }
                                        </div>

                                    </form>
                                        
                                </div> 
    
                                
                                <div className="bg-white border-l dark:bg-theme-primary-dark border-gray-400 overflow-y-auto p-5"> 
                                    <h2 className="uppercase text-lg text-gray-700 dark:text-white font-semibold">Acciones Rápidas</h2>
    
                                    <div className="flex flex-col space-y-3 mt-2">
                                        <button type="button" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold border border-black dark:border-none px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-102 transition-all duration-300">
                                            <LuCirclePlus size={22} className="text-white" />
                                            Registrar Producción
                                        </button>
                                        <div className="w-full h-px bg-gray-400" />
                                        <button className="px-6 py-2 text-red-500 font-semibold flex items-center gap-2 cursor-pointer hover:scale-102 transition-all duration-300" > 
                                            <FaRegTrashAlt size={18} /> 
                                            Eliminar Lote
                                        </button> 
                                    </div>
    
                                    <div className="py-3 px-5 bg-slate-200 dark:bg-theme-secondary-dark mt-8 rounded-lg border border-gray-500 dark:border-gray-600">
                                        <h3 className="text-green-700 dark:text-green-500 uppercase font-semibold">Farm tip</h3>
                                        <p className="mt-2 dark:text-gray-200">
                                            El lote A-102 se encuentra actualmente en su ciclo pico. Supervise atentamente la ventilación a medida que aumenten las temperaturas esta semana.
                                        </p>
                                    </div>
                                </div> 
                            </div> 

                            <div className="w-full h-20 dark:bg-theme-primary-dark border-t border-gray-400 py-5 px-6 rounded-t-lg flex justify-between items-center shrink-0"> 
                                <button className="px-6 py-2 font-semibold flex items-center gap-2 rounded-lg border border-gray-400 hover:border-gray-900 dark:text-gray-300 dark:border-gray-500 hover:dark:text-white hover:dark:border-white cursor-pointer hover:scale-102 transition-all duration-300"> 
                                    Cancelar
                                </button> 

                                <button type="button" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold border border-black dark:border-none px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-102 transition-all duration-300" >
                                    Registrar Producción
                                </button>
                            </div>
                        </>
                }
    
            </div> 
        </div>
    
      )

    // return (
    //     <div className="w-full h-screen fixed top-0 left-0 inset-0 bg-black/50  backdrop-blur-[2px] flex justify-center items-center z-50" onClick={handleClose}>
            
    //         {
    //             isPending 
    //             ?   <div className="bg-white dark:bg-theme-secondary-dark w-130 h-150 rounded-2xl relative sideScale" onClick={(e) => e.stopPropagation()} >
    //                     <button className="absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
    //                         <IoMdClose size={24} className="dark:text-gray-100 dark:hover:text-gray-400 hover:scale-120 transition-all duration-300" />
    //                     </button>

    //                     <div className="w-full bg-white dark:bg-theme-primary-dark dark:text-white rounded-t-2xl px-8 py-5 border-b border-gray-500 dark:border-gray-600">
    //                         <h2 className="text-lg font-bold">Agregar Nuevo Lote</h2>
    //                     </div>

    //                     <SpinnerLoading />
    //                 </div>

    //             : <div className="bg-slate-100w-130  rounded-2xl relative sideScale" onClick={(e) => e.stopPropagation()} >
    //                 <button className="absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
    //                     <IoMdClose size={24} className="dark:text-gray-100 dark:hover:text-gray-400 hover:scale-120 transition-all duration-300" />
    //                 </button>

    //                 <div className="w-full bg-white dark:bg-theme-primary-dark dark:text-white rounded-t-2xl px-8 py-5 border-b border-gray-500 dark:border-gray-600">
    //                     <h2 className="text-lg font-bold">Agregar Nuevo Lote</h2>
    //                 </div>

    //                 <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-100 dark:bg-theme-secondary-dark px-8 py-6 flex flex-col space-y-4 rounded-b-2xl" >
                        
    //                     <div className="flex flex-col space-y-1">
    //                         <label htmlFor="nameBatche" className="font-semibold dark:text-gray-200">Nombre del Lote</label>
    //                         <input type="text" id="nameBatche" {...register("nameBatche")} className="w-full bg-white dark:bg-theme-third-dark p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Igresa un nombre de lote."/>
    //                         {
    //                             errors.nameBatche && <span className="text-sm text-red-500">{errors.nameBatche.message}</span>
    //                         }
    //                     </div>


    //                     <div className="w-full flex justify-between">


    //                         <div className="flex flex-col space-y-1">
    //                             <label htmlFor="dateAdmission" className="font-semibold dark:text-gray-200">Fecha de Ingreso</label>
    //                             <input type="date" id="dateAdmission" {...register("dateAdmission")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300" />
    //                             {
    //                                 errors.dateAdmission && <span className="text-sm text-red-500">{errors.dateAdmission.message}</span>
    //                             }
    //                         </div>

    //                         <div className="flex flex-col space-y-1">
    //                             <label htmlFor="birthDate" className="font-semibold dark:text-gray-200">Fecha de Nacimiento</label>
    //                             <input type="date" id="birthDate" {...register("birthDate")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300" />
    //                             {
    //                                 errors.birthDate && <span className="text-sm text-red-500">{errors.birthDate.message}</span>
    //                             }
    //                         </div>
    //                     </div>

    //                     <div className="flex flex-col space-y-1">
    //                         <label htmlFor="geneticLine" className="font-semibold dark:text-gray-200">Raza de Lote</label>
    //                         <input type="text" id="geneticLine" {...register("geneticLine")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ingra el nombre de la raza."/>
    //                         {
    //                             errors.geneticLine && <span className="text-sm text-red-500">{errors.geneticLine.message}</span>
    //                         }
    //                     </div>

    //                     <div className="flex flex-col space-y-1">
    //                         <label htmlFor="initialAmount" className="font-semibold dark:text-gray-200">Cantidad inicial</label>
    //                         <input type="number" id="initialAmount" {...register("initialAmount")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ejemplo. 1500"/>
    //                         {
    //                             errors.initialAmount && <span className="text-sm text-red-500">{errors.initialAmount.message}</span>
    //                         }
    //                     </div>

    //                     <div className="w-full flex justify-between">


    //                         <div className="flex flex-col space-y-1">
    //                             <label htmlFor="totalDeaths" className="font-semibold dark:text-gray-200">Total Muertas</label>
    //                             <input type="number" id="totalDeaths" {...register("totalDeaths")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ingresa el total muertas"/>
    //                             {
    //                                 errors.totalDeaths && <span className="text-sm text-red-500">{errors.totalDeaths.message}</span>
    //                             }
    //                         </div>

    //                         <div className="flex flex-col space-y-1">
    //                             <label htmlFor="totalSold" className="font-semibold dark:text-gray-200">Total Vendidas</label>
    //                             <input type="number" id="totalSold" {...register("totalSold")} className="w-full bg-white dark:bg-theme-third-dark  p-2 border border-gray-500 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 dark:text-white transition-all duration-300"  placeholder="Ingresa el total vendidas"/>
    //                             {
    //                                 errors.totalSold && <span className="text-sm text-red-500">{errors.totalSold.message}</span>
    //                             }
    //                         </div>
    //                     </div>

    //                     <div className="w-full flex justify-end gap-4">
    //                         <button type="button" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-theme-third-dark dark:hover:bg-gray-700 dark:text-gray-100 font-semibold cursor-pointer rounded-lg transition-all duration-300" onClick={handleClose}>
    //                             Cancelar
    //                         </button>

    //                         <button type="submit" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold border border-black dark:border-none px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300">
    //                             Crear Lote
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //         }

    //     </div>
    // );
};