import styles from '../../styles/sign/styles.module.css'
import Input from "../../components/Input/index.jsx"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri'
import NavBar from '../../components/NavBar/index.jsx'
import SignUpApi from '../../services/signUp/index.js'

function SingUp() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [placeHolderPassWord, setPlaceHolderPassWord] = useState('Confirmar senha')
  

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function CreateAccount(e) {
    e.preventDefault()
    if (Object.keys(user).length !== 4) {
      alert('Preencha todos os campos')
      return
    }
    if(user.password !== user.confirmPassword){
      setUser({ ...user, confirmPassword: '' })
      setPlaceHolderPassWord('As senhas não correspondem')
      return
    }
    const Account = new SignUpApi(user)
    const create = await Account.postAccount()
    if(create){
      navigate('/SignIn', { state: { message: 'Conta criada com sucesso' } })
    } else {
      alert('Não foi possivel criar a conta')
    }
  }

  return (
    <div className={styles.body}>
      <NavBar screen={'signUp'}/>
      <form
        onSubmit={CreateAccount}
        className={styles.formSingUp}>
        <Input
          svg={<BsFillPersonFill />}
          type="text"
          name="name"
          placeholder="Nome completo"
          handleOnChange={handleChange}
          value={user.name ? user.name : ''} />
        <Input
          svg={<MdEmail />}
          type="email"
          name="email"
          placeholder="Email"
          handleOnChange={handleChange}
          value={user.email ? user.email : ''} />
        <Input
          svg={<RiLockPasswordLine />}
          type="password"
          name="password"
          placeholder="Senha"
          handleOnChange={handleChange}
          value={user.password ? user.password : ''} />
        <Input
          svg={<RiLockPasswordFill />}
          type="password"
          name="confirmPassword"
          placeholder={placeHolderPassWord}
          handleOnChange={handleChange}
          value={user.confirmPassword ? user.confirmPassword : ''} />
        <button
          type="submit"
          className={styles.button}>Criar conta</button>
      </form>
    </div>
  )
}

export default SingUp