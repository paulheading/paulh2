import styles from 'styles/components/resume/row.module.scss'
import parse from 'html-react-parser'
import type { resumeBiography } from 'types/components'

function BioRow({ name, desc }:resumeBiography) {
  return (
    <div className={styles.double_row}>
      <div className={styles.column}>
        <div className={styles.title_row}>
          <h3>{ name }</h3>
        </div>
        { parse(desc) }
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li><a className={styles.link} href="https://github.com/paulheading">Github</a></li>
          <li><a className={styles.link} href="https://blog.paulh.biz/">Medium</a></li>
        </ul>
      </div>
    </div>
  );
}

export { BioRow }