const pessoa = {
  _nome:'',
  _idade: 20,
    get nome(){
    return this._nome
   },
    set nome(valor){
    this._nome = valor.toUpperCase()
   },
     get podeDirigir (){
    return this._idade > 18
   },
     set idade(valor){
    this._idade = valor
   },
  
  }
      pessoa.nome = "jhow"
      pessoa.idade = 15
      console.log(pessoa.nome)
      console.log(pessoa.podeDirigir)
      console.log(pessoa.idade)
