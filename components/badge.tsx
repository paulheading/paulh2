import styles from 'styles/components/badge.module.scss'
import type { Badge as BadgeTypes } from 'types/components'

function getColor(color?:string) {
  switch (color) {
    case "green" : return styles.green;
    case "purple" : return styles.purple;
    case "blue" : return styles.blue;
    default: return ""
  }
}

function Badge({ children, color, className }:BadgeTypes) {
  return <div className={`${styles.badge} ${getColor(color)} ${ className }`}>{ children }</div>
}

export { Badge }
