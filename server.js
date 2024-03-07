//chamar biblioteca
const express = require("express");
const { v4: uuidV4 } = require("uuid");
//atribuindo app
const app = express();
app.use(express.json());
//array dos usuarios
const users = [];
//array dos livros
const books = [];

//função de checar usuario
function checkUsers( req, res, next){
    const { name } = req.headers;
    const user = users.find(user => user.name === name);
    if(!user) {
        return res.status(400).json("Usuário não encontrado!");
    }
    req.user = user
    next()
}

//criação de usuários------------------------------------------------------------
app.post("/users", (req,res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { fone } = req.body;
    const { dateCreate } = req.body;

    const user = { name, email, fone, dateCreate, id: uuidV4(), historic : []};

    users.push(user);

    res.status(201).json(user);
})

//lista de usuários
app.get("/users", (req, res) => {
    res.status(200).json(users);
});
//esmprestimo de livros
app.patch("/borrow/:book_id", checkUsers, (req, res) => {
    const { book_id } = req.params;
    const { user } = req;

    const book = books.find(book => book.id === book_id);
    
    const limit = user.historic.length;

    if(limit >= 3) {
        return res.status(400).json("Limite excedido");
    }

    if(book.available === true){
        user.historic.push(book)
        book.available = false
        return res.status(200).json("Emprestimo realizado com sucesso!");
    }else {
        return res.status(400).json("Livro insdisponivel!");
    }
})
//devolver livro
app.patch("/giveBack/:book_id", checkUsers, (req, res) => {
    const { book_id } = req.params;
    const { user } = req;

    const localBook = user.historic.findIndex(book => book.id === book_id)

    const book = books.find(book => book.id === book_id);
    if(!book) {
        return res.status(400).json("Livro não encontrado!");
    }

    if(localBook === -1) {
        return res.status(400).json("Você não têm o livro!")
    }

   user.historic.splice(localBook, 1)
   book.available = true
   return res.status(200).json("Livro devolvido com sucesso!")
     
})
//Pesquisar livros
app.get("/books/consulta", (req, res) => {
    const { title, author, category } = req.query
    
    if(title) {
        result = books.filter(book => book.title.includes(title));
    }
    if(author) {
        result = books.filter(book => book.author.includes(author));
    }
    if(category) {
        result = books.filter(book => book.category.includes(category))
    }
    res.status(200).json(result)
})

//criação de livros--------------------------------------------------------------------
app.post("/books", (req, res) => {
    const { title } = req.body;
    const { author } = req.body;
    const { numPag } = req.body;
    const { category } = req.body;
    const available = true

    const book = {id: uuidV4(), available, title, author, category, numPag};

    books.push(book);

    res.status(201).json(book);
})

//lista de livros
app.get("/books", (req, res) => {
    res.status(200).json(books);
})

//codigo de capturar erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Erro encontrado no servidor!")
})

 //definindo a porta do servidor
const PORT = 3333;
//mensagem se o servidor está rodando corretamente
app.listen(PORT, () => {
    console.log(`Servidor rodando corretamente na porta ${PORT}.`);
});
