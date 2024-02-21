import styles from '../../styles/anotations/styles.module.css'
import { useEffect, useState } from "react"
import { MdOutlineDelete } from 'react-icons/md'

function MyAnotations(Id) {
    const anotations = []
    const [Anotations, setAnotations] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/anotations/', {
            method: 'GET',
            headers: {
                'Content-Type': 'apllication-json'
            }
        })
            .then(res => res.json())
            .then(res => {
                let count = 0
                res.map(e => {
                    if (e.userId === Id.id) {
                        anotations[count] = e
                        count++
                    }
                    setAnotations(anotations)
                })
            })
            .catch(err => console.log(err))
    }, [])

    function deleteAnotation(id) {
        fetch(`http://localhost:8080/anotations/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application-json'
            }
        })
            .then(() => window.location.reload(false))
            .catch(err => console.log(err))
    }

    return (
        <div className='body'>
            {Anotations.length === 0 ? (
                <h3 className={styles.notAnotations}>vc não tem anotações</h3>
            ) : Anotations.map((anotation, key) => {
                return (
                    <div key={key} className={styles.anotationBox}>
                        <div className={styles.titleBox}>
                            {anotation.anotation.title}
                            <button className={styles.button} onClick={() => deleteAnotation(anotation.id)}>
                                <MdOutlineDelete className={styles.iconDelete} />
                            </button>
                        </div>
                        <div className={styles.contentBox}>
                            {anotation.anotation.content}
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default MyAnotations