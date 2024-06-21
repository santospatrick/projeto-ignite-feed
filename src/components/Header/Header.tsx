import styles from './header.module.css'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logotipo do ignite" />
        <strong>Ignite Feed</strong>
    </header>
  )
}

export default Header