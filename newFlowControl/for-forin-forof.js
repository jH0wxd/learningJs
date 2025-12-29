/* const textoPar = 'par'
const textoImpar = 'impar'
for(let index = 0; index <=10; index++) {
    const decision = index % 2 === 0 ? textoPar:textoImpar
    console.log (`O número ${index} é ${decision}`) }*/

//---------------------------------------------------------------
const myListOfHeros = [
    {
        id: parseInt(Math.random() * 10),
        nome:'zezinho',
        poder:'veloz',
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        poder: 'Super força',
    }
]
/* for (index = 0; index < myListOfHeros.length; index ++ ) {
    const item = myListOfHeros[index]
    console.log (
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
} */
//----------------------------------------------------------

//Não precisa de contador
for( const index in myListOfHeros){
    const item = myListOfHeros[index]
    console.log('Nome:', item.nome)
}
//Não precisa usar index
for( const item of myListOfHeros){
    console.log('Item:', item.poder)
}

//Tudo dependo do que o codigo vai precisar, nisso você escolhe a melhor forma