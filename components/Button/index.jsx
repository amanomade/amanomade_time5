import React from 'react'
import cx from "classnames";
import styles from './styles.module.scss'

const Button = ({
  onClick,
  children,
  variant,
  ...rest
}) => {
  console.log(variant);
  return (
    <button
    className={cx(styles.button, { [styles[variant]]: variant })}
      onClick={onClick}
      {...rest}
    >
        { children }
    </button >
  )
}

export default Button