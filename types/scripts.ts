
interface readmore {
  id: string
  name: string
  url: string
}

interface prepLabel {
  name: string,
  color: string
}

interface attachmentData {
  data: {
    id: string
    name: string
    url: string
  }[]
}

interface trelloSvg {
  data: {
    text: string
  }
}

interface trelloCard {
  desc: string
  name: string
  start: string
  due: string
  dueComplete: boolean
  id: string
  labels: prepLabel[]
  svg: string
  marquee: string
  more: {
    id: string
    name: string
    url: string
  }
}

export type { readmore, prepLabel, attachmentData, trelloSvg, trelloCard }