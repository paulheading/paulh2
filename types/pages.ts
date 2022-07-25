
import { trelloCard, mediumArticle } from 'types/scripts'
import { Layout, resumeSkill } from 'types/components'

interface homePage extends Layout {}

interface aboutPage extends Layout {
  pages: trelloCard[]
  roles: trelloCard[]
  education: trelloCard[]
}

interface resumePage extends Layout {
  pages: trelloCard[]
  roles: trelloCard[]
  education: trelloCard[]
  articles: mediumArticle[]
  skills: resumeSkill[]
}

interface notfoundPage extends Layout {}

export type {
  homePage,
  aboutPage,
  resumePage,
  notfoundPage
}