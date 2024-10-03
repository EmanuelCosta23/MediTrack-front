import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Senha from "./pages/Senha";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
    const {signed} = useAuth();
    return signed > 0 ? <Item /> : <Login/>;
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route exact path="/cadastro" element={<Cadastro />}/>
                    <Route path="/perfil" element={<Perfil />}/>
                    <Route path="/senha" element={<Senha />}/>
                    <Route exact path="/home" element={<Private Item={Home} />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}
