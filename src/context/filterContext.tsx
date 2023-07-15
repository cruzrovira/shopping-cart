import React, { createContext, useState } from "react"
import { filterContent } from "../types/filterContente.type"

export const FilterContext = createContext<filterContent>({
  filters: { category: "all", minPrice: 0 },
  setFilters: () => {},
})

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<{
    category: string
    minPrice: number
  }>({ category: "all", minPrice: 0 })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
