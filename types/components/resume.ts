
import { mediumArticle, trelloCard } from 'types/scripts'

interface resumeRow {
  title: string
  cards: trelloCard[]
  articles: mediumArticle[]
}

interface resumeBiography {
  name: trelloCard["name"]
  desc: trelloCard["desc"]
}

interface resumeCard {
  className?: string
  name: trelloCard["name"]
  labels: trelloCard["labels"]
  dueComplete: trelloCard["dueComplete"]
  due: trelloCard["due"]
  start: trelloCard["start"]
  desc: trelloCard["desc"]
  more: trelloCard["more"]
  articles: mediumArticle[]
}

interface resumeSkill {
  title: string
  score: number
}

interface resumeSkills {
  skills: resumeSkill[]
}

interface resumeDesc {
  desc: string
  className?: string
}

interface resumeCardName {
  name: trelloCard["name"]
  more: trelloCard["more"]
}

interface resumeStatus {
  dueComplete: boolean 
  due: string
  start: string
}

export type {
  resumeRow,
  resumeBiography,
  resumeCard,
  resumeSkill,
  resumeSkills,
  resumeDesc,
  resumeCardName,
  resumeStatus
}