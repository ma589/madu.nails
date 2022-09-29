/* Importação do pacote express */
const express = require('express');

//IMPORTAÇÃO DO CONTROLLER DE CATEGORIA DE LIVROS
const categoriaController = require('./controller/CategoriaController');

/*Criação de uma Instancia executavel do express */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ROTAS DE CATEGORIA DE LIVROS
console.log('A REQUISIÇÃO PASSOU PELO INDEX');
app.use('/', categoriaController);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});

/*Importação da conexão com o banco de dados*/
// const connection = require('./database/database');

/*Importação das models*/
//const Livro = require('./model/Livro');
//const Categoria = require('./model/Categoria');

/*Importação das rotas*/
//Const categoriaController = require('./controller/CategoriaController');

//const livroController = require('./controller/LivroController');
//app.use('/', livroController);


// CONFIGURAÇÃO DE ROTAS
//const rotas = express.Router();

/* ROTA RAIZ DE VERBO HTTP GET: PARAMENTROS DE ROTAS(QUALQUER VERBO):
1 - NOME DA ROTA
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/

/*app.get('/', (req, res)=>{

    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('ROTA RAIZ DE VERBO HTTP GET!')
});

Posso criar mais de uma rota
app.get('/TESTE', (req, res)=>{
    console.log('ROTA TESTE DE VERBO HTTP GET!');
    res.send('ROTA TESTE DE VERBO HTTP GET!');
});*/


/* Criação de Servidor de requisições da aplicação parametros(PORTA3000) do listen
1 - PORTA LÓGICA QUE RECEBE AS REQUISIÇÕES
2 - CALLBACK - ARROW ANOMINA(OPCIONAL)
*/






