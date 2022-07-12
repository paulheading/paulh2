import styles from 'styles/components/desktop/windows/trello/index.module.scss'
import { forwardRef } from 'react'
import { Header } from 'components/desktop/windows/trello/header'
import { Card } from 'components/desktop/windows/trello/card'
import { Footer } from 'components/desktop/windows/trello/footer'
import type { trelloWindow } from 'types/components'

const Trello = forwardRef<HTMLDivElement, trelloWindow>(({ content, className, visible, id }, ref) => {
  content = content.filter(({ more }) => more);

  console.log("trello content: ", content);  
  
  return (
    <div ref={ref} className={`${styles.window_outer} ${className} ${!visible ? styles.hidden : ""}`} id={id}>
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

export { Trello }