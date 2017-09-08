namespace Functions {
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']
  let mahjongSuits = ['characters', 'dots', 'bamboos', 'arrows']

  interface Card {
    suit: string
    face: number
  }

  interface MahjongTile {
    suit: string
    face: number
    red?: boolean
  }

  function pickCard(x: Card[]): number
  function pickCard(x: MahjongTile[]): number
  function pickCard(x: number): Card
  function pickCard(x: any) {
    if (typeof x == 'object') {
      let picked = Math.floor(Math.random() * x.length)
      return picked
    } else if (typeof x == 'number') {
      let suit = suits[Math.floor(x / 13)]
      let face = x % 13
      return { suit, face }
    }
  }

  let deck: Card[] = [
    { suit: 'diamonds', face: 2 },
    { suit: 'spades', face: 10 },
    { suit: 'hearts', face: 4 }
  ]
  let card1 = deck[pickCard(deck)]
  console.log(`${card1.face} of ${card1.suit}`)
  let card2 = pickCard(15)
  console.log(`${card2.face} of ${card2.suit}`)

  let hand: MahjongTile[] = [
    { suit: 'characters', face: 3 },
    { suit: 'dots', face: 7 },
    { suit: 'bamboos', face: 2 },
  ]
  let tile = hand[pickCard(hand)]
  console.log(`${tile.face} of ${tile.suit}`)

}
