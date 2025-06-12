export default function Exercicio4({ cor })

{
    const borda = {
        border: " 2px solid " + cor,
        textAlign: "center",
        peddign: "10px"
    };
    return (
        <div>
            <h2 style={ borda }>Exercicio 4 - Estilos CSS no React</h2>
            <p style={{color : cor}}>esse paragrafo eh teste</p>
        </div>
    )
}