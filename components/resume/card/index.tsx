import styles from 'styles/components/resume/card.module.scss'
import { Badge } from 'components'
import { Name, Status, Desc } from 'components/resume/card'
import type { resumeCard } from 'types/components'

function Card({ name, labels, dueComplete, due, start, desc, more, className, articles }:resumeCard) {
  const nameData = { name, more };
  const statusData = { dueComplete, due, start };
  const article = more ? articles.filter(({ guid }) => more.url === guid)[0] : null;

  return (
    <div className={ className }>
      { labels.map(({ name, color }, index) => <Badge key={'badge' + index} color={color} className={styles.badge}>{ name }</Badge>) }
      <h4 className={styles.name}>
        <Name { ...nameData } />
      </h4>
      <h6 className={styles.date}>
        <Status { ...statusData } />
      </h6>
      <Desc desc={ !article ? desc : article.description } className={styles.copy} />
    </div>
  )
}

export { Card }

export * from './name'
export * from './status'
export * from './desc'

