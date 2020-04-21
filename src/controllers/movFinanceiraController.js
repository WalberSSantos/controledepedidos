const conn = require('../database/connection');

module.exports = {
    async salvarMovimentacao(req, res){
        const { descricao, valor, tipoMovimentacao,
        dataCadastro, dataAlteracao, idUsuario } = req.body;
        
        const [id] = await conn('movFinanceira').insert({
            descricao, valor, tipoMovimentacao,
            dataCadastro, dataAlteracao, idUsuario 
        });
            return res.json("Movimentação salva com sucesso! " + id);
    },

    async pesquisarMovimentacao(req, res){
        const mov = await conn('movFinanceira').select('*');
        return res.json(mov);
    },

    async deletarMovimentacao(req, res){
        const { id } = req.params;

        const idMovimetacao = await conn('movFinanceira')
        .select('id')
        .where('id', id)
        .first();

        if(idMovimetacao != undefined){
            await conn('movFinanceira').where('id',id).delete();

            return res.json("Movimentação deletada com sucesso!");
        }else{
            return res.json("Movimentação não localizada!");
        }

    }
}