import React, { useContext, useId } from "react"
import { FilterContext } from "../context/filterContext"
import style from "./filters.module.css"

type props = {}
const Filters: React.FC<props> = () => {
  // const [minPrice, setMinPrice] = useState<number>(0) // lo quitamos porque no podemos debemos de tener solo una fuente de la verdad

  const { setFilters, filters } = useContext(FilterContext)

  const rangeId = useId()
  const categoryId = useId()

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, minPrice: parseInt(e.target.value) }))
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, category: e.target.value }))
  }

  return (
    <section className={style.filters}>
      <div>
        <label htmlFor={rangeId}>Min price</label>
        <input
          type="range"
          id={rangeId}
          name="price"
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleRangeChange}
        />
        {new Intl.NumberFormat("USD", {
          currency: "USD",
          style: "currency",
        }).format(filters.minPrice)}
      </div>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select name="category" id={categoryId} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smart Phones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
