import styles from 'styles/components/desktop.module.scss'
import { useEffect, useRef } from 'react'
import { Credit } from 'components/desktop/credit'
import { Folder } from 'components/desktop/folder'
import { Topbar } from 'components/desktop/topbar'
import { Theme } from 'components/desktop/theme'
import { Spotify, Trello } from 'components/desktop/windows'
import { Draggable } from 'gsap/dist/Draggable'
import gsap from 'gsap'
import type { Desktop as DesktopType } from 'types/components'

const show = { display: "block", opacity: 1 };
const hide = { opacity: 0, display: "none" };

function toggleWindow(ref: HTMLDivElement | null, open: boolean ) {
  if (!ref) return
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.in" } });
  return open ? tl.to(ref,{ scale: 0.5 }).set(ref, hide) : tl.set(ref, show).to(ref,{ scale: 1 }) ;
}

function Desktop({ projects, gem, npm, spotify, count }:DesktopType) {
  const windows = useRef<HTMLDivElement>(null);
  
  const window = {
    spotify: {
      _2020: {
        content: spotify._2020,
        ref: useRef<HTMLDivElement>(null),
        className: styles._2020,
      },
      _2021: {
        content: spotify._2021,
        ref: useRef<HTMLDivElement>(null),
        className: styles._2021,
      }
    },
    trello: {
      content: projects,
      ref: useRef<HTMLDivElement>(null),
      className: styles.trello,
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

  useEffect(() => {    
    if (windows.current) {
      gsap.registerPlugin(Draggable);
      const { children } = windows.current;
      Array.from(children).forEach(child => Draggable.create(child));
    }
  },[windows]);
    
  return (
    <div className={styles.container}>
      <Topbar count={count} />
      <div className={styles.canvas}>
        <div className={styles.wrap}>
        <div ref={windows} className={styles.windows}>
          <Trello visible { ...window.trello } />
          <Theme visible { ...window.gem } />
          <Theme { ...window.npm } />
          <Spotify { ...window.spotify._2020 } />
          <Spotify visible { ...window.spotify._2021 } />
        </div>
        <div className={styles.folders}>
          <Folder visible toggle={open => toggleWindow(window.trello.ref.current, open)}>
            trello
          </Folder>
          <Folder toggle={open => toggleWindow(window.spotify._2020.ref.current, open)}>
            2020 tunes
          </Folder>
          <Folder visible toggle={open => toggleWindow(window.spotify._2021.ref.current, open)}>
            2021 tunes
          </Folder>
        </div>
        </div>
        <Credit />
      </div>
    </div>
  )
}

export { Desktop }