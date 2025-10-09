const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const banco = mysql2.createConnection({
    host : "localhost",
    port : 3308,
    user : "root",
    password : "mysqlfatec",
    database : "aulabd"
});

banco.connect( (erro) => {
  
 if (erro)
 {
     console.log("Erro ao conectar ao Mysql:");
     console.log(erro);
 }
 else{
     console.log("conectado ao Mysql com sucesso !");
 }
});

app.listen( PORT, () => {
    console.log("Servidor rodando em http://localhost:" + PORT);
} );

app.get("/alunos", (req, res) => {
   const sql = "SLECT * FROM alunos";

   banco.query(sql, (erro, resultado) => {
     if(erro) {
         console.log(erro);
         return res.status(500).json({ error: "Erro ao consultar alunos"});
     } else {
         console.log(resultado);
         return res.status(200).json(resultado);
     }

   });
});

app.get("/alunos/codigo", (req, res) => {
    const sql = "SLECT * FROM alunos WHERE codigo = ?";

    banco.query(sql, [codigo], (erro, resultado) => {
      if(erro) {
          console.log(erro);
          return res.status(500).json({ error: "Erro ao consultar alunos"});
      } 
      if (resultados.lenth === 0) {
          console.log(resultado);
          return res.status(404).json([ message:"Aluno nao encontrado"]);
      }

      return res.status(200).json(resultados[0]);
 
    });
});