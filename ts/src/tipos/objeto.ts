
const pessoa: { nome: string; idade: number } = {
    nome: 'Maria',
    idade: 30,
};

// ou:
type Pessoa = {nome: string; idade: number};
const pessoa2: Pessoa = {
    nome: 'Jose',
    idade: 25,
};

pessoa.idade = 31;

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);
