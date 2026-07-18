import { IoMdMore } from "react-icons/io"
import { Separator } from "../shared/Separator"
import { ProgressBar } from "../shared/ProgressBar"
import { MoreOptionsCardBatches } from "./MoreOptionsCardBatches";
import Swal from "sweetalert2"
import { useGlobalStore } from "../../store/global.store";

export const CardBatches = ({data, activeBatchId, setActiveBatchId, handleDelete}) => {

    const isOpen = activeBatchId === data.id;

    const {setActiveModalDatailsBatche, setBatcheDetails} = useGlobalStore() 

    const handleToggleOptions = () => {
        if (isOpen) {
            // Si ya está abierta y hacen clic, la cerramos
            setActiveBatchId(null);
        } else {
            // Si está cerrada, abrimos esta y automáticamente cierra las demás
            setActiveBatchId(data.id);
        }
    };

    const handleDetails = () => {
        console.log(`El id del lote es ${data.id}`)
        setBatcheDetails(data)
        setActiveModalDatailsBatche(true)
    }

  return (
    <div className="w-70 border border-gray-700 dark:bg-theme-third-dark dark:border-gray-600 rounded-lg p-5 relative">
        <button className="cursor-pointer absolute top-6 right-5" onClick={() => setActiveBatchId(data.id)}>
            <IoMdMore size={25} className="dark:text-gray-300 hover:scale-120 transition-all duration-200" />
        </button>

        {
            isOpen && (
                <MoreOptionsCardBatches 
                    // Pasamos una función que setea null para que el botón "X" de cerrar funcione
                    setActiveBatchId={setActiveBatchId} 
                    handleDelete={handleDelete}
                />
            )
        }

        <div className="">
            <span className={`${data.active ? 'bg-green-300/30 dark:bg-green-500/40 dark:text-gray-300 ' : 'bg-amber-300/30 dark:bg-amber-500/40 dark:text-amber-300 '}  rounded-full p-0.5 px-2 text-xs font-semibold uppercase mr-2`}>{data.active ? 'Active' : 'warning'}</span>
            <span className="dark:text-white">Batch {data.id}</span>
        </div>

        <h3 className="text-base my-1 dark:text-gray-200 line-clamp-1">{data.genetic_line}</h3>

        <div className="py-3 flex flex-col space-y-4">
            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium dark:text-gray-400">Hen Count</span>
                    <span className="text-lg font-semibold dark:text-white">{data.current_quantity} birds</span>
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

        <ProgressBar value={data.production} target={100} title='Efficiency Target' />

        <Separator />

        <div className="flex justify-around items-center mt-5">
            <button className="px-5 py-1.5 border border-green-600 text-green-700 hover:bg-green-700/10 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500/10 cursor-pointer rounded-lg transition-all duration-300" onClick={handleDetails}>
                Details
            </button>
            <button className="px-5 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-100 cursor-pointer rounded-lg transition-all duration-300">
                Reports
            </button>
        </div>
    </div>
  )
}