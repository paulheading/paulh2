
import { trelloCard, mediumArticle } from 'types/scripts'
import { Layout, resumeSkill } from 'types/components'

interface Home extends Layout {}

interface About extends Layout {
  pages: trelloCard[]
  roles: trelloCard[]
  education: trelloCard[]
}

interface Resume extends Layout {
  pages: trelloCard[]
  roles: trelloCard[]
  education: trelloCard[]
  articles: mediumArticle[]
  skills: resumeSkill[]
}

interface NotFound extends Layout {}

export type {
  Home,
  About,
  Resume,
  NotFound
}