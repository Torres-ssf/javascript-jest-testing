import cipher from "../lib/caesarCipher";

const simpleString = ['abcde','cdefg'];
const mixedString = ['Isaac','Jtbbd'];
const stringSymbols = ['hi.', 'ij.', 'jump@i.com', 'ozru@n.htr'];

describe("test caesar cipher functionality",() =>{

    test(" simple string ", () =>{
        expect(cipher.encrypt(simpleString[0], 2)).toBe(simpleString[1]);
        expect(cipher.decrypt(simpleString[1], 2)).toBe(simpleString[0])
    });

    test("mixed string test", () =>{
        expect(cipher.encrypt(mixedString[0], 1)).toBe(mixedString[1])
        expect(cipher.decrypt(mixedString[1], 1)).toBe(mixedString[0])
    })
    test('string with symbols', () =>{
        expect(cipher.encrypt(stringSymbols[0], 1)).toBe(stringSymbols[1])
        expect(cipher.decrypt(stringSymbols[1],1)).toBe(stringSymbols[0])

        expect(cipher.encrypt(stringSymbols[2],5)).toBe(stringSymbols[3])
        expect(cipher.decrypt(stringSymbols[3],5)).toBe(stringSymbols[2])
    })

});