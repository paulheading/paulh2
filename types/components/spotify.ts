
interface spotifyWindow {
  content: any
  className?: string
  visible?: boolean
}

interface spotifyCard {
  number: number
  name: string
  artist: {
    name: string
    url: string
  }
  url: string
}

interface spotifyCards {
  tracks: spotifyCard[]
}

export type {
  spotifyWindow,
  spotifyCard,
  spotifyCards
}