const lib = require('../lib')


describe('greet' , () => {
  it('should return greet' ,() => {
    const result = lib.greet('Daksh')
    // expect(result).toContain('Daksh')
    expect(result).toMatch(/Daksh/)
  });
});