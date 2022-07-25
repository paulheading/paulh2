
import { trelloCard } from 'types/scripts'
import { spotifyData, desktopTheme } from 'types/components'

interface Layout {
  children?: React.ReactNode
  heroes: trelloCard[]
  projects: trelloCard[]
  gem: desktopTheme
  npm: desktopTheme
  spotify: spotifyData
}

interface Head {
  title: string
  keywords: string
  desc: string
}

interface Hero {
  hero: trelloCard
}

interface Badge {
  children: React.ReactNode
  color?: string
  className?: string
}

interface Alert {
  className: string
  success?: boolean
  error?: boolean
  children?: React.ReactNode
}

export * from 'types/components/marquee'
export * from 'types/components/resume'
export * from 'types/components/spotify'
export * from 'types/components/trello'
export * from 'types/components/desktop'

export type { 
  Layout,
  Head,
  Hero,
  Badge,
  Alert
}