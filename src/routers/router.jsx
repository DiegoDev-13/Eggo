import {Navigate, Route, Routes} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { RootLayout } from '../layouts/RootLayout'
import { Register } from '../pages/Register'
import { ProtectedRoute } from '../layouts/ProtectedRoute'
import { Produccion } from '../pages/Produccion'
import { Configuracion } from '../pages/Configuracion'
import { Batches } from '../pages/Batches'
import { Reports } from '../pages/Reports'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout/>} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

              
            <Route element={<ProtectedRoute/>}>
              <Route index element={<Home />} />
              <Route path='/lotes' element={<Batches />} />
              <Route path='/produccion' element={<Produccion />} />
              <Route path='/reportes' element={<Reports />} />
              <Route path='/configuracion' element={<Configuracion />} />
            </Route>

        </Route>
    </Routes>
  )
}