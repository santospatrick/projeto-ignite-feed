import styles from './sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className={styles.profile}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">Editar seu perfil</a>
        </footer>
    </aside>
  )
}

export default Sidebar