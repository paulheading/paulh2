import styles from 'styles/components/header.module.scss'
import Link from 'next/link'
import { Desktop, Mobile } from 'logos/paulh'
import { useRouter } from 'next/router'

function Header() {
  const { route } = useRouter()
  const aboutButton = route !== '/' ? styles.about_button : styles.about_button_home;
    
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Link href="/">
          <a className={styles.home_button}>
            <span className="sr-only">return to paulh homepage</span>
            <Desktop />
            <Mobile />
          </a>
        </Link>
        <div className={styles.controls}>
          <Link href="/about">
            <a className={aboutButton}>About</a>
          </Link>
          <Link href="/resume">
            <a className={styles.resume_button}>Resume</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Header }