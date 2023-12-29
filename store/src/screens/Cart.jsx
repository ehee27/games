import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCard from '../components/cart/CartCard'
import OrderSummary from '../components/cart/OrderSummary'

const Cart = () => {
  const cart = useContext(CartContext)
  console.log(cart.items)

  const checkout = async () => {
    await fetch('https://soopergames-api.onrender.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.url) {
          window.location.assign(response.url)
        }
      })
  }
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 py-3">
        <div className="col-span-2">
          {' '}
          {cart.items.length === 0 ? (
            <span>There are no items currently in your cart.</span>
          ) : (
            <>
              {cart.items.map((game, i) => {
                return <CartCard game={game} cart={cart} key={i} />
              })}
            </>
          )}
        </div>
        <div className="bg-gray-100 rounded-lg mr-2">
          <OrderSummary cart={cart} checkout={checkout} />
        </div>
      </div>
    </div>
  )
}

export default Cart
