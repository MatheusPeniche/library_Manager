//chamando biblioteca
const express = require("express");
const routes = require("./routers");

//atribuindo app 
const app = express();
app.use(express.json());
app.use(routes);

//identificar erros
app.use((err, req, res, next) => {
    console.log.error(err.stack);
    res.status(500).send("ALdo deu errado!!!")
})

//porta do servidor
const PORT = 3333;

//mensagem de confirmação
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
})