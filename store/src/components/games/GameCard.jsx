import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import DetailsModal from './DetailsModal'

// /Users/scottlucas/Desktop/games/store/src/assets/products/Battletoads.png

const GameCard = ({ game }) => {
  const cart = useContext(CartContext)
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="rounded-md flex flex-col m-1 py-2 shadow-md shadow-gray-400 bg-gray-300 hover:bg-gray-200 transition-all">
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold font-Teko">{game.title}</p>
      </div>
      <div className="flex flex-col items-center py-1">
        <img
          className="h-[80%] w-[90%] rounded-md shadow-md shadow-gray-500"
          src={`assets/${game.image}.png`}
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center p-1">
        <button
          className="btn btn-sm w-[200px] btn-primary text-gray-800 shadow-md shadow-gray-500 p-2 rounded"
          onClick={() => cart.addOneToCart(game)}
        >
          ADD TO CART
        </button>
      </div>
      {/* <button onClick={() => setOpenModal(!openModal)}>Details</button> */}
      {/* <DetailsModal
        openModal={openModal}
        onClose={() => setOpenModal(!openModal)}
        game={game}
      /> */}
    </div>
  )
}

export default GameCard
