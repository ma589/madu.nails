const express = require('express');
const servicos = require('../model/servicosModel');

/* IMPORT DA MODEL DE SERVICOS */
const servicosModel = require('../model/servicosModel');

/** CONFIGURAÇÃO DAS ROTAS DE SERVICOS **/
const router = express.Router();

//ROTAS DE CRUD DE SERVICOS

router.get('/ListarServico', (req, res)=>{
    //console.log('TESTE DE ROTA GET DE CATEGORIAS');
    //console.log('A REQUISIÇÃO PASSOU PELA CATEGORIA CONTROLLER');
   // res.send('TESTE DE ROTA GET DE CATEGORIAS');

   // LISTAR DADOS SEM CRITÉRIOS
   servicosModel.findAll()
        .then(
            (servicos)=>{
                return res.status(200).json(servicos);
            }
        ).catch(
            (erro)=>{
              return res.status(400).json({
                    erroStatus: true,
                    erroMenssagem: 'Houve um erro ao verificar o serviço.',
                    erroBancoDados: erro
                });
            }
        );
    
});

//LISTANDO OS DADOS COM CRITÉRIOS
router.get('/ListarServico/:id',(req, res)=>{

    let {id} = req.params;

    servicosModel.findByPk(id)
        .then(
            (servicos)=>{
                res.status(200).json(servicos);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao verificar o serviço.',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/InserirServico', (req, res)=>{
    //console.log('TESTE DE ROTA POST DE CATEGORIAS');
    //res.send('TESTE DE ROTA POST DE CATEGORIAS');

    // RECEBER OS DADOS 
   let {NOME_SERVICO, VL_SERVICO} = req.body;
   console.log (NOME_SERVICO, VL_SERVICO);
   //res.send ('Ok');

   //GRAVAR DADOS
   servicosModel.create(
    {NOME_SERVICO, VL_SERVICO}
   ).then(
    ()=>{
     return res.status(201).json({
        erroStatus: false,
        menssagemStatus: 'Serviço marcado com sucesso!'
      });
     }
    ).catch(
        (erro)=>{
          return res.status(400).json({
                erroStatus: true,
                erroMenssagem: 'Houve um erro ao marcar um serviço.',
                erroBancoDados: erro
            });
        }
    );


});

router.put('/AlterarServico', (req, res)=>{
    //console.log('TESTE DE ROTA PUT DE CATEGORIAS');
    //res.send('TESTE DE ROTA PUT DE CATEGORIAS');

    //RECEBENDO DADOS
    let {id, NOME_SERVICO, VL_SERVICO} = req.body;

    //ALTERANDO OS DADOS:
    servicosModel.update(
        {NOME_SERVICO, VL_SERVICO},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Serviço alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar o tipo de serviço.',
                        erroBancoDados: erro
                    });
        }
    );
});
   
router.delete('/DeletarServico/:id', (req, res)=>{
    //console.log('TESTE DE ROTA DELETE DE CATEGORIAS');
    //res.send('TESTE DE ROTA DELETE DE CATEGORIAS');

    let {id} = req.params;

   servicosModel.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Serviço desmarcado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao desmarcar o serviço.',
                        erroBancoDados: erro
                    });
        }
    );
});

    module.exports = router;



