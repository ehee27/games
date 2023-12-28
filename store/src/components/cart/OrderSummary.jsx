import { Link } from 'react-router-dom'
import stripeLogo from '../../assets/stripeLogo.png'

const OrderSummary = ({ cart, checkout }) => {
  const totalItems = cart.items.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  return (
    <div className="p-2">
      <p className="text-neutral text-xl">Order Summary</p>
      <div className="flex flex-col px-2">
        <div className="flex justify-between py-1">
          <p>Total items:</p>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between py-1">
          <p>Order Subtotal:</p>
          <span>${cart.getTotalCost().toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-1">
          <p>Estimated Tax:</p>
          <span>$0.00</span>
        </div>
      </div>

      <div className="border-t-2 flex justify-between items-center p-2">
        <p>Estimated Order Total:</p>
        <span>${cart.getTotalCost().toFixed(2)}</span>
      </div>
      <div className="border-t-2 p-3">
        <button
          className="bg-green-700 text-white p-2 w-[100%] rounded-md"
          onClick={checkout}
        >
          CHECKOUT
        </button>
      </div>
      <div className="flex justify-center py-1">
        <img className="h-[40px]" src={stripeLogo}></img>
      </div>
      <div className="flex justify-center hover:text-accent my-10 transition-all">
        <Link to="/store">Continue Shopping</Link>
      </div>
    </div>
  )
}

export default OrderSummary
