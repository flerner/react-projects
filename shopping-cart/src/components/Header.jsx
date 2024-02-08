import Filters from './Filters.jsx'
function Header({ changeFilters }) {
  return (
    <header>
      <h1>Shopping cart</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}

export default Header
