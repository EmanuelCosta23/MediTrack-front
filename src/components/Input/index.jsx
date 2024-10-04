import styles from "./Input.module.css";

export default function Input({ type, text, name, placeholder, onChange, onInput, value }) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                onInput={onInput}
                value={value}
            />
        </div>
    )
}
