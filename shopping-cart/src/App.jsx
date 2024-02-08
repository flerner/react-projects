import { useState } from 'react'
import './App.css'
import Products from './components/Products.jsx'
import ProductsMock from './mocks/products.json'
import Header from './components/Header.jsx'
function App() {
  const [products] = useState(ProductsMock.products)
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  const filterProducts = (products) => {
    return products.filter((p) => {
      return (
        p.price >= filters.minPrice &&
        (filters.category === 'all' || p.category === filters.category)
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
