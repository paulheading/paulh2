import { useRef } from 'react'
import type { Hero as HeroType } from 'types/components'
import styles from 'styles/components/hero.module.scss'
import parse from 'html-react-parser'

const Hero = ({ hero }:HeroType) => {
  const { id, name, svg, more } = hero;
  const animation = useRef(null);
  
  return (
    <div className={styles.container} id={id}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          { more ? <a className={styles.link} href={more.url}>{ name }</a> : name }         
        </h1>
        <div ref={animation} className={styles.svg} id={id}>{svg && parse(svg)}</div>
      </div>
    </div>
  )
}

export { Hero }
