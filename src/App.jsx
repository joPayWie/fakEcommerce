import { Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { FormLayout } from './layouts/FormLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { ProtectedGuard } from './guards/ProtectedGuard'
import { CheckOut } from './pages/CheckOut'
import { SuccesfulOrder } from './pages/SuccesfulOrder'
import { NotFound } from './pages/NotFound'

import { useUserContext } from './context/UserContext'

import { IsLoading } from './components/IsLoading'

import './index.css'

function App() {
  const { isLoading } = useUserContext()
  if (isLoading) return <IsLoading />

  return (
    <>
      <Routes>
        <Route element={<FormLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedGuard />}>
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/succesfulorder" element={<SuccesfulOrder />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
