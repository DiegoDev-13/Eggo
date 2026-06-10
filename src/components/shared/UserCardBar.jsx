import { useUserStore } from "../../store/useUserStore"

export const UserCardBar = ({username}) => {

    // const {user, userData, isLoading} = useUserStore()

    // console.log(userData)

    // if(isLoading) return <h1>Cargando...</h1>

  return (
    <div className="flex items-center cursor-pointer">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8yCap-OFEzeJLnZAtzinq6qTDowXUNgKJpzN66oAneVnkpNz8hOoJcQ&s=10" alt="" className="w-13 h-13 rounded-full" />
      </div>

      <div className="flex flex-col">
          <span>{username}</span>
          <span className="uppercase">Farm manager</span>
      </div>
    </div>
  )
}