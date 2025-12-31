const { error } = require('console')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
    terminal.question('Qual é o seu telefone\n', telefone => {
        console.log(
            `
            Nome: ${nome},
            Telefone ${telefone}
            `
        )
        terminal.close()
    })
})*/
// quando conseguir o texto via terminal, irá chamar a função resolve como callback
function questionAsync(text) {
    return new Promise((resolve, reject) => {
        terminal.question(`${text}\n`, resolve)
    })
}
let name = "" //variável global não é boa pratica
let cellphone = ""
Promise.resolve()
    .then(() => questionAsync('Qual é seu nome')) //executa a function
    //toda vez quem um .then for executada, ele já retorna uma promise por default " intrinseco"
    .then(answer => {
        if(!answer) {
            throw new Error('Campo vazio')
        }
        name = answer
    })
    .then(() => questionAsync('Qual é seu telefone'))
    .then(cellphoneAnswer => {
        if(!cellphoneAnswer){
            throw new Error('Campo vazio')
        }
        cellphone = cellphoneAnswer
    })
    .then(() => {
        console.log(`Nome:${name}, Telefone ${cellphone}`)
    })
    //independente de qual .then que deu error, ele irá cair dentro desse .catch
    .catch(error=>{
        console.error('Deu ruin',error.stack)
    })
    .finally(() => terminal.close())