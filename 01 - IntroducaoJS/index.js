    //Variáveis e tipos de dados
    // declaração or declaration
        var name

    //assignment or atribuição de valores
        name = "kenny"

    //Tipo de dado que foi colocado na variável
    console.log(typeof name)

    //Multiplos arumentos na função
    let age = 20
    let isHuman = true
    console.log(name, age, isHuman)

    //Concatenando os valores
    console.log('O ' + name + ' tem ' + age + ' anos.')

    //Interpolando valores com template literals
    console.log(`O ${name} tem ${age} anos.`)

    //Objetc
    const person = {
        name: 'Kenny',
        age: 29,
        weight:90,
        isAdmin: true
    }
    console.log(person.name)

    //Array
    const animals = [
        'Lion',
        'Monkey',
        'Cat'
    ]
    //acessar valores dentro do Array
    console.log(animals[0]) 
    //Imprimir tamanho do Array
    console.log(animals.length)

