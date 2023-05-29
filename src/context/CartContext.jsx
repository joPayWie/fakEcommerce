import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  const [cart, setCart] = useState(getLocalStorage('cart') || [])

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  }

  const deleteItem = (id) => {
    const currentCart = getLocalStorage('cart')
    const filteredCart = currentCart.filter((item) => item.id !== id)
    setCart(filteredCart)
    setLocalStorage('cart', filteredCart)
  }

  const addToCart = (item, productQuantity = 1) => {
    const includedInCart = cart.find((product) => product.id === item.id)
    if (includedInCart) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + Number(productQuantity),
          }
        }
        return product
      })
      setCart(newCart)
      setLocalStorage('cart', newCart)
    } else {
      const newCart = [...cart, { ...item, quantity: Number(productQuantity) }]
      setCart(newCart)
      setLocalStorage('cart', newCart)
    }
  }

  const resetCart = () => {
    const emptyCart = []
    setCart(emptyCart)
    setLocalStorage('cart', emptyCart)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, resetCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
