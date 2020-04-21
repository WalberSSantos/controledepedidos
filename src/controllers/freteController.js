const conn = require('../database/connection');

module.exports = {
    async salvarFrete(req, res) {
       const {descricao, valor, dataPrevisao,
        dataEntrega, formaPagamento, idUsuario} = req.body;

        try{

            const [id] = await conn('frete').insert({
                descricao, valor, dataPrevisao,
                dataEntrega, formaPagamento, idUsuario
            });
            return res.json("Frete cadastrado com sucesso! " + id);
        }catch (err){
            return res.send('Erro ao tentar cadastrar! ' + err);
        }

    },

    async pesquisarFrete(req, res){
        try{
            const frete = await conn('frete').select('*');
            return res.json(frete);
        }catch (err){
            return res.send('Erro ao tentar cadastrar! ' + err);
        }
    },

    async deletarFrete(req, res){
        const { id } = req.params;

        try{
            const idFrete = await conn('frete')
            .select('id')
            .where('id', id)
            .first();

            if(idFrete != undefined){
                await conn('frete').where('id',id).delete();

                return res.json("Frete deletado com sucesso!");
            }else{
                return res.json("Frete não localizado!");
            }
        }catch(err){
            return res.send('Erro ao tentar deletar! ' + err);
        }
    }
}