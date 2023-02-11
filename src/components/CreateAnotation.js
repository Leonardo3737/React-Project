import style from './Home/home.module.css'
import Editor from './layout/Editor'
import NavBarHome from './layout/NavBarHome'
import NavBarLeft from './layout/NavBarLeft'
import { useLocation } from 'react-router-dom'

function CreateAnotation() {
    const location = useLocation()
    
    if (!location.state) {
        return(<div className={style.body}>Not Found</div>)
    }
    
    let id = { id: location.state.id }
    
    return (
        <div className={style.body}>
            <NavBarHome />
            <div className={style.main}>
                <NavBarLeft id={id.id} />
                <div className={style.content}>
                    <Editor id={id.id}/>
                </div>
            </div>
        </div>
    )
}

export default CreateAnotation