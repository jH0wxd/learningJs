class Piloto {
    constructor(
        nome,
        dataDeNascimento,
        tempoDeVoo,
        temPermissaoParaVoar,
    ) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.tempoDeVoo = tempoDeVoo;
        this.temPermissaoParaVoar = temPermissaoParaVoar;
    }
    pilotar() {
        return `O piloto ${this.nome} vai pilotar agora`
    }
}
const piloto = new Piloto(
    "geraldino",
    new Date(1991, 3, 4),
    '8 anos',
    true
)
console.log(piloto.pilotar())