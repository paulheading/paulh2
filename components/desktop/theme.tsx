import styles from 'styles/components/desktop/theme.module.scss'
import { Graph } from 'logos'
import type { desktopTheme } from 'types/components'

function Theme({ className, color, content, visible }:desktopTheme) {
  const { name, downloads, version, url } = content;
  const tidyUp = (target: string) => target.split('-').join(' ');

  return (
    <div className={`${styles.window_outer} ${className} ${!visible ? styles.hidden : ""}`}>
      <div className={styles.window_inner} style={{ borderColor: color }}>
        <div>
          <div className={styles.copy}>
            <div>
              <a href={url} className={styles.name}>{tidyUp(name)}</a>
              <div className={styles.downloads}>{downloads}</div>
            </div>
            <div className={styles.platform} style={{ color }}>{version}</div>
          </div>
          <div className={styles.graph}>
            <Graph color={color} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Theme }