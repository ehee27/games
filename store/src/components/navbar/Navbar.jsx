import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { IoLogoGameControllerA } from 'react-icons/io'

import NavModal from './NavModal'
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const cart = useContext(CartContext)
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center px-2">
          <IoLogoGameControllerA className="text-7xl" />
          <a className="btn btn-ghost text-xl md:text-4xl font-Teko py-1.5">
            SOOPERGAMES
          </a>
        </div>
      </div>
      {/* -------------------------------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-4">
        {cart.items.length === 0 ? (
          <span></span>
        ) : cart.items.length === 1 ? (
          <span className="flex justify-center items-center gap-2 hover:cursor-pointer">
            <FaShoppingCart onClick={() => setOpenModal(!openModal)} />{' '}
            {cart.items.length} item
          </span>
        ) : (
          <span className="flex justify-center items-center gap-2 hover:cursor-pointer">
            <FaShoppingCart onClick={() => setOpenModal(!openModal)} />{' '}
            {cart.items.length} items
          </span>
        )}
        <NavModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClose={() => setOpenModal(!openModal)}
          cart={cart}
        />
      </div>
    </div>
  )
}

export default Navbar
