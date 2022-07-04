import styles from 'styles/marquee.module.scss'
import { Tab } from 'components/marquee/tab'
import { Row } from 'components/marquee/row'
import type { Marquee as MarqueeType } from 'types/components'

function Marquee({ hero }:MarqueeType) {
  const { marquee, more } = hero;

  return (
    <div className={styles.container}>
      <Tab more={more} />
      <Row marquee={marquee} more={more} />
    </div>
  )
}

export { Marquee }

export * from './tab'
export * from './row'
