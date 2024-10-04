import styles from "./RemediosSalvos.module.css"
import HeaderLogin from "../../components/HeaderLogin"
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";

export default function Home() {
    return(
      <div className={styles.remediosSalvos}>
        <HeaderLogin/>
        <div className={styles.conteudo}>
            <Link to="/home">
                    <IoArrowBackSharp className={styles.backButton} />
            </Link>
            <h1>Remédios Salvos</h1>
        </div>
      </div>
    )
}
