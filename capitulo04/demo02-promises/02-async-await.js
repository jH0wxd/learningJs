const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function questionAsync(text) {
    return new Promise((resolve, reject) => {
        terminal.question(`${text}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode está vazio'))
            //Trabalhando com promises usa-se o new Error no reject no lugar de um throw
        })
    })
}
//Informar o compilador do js que vai trabalhar com promises
async function main() {
    try {
        const nome = await questionAsync('Qual é o seu nome?')
        const telefone = await questionAsync('Qual é o seu nome?')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    } catch (error) {
        console.log('Deu ruin', error.stack)
    }
    finally {
        terminal.close()
    }
}