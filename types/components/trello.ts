
interface trelloCardAction {
  appCreator: null
  data: {
    text: string
  }
  date: string
  id: string
  idMemberCreator: string
  limits: object
  memberCreator: {
    id: string
    activityBlocked: boolean
    avatarHash: string
    avatarUrl: string
  }
  type: string
}

interface trelloCardAttachment {
  id: string
  name: string
  url: string
}

interface trelloCardLabel {
  color: string
  name: string
}

interface trelloCardMore {
  id: string
  name: string
  url: string
}

interface trelloCard {
  actions?: trelloCardAction[]
  attachments?: trelloCardAttachment[]
  desc: string
  due: string
  dueComplete: boolean
  id: string
  labels: trelloCardLabel[]
  marquee: string
  more: trelloCardMore
  name: string
  start: string
  svg: string
}

interface trelloWindow {
  content: trelloCard[]
  className?: string
  id?: string
  visible?: boolean
}

export type {
  trelloCardAction,
  trelloCardAttachment,
  trelloWindow,
  trelloCard
}