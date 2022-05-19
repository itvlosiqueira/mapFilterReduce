function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0; 
}

const meuArray = [1, 54, 419, 15, 48, 3, 46, 13, 16, 17]

console.log(filtraPares(meuArray));
