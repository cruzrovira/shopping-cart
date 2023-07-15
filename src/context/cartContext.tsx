import { createContext } from "react"
import { useCartReduce } from "../Hooks/useCartReduce"
import { Product, cartProduct } from "../types/product"

export const CartContext = createContext<{
  cart: cartProduct[]
  addToCart: (product: Product | cartProduct) => void
  clearCart: () => void
  removeCart: (product: cartProduct) => void
}>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  removeCart: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { cart, addToCart, clearCart, removeCart } = useCartReduce()
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}
