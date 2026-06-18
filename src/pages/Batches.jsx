import { AppBar } from "../components/shared/AppBar"
import { FiDownload } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { BatchesMetricCards } from "../components/batches/BatchesMetricCards";
import { IoCalendarClearOutline } from "react-icons/io5";
import { ContainerCardBatches } from "../components/batches/ContainerCardBatches";
import {dateNow} from '../helpers/index'
import { useState } from "react";
import { ModalAddBatche } from "../components/shared/ModalAddBatche";


const dataBatches = [
    {
        id: 1,
        active: true,
        race: 'Elite White Leghorns',
        hen_count: 300,
        current_age: 42,
        production: 94.2,
        mortality: 0.31,
    },
    {
        id: 2,
        active: false,
        race: 'ISA Brown Units',
        hen_count: 500,
        current_age: 58,
        production: 85.5,
        mortality: 0.68,
    },
    {
        id: 3,
        active: true,
        race: 'Premiun Lohmann',
        hen_count: 850,
        current_age: 22,
        production: 89.4,
        mortality: 0.12,
    },
]

export const Batches = () => {

    const [activeModalAddBatche, setActiveModalAddBatche] = useState(false)

    const date = dateNow()

  return (
    <div className="dark:bg-theme-secondary-dark relative">

        {
            activeModalAddBatche && <ModalAddBatche activeModalAddBatche={activeModalAddBatche} setActiveModalAddBatche={setActiveModalAddBatche} />
        }

        

        <AppBar />

        <section className="px-7 py-8 flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-3">
                <div className="flex flex-col space-y-1">
                    <span className="text-center md:text-start font-semibold dark:text-white text-3xl">Panel Administrador - Lotes</span>
                    {/* <span className="text-center md:text-start text-theme-textLight dark:text-gray-300">Overview and lifecycle tracking for poultry flock units.</span> */}
                    <span className="text-center md:text-start text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <IoCalendarClearOutline size={18} />
                        {date}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <button type="button" className="dark:bg-theme-third-dark border dark:hover:bg-gray-700 hover:bg-gray-100 border-black dark:border-gray-600 px-3 py-2 rounded-lg flex items-center gap-3 dark:text-white cursor-pointer transition-all duration-300">
                        <FiDownload size={16} />
                        Export
                    </button>
                    <button type="button" className="bg-primaryDark-green hover:bg-primary-green dark:bg-green-600 dark:hover:bg-green-700 text-white border border-black dark:border-none px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300" onClick={() => setActiveModalAddBatche(!activeModalAddBatche)}>
                        <IoIosAdd size={22} />
                        Add New Batch
                    </button>
                </div>
            </div>

            <BatchesMetricCards />
        </section>

        <section className="px-7 py-8 flex flex-col space-y-8">
            <ContainerCardBatches dataBatches={dataBatches} />
        </section>
    </div>
  )
}