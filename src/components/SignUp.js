import style from "./Sign/signStyle.module.css"
import Input from "./layout/Input.js"
import NavBarSignUp from "./layout/navBarSignUp"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri'

function SingUp() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  class newAccount {
    constructor(account) {
      this.account = account
    }
    async #verifyAccount() {
      if (Object.keys(this.account).length !== 4) {
        alert('Preencha todos os campos')
        return false
      }

      if (this.account.password !== this.account.confirmPassword) {
        alert('As senhas não correspondem')
        return false
      }

      try {
        const rawData = await fetch('http://localhost:8080/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const usersFromDB = await rawData.json()
        const alreadyInUse = usersFromDB.find(userFromDB => userFromDB.email === this.account.email)
        if (!!alreadyInUse) {
          alert('Este Email ja esta em uso')
        }
        return !alreadyInUse
      } catch (err) {
        console.log({ err })
      }
      return

    }

    async postAccount() {
      if (await this.#verifyAccount()) {
        const promise = new Promise((res, rej) => {
          fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.account),
          })
            .then(() => {
              res(true)
            })
            .catch(err => rej(err))
        })
        try {
          await Promise.all([promise])
          navigate('/SignIn', { state: { message: 'Conta criada com sucesso' } })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function CreateAccount(e) {
    e.preventDefault()
    const Account = new newAccount(user)
    Account.postAccount()
  }

  return (
    <div className={style.body}>
      <NavBarSignUp />
      <form
        onSubmit={CreateAccount}
        className={style.formSingUp}>
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
          placeholder="Confirmar senha"
          handleOnChange={handleChange}
          value={user.confirmPassword ? user.confirmPassword : ''} />
        <button
          type="submit"
          className={style.button}>Criar conta</button>
      </form>
    </div>
  )
}

export default SingUp