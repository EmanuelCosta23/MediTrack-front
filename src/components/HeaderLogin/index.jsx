import styles from "./HeaderLogin.module.css";
import logo from "../../assets/logo.png"
import { LuLogOut } from "react-icons/lu";
import Search from "../Search";

export default function HeaderLogin() {
    return (
       <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo}/>
                <span><span className={styles.medi}>Medi</span>Track</span>
            </div>
            <Search className={styles.pesquisa}/>
            <LuLogOut className={styles.logout}/>
       </header> 
    )
}
