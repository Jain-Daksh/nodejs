const lib = require('../lib')

//basic format
test('our first test' , () => {

});

//for number 

test('absolute- should return +ve if input is +ve' , () => {
  const result = lib.absolute(1);
  expect(result).toBe(1)
})
test('absolute- should return +ve if input is -ve' , () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1)
})
test('absolute- should return 0 if input is 0' , () => {
  const result = lib.absolute(0);
  expect(result).toBe(0)
})

//grouping
