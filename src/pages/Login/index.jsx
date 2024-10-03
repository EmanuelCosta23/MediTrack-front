import {Link} from 'react-router-dom'
import styles from "./Login.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Login() {
    return(
      <div className={styles.login}>
        <Header/>
        <div className={styles.conteudo}>
          <Form titulo="MediTrack">
            <Input 
              type="text" 
              text="E-mail" 
              placeholder="digite seu e-mail" 
              name="email"/>
            <div>
              <Input 
                type="password" 
                text="Senha" 
                placeholder="digite sua senha" 
                name="senha"/>
              <Link to="/senha" className={styles.link1}>Recupere sua senha</Link>
            </div> 
            <Button botao="Acessar" />
            <div className={styles.link2}>
              <Link to="/cadastro">Cadastre sua conta</Link>
            </div>
          </Form>
        </div>
      </div>
    )
}
