import { MdEgg } from "react-icons/md"

export const LogoGreen = () => {
  return (
    <div className='flex space-x-2 items-center mb-10 md:mb-5'>
        <MdEgg size={40} className='text-white bg-primaryDark-green dark:bg-green-500 p-1 rounded-lg' />
        <span className='text-primaryDark-green dark:text-green-500 text-xl font-bold'>EggoFarm App</span>
    </div>
  )
}