const basic_arithmatic = require('./basic_arithmatic');

describe('subTwoNumbers', ()=>{
    //For Positive Number
    test('subTwoNumbers(100,80) is return ',()=> {
        expect(basic_arithmatic.subTwoNumbers(100,80)).toBe(20);
    });
    //For Negative Numbers
    test('subTwoNumbers(-1,-9) is return 8', ()=> {
        expect(basic_arithmatic.subTwoNumbers(-1,-9)).toBe(8);
    })
    //For One Negative or One Positive Number
    test('subTwoNumbers(-1,8) is return -9', ()=>{
        expect(basic_arithmatic.subTwoNumbers(-1,8)).toBe(-9);
    });

    test('Add zero values', () => {
        expect(basic_arithmatic.subTwoNumbers(0, 0)).toBe(0);
    });
      

    //For Decimal numbers
    test('subTwoNumbers(3.14,2.86) is return 0.28', () => {
        expect(basic_arithmatic.subTwoNumbers(3.14, 2.86)).toBeCloseTo(0.28);
    });
  
    //For Large numbers
    test('subTwoNumbers(999999999,1) is return 1000000000', () => {
        expect(basic_arithmatic.subTwoNumbers(999999999, 1)).toBe(999999998);
    });
    
    //For String inputs
    test('subTwoNumbers("5",7) is return NaN', () => {
        expect(basic_arithmatic.subTwoNumbers("5", 7)).toBe(NaN);
    });
    
    //For Missing arguments
    test('subTwoNumbers(5) is return NaN', () => {
        expect(basic_arithmatic.subTwoNumbers(5)).toBe(NaN);
    });
    
      // For Extra arguments
    test('subTwoNumbers(5,7,3) is return -2', () => {
        expect(basic_arithmatic.subTwoNumbers(5, 7, 3)).toBe(-2);
    });
});
