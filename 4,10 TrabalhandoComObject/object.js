const pessoa = {
    nome:"Jonathan",
    Idade:"33",
    Altura: "1,77",
    falar(){
        console.log("Oláh!")
    }
};
pessoa.Idade =24;
pessoa.Altura =1.80;


for ( let chave in pessoa ){
    if (typeof pessoa[chave] === "function"){
        pessoa[chave]();
    }else{ console.log(chave, pessoa[chave])};
};
for (let chave in pessoa ) {
    console.log(chave, pessoa[chave])
}
const heroi = {
    nome:"Flash",
    idade: "88",
    sexo: "Masculino",
};
console.log("idade", heroi["idade"])
heroi.power = "velocidade"
console.log(Object.values(heroi))
const novoObj = Object.assign(heroi,pessoa)
delete novoObj.idade
