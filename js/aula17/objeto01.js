let amigo = {nome: 'José', sexo:'Masculino', peso:65,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(4)
console.log(amigo.peso)