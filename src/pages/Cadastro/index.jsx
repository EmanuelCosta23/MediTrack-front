import styles from "./Cadastro.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

export default function Cadastro(props) {
    const navigate = useNavigate();

    const [nomeCompleto, setNomeCompleto] = useState(props?.value ?? '');
    const [cpf, setCpf] = useState(props?.value ?? '');
    const [email, setEmail] = useState(props?.value ?? '');
    const [senha, setSenha] = useState(props?.value ?? '');
    const [dataNascimento, setDataNascimento] = useState(props?.value ?? '');

    const fazerCadastro = event => {
        event.preventDefault();
        
        const credencial = {
          "nomeCompleto": nomeCompleto,
          "cpf": cpf,
          "email": email,
          "senha": senha,
          "dataNascimento": dataNascimento
        }
    
        axios.post("http://localhost:8080/api/usuario/cadastro", credencial)
          .then(res => {
            console.log(res.data);
            navigate("/home", { replace: true });
          })
      };

    return(
        <div className={styles.cadastro}>
            <Header/>
            <div className={styles.conteudo}>
                <Form titulo="Cadastro">
                <Input 
                    type="text" 
                    text="Nome completo" 
                    placeholder="digite seu nome completo" 
                    name="nome"
                    onInput={e => setNomeCompleto(e.target.value)}
                    />
                <Input 
                    type="number" 
                    text="CPF" 
                    placeholder="digite seu CPF" 
                    name="cpf"
                    onInput={e => setCpf(e.target.value)}
                    />
                <Input 
                    type="email" 
                    text="E-mail" 
                    placeholder="digite seu e-mail" 
                    name="email"
                    onInput={e => setEmail(e.target.value)}
                    />
                <Input 
                    type="password" 
                    text="Senha" 
                    placeholder="digite sua senha" 
                    name="senha"
                    onInput={e => setSenha(e.target.value)}
                    />
                <Input 
                    type="date" 
                    text="Data de nascimento" 
                    placeholder="digite sua data de nascimento" 
                    name="data"
                    onInput={e => setDataNascimento(e.target.value)}
                    />
                <Button text="Cadastrar" onClick={fazerCadastro}/>
                </Form>
            </div>
        </div>
    )
}
