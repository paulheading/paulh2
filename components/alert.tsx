import styles from 'styles/components/alert.module.scss'
import { forwardRef } from 'react'
import type { Alert as AlertType } from 'types/components'

function styleStatus(success: AlertType['success'], error: AlertType['error']): string {
  if (success) return styles.success
  if (error) return styles.error
  return ''
}

const Alert = forwardRef<HTMLDivElement, AlertType>(({ children, className, success, error }, ref) => <div ref={ref} className={`${styles.alert} ${styleStatus(success, error)} ${className}`}>{ children }</div>);

Alert.displayName = 'Alert';

export { Alert }