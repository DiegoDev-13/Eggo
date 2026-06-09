import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useGlobalStore } from '../../store/global.store'
export const LogoApp = () => {

    const navigate = useNavigate()
    const {openSidebar} = useGlobalStore()

  return (
    <div className="w-full flex justify-center cursor-pointer" onClick={() => navigate('/')}>
        <div className='w-18 h-18 animacion-logo'>
            <img src={Logo} alt="" />
        </div>
        {
            openSidebar && <div className="flex flex-col justify-center items-center">
                            <h2 className="text-white dark:text-green-600 font-semibold text-2xl">Eggo App</h2>
                            <span className="text-gray-400 dark:text-gray-300 font-semibold text-sm text-center">Gestión Avícola</span>
                        </div>
        }
    </div>
  )
}