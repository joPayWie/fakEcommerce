import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const includedInCart = cart.find((product) => product.id === item.id)
    if (includedInCart) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })
      setCart(newCart)
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }]
      setCart(newCart)
    }
  }

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const resetCart = () => {
    setCart([])
  }

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0)
  }

  // recorre el array y "recopila" cierta información para sumarla en el segundo parámetro

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
