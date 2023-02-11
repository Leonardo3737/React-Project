import { parsePath } from 'react-router-dom'
import style from './AboutProject/AboutProject.module.css'
import NavBar from './layout/NavBar'

function AboutProject() {
    return (
        <div className={style.body}>
            <NavBar props={parsePath} />
            <div className={style.box}>
                <h2>Oque é o My Anotations?</h2>
                <div className={style.content}>
                    <p>É uma plataforma onde você pode escrever</p>
                    <p>anotações e armazenar na nuvem.</p>
                </div>
                <div className={style.footer}>
                    <p>Criado e desenvolvido por: Leonardo Vinicius Silva Batista</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject