function nameOfFuction(parameter) {
    //block of code
};
//---------------------------------------
function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
};
queDiaEHoje()
//---------------------------------------
function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
};
soma(25, 53)
soma(32, 64)
//---------------------------------------
function soma1(valor1, valor2) {
    return valor1 + valor2
};
const idade = 20
const tamanho = 30
const resultado = soma1(idade, tamanho)
console.log('O resultado é', resultado)
//---------------------------------------
function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado
};
console.log(`O resultado da multiplicação é`, multiplicar(40, 20))
//---------------------------------------
const funcionario1 = {
    nome: 'Luis',
    desconto: 0.5,
    salarioBruto: 3000,
    salarioLiquido: 0
};

const funcionario2 = {
    nome: 'Lenon',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
};
/* const descontoFuncionario1 =
    funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)
;
const descontoFuncionario2 =
    funcionario2.salarioBruto - (funcionario2.desconto *funcionario2.salarioBruto) */
;
/* console.log(`Funcionário 1 ${descontoFuncionario1}
    Funcionário 2 ${descontoFuncionario2}`) */

function calcularDesconto(salarioBruto, desconto) {
    return console.log(`Salario final é`, salarioBruto -
        (salarioBruto * desconto))
}
funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)
funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)
//---------------------------------------
function calculaPorcetagem (valor, porcetagem){
    const p = porcetagem / 100
    const resultado = valor * p
    console.log (`${porcetagem}% do valor ${valor} representa ${resultado}`)
    return resultado
}
calculaPorcetagem(2000, 75)