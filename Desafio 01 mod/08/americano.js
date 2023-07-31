
const numeros = [1, 1, 1];

const qtdJogadores = numeros.length;
let somaDajogada = 0;
let posicao = 0;

for (let jogada of numeros) {
    somaDajogada += jogada

}
// console.log(somaDajogada)
for (let i = 0; i < somaDajogada; i++) {

    if (posicao >= qtdJogadores) {
        posicao = 1
    } else {
        posicao++
    }
}
console.log(posicao)
