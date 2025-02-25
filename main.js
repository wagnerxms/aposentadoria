function calcular() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0;
    const retiradas = parseFloat(document.getElementById('retiradas').value) || 0;
    const retorno = parseFloat(document.getElementById('retorno').value) / 100 || 0;
    const idade = parseInt(document.getElementById('idade').value) || 0;
    const expectativa = parseInt(document.getElementById('expectativa').value) || 0;

    let patrimonio = valorInicial;
    let meses = 0;

    while (patrimonio > 0) {
        patrimonio += (patrimonio * (retorno / 12));
        patrimonio -= retiradas;
        meses++;

        if (meses / 12 > expectativa - idade) break;
    }

    const anosAteAcabar = Math.floor(meses / 12);
    const mensagem = (patrimonio > 0) ?
        `Você terá um patrimônio de R$ ${patrimonio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ao final da sua expectativa de vida.` :
        `Seu patrimônio acabará em aproximadamente ${anosAteAcabar} anos.`;
        

    document.getElementById('resultado').innerHTML = `<div class='alert alert-info'>${mensagem}</div>`;
}
