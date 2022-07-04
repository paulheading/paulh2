
import { trelloCard } from 'types/scripts'

interface Home {
  heroes: trelloCard[]
  projects: trelloCard[]
  gem: any
  npm: any
}

interface Resume {
  medium: {
    items: []
  }
  trello: trelloCard[]
  gem: any
  npm: any
  treehouse: any
  spotify: any
}

export type {
  Home,
  Resume
}