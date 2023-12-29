import { productsArray } from '../gamesData'
import { useState, useEffect } from 'react'
import GameCard from '../components/games/GameCard'

const Store = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const filteredGames = productsArray?.filter(game =>
      game.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
    setSearchResults(filteredGames)
  }, [productsArray, search])
  return (
    <div className="bg-gray-200 p-3">
      <p className="text-xl font-bold">Store</p>
      <div className="flex my-3 px-1">
        <input
          onChange={e => setSearch(e.target.value)}
          className="border-2 border-gray-300 p-1.5 rounded-md"
          type="text"
          placeholder="search games"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {searchResults.map((game, i) => {
          return <GameCard key={i} game={game} />
        })}
      </div>
    </div>
  )
}

export default Store
