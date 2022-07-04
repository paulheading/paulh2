import styles from 'styles/marquee/row.module.scss'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import type { Row as RowType } from 'types/components'

function Row({ marquee, more }:RowType) {
  const wrap = useRef<HTMLDivElement>(null);

  const defaults = {
    ease: "none",
    duration: 8
  }

  const tl = gsap.timeline({ defaults });
  const target = wrap.current;

  if (target) tl.set(target, { x: 0 }).to(target, { x: -(defaults.duration * 30) });

  const repeatPhrase = (marquee: string) => {
    let output = [];
    for (let index = 0; index < 10; index++) {
      output.push(<span key={index}>{marquee}</span>);
    }
    return output;
  };

  useEffect(() => {
    tl.restart();
  },[tl, marquee]);

  return (
    <div className={styles.container}>
      <Link href={more ? more.url : "#" }>
        <a className={styles.link}>
        <div ref={wrap} className={styles.wrap}>
          { marquee && repeatPhrase(marquee) }
        </div>
        </a>
      </Link>
    </div>
  )
}

export { Row }