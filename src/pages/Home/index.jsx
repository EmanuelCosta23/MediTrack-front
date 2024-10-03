import styles from "./Home.module.css"
import Header from "../../components/Header"

export default function Home() {
    return(
      <div className={styles.home}>
        <Header/>
        <div className={styles.conteudo}>
          <h1>Home</h1>
        </div>
      </div>
    )
}
