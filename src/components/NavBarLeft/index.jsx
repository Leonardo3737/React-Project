import styles from '../../styles/home/styles.module.css'
import { useNavigate } from 'react-router-dom'

function NavBarLeft(id) {
    const navigate = useNavigate()

    function createAnotation() {
        navigate('/CreateAnotation', { state: id })
    }

    function myAnotations() {
        navigate('/MyAnotations', { state: id })
    }

    return (
        <div className={styles.navBar}>
            <button
              className={styles.button}
              onClick={myAnotations}>
                Minhas Anotações
            </button>
            <button
              className={styles.button}
              onClick={createAnotation}>
                Criar Nova Anotação
            </button>
        </div>
    )
}

export default NavBarLeft