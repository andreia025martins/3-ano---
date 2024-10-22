const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'

async function visualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  console.log(dados);
  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Você sabia que cer de ${dados.Contato_com_Amigos_e_Familia} das pessoas utilizam as redes sociais para contactar a família e que ${dados.Preencher_Tempo_Livre} utilizam para preencher tempo livre, passam em média ${dados.tempo_medio} horas conectadas.`

  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
  
}

visualizarInformacoesGlobais()