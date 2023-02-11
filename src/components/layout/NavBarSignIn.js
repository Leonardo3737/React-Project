import style from './NavBar/navBarSignIn.module.css'
import { Link } from 'react-router-dom'

function NavBarSignIn() {
    return (
        <div className={style.navBar}>
            <Link className={style.link} to={'/'}>MY ANOTATIONS</Link>
            <div className={style.left}>
                <Link className={style.createAccount} to={'/SignUp'}>Criar Conta</Link>
            </div>
        </div>
    )
}

export default NavBarSignIn