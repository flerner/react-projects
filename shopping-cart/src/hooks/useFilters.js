import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
function useFilters() {
  //const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })
  const { filters, setFilters } = useContext(FiltersContext)
  const filterProducts = (products) => {
    return products.filter((p) => {
      return (
        p.price >= filters.minPrice &&
        (filters.category === 'all' || p.category === filters.category)
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

export default useFilters
