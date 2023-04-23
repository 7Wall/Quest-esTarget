let entrada = prompt("Digite a STRING que deseja inverter: ")

let palavraArray = entrada.split('')

let palavraInvertida = inverterString(palavraArray)

function inverterString (array){
  let arrayInvertido = []
  for(let i = array.length -1; i >= 0; i--){
    arrayInvertido.push(array[i])
  }
  return arrayInvertido.join('')
}

console.log(palavraInvertida)