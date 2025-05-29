export default function Exercicio8( {peso, altura} )
{
    let imc = peso / altura * altura;

    return (
        <div>
            O valor do IMC será {imc}.
        </div>
    )
}