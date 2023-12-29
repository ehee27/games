// import { useState, useEffect } from 'react'
// import GameCard from './GameCard'

// const GameList = ({ productsArray }) => {
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = usestate([])

//   useEffect(() => {
//     const filteredGames = productsArray?.filter(game =>
//       game.title.toLowerCase().includes(search.toLocaleLowerCase())
//     )
//     setSearchResults(filteredGames)
//   }, [productsArray, search])

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//       {searchResults.map((game, i) => {
//         return <GameCard key={i} game={game} />
//       })}
//     </div>
//   )
// }

// export default GameList
