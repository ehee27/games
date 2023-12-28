import { Link } from 'react-router-dom'
import CartCard from '../cart/CartCard'

// LETS CREATE A MODAL CART CARD HERE>>>>>>>>
const NavModal = ({ openModal, onClose, cart }) => {
  return (
    <div
      className={`fixed top-10 right-10 flex flex-col transition-colors ? ${
        openModal
          ? 'visible bg-black/90 text-white rounded-lg shadow-lg shadow-black py-5 px-3'
          : 'invisible'
      }`}
    >
      <p>Your cart</p>
      <div className="my-2">
        {cart.items.map((item, i) => {
          return (
            <div key={i} className=" flex gap-2 p-3">
              <div className="">
                <img
                  className="h-[50px] w-[65px]"
                  src={`/src/assets/products/${item.image}.png`}
                ></img>
              </div>
              <div className="text-left">
                <p className="text-md text-primary font-Teko">{item.title}</p>
                <p className="text-xs">${item.price}</p>
                <p className="text-xs">Qty: {item.quantity}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-sm">
        <p>
          Cart Total:{' '}
          <span className="text-secondary">${cart.getTotalCost()}</span>
        </p>
      </div>

      <button
        onClick={onClose}
        className="btn btn-sm bg-transparent text-white border-none fixed top-12 right-12"
      >
        X
      </button>
      <div className="p-3">
        <Link to="/cart">
          <button
            onClick={onClose}
            className="btn btn-sm bg-green-500 text-white border-none w-[100%]"
          >
            Go To Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavModal