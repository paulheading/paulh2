import styles from 'styles/components/footer.module.scss'

function Footer() {
  return (
    <footer className={styles.container}>
      <span>Say hello :)</span>
      <a className={styles.link} href="mailto:hello@paulh.biz">hello@paulh.biz</a>
    </footer>
  )
}

export { Footer }