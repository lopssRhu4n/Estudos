var corpo = document.querySelector('body')
var img = document.querySelector('img#image')
var frase = document.querySelector('p#horas')
var data = new Date()
var horario = data.getHours()
frase.innerText = `Agora são ${horario} horas`
if (horario>6 && horario<12)
    {
        img.src = 'imgs/img1.jpg'
    }
else if(horario >12 && horario<18)
    {
        img.src = 'imgs/img2.jpg'
        corpo.style.background = 'darkred'
    }

else
    {
        img.src = 'imgs/img3.jpg'
        corpo.style.background = 'darkblue'
    }
    