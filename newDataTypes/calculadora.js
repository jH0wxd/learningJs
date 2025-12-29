function calculaPorcetagem (valor, porcetagem){
    const p = porcetagem / 100
    const resultado = valor * p
    console.log (`${porcetagem}% do valor ${valor} representa ${resultado}`)
    return resultado
}
calculaPorcetagem(2000, 75)