import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Senha from "./pages/Senha";
import Home from "./pages/Home";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> }></Route>
                <Route path="/cadastro" element={ <Cadastro /> }></Route>
                <Route path="/perfil" element={ <Perfil /> }></Route>
                <Route path="/senha" element={ <Senha /> }></Route>
                <Route path="/home" element={ <Home /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
