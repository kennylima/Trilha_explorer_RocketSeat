/*
Solicitar o nome do aluno e as 3 notas do bimestre
e calcular a média daquele aluno. A média deverá 
ser maior que 6.

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno
a dar o seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno
e a nota.

*/

let nome = prompt("Qual o nome do aluno?")
let notaUm = Number(prompt("Digite a nota da primeira prova:"))
let notaDois = Number(prompt("Digite a nota da segunda prova:"))
let notaTres = Number(prompt("Digite a nota da terceira prova:"))
let media = (notaUm + notaDois + notaTres)/3

if(media >= 6){
    alert(`Parabéns ${nome}! 
Você foi aprovado no bimestre com a média final de: ${media.toFixed(2)}`)
} else {
    alert(`Olá ${nome}!
Infelizmente você não conseguiu passar neste bimestre, 
você ficou com média final de: ${media.toFixed(2)}. 
Não desanime, estude mais que você irá conseguir!`)
}

