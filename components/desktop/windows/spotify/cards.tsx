import styles from 'styles/components/desktop/windows/spotify/cards.module.scss'
import type { spotifyCard, spotifyCards } from 'types/components'

function Card({ number, name, artist, url }:spotifyCard) { 
  return (
    <div className={styles.row}>
      <div className={styles.number}>
        { number }
      </div>
      <div className={styles.info}>
        <div>
          <a href={url} className={styles.title}>
            { name }
          </a>
        </div>
        <div>
          <a href={artist.url} className={styles.artist}>
            { artist.name }
          </a>          
        </div>
      </div>
    </div>
  )
}

function Cards({ tracks }:spotifyCards) {
  return (
    <div className={styles.container}>
      { tracks.map((card, index) => <Card key={index} {...card} number={index + 1} />) }
    </div>
  )
}

export { Cards }