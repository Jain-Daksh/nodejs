const lib = require('../lib')

describe('absolute' , () => {
  it(' should return +ve if input is +ve' , () => {
    const result = lib.absolute(1);
    expect(result).toBe(1)
  })
  it(' should return +ve if input is -ve' , () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1)
  })
  it(' should return 0 if input is 0' , () => {
    const result = lib.absolute(0);
    expect(result).toBe(0)
  })
})