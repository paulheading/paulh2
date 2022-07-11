import styles from 'styles/components/resume/card.module.scss'
import type { resumeCardName } from 'types/components'

function Name({ more, name }:resumeCardName) {
  return (
    more ? <a className={styles.link} href={more.url}>{ name }</a> : <span>{ name }</span>
  )
}

export { Name }