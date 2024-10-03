import styles from "./Perfil.module.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Perfil() {
    return(
        <div className={styles.perfil}>
            <Header/>
            <div className={styles.conteudo}>
                <Form titulo="Edite seus dados">
                <Input 
                    type="text" 
                    text="Nome completo" 
                    placeholder="digite seu nome completo" 
                    name="nome"/>
                <Input 
                    type="email" 
                    text="E-mail" 
                    placeholder="digite seu e-mail" 
                    name="email"/>
                <Input 
                    type="password" 
                    text="Senha" 
                    placeholder="digite sua senha" 
                    name="senha"/>
                <Input 
                    type="date" 
                    text="Data de nascimento" 
                    placeholder="digite sua data de nascimento" 
                    name="data"/>
                <Button botao="Salvar" />
                </Form>
            </div>
        </div>
    )
}
