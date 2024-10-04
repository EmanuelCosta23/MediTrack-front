import styles from "./Header.module.css";
import logo from "../../assets/logo.png"

export default function Header() {
    return (
       <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <span><span className={styles.medi}>Medi</span>Track</span>
       </header> 
    )
}
