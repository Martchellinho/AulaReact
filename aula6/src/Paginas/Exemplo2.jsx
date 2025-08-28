import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo2() {

    const[num1, setNum1] = useState(null);
    const[num2, setNum2] = useState(null);
    const[resultado, setResultado] = useState(null);

    function calcular()
    {
        let soma = Number (num1) + num2;

        setResultado("Olá " + nome + ", voce já viveu " + dias + " dias.");
    }

    function limpar()
    {
        setNum1("");
        setNum2("");
        setResultado("");
    }

    return(
        <div>
            <h1>Exemplo2</h1>

            <div className="container">
            <from>
                <p>
                    Digite o Numero 1: <br />
                    <input type="number" value={num1} />
                </p>

                <p>
                    Digite o Numero 2: <br />
                    <input type="number" value={num2} />
                </p>

                <p>
                    <input type ="button" value="Exemplo1" onClick={calcular} />
                    <input type ="button" value="Limpar" onClick={() => { setNome(""); setidade(0); setResultado}}/>
                </p>

                <p>
                    <b>Resuldados:</b> <br />
                    A Soma é: {soma} <br />
                    A Subtração é: {idade}
                    A multiplicação é
                    A Divisão é
                    A exponenciação é
                    O 
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