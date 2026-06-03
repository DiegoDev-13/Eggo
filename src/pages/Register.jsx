import imgRegister from '../assets/img-register.jpg'
import { Separator } from '../components/shared/Separator';
import { useGlobalStore } from '../store/global.store'
import { IoAnalytics } from "react-icons/io5";
import { FormRegister } from '../components/login/FormRegister';
import { LogoGreen } from '../components/shared/LogoGreen';
import { BiShieldQuarter } from "react-icons/bi";
import { useUserStore } from '../store/useUserStore';
import { useNavigate } from 'react-router-dom';
import { SpinnerLoading } from '../components/shared/SpinnerLoading';
import { useRegister } from '../hooks/auth/useRegister';
import { userRegisterSchema } from '../lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const Register = () => {

  const {changeTheme} = useGlobalStore()
  const {session, isLoading} = useUserStore()

  const navigate = useNavigate()

   const {mutate, isPending} = useRegister()

  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: zodResolver(userRegisterSchema)
  })

  const onSubmit = data => {
      
      const dataUser = {
          userName: data.userName,
          farmName: data.farmName,
          email: data.email,
          password: data.password,
          
      }

      mutate({dataUser})
  }

  if(session) {
    navigate('/')
  }

  // if(isLoading) return 

  return (
    <>
      <div className="w-full h-full flex">
        <section className="w-[90%] relative hidden md:block">
          <div className='absolute top-0 left-0 bg-radial from-[#37963b]/55 dark:from-[#22365c]/50 to-[#051306] dark:to-[#04080f] w-full h-full p-10 flex flex-col justify-between'>

            <div className='flex flex-col space-y-5'>
              <span className='bg-amber-500 p-2 rounded-full w-50 text-center'>GRADO EMPRESARIAL</span>
              <h1 className='text-white text-4xl font-bold'>El futuro de la gestión avícola ya está aquí.</h1>
              <p className='text-theme-text-withe-secondary font-medium '>
                Únase a miles de granjas comerciales que utilizan Egg App para optimizar los ciclos de producción, automatizar los informes financieros y aprovechar los análisis de salud de las aves impulsados ​​por IA.
              </p>
            </div>
            
            <div className='flex gap-4'>
              <div className='w-full h-39 p-6 flex flex-col bg-theme-text-green/30 dark:bg-theme-secondary-dark/40 rounded-xl borde border-gray-400/15'>
                <IoAnalytics size={28} className='text-amber-500' />
                <div className='flex flex-col'>
                  <span className='text-white font-medium text-sm'>Rendimientos en tiempo real</span>
                  <span className='text-green-500 font-medium text-sm'>Realiza un seguimiento de cada huevo desde su puesta hasta su entrega.</span>
                </div>
              </div>

              <div className='w-full h-39 p-6 flex flex-col bg-theme-text-green/30 dark:bg-theme-secondary-dark/40 rounded-xl borde border-gray-400/15'>
                <BiShieldQuarter size={28} className='text-amber-500' />
                <div className='flex flex-col'>
                  <span className='text-white font-medium text-sm'>Datos seguros</span>
                  <span className='text-green-500 font-medium text-sm'>Cifrado de nivel bancario para la IP de su granja.</span>
                </div>
              </div>

            </div>

            {/* <button className='bg-blue-500 text-white p-3 rounded-lg cursor-pointer' onClick={changeTheme}>
              DarMode
            </button> */}

          </div>
          <img src={imgRegister} alt="" className='w-full h-dvh filter bg-theme-text-green' />
        </section>

        <section className="w-full bg-theme-primary dark:bg-theme-primary-dark py-15 px-5 md:p-5 flex flex-col md:justify-center">
          {
            isLoading || isPending
              ? <SpinnerLoading loading={isLoading || isPending} />
              :<div className='md:px-10 flex flex-col'>
              <LogoGreen />

              <h2 className='text-black dark:text-white text-center md:text-start text-3xl font-medium'>Crea tu cuenta</h2>
              <span className='my-3 text-base md:text-sm text-center md:text-start text-gray-900 dark:text-white mb-5 md:mb-0'>Comienza hoy mismo tu prueba gratuita de 14 días.</span>

              <Separator />

              <FormRegister handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />
            </div>
          }
        </section>
      </div>
    </>
  )
}