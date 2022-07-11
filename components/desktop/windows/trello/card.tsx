import styles from 'styles/components/desktop/windows/trello/cards.module.scss'
import { Badge } from 'components'
import type { trelloCard } from 'types/components'

function Card({ more, name, labels }:trelloCard) {
  return (
    <a href={ more.url } className={ styles.link }>
      <span className={ styles.name }>{ name }</span>
      { labels && labels.map(({ name, color }, index ) => <Badge key={'badge:' + index} color={color} className={styles.badge}>{ name }</Badge>) }
    </a>
  )
}

export { Card }