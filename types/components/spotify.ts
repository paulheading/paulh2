
interface spotifyTrack {
  artist: {
    name: string
    url: string
  }
  name: string
  release_date: string
  url: string
}

interface spotifyCard {
  number?: number
  name: spotifyTrack["name"]
  artist: spotifyTrack["artist"]
  url: spotifyTrack["url"]
}

interface spotifyCards {
  tracks: spotifyCard[]
}

interface spotifyPlaylist {
  description: string
  followers: number
  image: string
  name: string
  owner: {
    name: string
    url: string
  }
  profile: string
  tracks: spotifyTrack[]
  url: string
}

interface spotifyHeader {
  name: spotifyPlaylist["name"]
  owner: spotifyPlaylist["owner"]
  image: spotifyPlaylist["image"]
  url: spotifyPlaylist["url"]
}

interface spotifyWindow {
  content: spotifyPlaylist
  className?: string
  visible?: boolean
}

interface spotifyData {
  _2020: spotifyPlaylist
  _2021: spotifyPlaylist
  _2022: spotifyPlaylist
}

export type {
  spotifyData,
  spotifyPlaylist,
  spotifyTrack,
  spotifyWindow,
  spotifyHeader,
  spotifyCard,
  spotifyCards
}