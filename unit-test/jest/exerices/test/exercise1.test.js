const ex = require('../exerice1')

describe('fizzball', () => {
  it('should return fizzball', () => {
    const result = ex.fizzBuzz(15);
    expect(result).toBe('FizzBuzz')
  });
  it('should return fizz', () => {
    const result = ex.fizzBuzz(3);
    expect(result).toBe('Fizz')
  });
  it('should return zball', () => {
    const result = ex.fizzBuzz(10);
    expect(result).toBe('Buzz')
  });

})