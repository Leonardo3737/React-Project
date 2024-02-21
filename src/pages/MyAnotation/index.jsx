import { useLocation } from 'react-router-dom'
import styles from '../../styles/home/styles.module.css'
import NavBarLeft from '../../components/NavBarLeft'
import Anotations from '../../components/Anotations'
import NavBar from '../../components/NavBar'

function MyAnotations() {
  const location = useLocation()
  if (!location.state) {
    return (
      <div className='body'>Not Found</div>
    )
  }

  let id = { id: location.state.id }

  return (
    <div className={styles.body}>
      <NavBar screen={'home'} />
      <div className={styles.main}>
        <NavBarLeft id={id.id} />
        <div className={styles.content}>
          <Anotations id={id.id} />
        </div>
      </div>
    </div>
  )
}

export default MyAnotations