import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";


export default function Search() {
    return(
        <div className={styles.conteudo}>
            <IoIosSearch className={styles.iconePesquisa}/>
            <input type="text" placeholder="procure um remédio..." className={styles.inputPesquisa}/>
        </div>
    )
}
