import styles from '../../styles/createAnotation/styles.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Editor({ id }) {
    const [anotation, setAnotation] = useState({})
    const navigate = useNavigate()

    function handleChange(e) {
        setAnotation({
            ...anotation,
            [e.target.name]: e.target.value
        })
    }

    function create(e) {
        e.preventDefault()

        if (anotation.title === undefined || anotation.content === undefined) {
            alert('preencha todos os campos')
            return
        }

        fetch(`http://localhost:8080/anotations/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id,
                anotation
            })
        })
            .then(res => {
                navigate('/MyAnotations', { state: { id: id } })
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={create} className={styles.form}>
            <input
                className={styles.title}
                placeholder="titulo"
                type="text"
                maxLength="24"
                name="title"
                onChange={handleChange}
                value={anotation.title ? anotation.title : ''} />
            <textarea
                className={styles.content}
                type="text"
                cols="10"
                rows="20"
                maxLength="900"
                name="content"
                onChange={handleChange}
                value={anotation.content ? anotation.content : ''} />

            <input
                className={styles.button}
                type="submit"
                value="salvar" />
        </form>
    )
}

export default Editor
