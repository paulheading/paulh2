import styles from 'styles/components/resume/row.module.scss'

function NameRow() {
  return (
    <div className={styles.name_row}>
      <div className={styles.column}>
        <h1 className={styles.name}>Paul Heading</h1>
      </div>
      <div className={styles.column}>
        <div>Camberwell, London</div>
        <a className={styles.link} href="mailto:hello@paulh.biz">hello@paulh.biz</a>
      </div>
    </div>
  );
}

export { NameRow }