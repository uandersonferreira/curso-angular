console.log("Olá, mundo TypeScript de hoje");

//TIPOS PRIMITIVOS: boolean, number, string
let ligado = false; //true ou false
let nome = "Uanderson"; //Tudo que for String
let idade = 30; //Para qualquer numero 1, 1.5,
let altura = 1.90;

//TIPOS ESPECIAIS: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//TIPOS ABRANGENTES: any(qualquer coisa), void
function functionSemRetorno() {}
let retorno:void;
let retornaView:any = false;
//any - para funcionalidades que podem retornar mais de uma coisa

//TIPO OBJETO - SEM PREVISIBILIDADE (SEM TIPAGEM)
let objectProduto:object = {
    name:"uanderson",
    idade:20,
}

//TIPO OBJETO - TIPADO COM PREVISIBILIDADE
type ProdutoLoja = {
    nome: string,
    preco: number,
    unidade: number,
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidade: 30
}







