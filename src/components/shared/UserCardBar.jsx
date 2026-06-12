import { useUserStore } from "../../store/useUserStore"
import {useNavigate} from 'react-router-dom'

export const UserCardBar = ({username}) => {

    const navigate = useNavigate()

  return (
    <div className="flex items-center cursor-pointer" onClick={() => navigate('/configuracion')}>
      <div className="mx-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8yCap-OFEzeJLnZAtzinq6qTDowXUNgKJpzN66oAneVnkpNz8hOoJcQ&s=10" alt="" className="w-13 h-13 rounded-full" />
      </div>

      <div className="hidden md:flex md:flex-col ">
          <span className="text-sm md:text-base font-semibold dark:text-gray-300">{username}</span>
          <span className="uppercase text-sm md:text-base dark:text-gray-300">Farm manager</span>
      </div>
    </div>
  )
}