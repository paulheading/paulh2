import styles from 'styles/components/desktop/credit.module.scss'

function Credit() {
  return (
    <a className={styles.link} href="https://www.flaticon.com/authors/dinosoftlabs">
      <h6>
        Icons made by <span className={styles.title}>DinosoftLabs</span>
      </h6>
    </a>
  )
}

export { Credit }
