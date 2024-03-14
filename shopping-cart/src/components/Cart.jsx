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
