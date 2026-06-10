import { Outlet } from "react-router-dom"
import App from "../App"
import { useUserStore } from "../store/useUserStore"
import { useEffect } from "react"
import { Sidebar } from "../components/shared/Sidebar"
import { useLogOut } from "../hooks/auth/useLogOut"
import { SpinnerLoading } from "../components/shared/SpinnerLoading"
import { useGlobalStore } from "../store/global.store"
// import { SpinnerLoader } from "../../../../Consenso/src"

export const RootLayout = () => {

  //Verifica si hay session iniciada 
  const {user, initialize} = useUserStore()
  const {openSidebar} = useGlobalStore()

  const {mutate, isPending} = useLogOut()

  useEffect(() => {
    initialize()
  }, [])

  if(isPending) return <SpinnerLoading />

  return (
    <>
        <main className="flex h-screen">

          {
            user 
              ? <>
                <Sidebar mutate={mutate} />

                <div className={`container flex-1 ml-20 transition-all duration-300 ${openSidebar ? 'md:ml-60 lg:ml-62' : 'w-25'}`}>
                  <Outlet />
                </div>
              </>
              : <Outlet />
          }


          
        </main>
    </>
  )
}