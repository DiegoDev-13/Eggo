import { Outlet } from "react-router-dom"
import App from "../App"

export const RootLayout = () => {
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}