import React, { useId } from "react"
import "./cart.css"

import { useCartContext } from "../Hooks/useCartContext"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons"

type props = {}
const Cart: React.FC<props> = ({}) => {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart, removeCart } = useCartContext()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map(item => (
            <li>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong>
                {new Intl.NumberFormat("USD", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price * item.quantity)}
              </div>
              <footer>
                <small>Quantity: {item.quantity}</small>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeCart(item)}>
                  <RemoveFromCartIcon />
                </button>
              </footer>
            </li>
          ))}
        </ul>
        {cart.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <button onClick={() => clearCart()}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  )
}

export default Cart
