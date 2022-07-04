import styles from 'styles/desktop/folder.module.scss'
import { Closed } from 'components/desktop/folder/closed'
import { Open } from 'components/desktop/folder/open'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import type { Folder as FolderType } from 'types/components'

function Folder({ children, target, display }:FolderType) {
  const [open, setOpen] = useState(display);
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.in" } });

  useEffect(() => {
    console.log("target: ", target);    
  },[target]);

  function toggleState():void {
    const show = { display: "block", opacity: 1 };
    const hide = { opacity: 0, display: "none" };

    if (open) { tl.to(target,{ scale: 0.5 }).set(target, hide); }
    else { tl.set(target, show).to(target,{ scale: 1 }); }
    setOpen(!open);    
  }

  return (
    <button className={styles.button} onClick={toggleState}>
      { open ? <Open /> : <Closed /> }
      <h6 className={styles.title}>
        { children }
      </h6>
    </button>
  )
}

export { Folder }


