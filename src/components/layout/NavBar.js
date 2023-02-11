import style from './NavBar/navBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className={style.navBar}>
            <Link className={style.link} to={'/'}>MY ANOTATIONS</Link>
            <div className={style.left}>
                <Link className={style.createAccount} to={'/SignUp'}>Criar Conta</Link>
                <Link className={style.singIn} to={'/SignIn'}>Entrar</Link>
            </div>
        </div>
    )
}

export default NavBar