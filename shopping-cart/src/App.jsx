import { useState } from 'react'
import './App.css'
import Products from './components/Products.jsx'
import ProductsMock from './mocks/products.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import useFilters from './hooks/useFilters.js'
import Cart from './components/Cart.jsx'
function App() {
  const [products] = useState(ProductsMock.products)
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
