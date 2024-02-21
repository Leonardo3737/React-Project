import styles from '../../styles/home/styles.module.css'
import Editor from '../../components/Editor'
import NavBarLeft from '../../components/NavBarLeft'
import { useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar'

function CreateAnotation() {
  const location = useLocation()

  if (!location.state) {
    return (<div className='body'>Not Found</div>)
  }

  let id = { id: location.state.id }

  return (
    <div className={styles.body}>
      <NavBar screen={'home'} />
      <div className={styles.main}>
        <NavBarLeft id={id.id} />
        <div className={styles.content}>
          <Editor id={id.id} />
        </div>
      </div>
    </div>
  )
}

export default CreateAnotation