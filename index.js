function fazerTudo () {
var precogas = prompt('digite o preço da gasolina')
var precoalc = prompt('digite o preço da álcool')
var div = parseInt(precogas,10) / (precoalc,10)


if (div > 0.7){
  alert('a gasolina compensará mais.')
}
if (div < 0.7){
  alert('o álcool compensará mais.')
}
else if (div == 0.7){
  alert('não há diferença entre os combustíveis.')}

}

fazerTudo ()

 alert('deseja calcular mais preços?')
  alert('1 - Sim')
  alert('2 - Não')

 opcao = prompt('digite: ')

  if(opcao == '1'){
    fazerTudo()
  }
  else if(opcao == '2'){
    alert('até logo!')
  }