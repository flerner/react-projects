import './Products.css'
import { AddToCartIcon } from './Icons'

function Products({ products }) {
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
                <button>
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
