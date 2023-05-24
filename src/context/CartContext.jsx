import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  const [cart, setCart] = useState(getLocalStorage('cart') || [])

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0)
  }

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
      setLocalStorage('cart', newCart)
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }]
      setCart(newCart)
      setLocalStorage('cart', newCart)
    }
  }

  const deleteItem = (id) => {
    const currentCart = getLocalStorage('cart')
    const filteredCart = currentCart.filter((item) => item.id !== id)
    setCart(filteredCart)
    setLocalStorage('cart', filteredCart)
  }

  const resetCart = () => {
    const emptyCart = []
    setCart(emptyCart)
    setLocalStorage('cart', emptyCart)
  }

  // recorre el array y "recopila" cierta información para sumarla en el segundo parámetro

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, resetCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
