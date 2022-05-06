let timeCasa = prompt('Qual é o time da casa?')
let = timeFora = prompt('Qual o time vistitante')

let validation = confirm(`O duelo analisado será entre:\n${timeCasa} x ${timeFora}`)

let result = ''


if (validation) {

    alert('analise os últimos 15 jogos dos dois times nas círcunstâncias do jogo') 

    let vitCasa = prompt('Quantas vitórias teve o time da casa na liga atual?')
    let derCasa = prompt('Quantas derrotas teve o time da casa na liga atual?')
    let empCasa = prompt('Quantos empates teve o time da casa na liga atual?')

    let vitFora = prompt('Quantas vitórias teve o time visitante na liga atual?')
    let derFora = prompt('Quantas derrotas teve o time visitante na liga atual?')
    let empFora = prompt('Quantos empates teve o time visitante na liga atual?')

    let golsAcimaCasa = Number(prompt('Quantas partidas do time da casa ficaram com gols acima de 1.5?'))
    let golsAcimaFora = Number(prompt('Quantas partidas do time visitante ficaram com gols acima de 1.5?'))

    let golsAbaixoCasa = Number(prompt('Quantas partidas do time da casa ficaram com gols abaixo de 3.5?'))
    let golsAbaixoFora = Number(prompt('Quantas partidas do time visitante ficaram com gols abaixo de 3.5?'))

    let somaAcima = golsAcimaCasa + golsAcimaFora
    let somaAbaixo = golsAbaixoCasa + golsAbaixoFora

    if (vitCasa > 12 && derFora >= 10) {
         result = 'Casa vence'
    } else if (vitCasa > 11 && vitFora <=5) {
        result = 'Casa ou empate'
    } else if (vitFora > 12 && derCasa >= 10) {
        result = 'Fora vence'
    } else if (vitFora > 11 && vitCasa <= 5) {
        result = 'Fora ou empate'
    } else if (somaAcima >= 24) {
        result = 'Mais de 1.5 gols na partida'
    } else if (somaAbaixo >= 23) {
        result = 'Menos de 3.5 gols na partida'
    } else {
        result = 'Jogo de elevado risco, não apostar'
    }

    alert(`Entrada recomendada: ${result}`)


    

} else {
    alert('Defina algum jogo para ser analisado')
}


