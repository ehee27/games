import GameCard from './GameCard'

const GameList = ({ productsArray }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100">
      {productsArray.map((game, i) => {
        return <GameCard key={i} game={game} />
      })}
    </div>
  )
}

export default GameList
