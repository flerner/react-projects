import './Products.css'
import { AddToCartIcon } from './Icons'
import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

function Products({ products }) {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (p) => {
    addToCart(p)
  }
  return (
    <main>
      <div className='products'>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <img src={p.thumbnail}></img>
              <div>
                <strong>
                  {p.title} - ${p.price}
                </strong>
              </div>
              <div>
                <button onClick={() => handleAddToCart(p)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Products
