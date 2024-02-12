import { useContext } from 'react'
import useFilters from '../hooks/useFilters'
import './Footer.css'
import { CartContext } from '../context/cart'

function Footer() {
  const { filters } = useFilters()
  const { cart } = useContext(CartContext)
  return (
    <footer className='footer'>
      <h4>
        Techincal React test
        <span>@flerner</span>
      </h4>
      <h5>Shopping cart with useContext & useReducer</h5>
      <p>
        Active filters: category: {filters.category} - minPrice:{' '}
        {filters.minPrice}
      </p>
      {JSON.stringify(cart, null, 2)}
    </footer>
  )
}

export default Footer
