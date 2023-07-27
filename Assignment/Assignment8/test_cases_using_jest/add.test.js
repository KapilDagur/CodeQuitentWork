const basic_arithmatic = require('./basic_arithmatic');

describe('addTwoNumbers', ()=>{
    //For Positive Number
    test('addTwoNumbers(10,20) is return 30',()=> {
        expect(basic_arithmatic.addTwoNumbers(10,20)).toBe(30);
    });
    //For Negative Numbers
    test('addTwoNumbers(-1,-9) is return -10', ()=> {
        expect(basic_arithmatic.addTwoNumbers(-1,-9)).toBe(-10);
    })
    //For One Negative or One Positive Number
    test('addTwoNumbers(-1,8) is return 7', ()=>{
        expect(basic_arithmatic.addTwoNumbers(-1,8)).toBe(7);
    });

    test('Add zero values', () => {
        expect(basic_arithmatic.addTwoNumbers(0, 0)).toBe(0);
    });
      

    //For Decimal numbers
    test('addTwoNumbers(3.14,2.86) is return 6', () => {
        expect(basic_arithmatic.addTwoNumbers(3.14, 2.86)).toBeCloseTo(6);
    });
  
    //For Large numbers
    test('addTwoNumbers(999999999,1) is return 1000000000', () => {
        expect(basic_arithmatic.addTwoNumbers(999999999, 1)).toBe(1000000000);
    });
    
    //For String inputs
    test('addTwoNumbers("5",7) is return NaN', () => {
        expect(basic_arithmatic.addTwoNumbers("5", 7)).toBe(NaN);
    });
    
    //For Missing arguments
    test('addTwoNumbers(5) is return NaN', () => {
        expect(basic_arithmatic.addTwoNumbers(5)).toBe(NaN);
    });
    
      // For Extra arguments
    test('addTwoNumbers(5,7,3) is return 12', () => {
        expect(basic_arithmatic.addTwoNumbers(5, 7, 3)).toBe(12);
    });
});



