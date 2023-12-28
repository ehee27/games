import { productsArray } from '../gamesData'
import GameList from '../components/games/GameList'

const Store = () => {
  return (
    <div className="border-2 p-3">
      <p className="text-xl font-bold">Store</p>
      <div className="flex my-3">
        <input
          className="border-2 p-1.5 rounded-md"
          type="text"
          placeholder="search games..."
        />
      </div>

      <GameList productsArray={productsArray} />
    </div>
  )
}

export default Store
