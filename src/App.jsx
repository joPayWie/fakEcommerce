import { Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { FormLayout } from './layouts/FormLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Orders } from './pages/Orders'
import { CheckOut } from './pages/CheckOut'
import { NotFound } from './pages/NotFound'

import { useUserContext } from './context/UserContext'

// import { isLoadingComponent } from '../components/isLoadingComponent'
// TERMINAR ESTO

import './index.css'

function App() {
  const isLoading = useUserContext()
  // SPINNER PARA CHEQUEAR QUE HAYA USUARIO
  // const isLoading = useContext()

  // if (isLoading) return <isLoadingComponent> bla bla
  // else ... return lo de abajo

  // dónde hago el condicional para renderizar la ruta protegida checkout?s

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
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<Orders />}>
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
