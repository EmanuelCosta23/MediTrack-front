import styles from "./Form.module.css";

export default function Form({titulo, children}) {
    return (
        <div className={styles.form}>
            <h1>{titulo}</h1>
            <form action="">
               {children} 
            </form>
        </div>
    )
}
