/*
Capturar dois números e fazer as operações matemáticas
de soma, subtração, multiplicação, divisão e resto da
divisão.
*/

let numeroUm = Number(prompt("Digite o primeiro número:"))
let numeroDois = Number(prompt("Digite o segundo número:"))

const soma = numeroUm + numeroDois
const subtracao = numeroUm - numeroDois
const multiplicacao = numeroUm * numeroDois
const divisao = numeroUm / numeroDois
const resto = numeroUm % numeroDois

alert(`Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
Resto: ${resto}`)