import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useContext(CartContext)

  const handleAddToCart = (p) => {
    if (checkProductInCart(p)) {
      removeFromCart(p)
      return
    }
    addToCart(p)
  }
  const checkProductInCart = (product) => {
    return cart.some((p) => p.id === product.id)
  }

  return (
    <main>
      <div className='products'>
        <ul>
          {products.map((p) => {
            const productInCart = checkProductInCart(p)
            return (
              <li key={p.id}>
                <img src={p.thumbnail}></img>
                <div>
                  <strong>
                    {p.title} - ${p.price}
                  </strong>
                </div>
                <div>
                  <button onClick={() => handleAddToCart(p)}>
                    {productInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default Products
