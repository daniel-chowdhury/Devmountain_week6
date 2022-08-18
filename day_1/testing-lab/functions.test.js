const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions")
const my_functions = require("./functions")



    test("return a number", () => {
        let numb = returnTwo()
        expect(numb).toEqual(2)
    })

    it("checks the greeting function", () => {
        let stri = greeting('James')
        expect(stri).toEqual('Hello, James.')
        let stri2 = greeting('Jill')
        expect(stri2).toEqual('Hello, Jill.')
    })

    


describe("Math functions", () => {

    test("checks the add function", () => {
        let sum = add(1, 2)
        expect(sum).toEqual(3)
        let sum2 = add(5, 9)
        expect(sum2).toEqual(14)
    })

    it("checks the multiply function", () => {
        let product = multiply(1, 2)
        expect(product).toEqual(2)
        let product2 = multiply(5, 9)
        expect(product2).toEqual(45)
    })

    it("checks the divide function", () => {
        let result = divide(10, 5)
        expect(result).toEqual(2)
        let result2 = divide(45, 15)
        expect(result2).toEqual(3)
    })

    it("checks the subtract function", () => {
        let result = subtract(1, 2)
        expect(result).toEqual(-1)
        let result2 = subtract(5, 9)
        expect(result2).toEqual(-4)
    })
})