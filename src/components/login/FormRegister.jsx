import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { MdLockOutline, MdOutlineEmail } from "react-icons/md"
import { BtnSave } from "../shared/BtnSave"
import { useNavigate } from "react-router-dom"

export const FormRegister = () => {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const sendForm = (e) => {
        e.preventDefault()

        console.log('enviado')
    }

  return (
    <form className="flex flex-col my-8 md:my-0 space-y-5 justify-center">

        <div className="flex w-full gap-5 items-center">
            <div className="w-full flex flex-col space-y-2">
                <label htmlFor="" className="text-base md:text-sm dark:text-white">Nombre completo</label>
                <input type="text" placeholder="John Doe" className="outline-none w-full dark:text-white bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600" />
            </div>
            <div className="w-full flex flex-col space-y-2">
                <label htmlFor="" className="text-sm dark:text-white">Nombre de la granja</label>
                <input type="text" placeholder="Green Vally Poultry" className="outline-none w-full dark:text-white bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600" />
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-base md:text-sm dark:text-white">Correo electrónico</label>
            <div className="flex items-center w-full bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600">
                <MdOutlineEmail size={20} className="dark:text-white" />
                <input type="text" placeholder="name@company.com" className="p-2 outline-none w-full dark:text-white" />
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
                <label htmlFor="" className="text-base md:text-sm dark:text-white">Contraseña</label>
            </div>
            <div className="flex items-center w-full bg-white dark:bg-theme-secondary-dark h-14 md:h-11 p-3 rounded-md border border-gray-300 dark:border-gray-600">
                <MdLockOutline size={20} className="dark:text-white" />
                <input type={showPassword ? 'text' : 'password'} placeholder="password" className="p-2 outline-none w-full dark:text-white" />
                {
                    showPassword ? <IoEyeOffOutline size={22} className="cursor-pointer dark:text-white" onClick={() => setShowPassword(!showPassword)} /> : <IoEyeOutline size={22} className="cursor-pointer dark:text-white" onClick={() => setShowPassword(!showPassword)}/>
                }
            </div>
        </div>
        <div className="flex space-x-2 items-center">
            <input type="checkbox" id="inputCheck" />
            <label htmlFor="inputCheck" className="text-base md:text-sm dark:text-white">Estoy de acuerdo con los</label>
            <span className="text-base md:text-sm font-semibold text-theme-text-green dark:text-green-500 cursor-pointer">Términos de servicio y política de privacidad.</span>
        </div>

        <BtnSave text='Iniciar sesión' color='bg-primaryDark-green' darkColor='dark:bg-green-500' tFunction={sendForm}/>

        <p className="text-base md:text-sm dark:text-white mt-2 self-center">¿Ya tienes una cuenta? <span className="text-primary-green dark:text-green-500 cursor-pointer font-semibold" onClick={() => navigate('/login')}>Inicia sesión</span></p>
    </form>
  )
}