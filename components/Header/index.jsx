import React from 'react'
import ArrowLeft from '../../public/arrowLeft.svg'
import styles from './styles.module.scss'
import InfoPhone from '../../public/infoPhone.svg'
import Button from '../Button'
import Input from '../InputText'

const Header = () => {
  return (
    <header className={styles.header}>
      <span>
        <p>
          9:30
        </p>
        <InfoPhone />
      </span>
      <nav className={styles.navBar}>
        <ArrowLeft />
        <Button>
          Logar | Criar conta
        </Button>
      </nav>
    </header>
  )
}

export default Header