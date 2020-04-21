const express = require('express');


const usuarioController = require('./controllers/usuarioController');
const clienteController = require('./controllers/clienteController');
const cepController = require('./controllers/cepController');
const produtoController = require('./controllers/produtoController');
const movFinanceira = require('./controllers/movFinanceiraController');
const frete = require('./controllers/freteController');
const pedido = require('./controllers/pedidoController');
const itensDoPedido = require('./controllers/itensPedidosControllers');
const parcelas = require('./controllers/parcelasControllers');

const routes = express.Router();



//Controllers USUÁRIO
routes.post('/usuario', usuarioController.salvarUsuario);
routes.get('/usuario', usuarioController.pesquisarUsuario);
routes.delete('/usuario/:id', usuarioController.deleteUsuario);


//Controllers CLIENTES
routes.post('/cliente',clienteController.salvarCliente);
routes.get('/cliente', clienteController.pesquisarCliente);
routes.delete('/cliente/:id', clienteController.deletarCliente);

//Controllers CEPS
routes.post('/cep', cepController.salvarCEP);
routes.get('/cep', cepController.pesquisaCEP);
routes.delete('/cep/:cep', cepController.deletarCEP);

//Controllers Produtos
routes.post('/produto', produtoController.salvarProduto);
routes.get('/produto', produtoController.pesquisarProduto);
routes.delete('/produto/:id', produtoController.deletarProduto);

//Controllers Movimentação/caixa
routes.post('/movfinanceira', movFinanceira.salvarMovimentacao);
routes.get('/movfinanceira', movFinanceira.pesquisarMovimentacao);
routes.delete('/movfinanceira/:id', movFinanceira.deletarMovimentacao);

//Controllers Frete
routes.post('/frete', frete.salvarFrete);
routes.get('/frete', frete.pesquisarFrete);
routes.delete('/frete/:id', frete.deletarFrete);


//Controllers Pedido
routes.post('/pedido', pedido.salvarPedido);
routes.get('/pedido', pedido.pesquisaPedidos);

//Controllers itensPedido
routes.post('/itenspedido', itensDoPedido.salvarItensDoPedido);
routes.get('/itenspedido', itensDoPedido.pesquisarItem);

//Controllers Parcelas
routes.post('/parcelas', parcelas.cadastrarParcela);
routes.get('/parcelas', parcelas.pesquisarParcela);

module.exports = routes;