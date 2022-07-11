
interface readmore {
  id: string
  name: string
  url: string
}

interface prepLabel {
  name: string,
  color: string
}

interface attachmentData {
  data: {
    id: string
    name: string
    url: string
  }[]
}

interface trelloSvg {
  data: {
    text: string
  }
}

interface trelloCard {
  desc: string
  name: string
  start: string
  due: string
  dueComplete: boolean
  id: string
  labels: prepLabel[]
  svg: string
  marquee: string
  more: {
    id: string
    name: string
    url: string
  }
  article: mediumArticle | null 
}

interface sourceTrack {
  track: {
    name: string
    artists: {
      external_urls: {
        spotify: string
      }
      name: string
    }[]
    album: {
      release_date: string
    }
    external_urls: {
      spotify: string
    }
  }  
}

interface outputTrack {
  artist: {
    url: string
    name: string
  }
  release_date: string
  url: string
  name: string
}

interface playlist {
  profile: string
  description: string
  url: string
  followers: number
  image: string
  name: string
  owner: {
    name: string
    url: string
  }
  tracks: outputTrack[]
}

interface mediumArticle {
  author: string
  categories: string[]
  content: string
  description: string
  guid: string
  pubDate: string
  thumbnail: string
  title: string
}

export type { 
  readmore, 
  prepLabel, 
  attachmentData, 
  trelloSvg, 
  trelloCard,
  sourceTrack,
  outputTrack,
  playlist,
  mediumArticle
}