import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useContext, useId } from 'react'
import './Cart.css'
import { CartContext } from '../context/cart.jsx'
function Cart() {
  const cartCheckboxId = useId()
  const { cart } = useContext(CartContext)
  console.log(cart)
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon></CartIcon>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/6/thumbnail.png'
              alt='Macbook'
            />
            <div>
              <strong>Macbook</strong> - $1999
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
          {cart.map((p) => (
            <li key={p.id}>
              {' '}
              <img src={p.thumbnail}></img>
              <div>
                <strong>{p.title}</strong>
              </div>
            </li>
          ))}
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
