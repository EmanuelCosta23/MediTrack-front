import {Link} from 'react-router-dom'
import styles from "./Home.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"

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
