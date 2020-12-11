//reverse a string

const moonWalk = (arr) => {
    // define 2 pointers  // 1 at start and 1 at end
    let left = 0
    let right = arr.length - 1
    //until pointers cross
    while (left < right) {
        //swap values at those indicies
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        //move pointers inwards ++ --
        left ++
        right --
    }
    //return mutated string"
    return arr
}

console.log(moonWalk(["d", "o", "g"]))

