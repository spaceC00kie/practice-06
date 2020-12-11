//reverse a string

const backwards = (word) => {
    let x = ""
    for (let i = word.length-1; i >= 0; i--){
        x += word[i]
    }
    return x
}

console.log(backwards("reverse"))