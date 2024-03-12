//importando arquivo de conexão com o banco de dados 
const knex = require("../database/knex");
//nome da classe
class BookController {
// async significa assincrona, algo que acontece depois
//criar tarefas
    async createBook(req, res) {
        
        const {title, author, numPag, category} = req.body;

    const book = {
        title,
        author,
        numPag,
        category
    }
//
        await knex("books").insert({title: book.title, author: book.author, numPag: book.numPag, category: book.category});

        return res.status(201).json("Livro adicionado na biblioteca!!");
    }
//listar tarefas
    async listBook(req, res) {
        //await significa aguarde, pool é o arquivo passado anteriormente e query significa consulta.
        const books = await knex("books");
        return res.status(200).json(books)
    }
//selecionar uma terefa especifica pelo id
    async listBookById(req, res) {
        const {id} = req.params
        
        const [book] = await knex("books").where({id});
        return res.status(200).json(book)
    }
//atualizar o titulo e a descrição de uma tarefa
    async updateBook(req, res) {
        const {id} = req.params
        const {title, author, numPag, category} = req.body

        await knex ("books").where({id}).update({title, author, numPag, category})
        return res.status(200).json("Dados do livro atualizado com sucesso!")
    }
    //atualizar status de uma tarefa
    async updateBookStatus(req, res) {
        const {id} = req.params

        await knex ("Books").where({id}).update({available: true})
        return res.status(200).json("A disponibilidade do livro foi alterada com sucesso!!");
    }
    //delentando tarefa
    async deleteBook(req, res) {
        const {id} = req.params

        await knex("books").where({id}).delete()
        return res.status(200).json("Livro deletado com sucesso! Até!!")
    }

}
//
module.exports = BookController