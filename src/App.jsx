import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { ProductDetails } from './pages/ProductDetails'

import './index.css'

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          {/* para el register y login voy a hacer una modal reutilizable? */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
