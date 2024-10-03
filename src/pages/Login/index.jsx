import {Link, useNavigate} from 'react-router-dom'
import styles from "./Login.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import useAuth from "../../hooks/useAuth"

export default function Login() {

    const { signin } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
      if (!email | !senha) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = signin(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      navigate("/home");
    };

    return(
      <div className={styles.login}>
        <Header/>
        <div className={styles.conteudo}>
          <Form titulo="MediTrack">
            <Input 
              type="text" 
              text="E-mail" 
              placeholder="digite seu e-mail" 
              name="email"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <div>
              <Input 
                type="password" 
                text="Senha" 
                placeholder="digite sua senha" 
                name="senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
              <Link to="/senha" className={styles.link1}>Recupere sua senha</Link>
            </div>
            <div>{error}</div> 
            <Button text="Acessar" onClick={handleLogin}/>
            <div className={styles.link2}>
              <Link to="/cadastro">Cadastre sua conta</Link>
            </div>
          </Form>
        </div>
      </div>
    )
}
