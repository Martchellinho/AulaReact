export default function Exercicio3({valor,taxa,tempo})
{
    let ValorParcela = Number(valor) + (Number(valor) * (Number(taxa)*Number(taxa)/100)*Number(tempo));

    return(
        <div>
            <p>
            Valor: R$ {valor} <br />
            Taxa: {taxa}% <br />
            Tempo: {tempo} dias <br />
            Valor da parcela em atraso é {ValorParcela}
            </p>
        </div>
    );
}
