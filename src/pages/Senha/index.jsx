import styles from "./Senha.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Senha() {
    return(
        <div className={styles.senha}>
            <Header/>
            <div className={styles.conteudo}>
                <Form titulo="Perdeu sua senha?">
                <p>Não se preocupe nos informe o seu e-mail cadastrado e aguarde o nosso contato nos próximos minutos.</p>
                <Input 
                    type="email" 
                    text="E-mail" 
                    placeholder="digite seu e-mail" 
                    name="email"/>
                <Button text="Enviar e-mail" />
                </Form>
            </div>
        </div>
    )
}
