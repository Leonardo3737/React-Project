import styles from '../../styles/navBar/styles.module.css'
import { Link } from 'react-router-dom'

function NavBar({ screen }) {
    return (
        <div className={styles.navBar}>
            {screen !== 'home' ? (
            <Link className={styles.link} to={'/'}>MY ANOTATIONS</Link>
            ) : (
                <h1 className={styles.link}>MY ANOTATIONS</h1>
            )}
            
            <div className={styles.left}>
                {screen === 'about' ? (
                    <>
                        <Link className={styles.createAccount} to={'/SignUp'}>Criar Conta</Link>
                        <Link className={styles.singIn} to={'/SignIn'}>Entrar</Link>
                    </>
                ) : screen === 'signIn' ? (
                    <Link className={styles.screenCreateAccount} to={'/SignUp'}>Criar Conta</Link>
                ) : screen === 'signUp' ? (
                    <Link className={styles.screenSingIn} to={'/SignIn'}>Entrar</Link>
                ) : (
                    <Link className={styles.logOut} to={'/'}>Sair</Link>
                )}
            </div>
        </div>
    )
}

export default NavBar