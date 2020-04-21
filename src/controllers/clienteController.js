const conn = require('../database/connection');

module.exports = {
    async salvarCliente(req, res){
        const {nome, tipoCliente, cpfCnpj, dataNascimento, telefoneFixo, 
        telefoneWhatsApp, telefoneContato, email, nResidencia, idCep,
        complemento, dataCadastro, dataAlteracao, idUsuario} = req.body;
    

    const [id] = await conn('cliente').insert({
        nome, tipoCliente, cpfCnpj, dataNascimento, telefoneFixo, 
        telefoneWhatsApp, telefoneContato, email, nResidencia, idCep, 
        complemento, dataCadastro, dataAlteracao, idUsuario

    });
    return res.json("Cliente cadastrado com sucesso! " + id );
},

    async pesquisarCliente(req, res){
        const clientes = await conn('cliente').select('*');
        return res.json(clientes);
    },

    async deletarCliente(req, res){
        const { id } = req.params;

        const idCliente = await conn('cliente')
        .select('id')
        .where('id', id)
        .first();

        if(idCliente != undefined){
            await conn('cliente').where('id',id).delete();

            return res.json("Cliente deletado com sucesso!");
        }else{
            return res.json("Cliente não localizado!");
        }

    }
}