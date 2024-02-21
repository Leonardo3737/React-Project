import styles from '../../styles/sign/styles.module.css'
import Input from "../../components/Input/index.jsx"
import Message from '../../components/Message/index.jsx'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import NavBar from '../../components/NavBar/index.jsx'
import SignInApi from '../../services/signIn/index.js'

function SignIn() {
  const location = useLocation()
  const navigate = useNavigate()
  const signIn = new SignInApi()
  let message
  const [login, setLogin] = useState({})

  if (location.state) {
    message = location.state.message
  }

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    const verifyLogin = await signIn.verifySign(login)
    if(verifyLogin === 'err'){
      alert('não foi possivel fazer o login')
      return
    }
    if (verifyLogin) {
      navigate('/MyAnotations', {
        state: {
          id: verifyLogin.id
        }
      })
    } else {
      alert('email ou senha incorreto')
    }
  }

  return (
    <div className={styles.body}>
      <NavBar screen={'signIn'} />
      <form
        onSubmit={submit}
        className={styles.formSignIn}>
        {message && <Message type="success" text={message} />}
        <Input
          svg={<MdEmail />}
          type="email"
          name="email"
          placeholder="Email"
          handleOnChange={handleChange}
          value={login.email ? login.email : ''} />
        <Input
          svg={<RiLockPasswordLine />}
          type="password"
          name="password"
          placeholder="Senha"
          handleOnChange={handleChange}
          value={login.password ? login.password : ''} />
        <button
          type="submit"
          className={styles.button}>entrar</button>
      </form>
    </div>
  )
}

export default SignIn