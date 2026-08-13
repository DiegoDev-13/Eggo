import { AppBar } from "../components/shared/AppBar"
import { SpinnerLoading } from "../components/shared/SpinnerLoading"
import { useLogOut } from "../hooks/auth/useLogOut"
import { useGlobalStore } from "../store/global.store"
import { useUserStore } from "../store/useUserStore"


export const Home = () => {

    const {mutate, isPending} = useLogOut()

    const {user, userData, isLoading} = useUserStore()

    const {changeTheme} = useGlobalStore()

    const logOut = () => {
        mutate()
    }

    if(isPending) return <SpinnerLoading loading={isPending} />

  return (
    <>
        <AppBar userData={userData} />


        <div className='mt-10 w-full flex items-center justify-center'>
            <button className='p-3 bg-purple-600 text-white rounded-md cursor-pointer' onClick={() => changeTheme()}>
                Chagen Theme
            </button>
            
        </div>

        <div className="w-full flex justify-center items-center my-10">
            <button className='p-3 bg-red-500 text-white rounded-md cursor-pointer'  onClick={logOut}>
                Cerrar sesion
            </button>
        </div>
    </>
  )
}