import { Outlet } from "react-router-dom"
import App from "../App"
import { useUserStore } from "../store/useUserStore"
import { useEffect } from "react"

export const RootLayout = () => {

  //Verifica si hay session iniciada 
  const {initialize} = useUserStore()

  useEffect(() => {
    initialize()
  }, [])


  return (
    <>
        <main >
            <Outlet />
        </main>
    </>
  )
}