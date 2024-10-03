import styles from "./Button.module.css";

export default function Button({botao}) {
    return (
        <button type="submit" className={styles.button}>{botao}</button>
    )
}
