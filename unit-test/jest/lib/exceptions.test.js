const lib = require('../lib')


describe('Products', () => {
  it('should return username', () => {
    // const result = lib.registerUser(null);
    expect(() => {lib.registerUser(null);}).toThrow()

    // if more 

    const args = [null, undefined, NaN, '', 0, false]
    args.forEach(a => {
      expect(() => {lib.registerUser(a);}).toThrow()
    })
  });
});