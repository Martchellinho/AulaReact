import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home"
import Acre from "./Paginas/Acre"
import Alagoas from "./Paginas/Alagoas"
import Amazonas from "./Paginas/Amazonas"
import Amapa from "./Paginas/Amapa"
import Bahia from "./Paginas/Bahia"
import Ceara from "./Paginas/Ceara"
import DistritoFederal from "./Paginas/DistritoFederal"
import EspiritoSanto from "./Paginas/EspiritoSanto"
import Goias from "./Paginas/Goias"
import Maranhao from "./Paginas/Maranhao"
import MinasGerais from "./Paginas/MinasGerais"
import MatoGrossoSul from "./Paginas/MatoGrossoSul"
import MatoGrosso from "./Paginas/MatoGrosso"
import Para from "./Paginas/Para"
import Paraiba from "./Paginas/Paraiba"
import Pernambuco from "./Paginas/Pernambuco"
import Piaui from "./Paginas/Piaui"
import Parana from "./Paginas/Parana"
import RioJaneiro from "./Paginas/RioJaneiro"
import RioGrandeNorte from "./Paginas/RioGrandeNorte"
import Rondonia from "./Paginas/Rondonia"
import Roraima from "./Paginas/Roraima"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import SantaCatarina from "./Paginas/SantaCatarina"
import Sergipe from "./Paginas/Sergipe"
import SaoPaulo from "./Paginas/SaoPaulo"
import Tocantins from "./Paginas/Tocantins"




export default function App()
{
    return (
        <div>
            <BrowserRouter>
             <Routes>

                 
                
                <Route path="/" element = {<Home />} />
                <Route path="/AC" element = {<Acre />} />
                <Route path="/AL" element = {<Alagoas />} />
                <Route path="/AM" element = {<Amazonas />} />
                <Route path="/AP" element = {<Amapa />} />
                <Route path="/BA" element = {<Bahia />} />
                <Route path="/CE" element = {<Ceara />} />
                <Route path="/DF" element = {<DistritoFederal />} />
                <Route path="/ES" element = {<EspiritoSanto />} />
                <Route path="/GO" element = {<Goias />} />
                <Route path="/MA" element = {<Maranhao />} />
                <Route path="/MG" element = {<MinasGerais />} />
                <Route path="/MG" element = {<MatoGrossoSul />} />
                <Route path="/MT" element = {<MatoGrosso />} />
                <Route path="/PA" element = {<Para />} />
                <Route path="/PB" element = {<Paraiba />} />
                <Route path="/PE" element = {<Pernambuco />} />
                <Route path="/PI" element = {<Piaui />} />
                <Route path="/PR" element = {<Parana />} />
                <Route path="/RJ" element = {<RioJaneiro />} />
                <Route path="/RN" element = {<RioGrandeNorte />} />
                <Route path="/RO" element = {<Rondonia />} />
                <Route path="/RR" element = {<Roraima />} />
                <Route path="/RS" element = {<RioGrandeSul />} />
                <Route path="/SC" element = {<SantaCatarina />} />
                <Route path="/SE" element = {<Sergipe />} />
                <Route path="/SP" element = {<SaoPaulo />} />
                <Route path="/TO" element = {<Tocantins />} />
               

             </Routes>
            </BrowserRouter>
            
        </div>
    );
}