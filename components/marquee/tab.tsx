import styles from 'styles/components/marquee/tab.module.scss'
import Link from 'next/link'
import type { marqueeLink, marqueeTab } from 'types/components'

function MarqueeLink({ children, more }:marqueeLink) {
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

function Tab({ more }:marqueeTab) {
  return (
    <div className={styles.container}>
      <MarqueeLink more={ more }>
        See Project
      </MarqueeLink>
    </div>
  )
}

export { Tab }

      