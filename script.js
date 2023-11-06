let a = [3, 4, 5, 6]
let b = [3, 5, 8, 9]

let x = a.filter((num) => 
    b.includes(num)
)
console.log(x)