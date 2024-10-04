import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import styles from "./Login.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import axios from 'axios'

export default function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState(props?.value ?? '');
  const [senha, setSenha] = useState(props?.value ?? '');

  const fazerLogin = event => {
    event.preventDefault();
    const credencial = {
      "email": email,
      "senha": senha
    }

    axios.post("http://localhost:8080/api/usuario/login", credencial)
      .then(res => {
        console.log(res.data);
        navigate("/home", { replace: true });
      })
  };

  return (
    <div className={styles.login}>
      <Header />
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
            onInput={e => setEmail(e.target.value)}
          />
          <div>
            <Input
              type="password"
              text="Senha"
              placeholder="digite sua senha"
              name="senha"
              onInput={e => setSenha(e.target.value)}
            />
            <Link to="/senha" className={styles.link1}>Recupere sua senha</Link>
          </div>
          <Button text="Acessar" onClick={fazerLogin} />
          <div className={styles.link2}>
            <Link to="/cadastro">Cadastre sua conta</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
