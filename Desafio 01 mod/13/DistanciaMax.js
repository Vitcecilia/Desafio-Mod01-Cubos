// Ponto eucliadiano ( a distancia é sempre um linha reta entre dois pontos)
// input String que deve ser dividida  em varias variaveis 
// /n é usado para quebra de linha
//n é a quantidade que é o tamanho do array (.length)
// metodo parseInt (x, 10) ele transforma um string de numeros em um numero do tipo number para calcular em parte ele transforma em decimal.
// raiz quadrada método Math.sqrt() so que isso vai dentro de uma função callback
//parseflout ou NUmber
//Number

const input = `3 
0 0
0 3
4 0`;
const linhas = input.trim().split("\n");

const n = parseInt(linhas[0], 10);

const coordenadas = [];
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0], 10),
        y: parseFloat(coord[1], 10)
    })
};
// console.log(coordenadas)

let distanciaTotal = 0;

for (let i = 0; i < coordenadas.length; i++) {
    for (let m = i + 1; m < coordenadas.length; m++) {
        // coordenadas[m].x
        //  console.log(coordenadas[i].y)

        let valorx = (coordenadas[m].x - coordenadas[i].x) ** 2
        let valory = (coordenadas[m].y - coordenadas[i].y) ** 2

        let distancia = Math.sqrt(valorx + valory)

        if(distancia > distanciaTotal){
            distanciaTotal = distancia
        }
    }
}
console.log(distanciaTotal)




    // (numero.x[1] - numero.x[0]) ^ 2 + (numero.y[1] - numero.y[0]) ^ 2;
    // soma1++
    // const distancia = Math.sqrt(soma1++)
    //     (numero.x[2] - numero.x[0]) ^ 2 + (numero.y[2] - numero.y[0]) ^ 2;
    // soma3++
    // // Math.sqrt(soma3++)
    //     (numero.x[2] - numero.x[1]) ^ 2 + (numero.y[2] - numero.y[1]) ^ 2;
    // soma2++
    // // Math.sqrt(soma2++)


// console.log(soma1)
// console.log(soma2)
// console.log(soma3)

// if (soma1 > soma2 || soma1 > soma3) {
//     console.log(soma1)
// } else if (soma2 > soma1 || soma2 > soma3) {
//     console.log(soma2)
// } else if (soma3 > soma1 || soma3 > soma2) {
//     console.log(soma3)
// };



