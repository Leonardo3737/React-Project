import styles from '../../styles/sign/styles.module.css'

function Input({ svg, type, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.boxInput}>
            {svg}
            <input
                type={type}
                className={styles.input}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} />
        </div>
    )
}

export default Input