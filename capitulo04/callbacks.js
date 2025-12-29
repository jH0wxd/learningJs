/* const fs = require('fs')
fs.readFile('./arq1.txt', (error, resposta) => {
    if(error){
        console.error('Deu ruin', error.stack)
        return;
    }
    console.log('resposta', resposta.toString())
}) */

    //Essa é a forma antiga de fazer callbacks, não é recomendado usar mais.
const fs = require('fs')
fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
    if (errorArq1) {
        console.error('Deu ruin arquivo 1', errorArq1)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if (errorArq2) {
            console.error('Deu ruin no arquivo 02', errorArq2)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if (errorArq3) {
                console.error('Deu ruin no arquivo3', errorArq3)
                return;
            }
            const conteudo = `${respostaArq1}\n ${respostaArq2}\n ${respostaArq3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite)=>{
                if(errorWrite){
                    console.error('Deu ruim na gravação', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!!')
            })
        })
    })
})