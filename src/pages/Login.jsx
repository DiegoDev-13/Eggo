import imgLogin from '../assets/img-login.png'
import { FormLogin } from '../components/login/FormLogin';
import { LogoGreen } from '../components/shared/LogoGreen';
import { Separator } from '../components/shared/Separator';
import { useGlobalStore } from '../store/global.store'
import { IoAnalytics } from "react-icons/io5";

export const Login = () => {

  const {changeTheme} = useGlobalStore()

  return (
    <>
      <div className="w-full h-dvh flex">
        <div className="w-[90%] relative hidden md:block">
          <div className='absolute top-0 left-0 bg-radial from-[#37963b]/55 dark:from-[#22365c]/50 to-[#051306] dark:to-[#04080f] w-full h-full p-10 flex flex-col justify-between'>
            <div className='flex flex-col space-y-5'>
              <h1 className='text-white text-4xl font-bold'>EggoFarm App</h1>
              <p className='text-green-500 font-semibold w-[70%]'>
                La próxima generación de software para la gestión avícola. Información basada en datos para agricultores profesionales.
              </p>
            </div>
            {/* <button className='bg-blue-500 text-white p-3 rounded-lg cursor-pointer' onClick={changeTheme}>
              ChagenThme
            </button> */}
            <div className='w-full h-20 p-6 flex items-center bg-theme-text-green/30 dark:bg-theme-secondary-dark/40 rounded-xl borde border-gray-400/15'>
              <IoAnalytics size={38} className='text-amber-500' />
              <div className='flex flex-col ml-4'>
                <span className='text-white font-medium text-sm'>Análisis en tiempo real</span>
                <span className='text-green-500 font-medium text-sm'>Supervise la producción y el estado del sistema en tiempo real.</span>
              </div>
            </div>
          </div>
          <img src={imgLogin} alt="" className='w-full h-dvh filter bg-theme-text-green' />
        </div>

        <div className="w-full bg-theme-primary dark:bg-theme-primary-dark py-15 px-5 md:p-5 flex flex-col  md:justify-center">
          <div className='md:px-10 flex flex-col'>
            <LogoGreen />
            <h2 className='text-black dark:text-white text-center md:text-start text-3xl font-medium'>Bienvenido de nuevo</h2>
            <span className='my-3 text-base md:text-sm text-center md:text-start text-gray-900 dark:text-white mb-5 md:mb-0'>Inicia sesión para gestionar tus lotes de aves de corral y tu inventario.</span>

            <Separator />

            <FormLogin />
          </div>
        </div>
      </div>
    </>
  )
}