const conn = require('../database/connection');

module.exports = {
    async salvarPedido(req, res) {
        const { nParcelas, valor, adiantamento, idFrete,
        corMaterial, obs, dataEntrega, dataCadastro, dataAlteracao,
        idCliente, idUsuario} = req.body;
        
        try{

            const [id] = await conn('pedido').insert({
                nParcelas, valor, adiantamento, idFrete,
                corMaterial, obs, dataEntrega, dataCadastro, dataAlteracao,
                idCliente, idUsuario
        });
            return res.json("Pedido cadastrado com sucesso! " + id);
        
        }catch (err){
            return res.send('Erro ao tentar cadastrar! ' + err);
        }
    },
    
    async pesquisaPedidos(req, res){
        const pedidos = await conn('pedido').select('*');      
        return res.json(pedidos);
    }
}