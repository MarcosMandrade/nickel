const nome = "Marcos Filipe";
let nome2 = "";
let pessoadefault = {
    nome: "Marcoas Filipe",
    idade:"27",
    trabalho: "Suporte"
}

let nomes = ["Marcos", "Filipe", "Martins"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Filipão",
        idade:"27",
        trabalho: "Suporte"
    },
    {
        nome: "Marcão",
        idade:"31",
        trabalho: "UxDesign"
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa (pessoa) {
    console.log("------Imprimir Pessoas-----")
    console.log("Pessoas:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.trabalho);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("------Imprimir Pessoas-----")
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.trabalho);

        console.log("Trabalho:");
        console.log(item.trabalho);
        
    })
}

imprimirPessoas();


adicionarPessoa ({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

//recebeEalteraNome ("João Silva Pereira");
//recebeEalteraNome ("Maria silva");

//alterarNome ();