class heroi {
    atacar(){
        console.log(`O heroi atacou! `)
    }
    defender(){
        console.log(`O heroi defendeu!`)
    }
}
const campeao = new heroi()
campeao.atacar()
campeao.defender()

class Heroi2 {
    constructor(nome, idade) {
        this.nome=nome
        this.idade=idade
    }
    atacar(){
        console.log(`O heroi ${this.nome} atacou`)
    }
}
const heroi2 = new Heroi2(
    `Lanterna Verde`,
    45
)
heroi2.atacar()

class Heroi3 {
    static obterAnoDeNascimento (idade) {
        return 2025 - idade
    }
} const anoDeNascimento = Heroi3.obterAnoDeNascimento(33)
console.log(`O ano de nasciment oé ${anoDeNascimento}` )
//diferente da class Heroi2 aqui não tem o {} nem a palavra chave new