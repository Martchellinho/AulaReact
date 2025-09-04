import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
  {
    const [num, setNum] = useState(0);
    const [resultado, setResultado] = useState('');
  

  function calcular() {
    setResultado(
      <div>
        O quadrado do numero é  {Number (num) **2 } <br />
        O quadrado do numero é  {Number (num) **3 }
      </div>
    );
 }



  return (
    <div>
      <h1>Exercicio 1</h1>

      <div className="container">
      <form onSubmit={e => e.preventDefault()}>
        <p>
            Digite o número: <br />
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
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