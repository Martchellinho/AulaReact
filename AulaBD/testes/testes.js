function consultar()
{
    fetch("http://localhost:3001/alunos")
    .then(res => res.json())
    .then(data => {
        console.log("Alunos", data);
        document.getElementById("resultados").innerHTML =  JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById("resultados").innerHTML = "Erro ao obter dados da API !";
    });

}

function consultarPorCodigo(codigo)
{
    fetch(`http://localhost:3001/alunos/${codigo}`)
    .then(res => res.json())
    .then(data => {
        console.log("Aluno:",data);
        document.getElementById("resultados").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById("resultados").innerHTML = "Erro ao obter dados da API !";
    });

}

function cadastrar()
{
   const alunos ={
       nome  : "Marcelo",
       cidade: "Mococa",
       estado: "SP"
   };

   fetch("http://localhost:3001/alunos", {
       method: "POST",
       headers: {
           "Contenr-Type": "applicarion/json"
       },
       body: JSON.stringify(aluno)
   })
   .then(res => res.json())
   .then(data => {
       document.getElementById("resultados").innerHTML = data.message || data.error;
   })
   .catch(err => {
       document.getElementById("resultados").innerHTML = "Erro ao obter dados da API !";
   }); 
}

function alterar(codigo)
{

}

function excluir(codigo)
{
    
}