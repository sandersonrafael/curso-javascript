const data = new Date()
const diaSemana = data.getDay()
let dia
switch (diaSemana) {
    case 0:
        dia = `Domingo`
        break
    case 1:
        dia = `Segunda-feira`
        break
    case 2:
        dia = `Terça-feira`
        break
    case 3:
        dia = `Quarta-feira`
        break
    case 4:
        dia = `Quinta-feira`
        break
    case 5:
        dia = `Sexta-feira`
        break
    case 6:
        dia = `Sábado`
        break
    default:
        dia = `dia inválido`
        break
}
console.log(`Hoje é ${dia}`)