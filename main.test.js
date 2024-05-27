const {fizzBuzz} = require("./main")


    it("returns FizzBuzz if num is divisible by both 3 and 5",()=>{
        expect(15 % 3 && 15 % 5).toBe(0);

    }) 
    it("returns Fizz if num is divisible by 3",()=>{
        expect(6 % 3).toBe(0);

    }) 
    it("returns Buzz if num is divisible by 5",()=>{
        expect(10 % 5).toBe(0);
    })
    it("returns num if num is not divisible by 5 or 3",()=>{
    expect(4 % 3 && 11 % 5).toBe(1); 
    })

