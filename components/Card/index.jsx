import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export const Title = ({children}) => {
  return (
    <p className={styles.title}>{children}</p>
  )
}

export const Content = ({ children }) => {
  return (
    <div className={styles.content}>{children}</div>
  )
}

export const Paragraph = ({ children }) => {
  return (
    <p>{children}</p>
  )
}

export const Group = ({ children, variant }) => {
  return (
    <div className={cx(styles.group, { [styles[variant]]: variant })}>{children}</div>
  )
}



const Card = ({ children, variant, Icon, ...rest }) => {
  return (
    <div className={cx(styles.card, { [styles[variant]]: variant })} {...rest} >
      {Icon && <Icon className={styles.icon} />}
      {children}
    </div>
  )
}

export default Card