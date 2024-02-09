import useFilters from '../hooks/useFilters'
import './Footer.css'

function Footer() {
  const { filters } = useFilters()
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
    </footer>
  )
}

export default Footer
