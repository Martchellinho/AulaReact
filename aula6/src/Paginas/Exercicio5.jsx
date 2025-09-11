import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio5()
  {
    const [lado, setLado] = useState(0);
    const [resultado, setResultado] = useState('');
  

  function calcular() {
    setResultado(
      <div>
        A area do triangulo é {lado * lado}
      </div>
    );
 }



  return (
    <div>
      <h1>Exercicio 5</h1>

      <div className="container">
      <form onSubmit={e => e.preventDefault()}>
        <p>
            Digite o valor da base: <br />
            <input type="number" value={lado} onChange={e => setLado(e.target.value)} />
          </p>

          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
     </div>
    </div>
  )
}