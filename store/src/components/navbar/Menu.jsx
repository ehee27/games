import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        {/* <li>
          <Link to="/cart">Cart</Link>
        </li> */}
        <li>
          <Link to="/success">Success</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
