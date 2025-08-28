import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo1() {

    const[nome, setNome] = useState("Marcelo");
    const[idade, setidade] = useState("18");
    const[resultado, setResultado] = useState(null);

    function calcular()
    {
        let dias = Number (idade) * 365;

        setResultado("Olá " + nome + ", voce já viveu " + dias + " dias.");
    }

    function limpar()
    {
        setNome("");
        setIdade("");
        setResultado("");
    }

    return(
        <div>
            <h1>Exemplo1</h1>

            <div className="container">
            <from>
                <p>
                    Digite o nome do Aluno <br />
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </p>

                <p>
                    Digite a idade do Aluno <br />
                    <input type="text" value={idade} onChange={(e) => setidade(e.target.value)} />
                </p>

                <p>
                    <input type ="button" value="Exemplo1" onClick={calcular} />
                    <input type ="button" value="Limpar" onClick={() => { setNome(""); setidade(0); setResultado}}/>
                </p>

                <p>
                    <b>Resuldados:</b> <br />
                    Nome: {nome} <br />
                    Idade: {idade}
                </p>

                <p>
                    {resultado}
                </p>

                <p>
                
                </p>
            </from>

        </div>
        </div>
    );
}