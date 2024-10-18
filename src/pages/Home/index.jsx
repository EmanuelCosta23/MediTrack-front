import styles from "./Home.module.css"
import HeaderLogin from "./../../components/HeaderLogin"

export default function Home() {
    return(
      <div className={styles.home}>
        <HeaderLogin/>
        <div className={styles.conteudo}>
          <h1>Home 2</h1>
        </div>
      </div>
    )
}
