function romanNumerals(input) {


    let string = []
    let tens = [{a: 1000, b: 'M'}, {a: 500, b: 'D'}, {a: 100, b: 'C'}, 
                {a: 50, b: 'L'}, {a: 10, b: 'X'}, {a: 5, b: 'V'}, {a: 1, b: 'I'}]
    
    for (let i = 0; i < tens.length; i++) {
        let n = Math.floor(input/(tens[i].a))
        let alph = tens[i].b
        input = input%(tens[i].a)
        string.push(alph.repeat(n))
    }
    return string.join('')
}


console.log(romanNumerals(99))