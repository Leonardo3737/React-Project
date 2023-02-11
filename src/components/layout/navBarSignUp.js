import style from './NavBar/navBarSignUp.module.css'
import { Link } from 'react-router-dom'

function NavBarSignUp() {
    return (
        <div className={style.navBar}>
            <Link className={style.link} to={'/'}>MY ANOTATIONS</Link>
            <div className={style.left}>
                <Link className={style.singIn} to={'/SignIn'}>Entrar</Link>
            </div>
        </div>
    )
}

export default NavBarSignUp