import styles from 'styles/marquee/tab.module.scss'
import Link from 'next/link'
import type { CreateLink, Tab as TabStyle } from 'types/components'

function CreateLink({ children, more }:CreateLink) {
  if (more) {
    return (
      <a href={more.url} className={styles.link}>
        { children }
      </a>
    )
  } else {
    return (
      <Link href="/404">
        <a className={styles.link}>
          { children }
        </a>
      </Link>
    )
  }
}

function Tab({ more }:TabStyle) {
  return (
    <div className={styles.container}>
      <CreateLink more={ more }>
        See Project
      </CreateLink>
    </div>
  )
}

export { Tab }

      