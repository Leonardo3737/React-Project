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

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function verifyAccount(e) {
        e.preventDefault()
        if (Object.keys(user).length !== 4) {
            alert('Preencha todos os campos')
            return
        }

        if (user.password !== user.confirmPassword) {
            alert('As senhas não correspondem')
            return
        }

        fetch('http://localhost:8080/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                let param = true
                res.forEach((users, index) => {
                    if (users.email === user.email) {
                        param = false
                    }
                });
                if (param) {
                    postAccount(user)
                } else {
                    alert('Este Email ja esta em uso')
                }
            })
            .catch(err => console.log(err))
    }

    function postAccount(user) {
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(() => {
                navigate('/SignIn', { state: { message: 'Conta criada com sucesso' } })
            })
            .catch(err => console.log(err))
    }


    return (
        <div className={style.body}>
            <NavBarSignUp />
            <form
                onSubmit={verifyAccount}
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