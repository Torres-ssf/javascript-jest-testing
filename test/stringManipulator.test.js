import stringManipulation from '../lib/stringManipulator';

describe('String manipulation methods', () => {
  test('capitalize string', () => {
    expect(stringManipulation.capitalize('hello there')).toBe('Hello there');
  });
  test('capitalize string', () => {
    expect(stringManipulation.capitalize('you only live once')).toBe('You only live once');
  });
  test('capitalize string', () => {
    expect(stringManipulation.capitalize('...to continue')).toBe('...to continue');
  });
  test('reverse a given string', () => {
    expect(stringManipulation.reverse('hello')).toBe('olleh');
  });
  test('reverse a given string', () => {
    expect(stringManipulation.reverse('WHOAA!! What a nice job!')).toBe('!boj ecin a tahW !!AAOHW');
  });
});