import calculator from "../lib/calculator";

describe("calculator function evaluation", () => {
    test("add a series of numbers", () => {
        expect(calculator.add(1,2,3,4,5)).toBe(15)
    });
    test("subtracts a series of numbers", () => {
        expect(calculator.subtract(100,50, 25)).toBe(25)
    });
    test("multiply a series of numbers", () => {
        expect(calculator.multiply(100,50, 25)).toBe(125000)
    });

    test("divide a series of numbers", () => {
        expect(calculator.divide(50, 2, 5 )).toBe(5)
    });


});

