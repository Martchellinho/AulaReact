import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio3()
  {
    const [valor, setValor] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [resultado, setResultado] = useState('');
  

  function calcular() {
    setResultado(
      <div>
        O valor da parcela atualizado {(Number(valor) + (valor *(taxa **2 / 100)* tempo)) }

      </div>
    );
    }



  return (
    <div>
      <h1>Exercicio 3</h1>

      <div className="container">
      <form onSubmit={e => e.preventDefault()}>
        <p>
            Digite o valor da prestação: <br />
            <input type="number" value={valor} onChange={e => setValor(e.target.value)} />
          </p>

          <p>
            Digite a taxa de Juros: <br />
            <input type="number" value={taxa} onChange={e => setTaxa(e.target.value)} />
          </p>

          <p>
            Digite o Tempo (em dias) de atraso: <br />
            <input type="number" value={tempo} onChange={e => setTempo(e.target.value)} />
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