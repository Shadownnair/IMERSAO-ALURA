import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    const db = conexao.db("Imersao-Alura"); // Seleciona o banco de dados "Imersao-Alura"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray(); // Executa a consulta e retorna um array com todos os documentos
}

export async function criarPost(novoPost) { 
    const db = conexao.db("Imersao-Alura"); // Seleciona o banco de dados "Imersao-Alura"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.insertOne(novoPost) // Executa a consulta e retorna um array com todos os documentos
}

export async function atualizarPost(id, novoPost) { 
    const db = conexao.db("Imersao-Alura"); 
    const colecao = db.collection("posts");
    const objID =  ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}
