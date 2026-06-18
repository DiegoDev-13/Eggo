import { IoMdClose, IoMdMore } from "react-icons/io"
import { Separator } from "../shared/Separator"
import { ProgressBar } from "../shared/ProgressBar"
import { useState } from "react"
import { FaRegEdit } from "react-icons/fa";

export const CardBatches = ({data, index}) => {

    const [activeMoreOptions, setActiveMoreOptions] = useState(false)

  return (
    <div className="w-70 border border-gray-700 dark:bg-theme-third-dark dark:border-gray-600 rounded-lg p-5 relative">
        <button className="cursor-pointer absolute top-6 right-5" onClick={() => setActiveMoreOptions(!activeMoreOptions)}>
            <IoMdMore size={25} className="dark:text-gray-300 hover:scale-120 transition-all duration-200" />
        </button>

        {
            activeMoreOptions && <div className="absolute top-14 -right-22 bg-white dark:bg-theme-third-dark dark:border-gray-500 w-35 z-10 px-4 py-8 flex flex-col justify-center space-y-4 border border-gray-700 rounded-lg">

                        <button type="button" className="absolute top-2 right-2 cursor-pointer" onClick={() => setActiveMoreOptions(false)}>
                            <IoMdClose size={18} className="dark:text-gray-100 dark:hover:text-gray-400 hover:scale-120 transition-all duration-300" />
                        </button>

                        <button type="button" className="flex items-center gap-2 cursor-pointer bg-blue-500 px-2 py-0.5 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-200">
                            <FaRegEdit size={18} />
                            Editar
                        </button>
                        <button type="button" className="flex items-center gap-2 cursor-pointer bg-red-500 px-2 py-0.5 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-200">
                            <FaRegEdit size={18} />
                            Eliminar
                        </button>
                    </div>
        }

        <div className="">
            <span className={`${data.active ? 'bg-green-300/30 dark:bg-green-500/40 dark:text-gray-300 ' : 'bg-amber-300/30 dark:bg-amber-500/40 dark:text-amber-300 '}  rounded-full p-0.5 px-2 text-xs font-semibold uppercase mr-2`}>{data.active ? 'Active' : 'warning'}</span>
            <span className="dark:text-white">Batch {data.id}</span>
        </div>

        <h3 className="text-base my-1 dark:text-gray-200">{data.race}</h3>

        <div className="py-3 flex flex-col space-y-4">
            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium dark:text-gray-400">Hen Count</span>
                    <span className="text-lg font-semibold dark:text-white">{data.hen_count} birds</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium dark:text-gray-400">Current Age</span>
                    <span className="text-lg font-semibold dark:text-white">{data.current_age} Weeks</span>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium dark:text-gray-400">Production</span>
                    <span className="text-lg font-semibold text-green-700 dark:text-green-500">{data.production}%</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium dark:text-gray-400">Mortality</span>
                    <span className="text-lg font-semibold dark:text-white">{data.mortality}%</span>
                </div>
            </div>
        </div>

        <ProgressBar value={data.production} target={100} />

        <Separator />

        <div className="flex justify-around items-center mt-5">
            <button className="px-5 py-1.5 border border-green-600 text-green-700 hover:bg-green-700/10 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500/10 cursor-pointer rounded-lg transition-all duration-300">
                Details
            </button>
            <button className="px-5 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-100 cursor-pointer rounded-lg transition-all duration-300">
                Reports
            </button>
        </div>
    </div>
  )
}