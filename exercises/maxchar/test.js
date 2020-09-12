const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Empty string test', () => {
  expect(maxChar('')).toEqual('');
});

test('Equal values', () => {
  expect(maxChar('ab')).toEqual('b'); 
  expect(maxChar('aaadbdbb')).toEqual('b'); 
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a'); 
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaazzzzzzzzzzzzz')).toEqual('z');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
