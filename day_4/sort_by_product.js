function sorted_by_product(numbers) {
    let numbers_obj = numbers.map((value, index) => {
        return {v: value, p: (value*(index + 1))}
    })

    let sorted = numbers_obj.sort((a, b) => a.p - b.p)
    let sorted_numbers = sorted.map(value => value.v)
    return sorted_numbers
}


console.log(sorted_by_product([23, 2, 3, 4, 5]))








// let x = [4, 6, 7, 8, 1, 12, 3]

// let c = x.sort((a, b) => b - a)


// console.log(c)