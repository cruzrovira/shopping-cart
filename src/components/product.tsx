import React from "react"

import { useCartContext } from "../Hooks/useCartContext"
import { Product } from "../types/product"
import { AddToCartIcon } from "./icons"
import "./product.css"

type props = {
  products: Product[]
}

const Product: React.FC<props> = ({ products }) => {
  const { addToCart } = useCartContext()
  return (
    <div className="products">
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> -{" "}
              {new Intl.NumberFormat("USD", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
