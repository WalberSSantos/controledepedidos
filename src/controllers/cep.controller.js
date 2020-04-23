const conn = require('../database/connection');

module.exports = {
    async salvarCEP(req, res){
        const { cep, logradouro, bairro, cidadeEstado, idUsuario } = req.body;

        const [id] = await conn('ceps').insert({
            cep, logradouro, bairro, cidadeEstado, idUsuario
        })
        return res.json("CEP cadastrado com sucesso " + id)
    },

    async pesquisaCEP(req, res){
        const ceps = await conn('ceps').select('*');
        return res.json(ceps);
    },

    async deletarCEP(req, res){
        const { cep } = req.params;

        const cepDB = await conn('ceps')
        .select('cep')
        .where('cep', cep)
        .first();
       
        console.log(cepDB);
        
        if(cepDB != undefined){
            await conn('ceps').where('cep', cep).delete();
            return res.json("CEP deletado com sucesso!");
        }else{
            return res.json("CEP não localizado!")
        }
    }
}