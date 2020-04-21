const conn = require('../database/connection');

module.exports = {
    async salvarProduto(req, res){

        
        const { descricao, valorDeCusto, valorDeVenda,
        undDeMedida, qtEstoque, dataCadastro,
        dataAlteracao, idUsuario } = req.body;
        
        try{
            const [id] = await conn('produto').insert({
                descricao, valorDeCusto, valorDeVenda,
                undDeMedida, qtEstoque, dataCadastro,
                dataAlteracao, idUsuario 
            });
            
            return res.json("Produto cadastrado com sucesso! " + id);
            
        } catch (err){
           return res.send('Erro ao tentar cadastrar! ' + err);
        }
        
    },


    async pesquisarProduto(req, res){
        const produtos = await conn('produto').select('*');
        return res.json(produtos);
    },

    async deletarProduto(req, res){
        const {id} = req.params;
        
        const idProduto = await conn('produto')
        .select('id')
        .where('id', id)
        .first();
 
        if(idProduto != undefined){
            await conn('produto')
            .where('id', id)
            .delete();
            return res.json("Pruduto deletado com sucesso!");
        }else{
            return res.json("Produto não localizado!")
        }
    }
}