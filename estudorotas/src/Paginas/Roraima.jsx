import { Link } from "react-router-dom";

export default function Roraima() {
    return(
        <div>
            <h1>Seja Bem-Vido ao Roraima</h1>

            <p>
                <img src="/RR.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}