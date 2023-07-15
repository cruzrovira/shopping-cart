import React from "react"
import Filters from "./filters"
import { AddToCartIcon } from "./icons"

type props = {}
const Header: React.FC<props> = () => {
  return (
    <header>
      <h1>
        React Shop <AddToCartIcon />
      </h1>
      <Filters />
    </header>
  )
}

export default Header
