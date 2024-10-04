import {Link} from 'react-router-dom'
import styles from "./Login.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import logo from "../../assets/logo.png"


export default function Login() {
    return(
      <div className={styles.login}>
        <Header/>
        <div className={styles.conteudo}>
          <Form>
            <div className={styles.titulo}>
              <img src={logo} className={styles.logo}/>
              <h1><span>Medi</span>Track</h1>
            </div>
            <Input 
              type="text" 
              text="E-mail" 
              placeholder="digite seu e-mail" 
              name="email"
            />
            <div>
              <Input 
                type="password" 
                text="Senha" 
                placeholder="digite sua senha" 
                name="senha"
              />
              <Link to="/senha" className={styles.link1}>Recupere sua senha</Link>
            </div>
            <Button text="Acessar"/>
            <div className={styles.link2}>
              <Link to="/cadastro">Cadastre sua conta</Link>
            </div>
          </Form>
        </div>
      </div>
    )
}
