function verificar()
{
var input_ano = document.querySelector('input#ano')
var data = new Date()
var ano = data.getFullYear()
var resposta = document.querySelector('div#resposta')
var img = document.querySelector('img#img_resposta')
//document.createElement('img')        

    if (input_ano.value.length == 0 || Number(input_ano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else
    {
        
        var form_sex= document.getElementsByName('radsex')
        var idade = ano - Number(input_ano.value)
        var genero = ''
        if(form_sex[0].checked)
        {
            genero = 'homem'
            if (idade< 18)
            {
                img.src = 'imgs/menino.jpg'
            }
            else if (idade> 18 && idade <55)
            {
                img.src = 'imgs/homemadulto.jpg'
            }
            else if (idade> 55)
            {
                img.src = 'imgs/homemidoso.jpg'
            }
        }
        else if(form_sex[1].checked)
        {
            genero = 'mulher'
            if (idade< 18)
            {
                img.src = 'imgs/menina.jpg'
            }
            else if (idade> 18 && idade <55)
            {
                img.src = 'imgs/mulheradulta.jpg'
            }
            else if (idade> 55)
            {
                img.setAttribute('src', 'imgs/mulheridosa.jpg')
            }
        }
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`
   }
}