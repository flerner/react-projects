import { useState } from 'react'
import './Filters.css'
import { useRef } from 'react'
function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('')
  const handleChange = (e) => {
    setMinPrice(e.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
    onChange((prevState) => ({
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
        />
        <span>${minPrice}</span>
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
