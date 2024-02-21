import styles from '../../styles/aboutProject/styles.module.css'
import NavBar from '../../components/NavBar'

function AboutProject() {
  return (
    <div className={styles.body}>
      <NavBar screen={'about'} />
      <div className={styles.box}>
        <h2>Oque é o My Anotations?</h2>
        <div className={styles.content}>
          <p>É uma plataforma onde você pode escrever</p>
          <p>anotações e armazenar na nuvem.</p>
        </div>
        <div className={styles.footer}>
          <p>Criado e desenvolvido por: Leonardo Vinicius Silva Batista</p>
        </div>
      </div>
    </div>
  )
}

export default AboutProject