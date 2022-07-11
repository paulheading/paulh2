
import { trelloCard } from 'types/scripts'

interface marqueeWindow {
  hero: trelloCard
}

interface marqueeRow {
  marquee: trelloCard["marquee"]
  more: trelloCard["more"]
}

interface marqueeLink {
  children: string
  more: trelloCard["more"]
}

interface marqueeTab {
  more: trelloCard["more"]
}

export type {
  marqueeWindow,
  marqueeRow,
  marqueeLink,
  marqueeTab
}