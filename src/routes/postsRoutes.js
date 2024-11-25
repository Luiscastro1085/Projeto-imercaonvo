import express from "express";
import multer from "multer";
import { listarposts, postarNovoPost , uploadImagem, atualizarNovoPost} from "../controlers/postsControlers.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições JSON
    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota para obter todos os posts
    app.get("/posts", listarposts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;