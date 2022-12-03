const lib = require('../lib')


describe('greet' , () => {
  it('should return currency' ,() => {
    const result = lib.getCurrencies()

    //to general

    // expect(result).toBeDefined();
    // expect(result).not.toBeNull();

    //to specific 

    // expect(result[0]).toBe('USD')
    // expect(result[1]).toBe('AUD')
    // expect(result[2]).toBe('EUR')
    // expect(result.length).toBe(3)

    //proper way
    expect(result).toContain('USD')
    expect(result).toContain('AUD')
    expect(result).toContain('EUR')

    // /ideal way
    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
  });
});