import styles from 'styles/desktop.module.scss'
import { useEffect, useRef } from 'react'
import { Credit } from 'components/desktop/credit'
import { Folder } from 'components/desktop/folder'
import { Topbar } from 'components/desktop/topbar'
import { Theme } from 'components/desktop/theme'
import Trello from 'components/desktop/windows/trello'
import { Draggable } from 'gsap/dist/Draggable'
import gsap from 'gsap'
import type { Desktop as DesktopType } from 'types/components'

function Desktop({ projects, gem, npm }:DesktopType) {
  const windows = useRef<HTMLDivElement>(null);

  const window = {
    trello: {
      content: projects,
      ref: useRef<HTMLDivElement>(null),
      className: styles.trello,
    },
    spotify_2020: {
      content: "content",
      ref: useRef<HTMLDivElement>(null),
      className: styles.spotify_2020
    },
    gem: {
      content: gem,
      className: styles.gem,
      color: "#007bff"
    },
    npm: {
      content: npm,
      className: styles.npm,
      color: "#dc3545"
    }
  }

  const folder = {
    trello: {
      target: window.trello.ref.current,
      display: true
    },
    spotify: {
      target: window.spotify_2020.ref.current,
      display: false
    }
  }

  useEffect(() => {    
    if (windows.current) {
      gsap.registerPlugin(Draggable);
      const { children } = windows.current;
      Array.from(children).forEach(child => Draggable.create(child));
    }
  },[windows]);  
    
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.canvas}>
        <div className={styles.wrap}>
        <div ref={windows} className={styles.windows}>
          <Trello { ...window.trello } />
          <Theme { ...window.gem } />
          <Theme { ...window.npm } />
        </div>
        <div className={styles.folders}>
          <Folder { ...folder.trello }>
            trello
          </Folder>
        </div>
        </div>
        <Credit />
      </div>
    </div>
  )
}

export { Desktop }