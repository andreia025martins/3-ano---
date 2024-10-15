const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

visualizarInformacoesGlobais()