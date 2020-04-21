const bcrypt = require ('bcrypt');
const salt = bcrypt.genSaltSync(10);

/* var senhaParaSalvar = bcrypt.hash('334455', salt);


console.log(sen haParaSalvar);*/

/* if (bcrypt.hashSync('334455', salt) === '$2b$10$PTnzfeDecrH3klf5oD3Q9OkGsPB.UPzx5/NQMGEczp60FF5MJcZVi') {
    console.log("Acesso permitido!")
}else{
    console.log("Acesso negado")
}; */
const hash = '$2b$10$PTnzfeDecrH3klf5oD3Q9OkGsPB.UPzx5/NQMGEczp60FF5MJcZVi';
const result = bcrypt.compareSync('334455', hash)

if (result == true){
    console.log("Acesso permitido!")
}else{
    console.log("Acesso negado!")
}