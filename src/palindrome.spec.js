const palindrome = require('./palindrome.js');

describe('the "palindrome()" function', () => {
    it('should find palindromes for letters, even with Upper-/Lowercase', () => {
        const testCases = [
            { input: 'racecar', expect: true },
            { input: 'raCecar', expect: true },
            { input: 'racECar', expect: true },
            { input: 'RACecar', expect: true },
            { input: 'eye', expect: true },
            { input: 'Eye', expect: true },
            { input: 'ee', expect: true },
            { input: 'whatever', expect: false },
            { input: 'ABCabc', expect: false },
            { input: 'abcc', expect: false },
            { input: 'PlainWrong', expect: false }
        ];

        testCases.forEach((testObj) => {
            const word = testObj.input;
            const result = testObj.expect;
            expect(palindrome(word)).toBe(result);
        });
    });

    it('should find palindromes for numbers', () => {
        const testCases = [
            { input: '12321', expect: true },
            { input: '11223344544332211', expect: true },
            { input: '66', expect: true },
            { input: '1234', expect: false },
            { input: '9998', expect: false },
            { input: '1122', expect: false }
        ];
        testCases.forEach((testObj) => {
            const word = testObj.input;
            const result = testObj.expect;
            expect(palindrome(word)).toBe(result);
        });
    });


    it('should find palindromes for letters and numbers', () => {
        const testCases = [
            { input: '12ww21', expect: true },
            { input: 'aBc22322cBa', expect: true },
            { input: '1Q2w3e3w2q1', expect: true },
            { input: 'a1A2', expect: false },
            { input: '123QWeasd', expect: false },
            { input: 'hz77zZ7O', expect: false }
        ];
        testCases.forEach((testObj) => {
            const word = testObj.input;
            const result = testObj.expect;
            expect(palindrome(word)).toBe(result);
        });
    });


    it('should find palindromes for letters with non word chars stuck between', () => {
        const testCases = [
            { input: 'race car', expect: true },
            { input: 'raC e car', expect: true },
            { input: 'ra cEC ar', expect: true },
            { input: 'RA#Ce+ca*r', expect: true },
            { input: 'ey_e', expect: true },
            { input: 'Eye###', expect: true },
            { input: '""ee', expect: true },
            { input: 'wh+=atever', expect: false },
            { input: 'ABC+abc', expect: false },
            { input: 'ab?c', expect: false },
            { input: 'Plain Wrong', expect: false },
            { input: 'aB c2#2322:cBa', expect: true },
            { input: '1Q2w3e ;- 3w2q1', expect: true },
            { input: 'a1 A2', expect: false },
            { input: '123QW #-# easd', expect: false },
        ];
        testCases.forEach((testObj) => {
            const word = testObj.input;
            const result = testObj.expect;
            expect(palindrome(word)).toBe(result);
        });
    });
})