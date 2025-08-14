import { Link } from "react-router-dom";

export default function Piaui() {
    return(
        <div>
            <h1>Seja Bem-Vido ao Píaui</h1>

            <p>
                <img src="/PI.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}