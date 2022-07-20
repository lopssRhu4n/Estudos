let num = [5, 4, 2, 8]
console.log(`Nosso vetor é o ${num}`)
num[4] = 6
console.log(num)
num.push(7)
console.log(num)
console.log(num.length)
console.log(num.sort())

/*for(var pos = 0; pos<num.length; pos++)
{
    console.log(num[pos])
}
*/
for(var number in num)
{
    console.log(num[number])
}
let pos = num.indexOf(8)

console.log(pos)