import styles from 'styles/components/desktop/windows/spotify/header.module.scss'
import { Spotify } from 'logos'
import Image from 'next/image'

interface Header {
  name: string
  owner: {
    url: string
    name: string
  }
  url: string
  image: string
}

export const Header: React.FC<Header> = ({ name, owner, url, image }) => (
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
);