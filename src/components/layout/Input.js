import style from '../Sign/signStyle.module.css'

function Input({ svg, type, name, placeholder, handleOnChange, value }) {
    return (
        <div className={style.boxInput}>
            {svg}
            <input
                type={type}
                className={style.input}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} />
        </div>
    )
}

export default Input