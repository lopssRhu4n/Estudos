function contar()
{
    var input_inicio = document.querySelector('input#inicio')
    var inicio = Number(input_inicio.value)
    var input_fim = document.querySelector('input#fim')
    var input_passo = document.querySelector('input#passo')
    var fim = Number(input_fim.value)
    var passo = Number(input_passo.value)
    var cont = inicio
    var resposta = document.querySelector('div#resposta')
    resposta.innerHTML = ''
    if (input_inicio.value.length == 0 || input_fim.value.length == 0 || input_passo.value.length == 0)
    {
        resposta.innerHTML = 'Impossível contar!'
    }
    else
    {
        if(passo == 0)
        {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if(inicio<fim)
        {
            while (cont<=fim)
            {       
            resposta.innerHTML += `${cont} \u{1F449}`
            cont += passo
            }
        }
        else if(fim<inicio)
        {
            while (cont>=fim)
            {
                resposta.innerHTML += `${cont} \u{1F449}`
                cont -= passo
            }

        }
        
        resposta.innerHTML += `\u{1F3C1}`
    }   

}