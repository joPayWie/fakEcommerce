import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (product) => setCart([...cart, product])

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0)
  }

  // recorre el array y "recopila" cierta información para sumarla en el segundo parámetro

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
