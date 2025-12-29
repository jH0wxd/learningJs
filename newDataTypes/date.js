const hoje = new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())
//console.log(hoje.toISOString())
const dia = hoje.getDate()
hoje.setDate(dia + 8)

hoje.setHours(9, 20, 0)

console.log(`
    Day: ${hoje.getDate()}
    Month: ${hoje.getMonth()}
    Year: ${hoje.getFullYear()}
    hour: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
    
`)