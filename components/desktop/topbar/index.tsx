import styles from 'styles/components/desktop/topbar.module.scss'
import { Wifi } from 'components/desktop/topbar'

interface desktopTopbar {
  count: number
}

function Topbar({ count }:desktopTopbar) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.icon}>London</div>
        <div className={styles.icon}><Wifi count={count} /></div>
        <div className={styles.icon}>12:34</div>
      </div>
    </div>
  )
}

export * from './wifi'

export { Topbar }