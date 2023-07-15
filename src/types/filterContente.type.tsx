export type filterContent = {
  filters: {
    category: string
    minPrice: number
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      category: string
      minPrice: number
    }>
  >
}
