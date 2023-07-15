import React, { useState } from "react"

import { useFilters } from "./Hooks/useFilters"
import Cart from "./components/cart"
import Footer from "./components/footer"
import Header from "./components/header"
import Product from "./components/product"
import { CartProvider } from "./context/cartContext"
import response from "./mocks/products.json"

const App: React.FC = () => {
  const [products] = useState<Product[]>(response.products)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Product products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}
export default App
