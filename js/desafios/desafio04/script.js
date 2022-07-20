function gerar()
{
    var input_mult = document.querySelector('input#mult')
    var multiplicando = Number(input_mult.value)
    var produto = 0
    var select = document.querySelector('select')
    select.innerHTML = ''    
    if (input_mult.value.length == 0)
    {
        window.alert('Por favor, digite um número')
    }
    else
    {
        for (var cont = 1; cont<11; cont++)
        {
            produto = multiplicando*cont
            var option = document.createElement('option')
            option.text = `${multiplicando} x ${cont} = ${produto}`
            option.value = `tab${cont}`
            select.appendChild(option)
        }
    }
}