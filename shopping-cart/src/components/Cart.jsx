import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'
function Cart() {
  const cartCheckboxId = useId()
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
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
