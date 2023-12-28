import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

// /Users/scottlucas/Desktop/games/store/src/assets/products/Battletoads.png

const GameCard = ({ game }) => {
  const cart = useContext(CartContext)

  return (
    <div className="bg-gray-200 rounded-md flex flex-col m-1 py-2 shadow-md shadow-gray-400">
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold font-Teko">{game.title}</p>
      </div>
      <div className="flex flex-col items-center py-2">
        <img
          className="h-[80%] w-[90%] rounded-md shadow-md shadow-gray-500"
          src={`assets/${game.image}.png`}
        ></img>
      </div>
      <div className="border-2 bg-gray-900 p-1">
        <button
          className="btn btn-sm btn-primary text-gray-800 p-2 rounded"
          onClick={() => cart.addOneToCart(game)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default GameCard
