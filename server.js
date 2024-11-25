import express from "express"; // Importa o framework Express para criar a aplicação web.
import routes from "./src/routes/postsRoutes.js";
// Array de posts (dados hardcoded para demonstração)
const posts = [
  { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
];

// Cria uma instância do Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});


 





