import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

//Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputheight = document.querySelector('#height')

//Função
form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputheight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        AlertError.open()
        return
    }

    AlertError.close()
    
    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notNumber(value){
    return isNaN(value) || value == ""
}

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}