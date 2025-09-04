import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";
import Exercicio3 from "./Paginas/Exercicio3";
import Exercicio4 from "./Paginas/Exercicio4";
import Exercicio5 from "./Paginas/Exercicio5";
import "./Paginas/estilo.css";


export default function App()
{
    return (
        <div>
            <BrowserRouter>
             <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/Exemplo1" element = {<Exemplo1 />} />
                <Route path="/Exemplo2" element = {<Exemplo2 />} />

                <Route path="/Exercicio1" element = {<Exercicio1 />} />
                <Route path="/Exercicio2" element = {<Exercicio2 />} />
                <Route path="/Exercicio3" element = {<Exercicio3 />} />
                <Route path="/Exercicio4" element = {<Exercicio4 />} />
                <Route path="/Exercicio5" element = {<Exercicio5 />} />
        
              </Routes>
            </BrowserRouter>
        </div> 
    );
}             