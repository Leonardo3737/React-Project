import style from '../Home/home.module.css'
import { useNavigate } from 'react-router-dom'

function NavBarLeft(id) {
    const navigate = useNavigate()

    function createAnotation() {
        navigate('/CreateAnotation', {state: id})
    }
    
    function myAnotations() {
        navigate('/MyAnotations', {state: id})
    }

    return (
        <div className={style.navBar}>
            <button
                className={style.button}
                onClick={createAnotation}>Criar Nova Anotação</button>
            <button
                className={style.button}
                onClick={myAnotations}>Minhas Anotações</button>
        </div>
    )
}

export default NavBarLeft