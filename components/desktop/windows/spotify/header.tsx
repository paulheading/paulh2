import styles from 'styles/components/desktop/windows/spotify/header.module.scss'
import { Spotify } from 'logos'
import Image from 'next/image'
import type { spotifyHeader } from 'types/components'

function Header({ name, owner, url, image }:spotifyHeader) {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        { image.length ? <Image width="80" height="80" src={image} alt={name} /> : null }
      </div>
      <div className={styles.wrap}>
        <div>
          <div className={styles.name}>
            <a href={url}>{ name }</a>
          </div>
          <div className={styles.owner}>
            <a href={owner.url}>{ owner.name }</a>
          </div>
        </div>
        <div className={styles.icon}>
          <Spotify />
        </div>
      </div>
    </div>
  )
}

export { Header }