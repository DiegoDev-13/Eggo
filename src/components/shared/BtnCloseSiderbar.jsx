import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const BtnCloseSiderbar = ({openSidebar, setOpenSidebar}) => {
  return (
    <div className="border border-white rounded-full w-10 h-10 flex justify-center items-center absolute top-20 -right-4 cursor-pointer bg-amber-400 transition-all duration-300" onClick={() => setOpenSidebar(!openSidebar)}>
        {
            openSidebar 
                ? <IoIosArrowBack size={22} className="text-black" /> 
                : <IoIosArrowForward size={22} className="text-black" /> 
        }
        
    </div>
  )
}