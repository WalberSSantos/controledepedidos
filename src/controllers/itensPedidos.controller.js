const conn = require('../database/connection');

module.exports = {
    async salvarItensDoPedido(req, res){
        const {idPedido, idProduto, quantidade, valorUnit} = req.body;
        try{

            await conn('itensPedido').insert({
                idPedido, idProduto, quantidade, valorUnit
            })
            return res.json("Item salvo com sucesso!");
        }catch (err){
            return res.send('Erro ao tentar deletar usuário! ' + err); 
        }
    },
    async pesquisarItem(req, res){
        const itensPedido = await conn('itensPedido')
        .select();
        return res.json(itensPedido);
    }
}