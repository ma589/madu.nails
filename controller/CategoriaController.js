const express = require('express');

/** CONFIGURAÇÃO DAS ROTAS DE CATEGORIA **/
const router = express.Router();

//ROTAS DE CRUD DE CATEGORIAS
router.get('/testeget', (req, res)=>{
    //console.log('TESTE DE ROTA GET DE CATEGORIAS');
    console.log('A REQUISIÇÃO PASSOU PELA CATEGORIA CONTROLLER')
    res.send('TESTE DE ROTA GET DE CATEGORIAS');
});
router.post('/testepost', (req, res)=>{
    console.log('TESTE DE ROTA POST DE CATEGORIAS');
    res.send('TESTE DE ROTA POST DE CATEGORIAS');
});

router.put('/testeput', (req, res)=>{});
    //console.log('TESTE DE ROTA GET DE CATEGORIAS');
    //res.send('TESTE DE ROTA GET DE CATEGORIAS');

router.delete('/testedelete', (req, res)=>{});
    //console.log('TESTE DE ROTA GET DE CATEGORIAS');
    //res.send('TESTE DE ROTA GET DE CATEGORIAS');

    module.exports = router;



