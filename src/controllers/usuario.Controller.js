
const bcrypt = require('bcrypt');
const conn = require('../database/connection');
const salt = bcrypt.genSaltSync(10);


module.exports = {
    async salvarUsuario(req, res){
        var { nome, senha, nivel, dataCadastro, dataAlteracao, idUsuario } = req.body;
        try{
            //Cryptografia da senha
            var senhaUsuario = senha;
            //console.log(senhaUsuario);
            
            senha = bcrypt.hashSync(senhaUsuario, salt);
            
            //Inserção no Banco de Dados
            const [id] = await conn('usuario').insert({
                    nome,
                    senha,
                    nivel,
                    dataCadastro,
                    dataAlteracao,
                    idUsuario
                });
        
        return res.json("Usuário cadastrado com sucesso! " + id );

        }catch (err){
            return res.send('Erro ao tentar cadastrar! ' + err);
        }
    },

    async pesquisarUsuario(req, res){
        //const usuarios = req.query;
    
        const usuarios = await conn('usuario').select('*');
        //Script para leitura da Cryptografia da senha
    
        /*  const senhaDigitadaPeloUsuario = req.query.senha;
    
        console.log(senhaDigitadaPeloUsuario);
        
        const hash = senhaDigitadaPeloUsuario;
        const result = bcrypt.compareSync('556677a', hash);
    
        if (result == true){
            console.log("Acesso permitido!")
        }else{
            console.log("Acesso negado!")
        } */
    
        return res.json(usuarios);
    },
    async deleteUsuario(req, res){
        const id = req.params;
        
        try{

            const idUsuario = await conn('usuario')
            .select('id')
            .where('id', id)
            .first();
            
            console.log(idUsuario);
            console.log(id);

            if(idUsuario != undefined){
                await conn('usuario').where('id', id).delete();
                return res.json("Usuário deletado com sucesso!");
            }else{
                return res.json("Usuário não localizado!")
            }
        }catch(err){
            return res.send('Erro ao tentar deletar usuário! ' + err);        
        }
    }
};