
import { trelloCard } from 'types/scripts'

interface Layout {
  children?: React.ReactNode
  heroes: trelloCard[]
  projects: trelloCard[]
  gem: any
  npm: any
  spotify: any
}

interface Head {
  title: string
  keywords: string
  desc: string
}

interface Hero {
  hero: trelloCard
}

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

interface Badge {
  children: React.ReactNode
  color?: string
  className?: string
}

interface Folder {
  children: React.ReactNode
  visible?: boolean
  toggle: (open:boolean) => void
} 

export * from 'types/components/marquee'
export * from 'types/components/resume'
export * from 'types/components/spotify'
export * from 'types/components/trello'

export type { 
  Layout,
  Head,
  Hero,
  Desktop,
  Badge,
  Folder
}