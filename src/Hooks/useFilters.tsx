import { useContext } from "react"
import { FilterContext } from "../context/filterContext"
import { Product } from "../types/product"

export function useFilters() {
  // const [filters, setFilters] = useState<{
  //   category: string
  //   minPrice: number
  // }>({ category: "all", minPrice: 0 })

  const { filters, setFilters } = useContext(FilterContext)
  const filterProducts = (products: Product[]) => {
    return products.filter(
      product =>
        product.price >= filters.minPrice &&
        (product.category === filters.category || filters.category === "all"),
    )
  }
  return { filterProducts, setFilters }
}
