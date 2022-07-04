
import { trelloCard } from 'types/scripts'

interface Layout {
  children?: React.ReactNode
  heroes: trelloCard[]
  projects: trelloCard[]
  gem: any
  npm: any
  className?: string
}

interface Head {
  title: string
  keywords: string
  desc: string
}

interface Hero {
  hero: trelloCard
}

interface Marquee {
  hero: trelloCard
}

interface Row {
  marquee: trelloCard["marquee"]
  more: trelloCard["more"]
}

interface CreateLink {
  children: string
  more: trelloCard["more"]
}

interface Tab {
  more: trelloCard["more"]
}

interface Desktop {
  projects: trelloCard[]
  gem: any
  npm: any
}

interface TrelloWindow {
  content: trelloCard[]
  className?: string
  id?: string
}

interface TrelloCard {
  more: trelloCard["more"]
  name: trelloCard["name"]
  labels?: trelloCard["labels"]
}

interface Badge {
  children: React.ReactNode
  className?: string
  color?: string
}

interface Folder {
  children: React.ReactNode
  target: HTMLDivElement | null
  display: boolean
}

export type { 
  Layout,
  Head,
  Hero,
  Marquee,
  Row,
  CreateLink,
  Tab,
  Desktop,
  TrelloWindow,
  TrelloCard,
  Badge,
  Folder
}