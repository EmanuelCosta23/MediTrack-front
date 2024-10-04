import styles from "./Home.module.css"
import HeaderLogin from "../../components/HeaderLogin"
import { GiRemedy } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function Home() {
    return(
      <div className={styles.home}>
        <HeaderLogin/>
        <div className={styles.conteudo}>

          <div className={styles.linha1}>
            <h2>Otavio Adamis</h2>
          </div>

          <div className={styles.linha2}>
            <div className={styles.conteudo1}>
              <GiRemedy className={styles.iconePesquisa}/>
              <input type="text" placeholder="procure um remédio..." className={styles.inputPesquisa}/>
            </div>
            <div className={styles.conteudo1}>
              <BsTelephone className={styles.iconePesquisa}/>
              <input type="text" placeholder="fale com o suporte" className={styles.inputPesquisa}/>
            </div>
          </div>

          <div className={styles.linha3}>
            <Link to="/remedios-salvos" className={styles.link}>
              <div className={styles.conteudo2}>
                <GiRemedy className={styles.icone2}/>
                <p>Meus salvos</p>
              </div>
            </Link>
            <Link to="/perfil" className={styles.link}>
              <div className={styles.conteudo3}>
                <MdOutlineEdit className={styles.icone2}/>
                <p>Editar perfil</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    )
}
