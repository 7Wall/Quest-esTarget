const entradaUser = parseInt(prompt('Informe o número que deseja verificar: '));
let n1 = 0
let n2 = 1
let proximo = 0


while (proximo < entradaUser) {
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
}


if (proximo === entradaUser) {
    console.log(`O número ${entradaUser} pertence a Sequência de Fibonacci`)
} else {
    console.log(`${entradaUser} não pertence a Sequência de Fibonacci`)
}