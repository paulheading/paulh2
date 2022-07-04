import styles from 'styles/badge.module.scss'
import type { Badge as BadgeType } from 'types/components'

function styleColor(color?: string) {
  switch (color) {
    case 'purple': return styles.purple;
    case 'green': return styles.green;
    case 'blue': return styles.blue;
    default: return ''
  }
}

const Badge = ({ children, color, className }:BadgeType) => <div className={`${styles.badge} ${styleColor(color)} ${className ? className : ''}`}>{ children }</div>

export { Badge }
