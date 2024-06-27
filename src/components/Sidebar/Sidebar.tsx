import Avatar from '../Avatar';
import styles from './sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/13510169?v=4" />

            <strong>Patrick Santos</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}

export default Sidebar