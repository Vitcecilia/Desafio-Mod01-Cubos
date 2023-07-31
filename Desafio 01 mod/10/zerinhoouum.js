
const jogo = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
];

// const sorteado = jogo.find((jogo) => {

// if (jogo.jogada !== 0) {
//     return jogo.nome
// } else {
//     console.log("NENHUM")
// }

// });
// console.log(sorteado.nome);


let jogou0 = []
let jogou1 = []

const Jogadores = jogo.map((jogo) => {

if (jogo.jogada === 0){
    return jogou0.push(jogo.nome)
} 
 if( jogo.jogada === 1){
   return jogou1.push(jogo.nome)
}

});
// console.log(jogou0, jogou1);

//cumprimento = jogou.length = 1 imprimir nome. 
// const array = [1, 2, 3, 4]
// array[0]
// console.log(array)


if( jogou0.length === 1 ){
    console.log(jogou0[0])
} else if ( jogou1.length === 1){
    console.log(jogou1[0])
} else {
    console.log("NENHUM")
}
