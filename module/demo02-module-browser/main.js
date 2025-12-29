window.onload = () => {
    console.log('Tela carregou!!')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }
    function click() {
        const tipoDeOperacao = obterValorInput('tipoDeOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        //pegar o nome da operaçõa pelo o que o usario escolher
        //chamar direto do modulo que conhecemos
        const resultado = Matematica[tipoDeOperacao](
            valor1, valor2
        )
        console.log('resultado', resultado)
        document.getElementById('resultado')
        .innerText = `
        A operação de  ${tipoDeOperacao}, ${valor1} por ${valor2} é ${resultado} `
    }
}