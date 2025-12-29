const readLine = require('readline')
const terminal = readLine.createInterface({
    //O que acontece quando um cliente interagir, tudo que entra na app é
    //via terminal
    input: process.stdin,
    //texto de saída sairá do terminal
    output: process.stdout
})
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de herois
Digite 3 para acessar o menu de guerreiras
Digite 0 para sair
`
/* console.log('TextoMenu', textoMenu)
const opcao = 1
switch (opcao) {
    case 1:
        console.log('Pressionou 1')
        break;
    case 2:
        console.log('Pressionou 2')
        break;
    default:
        console.log('Opção invalida')
        break;
} 
 terminal.question('Qual é o seu nome?', (msg)=>{
    console.log('Você escreveu', msg)
    terminal.close()
})  */

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial,
    },
    opcao1: {
        texto: 'Sub menu! Pressione enter para selecionar as opçoes',
        fn: opcao1,
    },
}
function opcao1(msg) {
    console.log('Não há mais opções')
    terminal.close()

}
function menuInicial(msg) {
    const opcao = Number(msg)
    if (isNaN(opcao)) {
        throw new Error('Não é um numero', msg)
    }
    switch (opcao) {
        case 0:
            console.log('Saindo....')
            terminal.close()
            break;
        case 1:
            console.log('Menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn,
            )
            break;
        default:
            console.log('Opção invalida')
            terminal.close()
            break;

    }
}
terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn

)