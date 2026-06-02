import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { BtnSave } from "../shared/BtnSave";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({handleSubmit, onSubmit, register}) => {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

  return (
    <form onSubmit={handleSubmit()} className="flex flex-col my-8 md:my-0 space-y-5 justify-center">
        <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-base md:text-sm dark:text-white">Correo electrónico</label>
            <div className="flex items-center w-full bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600">
                <MdOutlineEmail size={23} className="dark:text-white" />
                <input type="text" placeholder="name@company.com" className="p-2 outline-none w-full dark:text-white" />
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
                <label htmlFor="" className="text-base md:text-sm dark:text-white">Contraseña</label>
                <span className="text-base md:text-sm text-primary-green dark:text-green-500 font-medium cursor-pointer">Has olvidado tu contraseña?</span>
            </div>
            <div className="flex items-center w-full bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600">
                <MdLockOutline size={23} className="dark:text-white" />
                <input type={showPassword ? 'text' : 'password'} placeholder="password" className="p-2 outline-none w-full dark:text-white" />
                {
                    showPassword ? <IoEyeOffOutline size={23} className="cursor-pointer dark:text-white" onClick={() => setShowPassword(!showPassword)} /> : <IoEyeOutline size={23} className="cursor-pointer dark:text-white" onClick={() => setShowPassword(!showPassword)}/>
                }
            </div>
        </div>
        <div className="flex space-x-2 ">
            <input type="checkbox" id="inputCheck" />
            <label htmlFor="inputCheck" className="text-base md:text-sm dark:text-white">Acuérdate de mí durante 30 días</label>
        </div>

        <BtnSave text='Iniciar sesión' color='bg-primaryDark-green' darkColor='dark:bg-green-500'/>

        <p className="text-base md:text-sm dark:text-white mt-2 self-center">¿No tienes una cuenta? <span className="text-primary-green dark:text-green-500 cursor-pointer font-semibold" onClick={() => navigate('/register')}>Inicia tu prueba gratuita</span></p>
    </form>
  )
}