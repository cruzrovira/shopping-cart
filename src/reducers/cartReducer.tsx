import { Product, cartProduct } from "../types/product"

export const initialState: cartProduct[] = []

export const ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
}
type actionType =
  | { type: string; payload: Product | cartProduct }
  | { type: string }

export const cartReduce = (state: cartProduct[], action: actionType) => {
  // const { type, payload } = action

  switch (action.type) {
    case ACTIONS_TYPES.ADD_TO_CART:
      if (!("payload" in action)) return state
      const productInCartIndex = state.findIndex(
        p => p.id === action.payload.id,
      )

      if (productInCartIndex >= 0) {
        const newCart = state.map(p =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p,
        )
        return newCart
      }

      const newProduct = {
        ...action.payload,
        quantity: 1,
      }
      return [...state, newProduct]

    case ACTIONS_TYPES.REMOVE_FROM_CART:
      if (!("payload" in action)) return state
      const newCart = state.filter(p => p.id !== action.payload.id)
      return newCart

    case ACTIONS_TYPES.CLEAR_CART:
      return initialState

    default:
      return state
  }
}
