const {Router} = require("express");
const LoanController = require("../controllers/LoanController")

const loanRoutes = Router();
const loanController = new LoanController();

//---------------------------------------------------------------------------------------
loanRoutes.post("/:user_id/:book_id", loanController.emprestarLivros);
loanRoutes.get("/:user_id", loanController.listarLivros);
loanRoutes.get("/total/:user_id", loanController.totalLivrosEmp);
loanRoutes.patch("/devolucao/:user_id/:book_id", loanController.retornoLivros)

module.exports = loanRoutes
