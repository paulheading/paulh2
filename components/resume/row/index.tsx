import styles from 'styles/components/resume/row.module.scss'
import { Card } from 'components/resume/card'
import type { resumeRow } from 'types/components'

function Row({ title, cards, articles }:resumeRow) {
  
  cards = cards.filter(({ labels }) => {
    let staging = false;
    labels.forEach(({ name }) => { if (name === 'Staging') staging = true; })
    return !staging;
  });
  
  return (
    <div className={styles.triple_row}>
      <div className={styles.title_row}>
        <h3>{ title }</h3>
      </div>
      { cards.map((card, index) => <Card key={'card' + index} className={styles.column} { ...card } articles={articles} />) }
    </div>
  )
}

export { Row }
export * from './name'
export * from './biography'
export * from './skills'