function reversArray(arry){
    let newArray = []
    for(let i = arry.length-1; i >= 0; i--){
        newArray.push(arry[i])
    }
    return newArray
}

let test = ['mamoon', 'noman']
console.log(reversArray(test))