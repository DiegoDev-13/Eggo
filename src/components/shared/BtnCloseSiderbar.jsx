import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const BtnCloseSiderbar = ({openSidebar, setOpenSidebar}) => {
  return (
    <div className="border border-white dark:border-theme-primary-dark rounded-full w-10 h-10 flex justify-center items-center absolute top-20 -right-4 cursor-pointer bg-amber-500 dark:bg-green-700 transition-all duration-300" onClick={() => setOpenSidebar(!openSidebar)}>
        {
            openSidebar 
                ? <IoIosArrowBack size={22} className="text-black dark:text-white" /> 
                : <IoIosArrowForward size={22} className="text-black dark:text-white" /> 
        }
        
    </div>
  )
}