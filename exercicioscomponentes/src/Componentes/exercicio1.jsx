export default function Exercicio1({fah})
{
    let celsius = (Number(fah)-32)*5/9;

    return(
        <div>
            A conversão de {fah}F para Celsius é {celsius}
        </div>
    );
}