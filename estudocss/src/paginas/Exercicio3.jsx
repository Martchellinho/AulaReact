export default function Exercicio3()
{
    const titulo ={
        color :"red",
        backgroundColor : "yellow",
        textAlign : "center",
        padding : "10px"
    };
    return (
        <div>
          <h2 style={titulo}>Exemplo de Estilod em Objeto</h2>

          <p>
             Esse foi um exemplo de estilo em linha, mas ultilizando
             uma variavel objeto para armezenar os estilos.
          </p>
        </div>
    );
}