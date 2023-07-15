import { useReducer } from "react"
import { cartReduce, initialState } from "../reducers/cartReducer"
import { Product, cartProduct } from "../types/product"

export const useCartReduce = () => {
  const [cart, dispatch] = useReducer(cartReduce, initialState)

  const addToCart = (product: Product | cartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }
  const removeCart = (product: cartProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product })
  }
  return { cart, addToCart, clearCart, removeCart }
}
