import styles from 'styles/components/marquee/row.module.scss'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import type { marqueeRow } from 'types/components'

function Row({ marquee, more }:marqueeRow) {
  const wrap = useRef<HTMLDivElement>(null);

  const defaults = {
    ease: "none",
    duration: 8
  }

  const tl = gsap.timeline({ defaults });

  useEffect(() => {
    tl.set(wrap.current, { x: 0 }).to(wrap.current, { x: -(defaults.duration * 30) });
  });

  const repeatPhrase = (marquee: string) => {
    let output = [];
    for (let index = 0; index < 10; index++) {
      output.push(<span key={index}>{marquee}</span>);
    }
    return output;
  };

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