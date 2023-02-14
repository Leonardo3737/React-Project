import style from "./Sign/signStyle.module.css"
import Input from "./layout/Input.js"
import Message from './layout/Message'
import NavBarSignIn from "./layout/NavBarSignIn"
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'

function SignIn() {
  const location = useLocation()
  const navigate = useNavigate()
  let message
  const [login, setLogin] = useState({})

  if (location.state) {
    message = location.state.message
  }

  class SignIn {
    constructor(login) {
      this.login = login
    }
    verifySign() {
      if (Object.keys(this.login).length !== 2) {
        alert('email ou senha incorreto')
        return
      }
      fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(loginFromDB => {
          const verifyLogin = loginFromDB.find(userFromDB =>
            userFromDB.email === this.login.email &&
            userFromDB.password === this.login.password
          )
          if (verifyLogin) {
            navigate('/MyAnotations', {
              state: {
                id: verifyLogin.id
              }
            })
          } else {
            alert('email ou senha incorreto')
          }
        })
    }
  }

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  function submit(e) {
    e.preventDefault()
    const signIn = new SignIn(login)
    signIn.verifySign()
  }

  return (
    <div className={style.body}>
      <NavBarSignIn />
      <form
        onSubmit={submit}
        className={style.formSignIn}>
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
          className={style.button}>entrar</button>
      </form>
    </div>
  )
}

export default SignIn