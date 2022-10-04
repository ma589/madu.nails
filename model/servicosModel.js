/* IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');

/* IMPORT DA CONEXÃO */
const connection = require('../database/database');

/*
CRIAÇÃO DO MODELO DA TABELA CATEGORIA
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA - STRING
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/
const servicos = connection.define(
    'TB_SERVICOS',
    {
        NOME_SERVICO:{
            type: Sequelize.STRING(100),
            allowNull: false
        },

        VL_SERVICO:{
            type: Sequelize.DECIMAL(8,2),
            allowNull: true
        }
    }
);

/*Executar a criação da tabela no Banco de Dados*/
//servicos.sync({force:true});

module.exports = servicos;