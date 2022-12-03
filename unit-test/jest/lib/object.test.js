const lib = require('../lib')


describe('Products', () => {
  it('should return currency', () => {
    const result = lib.getProducts(1);

    expect(result).toEqual({ id: 1, price: 10 })
    expect(result).toMatchObject({ id: 1, price: 10 }) //if we have like 20-30 properties in id but need only few 
    // expect(result).toHaveProperty("id", "1") // this will give error 
    expect(result).toHaveProperty("id", 1)


  });
});