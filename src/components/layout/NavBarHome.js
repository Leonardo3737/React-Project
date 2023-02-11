import style from './NavBar/navBarHome.module.css'
import { Link } from 'react-router-dom'

function NavBarHome() {
    return (
        <div className={style.navBar}>
            <h1 className={style.link}>MY ANOTATIONS</h1>
            <div className={style.left}>
                <Link className={style.logOut} to={'/'}>Sair</Link>
            </div>
        </div>
    )
}

export default NavBarHome