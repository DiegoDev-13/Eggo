import { Outlet } from "react-router-dom"
import App from "../App"

export const RootLayout = () => {
  return (
    <>
        <main className="container flex-1  ">
            <Outlet />
        </main>
    </>
  )
}