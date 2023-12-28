const productsArray = [
  {
    id: 'price_1OPVPhCZMYzNjxDggQpSKs5M',
    title: 'Final Fight',
    price: 49.99,
    image: 'Final Fight',
    sku: 'SL1270',
    about:
      "Final Fight[a] is a side-scrolling beat-'em-up video game produced by Capcom. Originally released as an arcade game in 1989, it was the seventh title released for the CP System hardware. Set in the fictional Metro City, the game lets the player control one of three street fighters: former pro wrestler and city mayor Mike Haggar, expert brawler Cody Travers, and modern-day ninja Guy. The trio set out to rescue Jessica (Haggar's daughter and Cody's girlfriend) when she is kidnapped by the Mad Gear Gang.",
  },
  {
    id: 'price_1OPVPPCZMYzNjxDgHv8pWgRC',
    title: 'Street Fighter 2',
    price: 49.99,
    image: 'Street Fighter II',
    sku: 'SL1271',
    about:
      "Street Fighter II: The World Warrior[b] is a 2D fighting game developed by Capcom and originally released for arcades in 1991. It is the second installment in the Street Fighter series and the sequel to 1987's Street Fighter. It is Capcom's fourteenth game to use the CP System arcade system board. Street Fighter II vastly improved many of the concepts introduced in the first game, including the use of special command-based moves, a combo system, a six-button configuration, and a wider selection of playable characters, each with a unique fighting style.",
  },
  {
    id: 'price_1OPVPvCZMYzNjxDgGaldcNZx',
    title: 'F-Zero',
    price: 49.99,
    image: 'F-Zero',
    sku: 'SL1273',
    about:
      'F-Zero[a] is a racing game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan on November 21, 1990, in North America in August 1991, and in Europe in 1992. F-Zero is the first game in the F-Zero series and was a launch game for the SNES. F-Zero was rereleased for the Virtual Console service on various Nintendo platforms and as part of the Super NES Classic Edition in 2017.',
  },
  {
    id: 'price_1OPVQ9CZMYzNjxDgDohaPDGR',
    title: 'Mortal Kombat II',
    price: 49.99,
    image: 'Mortal Kombat 2',
    sku: 'SL1274',
    about:
      'Mortal Kombat II is a fighting game originally produced by Midway for the arcades in 1993. It was ported to multiple home systems, including MS-DOS, Amiga, Game Boy, Game Gear, Sega Genesis, 32X, Sega Saturn, Super Nintendo Entertainment System, and PlayStation only in Japan, mostly in licensed versions developed by Probe Software (later renamed to Probe Entertainment for some ports of the game) and Sculptured Software and published by Acclaim Entertainment (currently distributed by Warner Bros. Interactive Entertainment).',
  },
  {
    id: 'price_1OPVQSCZMYzNjxDgQbRGb7yc',
    title: 'Contra III',
    price: 49.99,
    image: 'Contra III',
    sku: 'SLl1275',
    about:
      'Contra III: The Alien Wars[b] is a 1992 run and gun video game developed and published by Konami for the Super Nintendo Entertainment System (SNES). It is the third home console entry in the Contra series after Contra (1988) and Super C (1990) for the Nintendo Entertainment System (NES). In PAL regions, it was retitled Super Probotector: Alien Rebels and the player characters were replaced with robots. The player is tasked with fighting off an alien invasion of Earth across six stages. Four stages feature side-scrolling action traditional to the series while two are presented from an overhead perspective. It is the first Contra title to have been directed by Nobuya Nakazato who later directed other games in the series. He designed Contra III to feature more comical elements, a more cinematic soundtrack, and tighter stage design than its predecessors.',
  },
  {
    id: 'price_1OQDajCZMYzNjxDgGckq81ny',
    title: 'Zelda: A Link To The Past',
    price: 49.99,
    image: 'Zelda',
    sku: 'SL1276',
    about:
      'The Legend of Zelda: A Link to the Past[a] is an action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System. It is the third game in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.',
  },
  {
    id: 'price_1OQDa3CZMYzNjxDgsmPJp4ON',
    title: 'Battletoads & Double Dragon',
    price: 49.99,
    image: 'Battletoads',
    sku: 'SL1277',
    about:
      "Battletoads/Double Dragon (fully titled Battletoads & Double Dragon - The Ultimate Team) is a 1993 beat 'em up developed by Rare and published by Tradewest. It was originally released for the Nintendo Entertainment System and later ported to the Mega Drive/Genesis, Super NES, and Game Boy. Retro-bit Publishing (under license from ARC System Works and Rare) has re-released the 8-bit NES version in early 2022 with plans to release the 16-bit versions later this year.",
  },
  {
    id: 'price_1OQDZFCZMYzNjxDgOvRaSrMW',
    title: 'Super Mario World',
    price: 49.99,
    image: 'Super Mario World',
    sku: 'SL1278',
    about:
      "Super Mario World, known in Japanese marketing as Super Mario World: Super Mario Bros. 4[a], is a platform video game developed by Nintendo EAD and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan in 1990, North America in 1991 and Europe and Australia in 1992. The player controls Mario on his quest to save Princess Peach and Dinosaur Land from the series' antagonist Bowser and the Koopalings. The gameplay is similar to that of earlier Super Mario games; players control Mario through a series of levels in which the goal is to reach the goalpost at the end.",
  },
  {
    id: 'price_1OQDYxCZMYzNjxDgDqHDn3vw',
    title: 'TMNT: Turtles in Time',
    price: 49.99,
    image: 'TMNT',
    sku: 'SL1279',
    about:
      "Teenage Mutant Ninja Turtles: Turtles in Time, released as Teenage Mutant Hero Turtles: Turtles in Time in Europe, is a beat 'em up arcade video game produced by Konami and released in 1991. A sequel to the original Teenage Mutant Ninja Turtles arcade game, it is a scrolling beat 'em up type game based mainly on the 1987 TMNT animated series. Originally an arcade game, Turtles in Time was ported to the Super Nintendo Entertainment System in 1992 under the title Teenage Mutant Ninja Turtles IV: Turtles in Time, continuing the numbering from the earlier Turtles games released on the original NES. That same year, a game that borrowed many elements, Teenage Mutant Ninja Turtles: The Hyperstone Heist, was released for the Sega Genesis.",
  },
  {
    id: 'price_1OQDYYCZMYzNjxDgWjkTI2kG',
    title: 'NCAA Basketball',
    price: 49.99,
    image: 'NCAA',
    sku: 'SL1280',
    about:
      "NCAA Basketball,[a] known in Europe as World League Basketball,[3] is a basketball video game which was developed by Sculptured Software for the Super NES.It was the first basketball game for a console to utilize a 3D perspective. The game uses the Super Nintendo's Mode 7 to create a 3D players' perspective that became the standard for later basketball video games. Sculptured's NHL Stanley Cup featured a similar effect.",
  },
  {
    id: 'price_1OQDYACZMYzNjxDgtOmTLunw',
    title: 'StarFox',
    price: 49.99,
    image: 'StarFox',
    sku: 'SL1281',
    about:
      'Star Fox, known as Starwing in PAL regions, is a rail shooter video game developed by Nintendo and Argonaut Software, and published by Nintendo for the Super Nintendo Entertainment System. The first game in the Star Fox series, the story follows Fox McCloud and the rest of the Star Fox team defending their homeworld of Corneria against the invading forces of Andross.',
  },
  {
    id: 'price_1OQDXtCZMYzNjxDg0lBK8ps0',
    title: 'Madden 95',
    price: 49.99,
    image: 'Madden',
    sku: 'SL1282',
    about:
      "John Madden Football '95 is a 1994 sports video game developed by Blue Sky Productions and Electronic Arts and published by EA Sports. Based on the sport of American football, the player controls a football team in modes such as tournament play and sudden death. Officially endorsed by John Madden, it was the third Madden game for home consoles and the first one that saw a simultaneous release on both, the Sega Genesis and Super NES.",
  },
  {
    id: 'price_1OQDUuCZMYzNjxDgaGkwrull',
    title: 'NBA Jam',
    price: 49.99,
    image: 'NBA Jam',
    sku: 'SL1283',
    about:
      'NBA Jam is a basketball video game developed and published by Midway for arcades in 1993. It is the first entry in the NBA Jam series. The project leader for this game was Mark Turmell. NBA Jam was the third basketball video game released by Midway, after TV Basketball (1974) and Arch Rivals (1989).[5] The gameplay of NBA Jam is based on Arch Rivals, which was also a 2-on-2 basketball game. However, it was the release of NBA Jam that brought mainstream success to the genre.',
  },
  {
    id: 'price_1OQDZeCZMYzNjxDgtKOz2xuF',
    title: 'Castlevania IV',
    price: 49.99,
    image: 'Castlevania',
    sku: 'SL1284',
    about:
      "Super Castlevania IV[a] is a platform video game developed and published by Konami for the Super Nintendo Entertainment System. It has been re-released multiple times, including for the Super NES Classic Edition. Super Castlevania IV features expanded play control, 16-bit graphics featuring Super NES's Mode 7, and a soundtrack featuring new pieces and arrangements based on previous Castlevania music. Following the same setting as Castlevania on the NES, the game takes place in 1691 Transylvania, where the vampire hunter Simon Belmont must defeat the vampire Dracula.[3][4] The game received critical acclaim and is considered one of the greatest video games of all time.",
  },
  {
    id: 'price_1OQDXXCZMYzNjxDgyLD9ZqZA',
    title: 'KGJ Baseball',
    price: 49.99,
    image: 'KGJ',
    sku: 'SL1285',
    about:
      "Ken Griffey Jr. Presents Major League Baseball is a Super NES baseball game that was released in 1994. The game has a Major League Baseball (MLB) license but not a Major League Baseball Players Association (MLBPA) license, meaning that the game has real stadiums and real teams, but not real players (except Ken Griffey Jr.). The fictitious players have the same statistics as their real-world counterparts, and the game comes with a name-changing feature that allows players to change the athletes' names. Nintendo released a portable version of the game in 1997 for the Game Boy with real players and stats from the 1996 season. The gameplay is similar to its predecessors, though it is sometimes sluggish due to hardware restrictions. The SNES version came with a promotional Griffey collector's card packed inside.[1] It is often rated by the public as one of the best baseball games of all time.[2][3][4][5]",
  },
]

// helper func to quickly grab the ID when needed
const getProductData = id => {
  let productData = productsArray.find(product => product.id === id)

  if (productData == undefined) {
    console.log('Product data does not exist for ID: ' + id)
    return undefined
  }

  return productData
}

export { productsArray, getProductData }
