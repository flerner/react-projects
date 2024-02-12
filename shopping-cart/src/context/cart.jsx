import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }
  const clearCart = () => {
    setCart([])
  }
  const removeFromCart = (p) => {
    const newCart = cart.filter((pr) => p.id !== pr.id)
    setCart(newCart)
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
