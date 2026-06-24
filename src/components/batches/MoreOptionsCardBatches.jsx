import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

export const MoreOptionsCardBatches = ({setActiveBatchId, handleDelete}) => {
  return (
    <div className="absolute top-14 -right-22 bg-white dark:bg-theme-third-dark dark:border-gray-500 w-35 z-10 px-4 py-8 flex flex-col justify-center space-y-4 border border-gray-700 rounded-lg sideScaleFast">
    
        <button type="button" className="absolute top-2 right-2 cursor-pointer" onClick={() => setActiveBatchId(null)}>
            <IoMdClose size={18} className="dark:text-gray-100 dark:hover:text-gray-400 hover:scale-120 transition-all duration-300" />
        </button>

        <button type="button" className="flex items-center gap-2 cursor-pointer bg-blue-500 px-2 py-0.5 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-200">
            <FaRegEdit size={18} />
            Editar
        </button>
        <button type="button" className="flex items-center gap-2 cursor-pointer bg-red-500 px-2 py-0.5 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-200" onClick={handleDelete}>
            <FaRegTrashAlt size={18} />
            Eliminar
        </button>
    </div>
  )
}