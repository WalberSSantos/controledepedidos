const conn = require('../database/connection');

module.exports = {
    async cadastrarParcela(req, res){
        const {idPedido, nparcela, valor, valorJuros,
        dataPrevista, dataPagamento, idUsuario} = req.body
        
        await conn('parcela').insert({
        idPedido, nparcela, valor, valorJuros,
        dataPrevista, dataPagamento, idUsuario

        })
        return res.json("Parcela salva com sucesso!");
    },
    async pesquisarParcela(req, res){
        const parcelas = await conn('parcela').select('*');
        return res.json(parcelas);
    }
}
