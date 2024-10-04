import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Senha from "./pages/Senha";
import Home from "./pages/Home";
import RemediosSalvos from "./pages/RemediosSalvos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/senha" element={<Senha />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/remedios-salvos" element={<RemediosSalvos />}/>
            </Routes>
        </BrowserRouter>
    )
}
