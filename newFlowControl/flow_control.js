const frutaExistenteNoMercado = false
const temCPUSuficiente = true

const args = process.argv
const saldo = args[args.length - 1]
//traz a quantidade de itens(1-10) mas o índice sempre começa do 0 ou seja de (0 a 9)
//por isso o -1 para pegar o ultimo item da lista 
console.log('args', args)
console.log('saldo', saldo)

if (isNaN(saldo)) {
    console.log('valor invalido')
    return;
}
//---------------------------------------------
let tipoCliente = "premium"
if (saldo < 9) {
    tipoCliente = "basico"
}
else if (saldo >= 10 && saldo <= 20) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}
if (!tipoCliente) {
    tipoCliente = "indefinido"
}
console.log("tipoDeCliente", tipoCliente)
//---------------------------------------------
const tipoDeCliente =
    saldo <= 9
        ? "basico"
        : saldo >= 10 && saldo <= 20
            ? "gold"
            : "indefinido";
            console.log("tipoDeCliente", tipoCliente)