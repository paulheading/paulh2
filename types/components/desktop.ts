
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
  count: number
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

interface desktopFolder {
  children: React.ReactNode
  visible?: boolean
  toggle: (open:boolean) => void
}

export type {
  Desktop,
  desktopTheme,
  desktopFolder
}