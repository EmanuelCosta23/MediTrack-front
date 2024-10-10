import { useState } from 'react'
import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';


export default function Search() {
    const [remedio, setRemedio] = useState('');

    const buscarRemedio = event => {
        event.preventDefault();
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = {
            "remedio": remedio
          }
        console.log(data);
        axios.post("http://localhost:5000/api/busca/remedio/", data)
            .then(res => {
                console.log(res.data);
            })
    };
    return (
        <div className={styles.conteudo}>
            <form>
                <IoIosSearch className={styles.iconePesquisa} />
                <input
                    type="text"
                    placeholder="procure um remédio..."
                    className={styles.inputPesquisa}
                    onInput={e => setRemedio(e.target.value)}
                />
                <button type="submit" onClick={buscarRemedio} className={styles.buttonPesquisa}>
                    Pesquisar
                </button>
            </form>
        </div>
    )
}
