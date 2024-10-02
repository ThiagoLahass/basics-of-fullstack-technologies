
// // freeze faz com que os atributos se tornem imutáveis (não gera erro na reatribuição)
// const pessoa = Object.freeze({
//     nome: 'Ana',
//     idade: 28,
//     cidade: 'Rio de Janeiro',
// });

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

pessoa.nome = 'Maria';
pessoa.estado = 'RJ';

delete pessoa.idade;

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);
