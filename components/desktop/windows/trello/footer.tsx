import styles from 'styles/components/desktop/windows/trello/footer.module.scss'
import { Plus } from 'components/desktop/windows/trello/plus'

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.another}>
      + Add another card
    </div>
    <Plus />
  </div>
)

export { Footer }