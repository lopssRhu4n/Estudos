var input_num = document.querySelector('input#num')
var vetor = []
var select = document.querySelector('select')
var resposta = document.querySelector('div#resposta')

adicionar = () =>
{
    if (input_num.value.length == 0)
    {
        window.alert('Digite um número!')
    }
    else {
        n = Number(input_num.value)
        if (vetor.includes(n))
        {
            window.alert('Número já inserido')
        }
        else if(n<1 || n>100)
        {
            window.alert('Número fora do intervalo')
        }
        else
        {
            vetor.push(n)
            var option = document.createElement('option')    
            option.text = `Valor ${n} adicionado`
            select.appendChild(option)
        }
    resposta.innerHTML = ''   
    num.value = ''
    num.focus()
    }
}

defineMaior = () =>{
    let maior = vetor[0]
    for(pos in vetor)
    {
        if (vetor[pos] > maior)
        {
            maior = vetor[pos]
        }
    }
    return maior
}

defineMenor = () =>{
    let menor = vetor[0]
    for(pos in vetor)
    {
        if(vetor[pos] < menor)
        {
            menor = vetor[pos]
        }
    }
    return menor
}

somar = () =>{
    var s = 0
    for(var num = 0; num<vetor.length; num++)
    {
        s += vetor[num]
    }
    return(s)
}

calculaMedia = (valor) =>
{
    m = valor/vetor.length
    return m
}

finalizar = () =>
{
    resposta.innerHTML = ''
    if(vetor.length == 0)
    {
        window.alert('Adicione valores antes de finalizar!')
    }
    else
    {
        var maior = defineMaior()
        var menor = defineMenor()
        var soma = somar()
        var media = calculaMedia(soma)
        resposta.innerHTML += vetor
        resposta.innerHTML += `<p>Ao todo, temos ${vetor.length} valores cadastrados</p>`
        resposta.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}`
    }
}
