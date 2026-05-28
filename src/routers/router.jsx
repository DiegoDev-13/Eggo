import {Navigate, Route, Routes} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { RootLayout } from '../layouts/RootLayout'
import { Register } from '../pages/Register'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout/>} >
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Route>
    </Routes>
  )
}