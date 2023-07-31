
// detectar se a primeira letra é minuscula e todas as outras maiuscula,   entao corrigir invertendo todas as letras;
// se estiver toda minuscula pode retornar assim mesmo
// se tiver maiuscula retornar toda minuscula 

// toUpperCase() coloca todas as letras de uma determinada string em maiúsculas.
//o método toLowercase() é o oposto, e coloca todas as letras de uma string em minúsculas. 

// lock => lock
// LOCK => lock
// lOCK => Lock
// lOCk => lOCk

// if ((input[0] === input[0].toLowerCase()) && (input.slice(1) === input.slice(1).toUpperCase())) {
//         console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());
// }

const input = "caPS"
let cadAtual = "";

if(input[0] === input[0].toLocaleLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    cadAtual = (input[0].toUpperCase() + input.slice(1).toLowerCase())
} else if (input === input.toUpperCase()){
    cadAtual = input.toLocaleLowerCase()
}  else if (input === input.toLocaleLowerCase()) {
        cadAtual = input.toLocaleLowerCase()
    } else {
        cadAtual = input
    }
 console.log(cadAtual);

// const arraycad = cadastro.split(" ")

// for (let letra of arraycad) {

//     let letraMin = letra.slice(0, 1).toUpperCase()
//     let resto = letra.slice(1).toLocaleLowerCase()
//     cadAtual += letraMin.toUpperCase() + resto + " "
// }



// if (letra === arraycad.slice(0, 1).toUpperCase()) {
    //     cadAtual += arraycad.toUpperCase().toLocaleLowerCase(1)
    // }
    // if (array === letra.toUpperCase()) {
    //     cadAtual = letra.toLocaleLowerCase()
    // } else if (letra === letra.toLocaleLowerCase()) {
    //     cadAtual = letra.toLocaleLowerCase()
    // } else {
    //     cadAtual = cadastro
    // }
