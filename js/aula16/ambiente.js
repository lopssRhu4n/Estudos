function par_ou_impar(n){
    if(n%2 == 0){
        return 'par'
    } else{   
        return 'ímpar'
    }
}

function soma(n1=0, n2=0){
    var s = n1+n2
    return s
}

let v = function(x){
    return x*2
}

fatorial = (n) => {
    let fat = 1
    for(var c = n; c>0; c--){
        fat *= c       
    }
    return fat
}

fat_recursivo = (n) =>{
    if(n==1){
        return 1
    }
    else{
        return n* fat_recursivo(n-1)
    }
}

let res =par_ou_impar(5)
console.log(res)

console.log(soma(2, 5))

console.log(v(2))

console.log(fatorial(5))

console.log(fat_recursivo(6))