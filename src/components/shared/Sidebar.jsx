import { BtnCloseSiderbar } from "./BtnCloseSiderbar"
import { LogoApp } from "./LogoApp"
import { useGlobalStore } from "../../store/global.store"
import { NavLink } from "react-router-dom"
import { BiCategoryAlt } from "react-icons/bi"
import {LinksArray} from '../../utils/dataStatic'
import { Separator } from "./Separator"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { MdOutlineLogout } from "react-icons/md"

export const Sidebar = ({mutate}) => {

    const {openSidebar, setOpenSidebar} = useGlobalStore()  
    
    const handleLogout = () => {
        mutate()
    }

  return (
    <div className={`bg-primaryDark-green dark:bg-theme-primary-dark px-4 py-6 fixed h-full w-20 ${openSidebar ? 'md:w-55 lg:w-62.5' : 'w-20'} transition-all duration-300 flex flex-col`}>
        <LogoApp />

        <BtnCloseSiderbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <nav className="h-full flex flex-col justify-between py-8 space-y-2.5 ">
            
            <div className="flex flex-col space-y-2">
                {
                    LinksArray.map((link,index) => (
                        <NavLink key={index} to={link.to} className={({isActive}) => `${isActive ? 'text-black dark:text-green-500 bg-amber-400 dark:bg-green-500/20 p-2.5 rounded-lg border-l-3 border-amber-700 dark:border-green-500' : 'text-white p-2.5 hover:bg-amber-400/50 hover:dark:bg-green-500/10 hover:rounded-lg transition-all duration-200'} flex items-center ${openSidebar ? '' : 'justify-center'} gap-3 text-base`}>
                            {link.icon} 
                            {
                                openSidebar && <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >{link.label}</span>
                            }
                        </NavLink>
                    ))
                }
            </div>

            <div className="flex flex-col">
                <Separator />
                <NavLink to="centro-de-ayuda" className={({isActive}) => `${isActive ? 'text-black bg-amber-400 p-2.5 rounded-lg border-l-3 border-amber-700' : 'text-white p-2.5 hover:bg-amber-400/50 hover:dark:bg-green-500/10 hover:rounded-lg transition-all duration-200'} flex items-center ${openSidebar ? '' : 'justify-center'} gap-3 text-base`}>
                    <IoIosHelpCircleOutline size={22} />
                    {
                        openSidebar && <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Centro de Ayuda</span>
                    }
                </NavLink>
                <button className={`flex items-center ${openSidebar ? '' : 'justify-center'} gap-4 px-2.5 text-base text-white dark:text-black cursor-pointer mt-2 bg-red-500 dark:bg-red-400 hover:bg-red-600 hover:dark:bg-red-500 p-2.5 rounded-lg transition-all duration-300`} onClick={handleLogout}>
                    <MdOutlineLogout size={22} />
                    {
                        openSidebar && <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Cerrar Sesion</span>
                    }
                </button>
            </div>
        </nav>
    </div>
  )
}