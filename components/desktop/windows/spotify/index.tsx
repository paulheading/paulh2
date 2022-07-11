import styles from 'styles/components/desktop/windows/spotify/index.module.scss'
import { forwardRef } from 'react'
import { Header } from 'components/desktop/windows/spotify/header'
import { Cards } from 'components/desktop/windows/spotify/cards'
import type { spotifyWindow } from 'types/components'

const Spotify = forwardRef<HTMLDivElement, spotifyWindow>((props, ref) => {
  const { className, visible, content } = props;

  return (
    <div ref={ref} className={`${styles.window_outer} ${className} ${!visible ? styles.hidden : ""}`}>
      <div className={styles.wrap}>
        <a className={styles.skiplink} href="#trello">Skip to Projects</a>
        <div className={styles.window_inner}>
          <Header {...content} />
          <Cards {...content} />
        </div>
      </div>
    </div>
  );
});

Spotify.displayName = 'Spotify';

export { Spotify }