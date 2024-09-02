import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null; //a interrogação serve para mostrar que a resposta é opcional(não é um valor obrigatório)
}