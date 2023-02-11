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
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    const [login, setLogin] = useState({})

    function handleChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    function verifySign(e) {
        e.preventDefault()

        if (Object.keys(login).length !== 2) {
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
            .then(res => {
                let user
                let verify = false
                res.forEach(users => {
                    if (users.email === login.email && users.password === login.password) {
                        verify = true
                        user = {
                            name: users.name,
                            email: users.email,
                            password: users.password,
                            id: users.id
                        }
                    }
                });
                if (verify) {
                    navigate('/MyAnotations', {
                        state: {
                            id: user.id
                        }
                    })
                } else {
                    alert('email ou senha incorreto')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <div className={style.body}>
            <NavBarSignIn />
            <form
                onSubmit={verifySign}
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