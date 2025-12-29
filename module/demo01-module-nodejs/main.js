const Matematica = require('./matematica')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
terminal.question('Insira o primeiro valor\n', valor01 => {
    terminal.question('Insira o segundo valor\n', valor02 => {
        terminal.question('Insira a operação\n', tipoOperacao => {
            const resulta = Matematica[tipoOperacao](
                Number(valor01), Number(valor02)
            )
            console.log(`A operação ${tipoOperacao} de ${valor01} e ${valor02} é ${resulta}`)
            terminal.close()
        })
    })
})