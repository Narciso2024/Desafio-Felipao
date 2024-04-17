let nome = 'Joao';
let qtde = 9000;
let nivel = 'fora de parametro!';

if (qtde < 1000) {
  nivel = 'Ferro !';
}
if (qtde > 1001 && qtde < 2000) {
  nivel = 'Bronze !';
}
if (qtde > 2001 && qtde < 5000) {
  nivel = 'Prata !';
}
if (qtde > 5001 && qtde < 7000) {
  nivel = 'Ouro !';
}
if (qtde > 7001 && qtde < 8000) {
  nivel = 'Platina !';
}
if (qtde > 8001 && qtde < 9000) {
  nivel = 'Ascendente !';
}
if (qtde > 9001 && qtde < 10000) {
  nivel = 'Imortal !';
}
if (qtde >= 10001) {
  nivel = 'Radiante !';
}
console.log(
  'O Heroi ' +
    nome +
    ' obteve ' +
    qtde +
    ' ponto(s) ' +
    'esta no nivel ' +
    nivel
);
