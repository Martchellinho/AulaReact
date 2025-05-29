export default function exercicio9 ( { valor, juros, taxa})
{
    let montante = valor * (1 + (taxa * juros)) ;
    
    return (
        <div>
            capital pricipal {valor} 
            juros {juros} 
            tempo {taxa} 
            Montante {montante}.
        </div>
    )
}