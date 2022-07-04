import styles from 'styles/desktop/windows/trello/index.module.scss'
import { forwardRef } from 'react'
import { Header } from 'components/desktop/windows/trello/header'
import { Card } from 'components/desktop/windows/trello/card'
import { Footer } from 'components/desktop/windows/trello/footer'
import { TrelloWindow } from 'types/components'

const Trello = forwardRef<HTMLDivElement, TrelloWindow>(({ content, className, id }, ref) => {
  content = content.filter(({ more }) => more);

  return (
    <div ref={ref} className={`${styles.window_outer} ${className}`} id={id}>
      <div className={styles.wrap}>
        <a className={styles.skiplink} href="#folders">Skip to Folders</a>
        <div className={styles.window_inner}>
          <Header />
          { content.map((card, index) => <Card key={'card:' + index} { ...card } />) }
          <Footer />
        </div>
      </div>
    </div>
  )
});

Trello.displayName = 'Trello';

export default Trello