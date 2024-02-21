import styles from '../../styles/message/styles.module.css'
import { useState, useEffect } from 'react'

function Message({ type, text }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!text) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [text])

    return (
        <>
            {visible && (
                <p className={`${styles[type]} ${styles.message}`}>{text}</p>
            )}
        </>
    )
}

export default Message