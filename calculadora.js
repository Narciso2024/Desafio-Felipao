// Calculadora Hankeada
// Função calculaSaldo = (vitorias - derrotas)
let nivel = 'fora de parametro !';
//Definição da variavel e da Função para o calculo do saldo:
let saldoVitorias = calculaSaldo(100, 18);
function calculaSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}
//
//verificação e definição do nivel:
//
if (saldoVitorias < 10) {
  nivel = 'Ferro !';
}
if (saldoVitorias > 11 && saldoVitorias < 20) {
  nivel = 'Bronze !';
}
if (saldoVitorias > 21 && saldoVitorias < 50) {
  nivel = 'Prata !';
}
if (saldoVitorias > 51 && saldoVitorias < 80) {
  nivel = 'Ouro !';
}
if (saldoVitorias > 81 && saldoVitorias < 90) {
  nivel = 'Diamante !';
}
if (saldoVitorias > 91 && saldoVitorias < 100) {
  nivel = 'Lendario !';
}
if (saldoVitorias >= 101) {
  nivel = 'Imortal !';
}

console.log(
  'O Heroi tem saldo de ' +
    saldoVitorias +
    ' vitorias ' +
    'está no nivel ' +
    nivel
);
