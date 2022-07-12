
import { trelloCard } from 'types/scripts'

interface Desktop {
  projects: trelloCard[]
  gem: any
  npm: any
  spotify: {
    _2020: any
    _2021: any
    _2022: any
  }
}

interface desktopTheme {
  className?: string
  color: string
  content: {
    downloads: number
    name: string
    url: string
    version: string
  }
  visible?: boolean
}

export type {
  Desktop,
  desktopTheme
}