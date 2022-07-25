import styles from 'styles/components/desktop/folder.module.scss'
import { Closed } from 'components/desktop/folder/closed'
import { Open } from 'components/desktop/folder/open'
import { useState } from 'react'
import type { desktopFolder } from 'types/components'

function Folder({ children, visible = false, toggle }:desktopFolder) {
  const [open, setOpen] = useState(visible);

  function sendToggle() {
    toggle(open);
    setOpen(!open);
  }

  return (
    <button className={styles.button} onClick={sendToggle}>
      { open ? <Open /> : <Closed /> }
      <h6 className={styles.title}>
        { children }
      </h6>
    </button>
  )
}

export { Folder }


