import { Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { FormLayout } from './layouts/FormLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { NotFound } from './pages/NotFound'

import './index.css'

function App() {
  // SPINNER PARA CHEQUEAR QUE HAYA USUARIO
  // const isLoading = useContext()

  // if (isLoading) bla bla
  // else ...

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
        </Route>
      </Routes>
    </>
  )
}

export default App
