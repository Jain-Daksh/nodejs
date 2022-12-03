const lib = require('../lib')

describe('Products', () => {
  it('should thrown error', () => {
    // const result = lib.registerUser(null);
    expect(() => { lib.registerUser(null); }).toThrow()
    // if more than 1 
    const args = [null, undefined, NaN, '', 0, false]
    args.forEach(a => {
      expect(() => { lib.registerUser(a); }).toThrow()
    });
  });
  it('should return username', () => {
    const result = lib.registerUser('daksh');
    expect(result).toMatchObject({ username: 'daksh' });
    expect(result.id).toBeGreaterThan(0)
  })
});