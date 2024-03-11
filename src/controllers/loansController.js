//importando arquivo de conexão com o banco de dados 
const knex = require("../database/knex");
//nome da classe
class loansController {
// async significa assincrona, algo que acontece depois
//criar tarefas
    async loansBooks(req, res)  {
        const {book_id} = req.params;
        const {user} = req;

        await knex ("Books").where({id}).update({available: true})
        return restart.status(200).json("A disponibilidade do livro foi alterada com sucesso!")
    }
    }