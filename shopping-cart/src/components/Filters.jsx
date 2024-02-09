import './Filters.css'
import useFilters from '../hooks/useFilters'

function Filters() {
  const { filters, setFilters } = useFilters()
  const handleChange = (e) => {
    setFilters((prevState) => {
      return { ...prevState, minPrice: e.target.value }
    })
  }
  const handleCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChange}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
